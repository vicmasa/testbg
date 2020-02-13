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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRUFBa0IsbUJBQU8sQ0FBQyxzQkFBbUI7O0FBRTdDLGFBQWEsbUJBQU8sQ0FBQyxpREFBTTtBQUMzQixtQkFBbUIsbUJBQU8sQ0FBQyxrRUFBbUM7QUFDOUQsc0JBQXNCLG1CQUFPLENBQUMsc0RBQTZCO0FBQzNELHlCQUF5QixtQkFBTyxDQUFDLCtEQUE4QjtBQUMvRCwwQkFBMEIsbUJBQU8sQ0FBQyxpRUFBK0I7O0FBRWpFLFdBQVcsbUJBQU8sQ0FBQyxnQkFBYTtBQUNoQyxXQUFXLG1CQUFPLENBQUMsZ0JBQWE7QUFDaEMsZ0JBQWdCLG1CQUFPLENBQUMscUJBQWtCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUyxFQUFFOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7QUFDQTtBQUNBLFNBQVMsRTtBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELCtCQUErQixhQUFhLEdBQUcsY0FBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLCtCQUErQixpRUFBaUU7QUFDaEcsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUNBQW1DO0FBQ25DLDJCQUEyQixxRkFBcUY7QUFDaEgsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixpSEFBaUg7QUFDOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVCxzQ0FBc0M7QUFDdEM7QUFDQSxhQUFhO0FBQ2IsbUNBQW1DLHNEQUFzRDtBQUN6RjtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQiwrQkFBK0I7QUFDMUQsS0FBSztBQUNMO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsaUVBQThCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIseUNBQXlDO0FBQ3BFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS4zODJiNGFhMmI0NTVmZDJjY2M2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVmlld01vZGVsID0gcmVxdWlyZSgnLi9tYWluLXZpZXctbW9kZWwnKTtcblxuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IENhbWVyYVBsdXMgPSByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FtZXJhLXBsdXMnKTtcbmNvbnN0IEJpdG1hcEZhY3RvcnkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJpdG1hcC1mYWN0b3J5XCIpO1xuY29uc3QgZmlsZVN5c3RlbU1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0nKTtcbmNvbnN0IGltYWdlU291cmNlTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UnKTtcblxuY29uc3QgbHMgPSByZXF1aXJlKCd+L2NvbW1vbi9scycpO1xuY29uc3QgZHQgPSByZXF1aXJlKCd+L2NvbW1vbi9kdCcpO1xuY29uc3QgbWVzc2FnZSA9IHJlcXVpcmUoJ34vY29tbW9uL21lc3NhZ2UnKTtcblxubGV0IHBhZ2U7XG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgaWYgKGxzLmdldEJvb2woJ2NsZWFyJykpIHtcbiAgICAgICAgbHMuc2V0Qm9vbCgnY2xlYXInLCBmYWxzZSk7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltYWdlX3VybCcsIHVuZGVmaW5lZCk7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltZ19zdCcsIDApO1xuICAgICAgICBzZXRQYXRoKCk7XG4gICAgICAgIHNldFNhdmVJbWFnZXMoKTtcbiAgICB9XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IFZpZXdNb2RlbDtcbn1cbmZ1bmN0aW9uIHNldFBhdGgoKSB7XG4gICAgbGV0IGZvbGRlckRlc3QgPSBmaWxlU3lzdGVtTW9kdWxlLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgaWYgKGxzLmdldFN0cmluZygncGxhdGZvcm0nKSA9PSAnaW9zJykge1xuICAgICAgICBmb2xkZXJEZXN0ID0gZmlsZVN5c3RlbU1vZHVsZS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgfVxuICAgIGZvbGRlckRlc3QgPSBmaWxlU3lzdGVtTW9kdWxlLnBhdGguam9pbihmb2xkZXJEZXN0LnBhdGgsIFwidG1wL3Zwb1wiKTtcbiAgICBjb25zdCBmb2xkZXIgPSBmaWxlU3lzdGVtTW9kdWxlLkZvbGRlci5mcm9tUGF0aChmb2xkZXJEZXN0KTtcbiAgICBjb25zb2xlLmxvZyhmb2xkZXIucGF0aCk7XG4gICAgVmlld01vZGVsLnNldCgncGF0aCcsIGZvbGRlci5wYXRoKTtcbiAgICAvL2dldEZpbGVzRnJvbVBhdGgoZm9sZGVyKTtcbiAgICAvL3JlbW92ZUZpbGVzRnJvbVBhdGgoZm9sZGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsZXNGcm9tUGF0aChmb2xkZXIpIHtcbiAgICBmb2xkZXIuZ2V0RW50aXRpZXMoKVxuICAgICAgICAudGhlbigoZW50aXRpZXMpID0+IHtcbiAgICAgICAgICAgIC8vIGVudGl0aWVzIGlzIGFycmF5IHdpdGggdGhlIGRvY3VtZW50J3MgZmlsZXMgYW5kIGZvbGRlcnMuXG4gICAgICAgICAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcih7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGVudGl0eS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRpdHkucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkOiBlbnRpdHkubGFzdE1vZGlmaWVkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBGYWlsZWQgdG8gb2J0YWluIGZvbGRlcidzIGNvbnRlbnRzLlxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLnN0YWNrKTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZpbGVzRnJvbVBhdGgoZm9sZGVyKSB7XG4gICAgZm9sZGVyLmNsZWFyKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bGx5IGNsZWFyZWQgdGhlIGZvbGRlci5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0TWVzc2FnZVwiLCBcIkZvbGRlciBzdWNjZXNzZnVsbHkgY2xlYXJlZCFcIik7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5zdGFjayk7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRTYXZlSW1hZ2VzKCkge1xuICAgIGlmIChscy5nZXRCb29sKCdzYXZlSW1hZ2VzJykpIHtcbiAgICAgICAgVmlld01vZGVsLnNldCgnc2F2ZUltYWdlcycsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ3NhdmVJbWFnZXMnLCBmYWxzZSk7XG4gICAgfVxufVxuLy9sb2dpYyBpbWFnZSBhbmQgY2FtZXJhXG5leHBvcnRzLnRhcENsZWFySW1hZ2UgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIGFyZ3Mub2JqZWN0LmNsYXNzTmFtZSA9IGFyZ3Mub2JqZWN0LmNsYXNzTmFtZS5yZXBsYWNlKCcgc2NhbGVfaW4nLCAnJyk7XG4gICAgYXJncy5vYmplY3QuY2xhc3NOYW1lICs9ICcgc2NhbGVfaW4nO1xuICAgIFZpZXdNb2RlbC5zZXQoJ2ltYWdlJywgdW5kZWZpbmVkKTtcbn1cblxuY29uc3Qgc291cmNlID0gbmV3IGltYWdlU291cmNlTW9kdWxlLkltYWdlU291cmNlKCk7XG5leHBvcnRzLnRhcEltYWdlbkNhbWFyYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL2NvbnN0IG9wdGlvbnMgPSB7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IFZpZXdNb2RlbC5nZXQoJ3NhdmVJbWFnZXMnKSB9O1xuICAgIC8vIGNhbWVyYS50YWtlUGljdHVyZShvcHRpb25zKS5cbiAgICAvLyAgICAgdGhlbigoaW1hZ2VBc3NldCkgPT4ge1xuICAgIC8vICAgICAgICAgaW1hZ2VBc3NldC5vcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyAgICAgICAgIHNhdmVSZXNpemVJbWFnZShpbWFnZUFzc2V0KTtcbiAgICAvLyAgICAgfSwgKCkgPT4geyB9KTtcblxuICAgIGNvbnNvbGUubG9nKCd0YXBJbWFnZW5DYW1hcmEoKScpO1xuICAgIGNvbnN0IGNhbSA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJjYW1QbHVzXCIpO1xuICAgIGNvbnNvbGUubG9nKDEpO1xuICAgIGNhbS5vbihDYW1lcmFQbHVzLnBob3RvQ2FwdHVyZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgZnJvbUFzc2V0KGFyZ3MuZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coMik7XG4gICAgICAgICAgICAvLyByZXN1bHQgaXMgYW4gSW1hZ2VTb3VyY2UgdGhhdCB3ZSBnb3QgYnkgdXNpbmcgZnJvbUFzc2V0IGluIHRoZSBpbWFnZS1zb3VyY2UgbW9kdWxlLlxuICAgICAgICAgICAgLy9jb25zb2xlLmRpcihyZXN1bHQpO1xuICAgICAgICAgICAgc2F2ZVJlc2l6ZUltYWdlKHJlc3VsdCk7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coMyk7XG4gICAgICAgIH0pOyBcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2F2ZVJlc2l6ZUltYWdlKGltYWdlQXNzZXQpIHtcbiAgICBjb25zb2xlLmxvZyg0KTtcbiAgICBzb3VyY2UuZnJvbUFzc2V0KGltYWdlQXNzZXQpLnRoZW4oKHNvdXJjZSkgPT4geyAvL2Zyb21Bc3NldD1iaXRzXG4gICAgICAgIC8vY29uc29sZS5sb2coYFNpemU6ICR7c291cmNlLndpZHRofXgke3NvdXJjZS5oZWlnaHR9YCk7XG4gICAgICAgIGNvbnN0IGJtcCA9IEJpdG1hcEZhY3RvcnkuY3JlYXRlKHNvdXJjZS53aWR0aCwgc291cmNlLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IGltYWdlX25hbWUgPSBkdC5mb3JtYXREYXRlVGltZU15U3FsKG5ldyBEYXRlKCkpO1xuICAgICAgICBjb25zdCBpbWFnZV91cmwgPSBWaWV3TW9kZWwuZ2V0KCdwYXRoJykgKyBcIi9cIiArIGltYWdlX25hbWUgKyAnLmpwZWcnO1xuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZV91cmwpO1xuICAgICAgICBibXAuZGlzcG9zZShmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgYi5pbnNlcnQoc291cmNlKTtcbiAgICAgICAgICAgIC8vICMjIE1heCBkaW1lbnNpb24uIFJlc3BlY3RzIGFzcGVjdCByYXRpby5cbiAgICAgICAgICAgIGxldCBiMjtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobHMuZ2V0U3RyaW5nKCdwbGF0Zm9ybScpKTtcbiAgICAgICAgICAgIGlmIChscy5nZXRTdHJpbmcoJ3BsYXRmb3JtJykgPT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgICAgICAgICAgYjIgPSBiLnJlc2l6ZU1heCg4MDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiMiA9IGIucmVzaXplTWF4KDQwMCk7IC8vIGlvcyAqIDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRodW1iX2ltYWdlID0gYjIudG9JbWFnZVNvdXJjZSgpO1xuICAgICAgICAgICAgY29uc3Qgc2F2ZWQgPSB0aHVtYl9pbWFnZS5zYXZlVG9GaWxlKFxuICAgICAgICAgICAgICAgIGltYWdlX3VybCxcbiAgICAgICAgICAgICAgICAnanBlZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoc2F2ZWQpIHtcbiAgICAgICAgICAgICAgICBWaWV3TW9kZWwuc2V0KCdpbWFnZV91cmwnLCBpbWFnZV91cmwpO1xuICAgICAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltZ19zdCcsIDIpOyAvLzI9bG9hZGluZ1xuICAgICAgICAgICAgICAgIHBvc3RJbWFnZUFXUyhpbWFnZV91cmwsIGltYWdlX25hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRmlsZShpbWFnZV9uYW1lKSB7XG4gICAgbGV0IGN1cnJlbnRBcHAgPSBmaWxlU3lzdGVtTW9kdWxlLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgaWYgKGxzLmdldFN0cmluZygncGxhdGZvcm0nKSA9PSAnaW9zJykge1xuICAgICAgICBjdXJyZW50QXBwID0gZmlsZVN5c3RlbU1vZHVsZS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgfVxuICAgIGNvbnN0IHBhdGggPSBmaWxlU3lzdGVtTW9kdWxlLnBhdGguam9pbihjdXJyZW50QXBwLnBhdGgsICd0bXAvdnBvLycgKyBpbWFnZV9uYW1lKTtcbiAgICAvL2NvbnNvbGUubG9nKHBhdGgpO1xuICAgIGNvbnN0IGZpbGUgPSBmaWxlU3lzdGVtTW9kdWxlLkZpbGUuZnJvbVBhdGgocGF0aCk7XG4gICAgZmlsZS5yZW1vdmUoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdE1lc3NhZ2VcIiwgXCJGaWxlIHN1Y2Nlc3NmdWxseSBkZWxldGVkIVwiKTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuc3RhY2spO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvZmlsZVBhcmFtcyhwYXJhbSkge1xuICAgIGNvbnN0IHByb2ZpbGUgPSBscy5nZXRKc29uKCdwcm9maWxlJyk7XG4gICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHByb2ZpbGVbcGFyYW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwb3N0SW1hZ2VBV1MoaW1hZ2VfdXJsLCBpbWFnZV9uYW1lKSB7XG4gICAgY29uc29sZS5sb2coJ3Bvc3RJbWFnZUFXUycpO1xuICAgIGNvbnN0IGltZyA9IGltYWdlU291cmNlTW9kdWxlLmZyb21GaWxlKGltYWdlX3VybCk7XG4gICAgY29uc29sZS5sb2coaW1hZ2VfdXJsKTtcbiAgICBjb25zdCBjb250ZW50ID0ge1xuICAgICAgICAnaW1hZ2UnOiBpbWcudG9CYXNlNjRTdHJpbmcoXCJwbmdcIiksXG4gICAgICAgICdmYWNlJzogVmlld01vZGVsLmdldCgndW5pdHNfZmFjZXNfaWQnKSxcbiAgICAgICAgJ3VzZXInOiBnZXRQcm9maWxlUGFyYW1zKCdpZCcpLFxuICAgICAgICAnY2xpZW50JzogZ2V0UHJvZmlsZVBhcmFtcygnY2xpZW50JykuaWQsXG4gICAgICAgICdzZXRfZGF0ZXRpbWUnOiB0cnVlLFxuICAgICAgICAnZGF0ZXRpbWUnOiBpbWFnZV9uYW1lLFxuICAgICAgICAndHlwZSc6ICdib2FyZC9pbmNpZGVuY2VzJyxcbiAgICAgICAgJ21pbWUnOiAnaW1hZ2UvanBlZydcbiAgICB9O1xuICAgIGh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogbHMuZ2V0U3RyaW5nKCdhd3NpbWcnKSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShjb250ZW50KVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgbGV0IGltYWdlID0gSlNPTi5wYXJzZShyLmNvbnRlbnQpO1xuICAgICAgICBjb25zb2xlLmRpcihpbWFnZSk7XG4gICAgICAgIGlmIChpbWFnZS5lcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGF3cycpO1xuICAgICAgICAgICAgVmlld01vZGVsLnNldCgnaW1nX3N0JywgMyk7IC8vZXJyb3JcbiAgICAgICAgICAgIG1lc3NhZ2Uuc2hvd0Vycm9yKHsgJ3RpdGxlJzogJ0Vycm9yIGFsIGVudmlhciBsYSBpbWFnZW4nLCAnbWVzc2FnZSc6IGltYWdlLm1lc3NhZ2UgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb2sgYXdzJyk7XG4gICAgICAgICAgICBpbWFnZSA9IGltYWdlLmRhdGE7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhscy5nZXRTdHJpbmcoJ2F3cycpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGltYWdlLnVybCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWFnZS51cmwucmVwbGFjZSgnLmpwZWcnLCAnX20uanBlZycpKTtcbiAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltYWdlX3VybCcsIGxzLmdldFN0cmluZygnYXdzJykgKyBpbWFnZS51cmwucmVwbGFjZSgnLmpwZWcnLCAnX20uanBlZycpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFZpZXdNb2RlbC5nZXQoJ2ltYWdlX3VybCcpKTtcbiAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltZ19zdCcsIDEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlb212ZTogJyArIGltYWdlX25hbWUgKyAnLmpwZWcnKTtcbiAgICAgICAgICAgIHJlbW92ZUZpbGUoaW1hZ2VfbmFtZSArICcuanBlZycpO1xuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBWaWV3TW9kZWwuc2V0KCdpbWdfc3QnLCAzKTsgLy9lcnJvclxuICAgICAgICBtZXNzYWdlLnNob3dFcnJvcih7ICd0aXRsZSc6ICdFcnJvciBkZSBpbnRlcm5ldCBhbCBlbnZpYXIgbGEgaW1hZ2VuJywgJ21lc3NhZ2UnOiAnSW50ZW50ZSBudWV2YW1lbnRlLicgfSk7XG4gICAgfSk7XG59XG4vL1xuXG5leHBvcnRzLnRhcEFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoVmlld01vZGVsLmdldCgnaW1nX3N0JykgIT09IDEpIHtcbiAgICAgICAgbWVzc2FnZS5zaG93V2FybmluZyh7ICd0aXRsZSc6ICdFcnJvciBkZSBpbWFnZW4nLCAnbWVzc2FnZSc6IFZpZXdNb2RlbC5nZXQoJ2ltZ19zdCcpID09IDAgPyAnSW5ncmVzZSB1bmEgaW1hZ2VuJyA6ICdFcnJvciBkZSBpbWFnZW4nIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvc3RJbmNpZGVuY2UoJ1BPU1QnLCAndW5pdHMvZmFjZXMvaW5jaWRlbmNlcycsIHtcbiAgICAgICAgXCJ1bml0c19mYWNlc19pZFwiOiBWaWV3TW9kZWwuZ2V0KCd1bml0c19mYWNlc19pZCcpLFxuICAgICAgICBcImltYWdlX3VybFwiOiBWaWV3TW9kZWwuZ2V0KCdpbWFnZV91cmwnKS5yZXBsYWNlKGxzLmdldFN0cmluZygnYXdzJyksICcnKS5yZXBsYWNlKCdfbS5qcGVnJywgJy5qcGVnJyksXG4gICAgICAgICdvYnNlcnZhdGlvbic6IFZpZXdNb2RlbC5nZXQoJ29ic2VydmF0aW9uJykgPyBWaWV3TW9kZWwuZ2V0KCdvYnNlcnZhdGlvbicpIDogbnVsbFxuICAgIH0pO1xufVxuXG4vL1NlbmQgaW50YWxsYXRpb25zIGxvZ2ljXG5mdW5jdGlvbiBwb3N0SW5jaWRlbmNlKG1ldGhvZCwgdXJsLCBjb250ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJwb3N0SW5jaWRlbmNlKClcIik7XG4gICAgY29uc29sZS5sb2coJ21ldG9kaDogJyArIG1ldGhvZCk7XG4gICAgY29uc29sZS5kaXIoY29udGVudCk7XG4gICAgY29uc29sZS5sb2coJ2ltYWdlX3VybDogJyArIGNvbnRlbnQuaW1hZ2VfdXJsKTtcbiAgICB1cmwgPSBscy5nZXRTdHJpbmcoJ2Nvbm5lY3Rpb24nKSArIHVybDtcbiAgICBjb25zb2xlLmxvZygndXJsOiAnICsgdXJsKTtcbiAgICBodHRwLnJlcXVlc3QobHMucmVxdWVzdCh1cmwsIG1ldGhvZCwgY29udGVudCkpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgY29uc29sZS5kaXIocik7XG4gICAgICAgIGxldCBpdGVtID0gSlNPTi5wYXJzZShyLmNvbnRlbnQpO1xuICAgICAgICBpZiAoci5zdGF0dXNDb2RlID09IDIwMSkge1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW0uZGF0YTtcbiAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ3VwZGF0ZV9pbWFnZV91cmwnLCBmYWxzZSk7IC8vIGFsd2F5cyB1cGRhdGUgaW1hZ2VcbiAgICAgICAgICAgIGlmIChWaWV3TW9kZWwuZ2V0KCd1cGRhdGVfaW1hZ2VfdXJsJykpIHsgLy9lZGl0XG4gICAgICAgICAgICAgICAgVmlld01vZGVsLnNldCgndXBkYXRlX2ltYWdlX3VybCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwb3N0SW5jaWRlbmNlKCdQVVQnLCAndW5pdHMvZmFjZXMvJyArIFZpZXdNb2RlbC5nZXQoJ3VuaXRzX2ZhY2VzX2lkJyksIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlX3VybCc6IGNvbnRlbnQuaW1hZ2VfdXJsLFxuICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnZ2V0R3BzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2dvVG9JbmNpZGVuY2VzKGl0ZW0ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoci5zdGF0dXNDb2RlID09IDIwMikgeyAvL2NyZWF0ZWRcbiAgICAgICAgICAgICAgICAvL2dvVG9JbmNpZGVuY2VzKGl0ZW0ubWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc2hvd0Vycm9yKHsgJ3RpdGxlJzogJ0Vycm9yIGFsIGVudmlhcicsICdtZXNzYWdlJzogaXRlbS5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlLnNob3dFcnJvcih7ICd0aXRsZSc6ICdFcnJvciBkZSBpbnRlcm5ldCcgfSk7XG4gICAgfSk7XG59XG4vL1xuXG5cblxuZXhwb3J0cy5zZW5kQkcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgLy8gZmlsZSBwYXRoIGFuZCB1cmxcbiAgICB2YXIgZmlsZSA9IFwiL3NvbWUvbG9jYWwvZmlsZS9wYXRoL2FuZC9maWxlL25hbWUuanBnXCI7XG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9zb21lLnJlbW90ZS5zZXJ2aWNlLmNvbS9wYXRoXCI7XG4gICAgdmFyIG5hbWUgPSBmaWxlLnN1YnN0cihmaWxlLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuXG4gICAgLy8gdXBsb2FkIGNvbmZpZ3VyYXRpb25cbiAgICB2YXIgYmdodHRwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7XG4gICAgdmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcbiAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVXBsb2FkaW5nIFwiICsgbmFtZVxuICAgIH07XG59XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=