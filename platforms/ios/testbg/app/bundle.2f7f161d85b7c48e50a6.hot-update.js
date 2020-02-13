webpackHotUpdate("bundle",{

/***/ "./main-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ViewModel = __webpack_require__("./main-view-model.js");

const http = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
const CameraPlus = __webpack_require__("../node_modules/@nstudio/nativescript-camera-plus/camera-plus.js");
const BitmapFactory = __webpack_require__("../node_modules/nativescript-bitmap-factory/index.js");
const fileSystemModule = __webpack_require__("../node_modules/@nativescript/core/file-system/file-system.js");
const imageSourceModule = __webpack_require__("../node_modules/@nativescript/core/image-source/image-source.js");

const ls = __webpack_require__("./common/ls.js");
const dt = __webpack_require__("./common/dt.js");
const message = __webpack_require__("./common/message.js");

let page;
exports.onNavigatingTo = function navigatingTo(args) {
    page = args.object;
    if (ls.getBool('clear')) {
        ls.setBool('clear', false);
        ViewModel.set('image_url', undefined);
        ViewModel.set('img_st', 0);
        setPath();
        setSaveImages();
    }
    page.bindingContext = ViewModel;
}
function setPath() {
    let folderDest = fileSystemModule.knownFolders.currentApp();
    if (ls.getString('platform') == 'ios') {
        folderDest = fileSystemModule.knownFolders.documents();
    }
    folderDest = fileSystemModule.path.join(folderDest.path, "tmp/vpo");
    const folder = fileSystemModule.Folder.fromPath(folderDest);
    console.log(folder.path);
    ViewModel.set('path', folder.path);
    //getFilesFromPath(folder);
    //removeFilesFromPath(folder);
}

function getFilesFromPath(folder) {
    folder.getEntities()
        .then((entities) => {
            // entities is array with the document's files and folders.
            entities.forEach((entity) => {
                console.dir({
                    name: entity.name,
                    path: entity.path,
                    lastModified: entity.lastModified.toString()
                });
            });
        }).catch(() => {
            // Failed to obtain folder's contents.
            //console.log(e.stack);
        });
}

function removeFilesFromPath(folder) {
    folder.clear()
        .then(() => {
            // Successfully cleared the folder.
            console.log("resultMessage", "Folder successfully cleared!");
        }).catch(() => {
            //console.log(e.stack);
        });
}

function setSaveImages() {
    if (ls.getBool('saveImages')) {
        ViewModel.set('saveImages', true);
    } else {
        ViewModel.set('saveImages', false);
    }
}
//logic image and camera
exports.tapClearImage = function (args) {
    args.object.className = args.object.className.replace(' scale_in', '');
    args.object.className += ' scale_in';
    ViewModel.set('image', undefined);
}

const source = new imageSourceModule.ImageSource();
exports.tapImagenCamara = function () {
    //const options = { width: 800, height: 600, keepAspectRatio: true, saveToGallery: ViewModel.get('saveImages') };
    // camera.takePicture(options).
    //     then((imageAsset) => {
    //         imageAsset.options = options;
    //         saveResizeImage(imageAsset);
    //     }, () => { });

    console.log('tapImagenCamara()');
    const cam = page.getViewById("camPlus");
    console.log(1);
    cam.on(CameraPlus.photoCapturedEvent, function (args) {
        fromAsset(args.data).then(result => {
            console.log(2);
            // result is an ImageSource that we got by using fromAsset in the image-source module.
            //console.dir(result);
            saveResizeImage(result);
            console.log(3);
        }); 
    });
}

function saveResizeImage(imageAsset) {
    console.log(4);
    source.fromAsset(imageAsset).then((source) => { //fromAsset=bits
        //console.log(`Size: ${source.width}x${source.height}`);
        const bmp = BitmapFactory.create(source.width, source.height);
        const image_name = dt.formatDateTimeMySql(new Date());
        const image_url = ViewModel.get('path') + "/" + image_name + '.jpeg';
        console.log(image_url);
        bmp.dispose(function (b) {
            b.insert(source);
            // ## Max dimension. Respects aspect ratio.
            let b2;
            //console.log(ls.getString('platform'));
            if (ls.getString('platform') == 'android') {
                b2 = b.resizeMax(800);
            } else {
                b2 = b.resizeMax(400); // ios * 2
            }
            const thumb_image = b2.toImageSource();
            const saved = thumb_image.saveToFile(
                image_url,
                'jpeg'
            );
            if (saved) {
                ViewModel.set('image_url', image_url);
                ViewModel.set('img_st', 2); //2=loading
                postImageAWS(image_url, image_name);
            }
        });
    });
}

function removeFile(image_name) {
    let currentApp = fileSystemModule.knownFolders.currentApp();
    if (ls.getString('platform') == 'ios') {
        currentApp = fileSystemModule.knownFolders.documents();
    }
    const path = fileSystemModule.path.join(currentApp.path, 'tmp/vpo/' + image_name);
    //console.log(path);
    const file = fileSystemModule.File.fromPath(path);
    file.remove()
        .then(() => {
            console.log("resultMessage", "File successfully deleted!");
        }).catch((e) => {
            console.log(e.stack);
        });
}

function getProfileParams(param) {
    const profile = ls.getJson('profile');
    if (profile) {
        return profile[param];
    } else {
        return null
    }
}

function postImageAWS(image_url, image_name) {
    console.log('postImageAWS');
    const img = imageSourceModule.fromFile(image_url);
    console.log(image_url);
    const content = {
        'image': img.toBase64String("png"),
        'face': ViewModel.get('units_faces_id'),
        'user': getProfileParams('id'),
        'client': getProfileParams('client').id,
        'set_datetime': true,
        'datetime': image_name,
        'type': 'board/incidences',
        'mime': 'image/jpeg'
    };
    http.request({
        url: ls.getString('awsimg'),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        content: JSON.stringify(content)
    }).then(function (r) {
        let image = JSON.parse(r.content);
        console.dir(image);
        if (image.error) {
            console.log('error aws');
            ViewModel.set('img_st', 3); //error
            message.showError({ 'title': 'Error al enviar la imagen', 'message': image.message });
        } else {
            console.log('ok aws');
            image = image.data;
            // console.log(ls.getString('aws'));
            // console.log(image.url);
            // console.log(image.url.replace('.jpeg', '_m.jpeg'));
            ViewModel.set('image_url', ls.getString('aws') + image.url.replace('.jpeg', '_m.jpeg'));
            console.log(ViewModel.get('image_url'));
            ViewModel.set('img_st', 1);
            // console.log('reomve: ' + image_name + '.jpeg');
            removeFile(image_name + '.jpeg');
        }
    }, function () {
        ViewModel.set('img_st', 3); //error
        message.showError({ 'title': 'Error de internet al enviar la imagen', 'message': 'Intente nuevamente.' });
    });
}
//

exports.tapAdd = function () {
    if (ViewModel.get('img_st') !== 1) {
        message.showWarning({ 'title': 'Error de imagen', 'message': ViewModel.get('img_st') == 0 ? 'Ingrese una imagen' : 'Error de imagen' });
        return;
    }
    postIncidence('POST', 'units/faces/incidences', {
        "units_faces_id": ViewModel.get('units_faces_id'),
        "image_url": ViewModel.get('image_url').replace(ls.getString('aws'), '').replace('_m.jpeg', '.jpeg'),
        'observation': ViewModel.get('observation') ? ViewModel.get('observation') : null
    });
}

//Send intallations logic
function postIncidence(method, url, content) {
    console.log("postIncidence()");
    console.log('metodh: ' + method);
    console.dir(content);
    console.log('image_url: ' + content.image_url);
    url = ls.getString('connection') + url;
    console.log('url: ' + url);
    http.request(ls.request(url, method, content)).then(function (r) {
        console.dir(r);
        let item = JSON.parse(r.content);
        if (r.statusCode == 201) {
            item = item.data;
            ViewModel.set('update_image_url', false); // always update image
            if (ViewModel.get('update_image_url')) { //edit
                ViewModel.set('update_image_url', false);
                postIncidence('PUT', 'units/faces/' + ViewModel.get('units_faces_id'), {
                    'image_url': content.image_url,
                    'description': 'getGps'
                });
            } else {
                //goToIncidences(item.message);
            }
        } else {
            if (r.statusCode == 202) { //created
                //goToIncidences(item.message);
            } else {
                message.showError({ 'title': 'Error al enviar', 'message': item.message });
            }
        }
    }, function () {
        message.showError({ 'title': 'Error de internet' });
    });
}
//



exports.sendBG = function (params) {
    // file path and url
    var file = "/some/local/file/path/and/file/name.jpg";
    var url = "https://some.remote.service.com/path";
    var name = file.substr(file.lastIndexOf("/") + 1);

    // upload configuration
    var bghttp = __webpack_require__("../node_modules/nativescript-background-http/background-http.js");
    var session = bghttp.session("image-upload");
    var request = {
        url: url,
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream"
        },
        description: "Uploading " + name
    };
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./main-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMLDJCQUEyQiwrQkFBK0I7QUFDMUQsS0FBSztBQUNMO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsaUVBQThCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIseUNBQXlDO0FBQ3BFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS4yZjdmMTYxZDg1YjdjNDhlNTBhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVmlld01vZGVsID0gcmVxdWlyZSgnLi9tYWluLXZpZXctbW9kZWwnKTtcblxuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IENhbWVyYVBsdXMgPSByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FtZXJhLXBsdXMnKTtcbmNvbnN0IEJpdG1hcEZhY3RvcnkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJpdG1hcC1mYWN0b3J5XCIpO1xuY29uc3QgZmlsZVN5c3RlbU1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0nKTtcbmNvbnN0IGltYWdlU291cmNlTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UnKTtcblxuY29uc3QgbHMgPSByZXF1aXJlKCd+L2NvbW1vbi9scycpO1xuY29uc3QgZHQgPSByZXF1aXJlKCd+L2NvbW1vbi9kdCcpO1xuY29uc3QgbWVzc2FnZSA9IHJlcXVpcmUoJ34vY29tbW9uL21lc3NhZ2UnKTtcblxubGV0IHBhZ2U7XG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgaWYgKGxzLmdldEJvb2woJ2NsZWFyJykpIHtcbiAgICAgICAgbHMuc2V0Qm9vbCgnY2xlYXInLCBmYWxzZSk7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltYWdlX3VybCcsIHVuZGVmaW5lZCk7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltZ19zdCcsIDApO1xuICAgICAgICBzZXRQYXRoKCk7XG4gICAgICAgIHNldFNhdmVJbWFnZXMoKTtcbiAgICB9XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IFZpZXdNb2RlbDtcbn1cbmZ1bmN0aW9uIHNldFBhdGgoKSB7XG4gICAgbGV0IGZvbGRlckRlc3QgPSBmaWxlU3lzdGVtTW9kdWxlLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgaWYgKGxzLmdldFN0cmluZygncGxhdGZvcm0nKSA9PSAnaW9zJykge1xuICAgICAgICBmb2xkZXJEZXN0ID0gZmlsZVN5c3RlbU1vZHVsZS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgfVxuICAgIGZvbGRlckRlc3QgPSBmaWxlU3lzdGVtTW9kdWxlLnBhdGguam9pbihmb2xkZXJEZXN0LnBhdGgsIFwidG1wL3Zwb1wiKTtcbiAgICBjb25zdCBmb2xkZXIgPSBmaWxlU3lzdGVtTW9kdWxlLkZvbGRlci5mcm9tUGF0aChmb2xkZXJEZXN0KTtcbiAgICBjb25zb2xlLmxvZyhmb2xkZXIucGF0aCk7XG4gICAgVmlld01vZGVsLnNldCgncGF0aCcsIGZvbGRlci5wYXRoKTtcbiAgICAvL2dldEZpbGVzRnJvbVBhdGgoZm9sZGVyKTtcbiAgICAvL3JlbW92ZUZpbGVzRnJvbVBhdGgoZm9sZGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsZXNGcm9tUGF0aChmb2xkZXIpIHtcbiAgICBmb2xkZXIuZ2V0RW50aXRpZXMoKVxuICAgICAgICAudGhlbigoZW50aXRpZXMpID0+IHtcbiAgICAgICAgICAgIC8vIGVudGl0aWVzIGlzIGFycmF5IHdpdGggdGhlIGRvY3VtZW50J3MgZmlsZXMgYW5kIGZvbGRlcnMuXG4gICAgICAgICAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcih7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGVudGl0eS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRpdHkucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkOiBlbnRpdHkubGFzdE1vZGlmaWVkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBGYWlsZWQgdG8gb2J0YWluIGZvbGRlcidzIGNvbnRlbnRzLlxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLnN0YWNrKTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZpbGVzRnJvbVBhdGgoZm9sZGVyKSB7XG4gICAgZm9sZGVyLmNsZWFyKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bGx5IGNsZWFyZWQgdGhlIGZvbGRlci5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0TWVzc2FnZVwiLCBcIkZvbGRlciBzdWNjZXNzZnVsbHkgY2xlYXJlZCFcIik7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5zdGFjayk7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRTYXZlSW1hZ2VzKCkge1xuICAgIGlmIChscy5nZXRCb29sKCdzYXZlSW1hZ2VzJykpIHtcbiAgICAgICAgVmlld01vZGVsLnNldCgnc2F2ZUltYWdlcycsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ3NhdmVJbWFnZXMnLCBmYWxzZSk7XG4gICAgfVxufVxuLy9sb2dpYyBpbWFnZSBhbmQgY2FtZXJhXG5leHBvcnRzLnRhcENsZWFySW1hZ2UgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIGFyZ3Mub2JqZWN0LmNsYXNzTmFtZSA9IGFyZ3Mub2JqZWN0LmNsYXNzTmFtZS5yZXBsYWNlKCcgc2NhbGVfaW4nLCAnJyk7XG4gICAgYXJncy5vYmplY3QuY2xhc3NOYW1lICs9ICcgc2NhbGVfaW4nO1xuICAgIFZpZXdNb2RlbC5zZXQoJ2ltYWdlJywgdW5kZWZpbmVkKTtcbn1cblxuY29uc3Qgc291cmNlID0gbmV3IGltYWdlU291cmNlTW9kdWxlLkltYWdlU291cmNlKCk7XG5leHBvcnRzLnRhcEltYWdlbkNhbWFyYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL2NvbnN0IG9wdGlvbnMgPSB7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IFZpZXdNb2RlbC5nZXQoJ3NhdmVJbWFnZXMnKSB9O1xuICAgIC8vIGNhbWVyYS50YWtlUGljdHVyZShvcHRpb25zKS5cbiAgICAvLyAgICAgdGhlbigoaW1hZ2VBc3NldCkgPT4ge1xuICAgIC8vICAgICAgICAgaW1hZ2VBc3NldC5vcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyAgICAgICAgIHNhdmVSZXNpemVJbWFnZShpbWFnZUFzc2V0KTtcbiAgICAvLyAgICAgfSwgKCkgPT4geyB9KTtcblxuICAgIGNvbnNvbGUubG9nKCd0YXBJbWFnZW5DYW1hcmEoKScpO1xuICAgIGNvbnN0IGNhbSA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJjYW1QbHVzXCIpO1xuICAgIGNvbnNvbGUubG9nKDEpO1xuICAgIGNhbS5vbihDYW1lcmFQbHVzLnBob3RvQ2FwdHVyZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgZnJvbUFzc2V0KGFyZ3MuZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coMik7XG4gICAgICAgICAgICAvLyByZXN1bHQgaXMgYW4gSW1hZ2VTb3VyY2UgdGhhdCB3ZSBnb3QgYnkgdXNpbmcgZnJvbUFzc2V0IGluIHRoZSBpbWFnZS1zb3VyY2UgbW9kdWxlLlxuICAgICAgICAgICAgLy9jb25zb2xlLmRpcihyZXN1bHQpO1xuICAgICAgICAgICAgc2F2ZVJlc2l6ZUltYWdlKHJlc3VsdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygzKTtcbiAgICAgICAgfSk7IFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzYXZlUmVzaXplSW1hZ2UoaW1hZ2VBc3NldCkge1xuICAgIGNvbnNvbGUubG9nKDQpO1xuICAgIHNvdXJjZS5mcm9tQXNzZXQoaW1hZ2VBc3NldCkudGhlbigoc291cmNlKSA9PiB7IC8vZnJvbUFzc2V0PWJpdHNcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgU2l6ZTogJHtzb3VyY2Uud2lkdGh9eCR7c291cmNlLmhlaWdodH1gKTtcbiAgICAgICAgY29uc3QgYm1wID0gQml0bWFwRmFjdG9yeS5jcmVhdGUoc291cmNlLndpZHRoLCBzb3VyY2UuaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgaW1hZ2VfbmFtZSA9IGR0LmZvcm1hdERhdGVUaW1lTXlTcWwobmV3IERhdGUoKSk7XG4gICAgICAgIGNvbnN0IGltYWdlX3VybCA9IFZpZXdNb2RlbC5nZXQoJ3BhdGgnKSArIFwiL1wiICsgaW1hZ2VfbmFtZSArICcuanBlZyc7XG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlX3VybCk7XG4gICAgICAgIGJtcC5kaXNwb3NlKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgICBiLmluc2VydChzb3VyY2UpO1xuICAgICAgICAgICAgLy8gIyMgTWF4IGRpbWVuc2lvbi4gUmVzcGVjdHMgYXNwZWN0IHJhdGlvLlxuICAgICAgICAgICAgbGV0IGIyO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhscy5nZXRTdHJpbmcoJ3BsYXRmb3JtJykpO1xuICAgICAgICAgICAgaWYgKGxzLmdldFN0cmluZygncGxhdGZvcm0nKSA9PSAnYW5kcm9pZCcpIHtcbiAgICAgICAgICAgICAgICBiMiA9IGIucmVzaXplTWF4KDgwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGIyID0gYi5yZXNpemVNYXgoNDAwKTsgLy8gaW9zICogMlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGh1bWJfaW1hZ2UgPSBiMi50b0ltYWdlU291cmNlKCk7XG4gICAgICAgICAgICBjb25zdCBzYXZlZCA9IHRodW1iX2ltYWdlLnNhdmVUb0ZpbGUoXG4gICAgICAgICAgICAgICAgaW1hZ2VfdXJsLFxuICAgICAgICAgICAgICAgICdqcGVnJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzYXZlZCkge1xuICAgICAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltYWdlX3VybCcsIGltYWdlX3VybCk7XG4gICAgICAgICAgICAgICAgVmlld01vZGVsLnNldCgnaW1nX3N0JywgMik7IC8vMj1sb2FkaW5nXG4gICAgICAgICAgICAgICAgcG9zdEltYWdlQVdTKGltYWdlX3VybCwgaW1hZ2VfbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGaWxlKGltYWdlX25hbWUpIHtcbiAgICBsZXQgY3VycmVudEFwcCA9IGZpbGVTeXN0ZW1Nb2R1bGUua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICBpZiAobHMuZ2V0U3RyaW5nKCdwbGF0Zm9ybScpID09ICdpb3MnKSB7XG4gICAgICAgIGN1cnJlbnRBcHAgPSBmaWxlU3lzdGVtTW9kdWxlLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICB9XG4gICAgY29uc3QgcGF0aCA9IGZpbGVTeXN0ZW1Nb2R1bGUucGF0aC5qb2luKGN1cnJlbnRBcHAucGF0aCwgJ3RtcC92cG8vJyArIGltYWdlX25hbWUpO1xuICAgIC8vY29uc29sZS5sb2cocGF0aCk7XG4gICAgY29uc3QgZmlsZSA9IGZpbGVTeXN0ZW1Nb2R1bGUuRmlsZS5mcm9tUGF0aChwYXRoKTtcbiAgICBmaWxlLnJlbW92ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0TWVzc2FnZVwiLCBcIkZpbGUgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhXCIpO1xuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5zdGFjayk7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9maWxlUGFyYW1zKHBhcmFtKSB7XG4gICAgY29uc3QgcHJvZmlsZSA9IGxzLmdldEpzb24oJ3Byb2ZpbGUnKTtcbiAgICBpZiAocHJvZmlsZSkge1xuICAgICAgICByZXR1cm4gcHJvZmlsZVtwYXJhbV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBvc3RJbWFnZUFXUyhpbWFnZV91cmwsIGltYWdlX25hbWUpIHtcbiAgICBjb25zb2xlLmxvZygncG9zdEltYWdlQVdTJyk7XG4gICAgY29uc3QgaW1nID0gaW1hZ2VTb3VyY2VNb2R1bGUuZnJvbUZpbGUoaW1hZ2VfdXJsKTtcbiAgICBjb25zb2xlLmxvZyhpbWFnZV91cmwpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB7XG4gICAgICAgICdpbWFnZSc6IGltZy50b0Jhc2U2NFN0cmluZyhcInBuZ1wiKSxcbiAgICAgICAgJ2ZhY2UnOiBWaWV3TW9kZWwuZ2V0KCd1bml0c19mYWNlc19pZCcpLFxuICAgICAgICAndXNlcic6IGdldFByb2ZpbGVQYXJhbXMoJ2lkJyksXG4gICAgICAgICdjbGllbnQnOiBnZXRQcm9maWxlUGFyYW1zKCdjbGllbnQnKS5pZCxcbiAgICAgICAgJ3NldF9kYXRldGltZSc6IHRydWUsXG4gICAgICAgICdkYXRldGltZSc6IGltYWdlX25hbWUsXG4gICAgICAgICd0eXBlJzogJ2JvYXJkL2luY2lkZW5jZXMnLFxuICAgICAgICAnbWltZSc6ICdpbWFnZS9qcGVnJ1xuICAgIH07XG4gICAgaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBscy5nZXRTdHJpbmcoJ2F3c2ltZycpLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpXG4gICAgfSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICBsZXQgaW1hZ2UgPSBKU09OLnBhcnNlKHIuY29udGVudCk7XG4gICAgICAgIGNvbnNvbGUuZGlyKGltYWdlKTtcbiAgICAgICAgaWYgKGltYWdlLmVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgYXdzJyk7XG4gICAgICAgICAgICBWaWV3TW9kZWwuc2V0KCdpbWdfc3QnLCAzKTsgLy9lcnJvclxuICAgICAgICAgICAgbWVzc2FnZS5zaG93RXJyb3IoeyAndGl0bGUnOiAnRXJyb3IgYWwgZW52aWFyIGxhIGltYWdlbicsICdtZXNzYWdlJzogaW1hZ2UubWVzc2FnZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvayBhd3MnKTtcbiAgICAgICAgICAgIGltYWdlID0gaW1hZ2UuZGF0YTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxzLmdldFN0cmluZygnYXdzJykpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW1hZ2UudXJsKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGltYWdlLnVybC5yZXBsYWNlKCcuanBlZycsICdfbS5qcGVnJykpO1xuICAgICAgICAgICAgVmlld01vZGVsLnNldCgnaW1hZ2VfdXJsJywgbHMuZ2V0U3RyaW5nKCdhd3MnKSArIGltYWdlLnVybC5yZXBsYWNlKCcuanBlZycsICdfbS5qcGVnJykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coVmlld01vZGVsLmdldCgnaW1hZ2VfdXJsJykpO1xuICAgICAgICAgICAgVmlld01vZGVsLnNldCgnaW1nX3N0JywgMSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVvbXZlOiAnICsgaW1hZ2VfbmFtZSArICcuanBlZycpO1xuICAgICAgICAgICAgcmVtb3ZlRmlsZShpbWFnZV9uYW1lICsgJy5qcGVnJyk7XG4gICAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltZ19zdCcsIDMpOyAvL2Vycm9yXG4gICAgICAgIG1lc3NhZ2Uuc2hvd0Vycm9yKHsgJ3RpdGxlJzogJ0Vycm9yIGRlIGludGVybmV0IGFsIGVudmlhciBsYSBpbWFnZW4nLCAnbWVzc2FnZSc6ICdJbnRlbnRlIG51ZXZhbWVudGUuJyB9KTtcbiAgICB9KTtcbn1cbi8vXG5cbmV4cG9ydHMudGFwQWRkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChWaWV3TW9kZWwuZ2V0KCdpbWdfc3QnKSAhPT0gMSkge1xuICAgICAgICBtZXNzYWdlLnNob3dXYXJuaW5nKHsgJ3RpdGxlJzogJ0Vycm9yIGRlIGltYWdlbicsICdtZXNzYWdlJzogVmlld01vZGVsLmdldCgnaW1nX3N0JykgPT0gMCA/ICdJbmdyZXNlIHVuYSBpbWFnZW4nIDogJ0Vycm9yIGRlIGltYWdlbicgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcG9zdEluY2lkZW5jZSgnUE9TVCcsICd1bml0cy9mYWNlcy9pbmNpZGVuY2VzJywge1xuICAgICAgICBcInVuaXRzX2ZhY2VzX2lkXCI6IFZpZXdNb2RlbC5nZXQoJ3VuaXRzX2ZhY2VzX2lkJyksXG4gICAgICAgIFwiaW1hZ2VfdXJsXCI6IFZpZXdNb2RlbC5nZXQoJ2ltYWdlX3VybCcpLnJlcGxhY2UobHMuZ2V0U3RyaW5nKCdhd3MnKSwgJycpLnJlcGxhY2UoJ19tLmpwZWcnLCAnLmpwZWcnKSxcbiAgICAgICAgJ29ic2VydmF0aW9uJzogVmlld01vZGVsLmdldCgnb2JzZXJ2YXRpb24nKSA/IFZpZXdNb2RlbC5nZXQoJ29ic2VydmF0aW9uJykgOiBudWxsXG4gICAgfSk7XG59XG5cbi8vU2VuZCBpbnRhbGxhdGlvbnMgbG9naWNcbmZ1bmN0aW9uIHBvc3RJbmNpZGVuY2UobWV0aG9kLCB1cmwsIGNvbnRlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcInBvc3RJbmNpZGVuY2UoKVwiKTtcbiAgICBjb25zb2xlLmxvZygnbWV0b2RoOiAnICsgbWV0aG9kKTtcbiAgICBjb25zb2xlLmRpcihjb250ZW50KTtcbiAgICBjb25zb2xlLmxvZygnaW1hZ2VfdXJsOiAnICsgY29udGVudC5pbWFnZV91cmwpO1xuICAgIHVybCA9IGxzLmdldFN0cmluZygnY29ubmVjdGlvbicpICsgdXJsO1xuICAgIGNvbnNvbGUubG9nKCd1cmw6ICcgKyB1cmwpO1xuICAgIGh0dHAucmVxdWVzdChscy5yZXF1ZXN0KHVybCwgbWV0aG9kLCBjb250ZW50KSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICBjb25zb2xlLmRpcihyKTtcbiAgICAgICAgbGV0IGl0ZW0gPSBKU09OLnBhcnNlKHIuY29udGVudCk7XG4gICAgICAgIGlmIChyLnN0YXR1c0NvZGUgPT0gMjAxKSB7XG4gICAgICAgICAgICBpdGVtID0gaXRlbS5kYXRhO1xuICAgICAgICAgICAgVmlld01vZGVsLnNldCgndXBkYXRlX2ltYWdlX3VybCcsIGZhbHNlKTsgLy8gYWx3YXlzIHVwZGF0ZSBpbWFnZVxuICAgICAgICAgICAgaWYgKFZpZXdNb2RlbC5nZXQoJ3VwZGF0ZV9pbWFnZV91cmwnKSkgeyAvL2VkaXRcbiAgICAgICAgICAgICAgICBWaWV3TW9kZWwuc2V0KCd1cGRhdGVfaW1hZ2VfdXJsJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHBvc3RJbmNpZGVuY2UoJ1BVVCcsICd1bml0cy9mYWNlcy8nICsgVmlld01vZGVsLmdldCgndW5pdHNfZmFjZXNfaWQnKSwge1xuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VfdXJsJzogY29udGVudC5pbWFnZV91cmwsXG4gICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdnZXRHcHMnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vZ29Ub0luY2lkZW5jZXMoaXRlbS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyLnN0YXR1c0NvZGUgPT0gMjAyKSB7IC8vY3JlYXRlZFxuICAgICAgICAgICAgICAgIC8vZ29Ub0luY2lkZW5jZXMoaXRlbS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5zaG93RXJyb3IoeyAndGl0bGUnOiAnRXJyb3IgYWwgZW52aWFyJywgJ21lc3NhZ2UnOiBpdGVtLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lc3NhZ2Uuc2hvd0Vycm9yKHsgJ3RpdGxlJzogJ0Vycm9yIGRlIGludGVybmV0JyB9KTtcbiAgICB9KTtcbn1cbi8vXG5cblxuXG5leHBvcnRzLnNlbmRCRyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAvLyBmaWxlIHBhdGggYW5kIHVybFxuICAgIHZhciBmaWxlID0gXCIvc29tZS9sb2NhbC9maWxlL3BhdGgvYW5kL2ZpbGUvbmFtZS5qcGdcIjtcbiAgICB2YXIgdXJsID0gXCJodHRwczovL3NvbWUucmVtb3RlLnNlcnZpY2UuY29tL3BhdGhcIjtcbiAgICB2YXIgbmFtZSA9IGZpbGUuc3Vic3RyKGZpbGUubGFzdEluZGV4T2YoXCIvXCIpICsgMSk7XG5cbiAgICAvLyB1cGxvYWQgY29uZmlndXJhdGlvblxuICAgIHZhciBiZ2h0dHAgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtaHR0cFwiKTtcbiAgICB2YXIgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpO1xuICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIlxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVcGxvYWRpbmcgXCIgKyBuYW1lXG4gICAgfTtcbn1cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9tYWluLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==