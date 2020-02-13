require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.js": "./app.js",
	"./app.scss": "./app.scss",
	"./common/dt.js": "./common/dt.js",
	"./common/encode.js": "./common/encode.js",
	"./common/ls.js": "./common/ls.js",
	"./common/message.js": "./common/message.js",
	"./common/nav.js": "./common/nav.js",
	"./common/platform.js": "./common/platform.js",
	"./common/url.js": "./common/url.js",
	"./main-page.js": "./main-page.js",
	"./main-page.xml": "./main-page.xml",
	"./main-view-model.js": "./main-view-model.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"main-page\">\n</Frame>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        /*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/sass-loader/lib/loader.js):\nError: Cannot find module 'node-sass'\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:507:25)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (/Users/victor/NS/testbg/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at Object.sassLoader (/Users/victor/NS/testbg/node_modules/sass-loader/lib/loader.js:46:72)");

/***/ }),

/***/ "./common/dt.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.getDatedif = function (fecha) {
    try {
        fecha = fecha.replace(/-/g, '/');
        fecha = new Date(fecha);
        const now = new Date();
        const seg = (now - fecha) / 1000;

        const dias = Math.floor(seg / 60 / 60 / 24);
        const horas = Math.round(seg / 60 / 60) % 24;
        const minutos = Math.round(seg / 60) % 60;
        const segundos = Math.round(seg) % 60;

        const d = dias > 0 ? dias + ' días ' : '';
        const h = horas > 0 ? horas + ' horas ' : '';
        const m = minutos > 0 ? minutos + ' min ' : '';
        const s = segundos > 0 ? segundos + ' seg' : '1 seg';

        const diff = dias > 1 ? d : (horas > 1 ? h : (minutos > 1 ? m : s));
        return 'hace ' + diff;
    } catch (e) {
        return '';
    }
}
exports.formatDateTimeMySql = function (fecha) {
    if (typeof fecha == "string") {
        fecha = fecha.replace(/-/g, '/');
    }
    const date = new Date(fecha),
        year = date.getFullYear(),
        month = (date.getMonth() + 1).toString(),
        formatedMonth = (month.length === 1) ? ('0' + month) : month,
        day = date.getDate().toString(),
        formatedDay = (day.length === 1) ? ('0' + day) : day,
        hour = date.getHours().toString(),
        formatedHour = (hour.length === 1) ? ('0' + hour) : hour,
        minute = date.getMinutes().toString(),
        formatedMinute = (minute.length === 1) ? ('0' + minute) : minute,
        second = date.getSeconds().toString(),
        formatedSecond = (second.length === 1) ? ('0' + second) : second;
    return year + '-' + formatedMonth + '-' + formatedDay + ' ' + formatedHour + ':' + formatedMinute + ':' + formatedSecond;
};
exports.formatDateMySql = function (date) {
    date = new Date(date);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
}
exports.formatDate = function (date) {
    date = new Date(date);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d);
}
exports.addDays = function (fecha, cantidad) {
    var myDate = new Date(fecha);
    myDate.setDate(myDate.getDate() + cantidad);
    return myDate;
}
exports.getMonth = function (mes, getName) {
    const meses = { 0: 'Enero', 1: 'Febrero', 2: 'Marzo', 3: 'Abril', 4: 'Mayo', 5: 'Junio', 6: 'Julio', 7: 'Agosto', 8: 'Septiembre', 9: 'Octubre', 10: 'Noviembre', 11: 'Diciembre' };
    if (getName) {
        return meses[mes];
    } else {
        for (var i in meses) {
            if (meses[i] == mes) {
                return i;
            }
        }
    }
}
exports.formatDateTimeUrl = function (fecha) {
    fecha = fecha.replace(/:/g, '%3A');
    fecha = fecha.replace(' ', '%20');
    return fecha;
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./common/dt.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./common/dt.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./common/encode.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// funcion de ayuda para la funcion obj2uri
function join(path, key) {
    return path != null ? path + "[" + key + "]" : key;
}

/**
 * Funcion que convierte un objeto|array en una cadena uri codificada.
 * 
 * @param {object} obj objeto que será convertido a una uri
 * @param {boolean} encodeKey valor que indica si debe codificar los keys, por defecto es false.
 * @param {string} path parametro opcional usado en la recursividad [usado en la recursividad].
 * @param {array|object} result objeto principal donde se guardarán todos los datos [usado en la recursividad].
 */
function obj2uri(obj, encodeKey, path, result) {

    encodeKey = encodeKey || false;

    // Si es la primerera llamada osea cuando no es un llamado de la recursividad
    if (result === undefined) {

        var type = Object.prototype.toString.call(obj);

        if (type === "[object Object]") {
            result = {};
        } else if (type === "[object Array]") {
            result = [];
        } else {
            return;
        }
    }

    for (var key in obj) {

        if (!obj.hasOwnProperty(key)) continue;

        var val = obj[key];

        if (val == null) continue;

        switch (Object.prototype.toString.call(val)) {
            case "[object Array]":
            case "[object Object]":
                obj2uri(val, encodeKey, join(path, key), result);
                break;
            default:
                result[join(path, key)] = encodeKey ? val : encodeURIComponent(val);
                break;
        }
    }

    return Object.entries(result).map(function (pair, i) {
        return (encodeKey ? pair.map(encodeURIComponent) : pair).join('=');
    }).join('&');
}
exports.encode = function (obj, encodeKey, path, result) {
    return obj2uri(obj, encodeKey, path, result);
}
exports.getOffset = function (offset,last_page) {
    if (last_page) {
        if (offset < last_page) {
            offset++;
        } else {
            return false;
        }
    } else {
        offset = 1;
    }
    return offset;
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./common/encode.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./common/encode.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./common/ls.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
exports.setString = function (name, value) {
    appSettings.setString(name, value);
}
exports.getString = function (name) {
    return appSettings.getString(name);
}
exports.setJson = function (name, value) {
    appSettings.setString(name, JSON.stringify(value));
    return true;
}
exports.getJson = function (name) {
    const listView = appSettings.getString(name);
    return listView ? JSON.parse(listView) : null;
}
exports.setNumber = function (name, value) {
    appSettings.setNumber(name, value);
}
exports.getNumber = function (name) {
    return appSettings.getNumber(name);
}
exports.setBool = function (name, value) {
    appSettings.setBoolean(name, value);
}
exports.getBool = function (name) {
    return appSettings.getBoolean(name);
}
exports.remove = function (name) {
    return appSettings.remove(name);
}
exports.clear = function () {
    return appSettings.clear();
}
exports.getObjectParams = function (object, name) {
    const listView = appSettings.getString(object);
    const profile = listView ? JSON.parse(listView) : null;
    if (profile) {
        return profile[name];
    } else {
        return null;
    }
}
exports.request = function (url, method, content) {
    return {
        url: url,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'es',
            'x-device-type': 1,
            'Authorization': 'Bearer ' + appSettings.getString('token')
        },
        content: JSON.stringify(content)
    }
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./common/ls.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./common/ls.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./common/message.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const FeedbackPlugin = __webpack_require__("../node_modules/nativescript-feedback/feedback.js");
const feedback = new FeedbackPlugin.Feedback();

exports.showSuccess = function (body) {
    feedback.success(body);
}
exports.showWarning = function (body) {
    feedback.warning(body);
}
exports.showError = function (body) {
    //feedback.show(body);
    feedback.error(body);
}
exports.showInfo = function (body) {
    feedback.info(body);
}
exports.hideFeedback = function (body) {
    feedback.hide(body);
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./common/message.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./common/message.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./common/nav.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
exports.goBack = function () {
    const topmost = frameModule.topmost();
    topmost.goBack();
}
function goToFunc(pagina, history, item) {
    console.log('goto: ' + 'components/' + pagina);
    const topmost = frameModule.topmost();
    topmost.navigate({
        moduleName: './components/' + pagina,
        clearHistory: history,
        context: item
    });
}
exports.goTo = function (pagina, history, item) {
    goToFunc(pagina, history, item);
}
exports.getCurrentPage = function () {
    const myPage = frameModule.topmost().currentPage;
    return myPage.id;
}
exports.error = function (code) {
    switch (code) {
        case 401:
            goToFunc('login/login', true);
            break;
        default:
            break;
    }
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./common/nav.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./common/nav.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./common/platform.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
var platform = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
exports.getPlatform = function () {
    if (app.android) {
        return 'android';
    } else {
        return 'ios';
    }
}
exports.getScreenDimensions = function (tipo) {
    switch (tipo) {
        case 'height':
            return (platform.screen.mainScreen.heightDIPs);
        default:
            return (platform.screen.mainScreen.widthDIPs);
    }
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./common/platform.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./common/platform.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./common/url.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.imgSize = function (url, size) {
    if (url) {
        url = url.replace(/_xs|_s|_m|_l|_xl/, '');
        const last = url.lastIndexOf('.'); 
        url = [url.substring(0, last), size, url.substring(last, url.length)].join('');
    }
    return url;
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./common/url.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./common/url.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

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

/***/ }),

/***/ "./main-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("@nstudio/nativescript-camera-plus", function() { return __webpack_require__("../node_modules/@nstudio/nativescript-camera-plus/camera-plus.js"); });
global.registerModule("@nstudio/nativescript-camera-plus/CameraPlus", function() { return __webpack_require__("../node_modules/@nstudio/nativescript-camera-plus/camera-plus.js"); });

module.exports = "<Page xmlns:Cam=\"@nstudio/nativescript-camera-plus\" navigatingTo=\"onNavigatingTo\">\n  <Page.actionBar>\n    <ActionBar title=\"Camera Plus\" icon=\"\"></ActionBar>\n  </Page.actionBar>\n    <GridLayout rows=\"*,auto\" class=\"bg_red\">\n      <Cam:CameraPlus id=\"camPlus\" height=\"400\" width=\"300\"\n        saveToGallery=\"true\"    \n        showCaptureIcon=\"false\"\n        showGalleryIcon=\"false\"\n        showToggleIcon=\"false\"\n        showFlashIcon=\"false\"\n        debug=\"true\"> \n      </Cam:CameraPlus>\n      <Button row=\"1\" text=\"getPhoto\" tap=\"tapImagenCamara\" />\n    </GridLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./main-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
const ViewModel = new Observable({
});
module.exports = ViewModel;; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./main-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vZHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9tYWluLXZpZXctbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSjs7Ozs7Ozs7QUNsQ0EsaUU7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEUsS0FBSztBQUNM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QUFDcEUsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDdFJBLHFIQUF1RSxRQUFRLG1CQUFPLENBQUMsa0VBQW1DLEVBQUUsRUFBRTtBQUM5SCxrRkFBa0YsUUFBUSxtQkFBTyxDQUFDLGtFQUFtQyxFQUFFLEVBQUU7O0FBRXpJLHdvQjtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDBDQUEwQztBQUNyRSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNWQSxpRUFBbUIsbUJBQU8sQ0FBQyxrRUFBaUI7QUFDNUM7QUFDQSxDQUFDO0FBQ0QsNEI7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiwrQ0FBK0M7QUFDMUUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vY29tbW9uL2R0LmpzXCI6IFwiLi9jb21tb24vZHQuanNcIixcblx0XCIuL2NvbW1vbi9lbmNvZGUuanNcIjogXCIuL2NvbW1vbi9lbmNvZGUuanNcIixcblx0XCIuL2NvbW1vbi9scy5qc1wiOiBcIi4vY29tbW9uL2xzLmpzXCIsXG5cdFwiLi9jb21tb24vbWVzc2FnZS5qc1wiOiBcIi4vY29tbW9uL21lc3NhZ2UuanNcIixcblx0XCIuL2NvbW1vbi9uYXYuanNcIjogXCIuL2NvbW1vbi9uYXYuanNcIixcblx0XCIuL2NvbW1vbi9wbGF0Zm9ybS5qc1wiOiBcIi4vY29tbW9uL3BsYXRmb3JtLmpzXCIsXG5cdFwiLi9jb21tb24vdXJsLmpzXCI6IFwiLi9jb21tb24vdXJsLmpzXCIsXG5cdFwiLi9tYWluLXBhZ2UuanNcIjogXCIuL21haW4tcGFnZS5qc1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4vbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCI6IFwiLi9tYWluLXZpZXctbW9kZWwuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcIm1haW4tcGFnZVxcXCI+XFxuPC9GcmFtZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAtcm9vdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9hcHAtcm9vdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gTGl2ZVN5bmNcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBob3QgdXBkYXRlcyBhcmUgYXBwbGllZCwgYXNrIHRoZSBtb2R1bGVzIHRvIGFwcGx5IHRoZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMoeyB0eXBlLCBwYXRoIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIGluaXRpYWwgYXBwIHN0YXJ0XG4gICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvKD88IVxcYkFwcF9SZXNvdXJjZXNcXGIuKikoPzwhXFwuXFwvXFxidGVzdHNcXGJcXC8uKj8pXFwuKHhtbHxjc3N8anN8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIC8qXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuanMgZmlsZSBpcyB0aGUgZW50cnkgcG9pbnQgdG8geW91ciBhcHBsaWNhdGlvbi5cbllvdSBjYW4gdXNlIHRoaXMgZmlsZSB0byBwZXJmb3JtIGFwcC1sZXZlbCBpbml0aWFsaXphdGlvbiwgYnV0IHRoZSBwcmltYXJ5XG5wdXJwb3NlIG9mIHRoZSBmaWxlIGlzIHRvIHBhc3MgY29udHJvbCB0byB0aGUgYXBw4oCZcyBmaXJzdCBtb2R1bGUuXG4qL1xuXG5jb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiBcImFwcC1yb290XCIgfSk7XG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgIiwiZXhwb3J0cy5nZXREYXRlZGlmID0gZnVuY3Rpb24gKGZlY2hhKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZmVjaGEgPSBmZWNoYS5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgIGZlY2hhID0gbmV3IERhdGUoZmVjaGEpO1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBzZWcgPSAobm93IC0gZmVjaGEpIC8gMTAwMDtcblxuICAgICAgICBjb25zdCBkaWFzID0gTWF0aC5mbG9vcihzZWcgLyA2MCAvIDYwIC8gMjQpO1xuICAgICAgICBjb25zdCBob3JhcyA9IE1hdGgucm91bmQoc2VnIC8gNjAgLyA2MCkgJSAyNDtcbiAgICAgICAgY29uc3QgbWludXRvcyA9IE1hdGgucm91bmQoc2VnIC8gNjApICUgNjA7XG4gICAgICAgIGNvbnN0IHNlZ3VuZG9zID0gTWF0aC5yb3VuZChzZWcpICUgNjA7XG5cbiAgICAgICAgY29uc3QgZCA9IGRpYXMgPiAwID8gZGlhcyArICcgZMOtYXMgJyA6ICcnO1xuICAgICAgICBjb25zdCBoID0gaG9yYXMgPiAwID8gaG9yYXMgKyAnIGhvcmFzICcgOiAnJztcbiAgICAgICAgY29uc3QgbSA9IG1pbnV0b3MgPiAwID8gbWludXRvcyArICcgbWluICcgOiAnJztcbiAgICAgICAgY29uc3QgcyA9IHNlZ3VuZG9zID4gMCA/IHNlZ3VuZG9zICsgJyBzZWcnIDogJzEgc2VnJztcblxuICAgICAgICBjb25zdCBkaWZmID0gZGlhcyA+IDEgPyBkIDogKGhvcmFzID4gMSA/IGggOiAobWludXRvcyA+IDEgPyBtIDogcykpO1xuICAgICAgICByZXR1cm4gJ2hhY2UgJyArIGRpZmY7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuZXhwb3J0cy5mb3JtYXREYXRlVGltZU15U3FsID0gZnVuY3Rpb24gKGZlY2hhKSB7XG4gICAgaWYgKHR5cGVvZiBmZWNoYSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGZlY2hhID0gZmVjaGEucmVwbGFjZSgvLS9nLCAnLycpO1xuICAgIH1cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZmVjaGEpLFxuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLFxuICAgICAgICBmb3JtYXRlZE1vbnRoID0gKG1vbnRoLmxlbmd0aCA9PT0gMSkgPyAoJzAnICsgbW9udGgpIDogbW9udGgsXG4gICAgICAgIGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgICAgIGZvcm1hdGVkRGF5ID0gKGRheS5sZW5ndGggPT09IDEpID8gKCcwJyArIGRheSkgOiBkYXksXG4gICAgICAgIGhvdXIgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKSxcbiAgICAgICAgZm9ybWF0ZWRIb3VyID0gKGhvdXIubGVuZ3RoID09PSAxKSA/ICgnMCcgKyBob3VyKSA6IGhvdXIsXG4gICAgICAgIG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCksXG4gICAgICAgIGZvcm1hdGVkTWludXRlID0gKG1pbnV0ZS5sZW5ndGggPT09IDEpID8gKCcwJyArIG1pbnV0ZSkgOiBtaW51dGUsXG4gICAgICAgIHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCksXG4gICAgICAgIGZvcm1hdGVkU2Vjb25kID0gKHNlY29uZC5sZW5ndGggPT09IDEpID8gKCcwJyArIHNlY29uZCkgOiBzZWNvbmQ7XG4gICAgcmV0dXJuIHllYXIgKyAnLScgKyBmb3JtYXRlZE1vbnRoICsgJy0nICsgZm9ybWF0ZWREYXkgKyAnICcgKyBmb3JtYXRlZEhvdXIgKyAnOicgKyBmb3JtYXRlZE1pbnV0ZSArICc6JyArIGZvcm1hdGVkU2Vjb25kO1xufTtcbmV4cG9ydHMuZm9ybWF0RGF0ZU15U3FsID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgY29uc3QgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCBkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgcmV0dXJuIHkgKyAnLScgKyAobSA8IDEwID8gJzAnICsgbSA6IG0pICsgJy0nICsgKGQgPCAxMCA/ICcwJyArIGQgOiBkKTtcbn1cbmV4cG9ydHMuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGNvbnN0IHkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIHJldHVybiB5ICsgJy8nICsgKG0gPCAxMCA/ICcwJyArIG0gOiBtKSArICcvJyArIChkIDwgMTAgPyAnMCcgKyBkIDogZCk7XG59XG5leHBvcnRzLmFkZERheXMgPSBmdW5jdGlvbiAoZmVjaGEsIGNhbnRpZGFkKSB7XG4gICAgdmFyIG15RGF0ZSA9IG5ldyBEYXRlKGZlY2hhKTtcbiAgICBteURhdGUuc2V0RGF0ZShteURhdGUuZ2V0RGF0ZSgpICsgY2FudGlkYWQpO1xuICAgIHJldHVybiBteURhdGU7XG59XG5leHBvcnRzLmdldE1vbnRoID0gZnVuY3Rpb24gKG1lcywgZ2V0TmFtZSkge1xuICAgIGNvbnN0IG1lc2VzID0geyAwOiAnRW5lcm8nLCAxOiAnRmVicmVybycsIDI6ICdNYXJ6bycsIDM6ICdBYnJpbCcsIDQ6ICdNYXlvJywgNTogJ0p1bmlvJywgNjogJ0p1bGlvJywgNzogJ0Fnb3N0bycsIDg6ICdTZXB0aWVtYnJlJywgOTogJ09jdHVicmUnLCAxMDogJ05vdmllbWJyZScsIDExOiAnRGljaWVtYnJlJyB9O1xuICAgIGlmIChnZXROYW1lKSB7XG4gICAgICAgIHJldHVybiBtZXNlc1ttZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gbWVzZXMpIHtcbiAgICAgICAgICAgIGlmIChtZXNlc1tpXSA9PSBtZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZm9ybWF0RGF0ZVRpbWVVcmwgPSBmdW5jdGlvbiAoZmVjaGEpIHtcbiAgICBmZWNoYSA9IGZlY2hhLnJlcGxhY2UoLzovZywgJyUzQScpO1xuICAgIGZlY2hhID0gZmVjaGEucmVwbGFjZSgnICcsICclMjAnKTtcbiAgICByZXR1cm4gZmVjaGE7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbW1vbi9kdC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi9kdC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCIvLyBmdW5jaW9uIGRlIGF5dWRhIHBhcmEgbGEgZnVuY2lvbiBvYmoydXJpXG5mdW5jdGlvbiBqb2luKHBhdGgsIGtleSkge1xuICAgIHJldHVybiBwYXRoICE9IG51bGwgPyBwYXRoICsgXCJbXCIgKyBrZXkgKyBcIl1cIiA6IGtleTtcbn1cblxuLyoqXG4gKiBGdW5jaW9uIHF1ZSBjb252aWVydGUgdW4gb2JqZXRvfGFycmF5IGVuIHVuYSBjYWRlbmEgdXJpIGNvZGlmaWNhZGEuXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogb2JqZXRvIHF1ZSBzZXLDoSBjb252ZXJ0aWRvIGEgdW5hIHVyaVxuICogQHBhcmFtIHtib29sZWFufSBlbmNvZGVLZXkgdmFsb3IgcXVlIGluZGljYSBzaSBkZWJlIGNvZGlmaWNhciBsb3Mga2V5cywgcG9yIGRlZmVjdG8gZXMgZmFsc2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBwYXJhbWV0cm8gb3BjaW9uYWwgdXNhZG8gZW4gbGEgcmVjdXJzaXZpZGFkIFt1c2FkbyBlbiBsYSByZWN1cnNpdmlkYWRdLlxuICogQHBhcmFtIHthcnJheXxvYmplY3R9IHJlc3VsdCBvYmpldG8gcHJpbmNpcGFsIGRvbmRlIHNlIGd1YXJkYXLDoW4gdG9kb3MgbG9zIGRhdG9zIFt1c2FkbyBlbiBsYSByZWN1cnNpdmlkYWRdLlxuICovXG5mdW5jdGlvbiBvYmoydXJpKG9iaiwgZW5jb2RlS2V5LCBwYXRoLCByZXN1bHQpIHtcblxuICAgIGVuY29kZUtleSA9IGVuY29kZUtleSB8fCBmYWxzZTtcblxuICAgIC8vIFNpIGVzIGxhIHByaW1lcmVyYSBsbGFtYWRhIG9zZWEgY3VhbmRvIG5vIGVzIHVuIGxsYW1hZG8gZGUgbGEgcmVjdXJzaXZpZGFkXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgICAgcmVzdWx0ID0ge307XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblxuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcblxuICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgICBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpKSB7XG4gICAgICAgICAgICBjYXNlIFwiW29iamVjdCBBcnJheV1cIjpcbiAgICAgICAgICAgIGNhc2UgXCJbb2JqZWN0IE9iamVjdF1cIjpcbiAgICAgICAgICAgICAgICBvYmoydXJpKHZhbCwgZW5jb2RlS2V5LCBqb2luKHBhdGgsIGtleSksIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3VsdFtqb2luKHBhdGgsIGtleSldID0gZW5jb2RlS2V5ID8gdmFsIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMocmVzdWx0KS5tYXAoZnVuY3Rpb24gKHBhaXIsIGkpIHtcbiAgICAgICAgcmV0dXJuIChlbmNvZGVLZXkgPyBwYWlyLm1hcChlbmNvZGVVUklDb21wb25lbnQpIDogcGFpcikuam9pbignPScpO1xuICAgIH0pLmpvaW4oJyYnKTtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaiwgZW5jb2RlS2V5LCBwYXRoLCByZXN1bHQpIHtcbiAgICByZXR1cm4gb2JqMnVyaShvYmosIGVuY29kZUtleSwgcGF0aCwgcmVzdWx0KTtcbn1cbmV4cG9ydHMuZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKG9mZnNldCxsYXN0X3BhZ2UpIHtcbiAgICBpZiAobGFzdF9wYWdlKSB7XG4gICAgICAgIGlmIChvZmZzZXQgPCBsYXN0X3BhZ2UpIHtcbiAgICAgICAgICAgIG9mZnNldCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0ID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldDtcbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vY29tbW9uL2VuY29kZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi9lbmNvZGUuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcbmV4cG9ydHMuc2V0U3RyaW5nID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcobmFtZSwgdmFsdWUpO1xyXG59XHJcbmV4cG9ydHMuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHJldHVybiBhcHBTZXR0aW5ncy5nZXRTdHJpbmcobmFtZSk7XHJcbn1cclxuZXhwb3J0cy5zZXRKc29uID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcobmFtZSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydHMuZ2V0SnNvbiA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICBjb25zdCBsaXN0VmlldyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhuYW1lKTtcclxuICAgIHJldHVybiBsaXN0VmlldyA/IEpTT04ucGFyc2UobGlzdFZpZXcpIDogbnVsbDtcclxufVxyXG5leHBvcnRzLnNldE51bWJlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG4gICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKG5hbWUsIHZhbHVlKTtcclxufVxyXG5leHBvcnRzLmdldE51bWJlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICByZXR1cm4gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKG5hbWUpO1xyXG59XHJcbmV4cG9ydHMuc2V0Qm9vbCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG4gICAgYXBwU2V0dGluZ3Muc2V0Qm9vbGVhbihuYW1lLCB2YWx1ZSk7XHJcbn1cclxuZXhwb3J0cy5nZXRCb29sID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHJldHVybiBhcHBTZXR0aW5ncy5nZXRCb29sZWFuKG5hbWUpO1xyXG59XHJcbmV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHJldHVybiBhcHBTZXR0aW5ncy5yZW1vdmUobmFtZSk7XHJcbn1cclxuZXhwb3J0cy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBhcHBTZXR0aW5ncy5jbGVhcigpO1xyXG59XHJcbmV4cG9ydHMuZ2V0T2JqZWN0UGFyYW1zID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSkge1xyXG4gICAgY29uc3QgbGlzdFZpZXcgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcob2JqZWN0KTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBsaXN0VmlldyA/IEpTT04ucGFyc2UobGlzdFZpZXcpIDogbnVsbDtcclxuICAgIGlmIChwcm9maWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2ZpbGVbbmFtZV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucmVxdWVzdCA9IGZ1bmN0aW9uICh1cmwsIG1ldGhvZCwgY29udGVudCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAnZXMnLFxyXG4gICAgICAgICAgICAneC1kZXZpY2UtdHlwZSc6IDEsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd0b2tlbicpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShjb250ZW50KVxyXG4gICAgfVxyXG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbW1vbi9scy5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi9scy5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBGZWVkYmFja1BsdWdpbiA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1mZWVkYmFjaycpO1xuY29uc3QgZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2tQbHVnaW4uRmVlZGJhY2soKTtcblxuZXhwb3J0cy5zaG93U3VjY2VzcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgZmVlZGJhY2suc3VjY2Vzcyhib2R5KTtcbn1cbmV4cG9ydHMuc2hvd1dhcm5pbmcgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgIGZlZWRiYWNrLndhcm5pbmcoYm9keSk7XG59XG5leHBvcnRzLnNob3dFcnJvciA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgLy9mZWVkYmFjay5zaG93KGJvZHkpO1xuICAgIGZlZWRiYWNrLmVycm9yKGJvZHkpO1xufVxuZXhwb3J0cy5zaG93SW5mbyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgZmVlZGJhY2suaW5mbyhib2R5KTtcbn1cbmV4cG9ydHMuaGlkZUZlZWRiYWNrID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICBmZWVkYmFjay5oaWRlKGJvZHkpO1xufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21tb24vbWVzc2FnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi9tZXNzYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IGZyYW1lTW9kdWxlID0gcmVxdWlyZSgndWkvZnJhbWUnKTtcclxuZXhwb3J0cy5nb0JhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xyXG4gICAgdG9wbW9zdC5nb0JhY2soKTtcclxufVxyXG5mdW5jdGlvbiBnb1RvRnVuYyhwYWdpbmEsIGhpc3RvcnksIGl0ZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdnb3RvOiAnICsgJ2NvbXBvbmVudHMvJyArIHBhZ2luYSk7XHJcbiAgICBjb25zdCB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xyXG4gICAgdG9wbW9zdC5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogJy4vY29tcG9uZW50cy8nICsgcGFnaW5hLFxyXG4gICAgICAgIGNsZWFySGlzdG9yeTogaGlzdG9yeSxcclxuICAgICAgICBjb250ZXh0OiBpdGVtXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdvVG8gPSBmdW5jdGlvbiAocGFnaW5hLCBoaXN0b3J5LCBpdGVtKSB7XHJcbiAgICBnb1RvRnVuYyhwYWdpbmEsIGhpc3RvcnksIGl0ZW0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBteVBhZ2UgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XHJcbiAgICByZXR1cm4gbXlQYWdlLmlkO1xyXG59XHJcbmV4cG9ydHMuZXJyb3IgPSBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgIGdvVG9GdW5jKCdsb2dpbi9sb2dpbicsIHRydWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21tb24vbmF2LmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vY29tbW9uL25hdi5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBhcHAgPSByZXF1aXJlKCdhcHBsaWNhdGlvbicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZShcInBsYXRmb3JtXCIpO1xuZXhwb3J0cy5nZXRQbGF0Zm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgcmV0dXJuICdhbmRyb2lkJztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2lvcyc7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRTY3JlZW5EaW1lbnNpb25zID0gZnVuY3Rpb24gKHRpcG8pIHtcbiAgICBzd2l0Y2ggKHRpcG8pIHtcbiAgICAgICAgY2FzZSAnaGVpZ2h0JzpcbiAgICAgICAgICAgIHJldHVybiAocGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gKHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyk7XG4gICAgfVxufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21tb24vcGxhdGZvcm0uanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9jb21tb24vcGxhdGZvcm0uanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiZXhwb3J0cy5pbWdTaXplID0gZnVuY3Rpb24gKHVybCwgc2l6ZSkge1xuICAgIGlmICh1cmwpIHtcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL194c3xfc3xfbXxfbHxfeGwvLCAnJyk7XG4gICAgICAgIGNvbnN0IGxhc3QgPSB1cmwubGFzdEluZGV4T2YoJy4nKTsgXG4gICAgICAgIHVybCA9IFt1cmwuc3Vic3RyaW5nKDAsIGxhc3QpLCBzaXplLCB1cmwuc3Vic3RyaW5nKGxhc3QsIHVybC5sZW5ndGgpXS5qb2luKCcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vY29tbW9uL3VybC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi91cmwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgVmlld01vZGVsID0gcmVxdWlyZSgnLi9tYWluLXZpZXctbW9kZWwnKTtcblxuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IENhbWVyYVBsdXMgPSByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FtZXJhLXBsdXMnKTtcbmNvbnN0IEJpdG1hcEZhY3RvcnkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJpdG1hcC1mYWN0b3J5XCIpO1xuY29uc3QgZmlsZVN5c3RlbU1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0nKTtcbmNvbnN0IGltYWdlU291cmNlTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UnKTtcblxuY29uc3QgbHMgPSByZXF1aXJlKCd+L2NvbW1vbi9scycpO1xuY29uc3QgZHQgPSByZXF1aXJlKCd+L2NvbW1vbi9kdCcpO1xuY29uc3QgbWVzc2FnZSA9IHJlcXVpcmUoJ34vY29tbW9uL21lc3NhZ2UnKTtcblxubGV0IHBhZ2U7XG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgaWYgKGxzLmdldEJvb2woJ2NsZWFyJykpIHtcbiAgICAgICAgbHMuc2V0Qm9vbCgnY2xlYXInLCBmYWxzZSk7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltYWdlX3VybCcsIHVuZGVmaW5lZCk7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltZ19zdCcsIDApO1xuICAgICAgICBzZXRQYXRoKCk7XG4gICAgICAgIHNldFNhdmVJbWFnZXMoKTtcbiAgICB9XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IFZpZXdNb2RlbDtcbn1cbmZ1bmN0aW9uIHNldFBhdGgoKSB7XG4gICAgbGV0IGZvbGRlckRlc3QgPSBmaWxlU3lzdGVtTW9kdWxlLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgaWYgKGxzLmdldFN0cmluZygncGxhdGZvcm0nKSA9PSAnaW9zJykge1xuICAgICAgICBmb2xkZXJEZXN0ID0gZmlsZVN5c3RlbU1vZHVsZS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgfVxuICAgIGZvbGRlckRlc3QgPSBmaWxlU3lzdGVtTW9kdWxlLnBhdGguam9pbihmb2xkZXJEZXN0LnBhdGgsIFwidG1wL3Zwb1wiKTtcbiAgICBjb25zdCBmb2xkZXIgPSBmaWxlU3lzdGVtTW9kdWxlLkZvbGRlci5mcm9tUGF0aChmb2xkZXJEZXN0KTtcbiAgICBjb25zb2xlLmxvZyhmb2xkZXIucGF0aCk7XG4gICAgVmlld01vZGVsLnNldCgncGF0aCcsIGZvbGRlci5wYXRoKTtcbiAgICAvL2dldEZpbGVzRnJvbVBhdGgoZm9sZGVyKTtcbiAgICAvL3JlbW92ZUZpbGVzRnJvbVBhdGgoZm9sZGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsZXNGcm9tUGF0aChmb2xkZXIpIHtcbiAgICBmb2xkZXIuZ2V0RW50aXRpZXMoKVxuICAgICAgICAudGhlbigoZW50aXRpZXMpID0+IHtcbiAgICAgICAgICAgIC8vIGVudGl0aWVzIGlzIGFycmF5IHdpdGggdGhlIGRvY3VtZW50J3MgZmlsZXMgYW5kIGZvbGRlcnMuXG4gICAgICAgICAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcih7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGVudGl0eS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRpdHkucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkOiBlbnRpdHkubGFzdE1vZGlmaWVkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBGYWlsZWQgdG8gb2J0YWluIGZvbGRlcidzIGNvbnRlbnRzLlxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLnN0YWNrKTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZpbGVzRnJvbVBhdGgoZm9sZGVyKSB7XG4gICAgZm9sZGVyLmNsZWFyKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bGx5IGNsZWFyZWQgdGhlIGZvbGRlci5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0TWVzc2FnZVwiLCBcIkZvbGRlciBzdWNjZXNzZnVsbHkgY2xlYXJlZCFcIik7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5zdGFjayk7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRTYXZlSW1hZ2VzKCkge1xuICAgIGlmIChscy5nZXRCb29sKCdzYXZlSW1hZ2VzJykpIHtcbiAgICAgICAgVmlld01vZGVsLnNldCgnc2F2ZUltYWdlcycsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ3NhdmVJbWFnZXMnLCBmYWxzZSk7XG4gICAgfVxufVxuLy9sb2dpYyBpbWFnZSBhbmQgY2FtZXJhXG5leHBvcnRzLnRhcENsZWFySW1hZ2UgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIGFyZ3Mub2JqZWN0LmNsYXNzTmFtZSA9IGFyZ3Mub2JqZWN0LmNsYXNzTmFtZS5yZXBsYWNlKCcgc2NhbGVfaW4nLCAnJyk7XG4gICAgYXJncy5vYmplY3QuY2xhc3NOYW1lICs9ICcgc2NhbGVfaW4nO1xuICAgIFZpZXdNb2RlbC5zZXQoJ2ltYWdlJywgdW5kZWZpbmVkKTtcbn1cblxuY29uc3Qgc291cmNlID0gbmV3IGltYWdlU291cmNlTW9kdWxlLkltYWdlU291cmNlKCk7XG5leHBvcnRzLnRhcEltYWdlbkNhbWFyYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL2NvbnN0IG9wdGlvbnMgPSB7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IFZpZXdNb2RlbC5nZXQoJ3NhdmVJbWFnZXMnKSB9O1xuICAgIC8vIGNhbWVyYS50YWtlUGljdHVyZShvcHRpb25zKS5cbiAgICAvLyAgICAgdGhlbigoaW1hZ2VBc3NldCkgPT4ge1xuICAgIC8vICAgICAgICAgaW1hZ2VBc3NldC5vcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyAgICAgICAgIHNhdmVSZXNpemVJbWFnZShpbWFnZUFzc2V0KTtcbiAgICAvLyAgICAgfSwgKCkgPT4geyB9KTtcblxuICAgIGNvbnNvbGUubG9nKCd0YXBJbWFnZW5DYW1hcmEoKScpO1xuICAgIGNvbnN0IGNhbSA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJjYW1QbHVzXCIpO1xuICAgIGNvbnNvbGUubG9nKDEpO1xuICAgIGNhbS5vbihDYW1lcmFQbHVzLnBob3RvQ2FwdHVyZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgZnJvbUFzc2V0KGFyZ3MuZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coMik7XG4gICAgICAgICAgICAvLyByZXN1bHQgaXMgYW4gSW1hZ2VTb3VyY2UgdGhhdCB3ZSBnb3QgYnkgdXNpbmcgZnJvbUFzc2V0IGluIHRoZSBpbWFnZS1zb3VyY2UgbW9kdWxlLlxuICAgICAgICAgICAgLy9jb25zb2xlLmRpcihyZXN1bHQpO1xuICAgICAgICAgICAgc2F2ZVJlc2l6ZUltYWdlKHJlc3VsdCk7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coMyk7XG4gICAgICAgIH0pOyBcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2F2ZVJlc2l6ZUltYWdlKGltYWdlQXNzZXQpIHtcbiAgICBjb25zb2xlLmxvZyg0KTtcbiAgICBzb3VyY2UuZnJvbUFzc2V0KGltYWdlQXNzZXQpLnRoZW4oKHNvdXJjZSkgPT4geyAvL2Zyb21Bc3NldD1iaXRzXG4gICAgICAgIC8vY29uc29sZS5sb2coYFNpemU6ICR7c291cmNlLndpZHRofXgke3NvdXJjZS5oZWlnaHR9YCk7XG4gICAgICAgIGNvbnN0IGJtcCA9IEJpdG1hcEZhY3RvcnkuY3JlYXRlKHNvdXJjZS53aWR0aCwgc291cmNlLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IGltYWdlX25hbWUgPSBkdC5mb3JtYXREYXRlVGltZU15U3FsKG5ldyBEYXRlKCkpO1xuICAgICAgICBjb25zdCBpbWFnZV91cmwgPSBWaWV3TW9kZWwuZ2V0KCdwYXRoJykgKyBcIi9cIiArIGltYWdlX25hbWUgKyAnLmpwZWcnO1xuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZV91cmwpO1xuICAgICAgICBibXAuZGlzcG9zZShmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgYi5pbnNlcnQoc291cmNlKTtcbiAgICAgICAgICAgIC8vICMjIE1heCBkaW1lbnNpb24uIFJlc3BlY3RzIGFzcGVjdCByYXRpby5cbiAgICAgICAgICAgIGxldCBiMjtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobHMuZ2V0U3RyaW5nKCdwbGF0Zm9ybScpKTtcbiAgICAgICAgICAgIGlmIChscy5nZXRTdHJpbmcoJ3BsYXRmb3JtJykgPT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgICAgICAgICAgYjIgPSBiLnJlc2l6ZU1heCg4MDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiMiA9IGIucmVzaXplTWF4KDQwMCk7IC8vIGlvcyAqIDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRodW1iX2ltYWdlID0gYjIudG9JbWFnZVNvdXJjZSgpO1xuICAgICAgICAgICAgY29uc3Qgc2F2ZWQgPSB0aHVtYl9pbWFnZS5zYXZlVG9GaWxlKFxuICAgICAgICAgICAgICAgIGltYWdlX3VybCxcbiAgICAgICAgICAgICAgICAnanBlZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoc2F2ZWQpIHtcbiAgICAgICAgICAgICAgICBWaWV3TW9kZWwuc2V0KCdpbWFnZV91cmwnLCBpbWFnZV91cmwpO1xuICAgICAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltZ19zdCcsIDIpOyAvLzI9bG9hZGluZ1xuICAgICAgICAgICAgICAgIHBvc3RJbWFnZUFXUyhpbWFnZV91cmwsIGltYWdlX25hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRmlsZShpbWFnZV9uYW1lKSB7XG4gICAgbGV0IGN1cnJlbnRBcHAgPSBmaWxlU3lzdGVtTW9kdWxlLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgaWYgKGxzLmdldFN0cmluZygncGxhdGZvcm0nKSA9PSAnaW9zJykge1xuICAgICAgICBjdXJyZW50QXBwID0gZmlsZVN5c3RlbU1vZHVsZS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgfVxuICAgIGNvbnN0IHBhdGggPSBmaWxlU3lzdGVtTW9kdWxlLnBhdGguam9pbihjdXJyZW50QXBwLnBhdGgsICd0bXAvdnBvLycgKyBpbWFnZV9uYW1lKTtcbiAgICAvL2NvbnNvbGUubG9nKHBhdGgpO1xuICAgIGNvbnN0IGZpbGUgPSBmaWxlU3lzdGVtTW9kdWxlLkZpbGUuZnJvbVBhdGgocGF0aCk7XG4gICAgZmlsZS5yZW1vdmUoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdE1lc3NhZ2VcIiwgXCJGaWxlIHN1Y2Nlc3NmdWxseSBkZWxldGVkIVwiKTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuc3RhY2spO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvZmlsZVBhcmFtcyhwYXJhbSkge1xuICAgIGNvbnN0IHByb2ZpbGUgPSBscy5nZXRKc29uKCdwcm9maWxlJyk7XG4gICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHByb2ZpbGVbcGFyYW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwb3N0SW1hZ2VBV1MoaW1hZ2VfdXJsLCBpbWFnZV9uYW1lKSB7XG4gICAgY29uc29sZS5sb2coJ3Bvc3RJbWFnZUFXUycpO1xuICAgIGNvbnN0IGltZyA9IGltYWdlU291cmNlTW9kdWxlLmZyb21GaWxlKGltYWdlX3VybCk7XG4gICAgY29uc29sZS5sb2coaW1hZ2VfdXJsKTtcbiAgICBjb25zdCBjb250ZW50ID0ge1xuICAgICAgICAnaW1hZ2UnOiBpbWcudG9CYXNlNjRTdHJpbmcoXCJwbmdcIiksXG4gICAgICAgICdmYWNlJzogVmlld01vZGVsLmdldCgndW5pdHNfZmFjZXNfaWQnKSxcbiAgICAgICAgJ3VzZXInOiBnZXRQcm9maWxlUGFyYW1zKCdpZCcpLFxuICAgICAgICAnY2xpZW50JzogZ2V0UHJvZmlsZVBhcmFtcygnY2xpZW50JykuaWQsXG4gICAgICAgICdzZXRfZGF0ZXRpbWUnOiB0cnVlLFxuICAgICAgICAnZGF0ZXRpbWUnOiBpbWFnZV9uYW1lLFxuICAgICAgICAndHlwZSc6ICdib2FyZC9pbmNpZGVuY2VzJyxcbiAgICAgICAgJ21pbWUnOiAnaW1hZ2UvanBlZydcbiAgICB9O1xuICAgIGh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogbHMuZ2V0U3RyaW5nKCdhd3NpbWcnKSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShjb250ZW50KVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgbGV0IGltYWdlID0gSlNPTi5wYXJzZShyLmNvbnRlbnQpO1xuICAgICAgICBjb25zb2xlLmRpcihpbWFnZSk7XG4gICAgICAgIGlmIChpbWFnZS5lcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGF3cycpO1xuICAgICAgICAgICAgVmlld01vZGVsLnNldCgnaW1nX3N0JywgMyk7IC8vZXJyb3JcbiAgICAgICAgICAgIG1lc3NhZ2Uuc2hvd0Vycm9yKHsgJ3RpdGxlJzogJ0Vycm9yIGFsIGVudmlhciBsYSBpbWFnZW4nLCAnbWVzc2FnZSc6IGltYWdlLm1lc3NhZ2UgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb2sgYXdzJyk7XG4gICAgICAgICAgICBpbWFnZSA9IGltYWdlLmRhdGE7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhscy5nZXRTdHJpbmcoJ2F3cycpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGltYWdlLnVybCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWFnZS51cmwucmVwbGFjZSgnLmpwZWcnLCAnX20uanBlZycpKTtcbiAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltYWdlX3VybCcsIGxzLmdldFN0cmluZygnYXdzJykgKyBpbWFnZS51cmwucmVwbGFjZSgnLmpwZWcnLCAnX20uanBlZycpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFZpZXdNb2RlbC5nZXQoJ2ltYWdlX3VybCcpKTtcbiAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltZ19zdCcsIDEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlb212ZTogJyArIGltYWdlX25hbWUgKyAnLmpwZWcnKTtcbiAgICAgICAgICAgIHJlbW92ZUZpbGUoaW1hZ2VfbmFtZSArICcuanBlZycpO1xuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBWaWV3TW9kZWwuc2V0KCdpbWdfc3QnLCAzKTsgLy9lcnJvclxuICAgICAgICBtZXNzYWdlLnNob3dFcnJvcih7ICd0aXRsZSc6ICdFcnJvciBkZSBpbnRlcm5ldCBhbCBlbnZpYXIgbGEgaW1hZ2VuJywgJ21lc3NhZ2UnOiAnSW50ZW50ZSBudWV2YW1lbnRlLicgfSk7XG4gICAgfSk7XG59XG4vL1xuXG5leHBvcnRzLnRhcEFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoVmlld01vZGVsLmdldCgnaW1nX3N0JykgIT09IDEpIHtcbiAgICAgICAgbWVzc2FnZS5zaG93V2FybmluZyh7ICd0aXRsZSc6ICdFcnJvciBkZSBpbWFnZW4nLCAnbWVzc2FnZSc6IFZpZXdNb2RlbC5nZXQoJ2ltZ19zdCcpID09IDAgPyAnSW5ncmVzZSB1bmEgaW1hZ2VuJyA6ICdFcnJvciBkZSBpbWFnZW4nIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvc3RJbmNpZGVuY2UoJ1BPU1QnLCAndW5pdHMvZmFjZXMvaW5jaWRlbmNlcycsIHtcbiAgICAgICAgXCJ1bml0c19mYWNlc19pZFwiOiBWaWV3TW9kZWwuZ2V0KCd1bml0c19mYWNlc19pZCcpLFxuICAgICAgICBcImltYWdlX3VybFwiOiBWaWV3TW9kZWwuZ2V0KCdpbWFnZV91cmwnKS5yZXBsYWNlKGxzLmdldFN0cmluZygnYXdzJyksICcnKS5yZXBsYWNlKCdfbS5qcGVnJywgJy5qcGVnJyksXG4gICAgICAgICdvYnNlcnZhdGlvbic6IFZpZXdNb2RlbC5nZXQoJ29ic2VydmF0aW9uJykgPyBWaWV3TW9kZWwuZ2V0KCdvYnNlcnZhdGlvbicpIDogbnVsbFxuICAgIH0pO1xufVxuXG4vL1NlbmQgaW50YWxsYXRpb25zIGxvZ2ljXG5mdW5jdGlvbiBwb3N0SW5jaWRlbmNlKG1ldGhvZCwgdXJsLCBjb250ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJwb3N0SW5jaWRlbmNlKClcIik7XG4gICAgY29uc29sZS5sb2coJ21ldG9kaDogJyArIG1ldGhvZCk7XG4gICAgY29uc29sZS5kaXIoY29udGVudCk7XG4gICAgY29uc29sZS5sb2coJ2ltYWdlX3VybDogJyArIGNvbnRlbnQuaW1hZ2VfdXJsKTtcbiAgICB1cmwgPSBscy5nZXRTdHJpbmcoJ2Nvbm5lY3Rpb24nKSArIHVybDtcbiAgICBjb25zb2xlLmxvZygndXJsOiAnICsgdXJsKTtcbiAgICBodHRwLnJlcXVlc3QobHMucmVxdWVzdCh1cmwsIG1ldGhvZCwgY29udGVudCkpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgY29uc29sZS5kaXIocik7XG4gICAgICAgIGxldCBpdGVtID0gSlNPTi5wYXJzZShyLmNvbnRlbnQpO1xuICAgICAgICBpZiAoci5zdGF0dXNDb2RlID09IDIwMSkge1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW0uZGF0YTtcbiAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ3VwZGF0ZV9pbWFnZV91cmwnLCBmYWxzZSk7IC8vIGFsd2F5cyB1cGRhdGUgaW1hZ2VcbiAgICAgICAgICAgIGlmIChWaWV3TW9kZWwuZ2V0KCd1cGRhdGVfaW1hZ2VfdXJsJykpIHsgLy9lZGl0XG4gICAgICAgICAgICAgICAgVmlld01vZGVsLnNldCgndXBkYXRlX2ltYWdlX3VybCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwb3N0SW5jaWRlbmNlKCdQVVQnLCAndW5pdHMvZmFjZXMvJyArIFZpZXdNb2RlbC5nZXQoJ3VuaXRzX2ZhY2VzX2lkJyksIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlX3VybCc6IGNvbnRlbnQuaW1hZ2VfdXJsLFxuICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnZ2V0R3BzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2dvVG9JbmNpZGVuY2VzKGl0ZW0ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoci5zdGF0dXNDb2RlID09IDIwMikgeyAvL2NyZWF0ZWRcbiAgICAgICAgICAgICAgICAvL2dvVG9JbmNpZGVuY2VzKGl0ZW0ubWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc2hvd0Vycm9yKHsgJ3RpdGxlJzogJ0Vycm9yIGFsIGVudmlhcicsICdtZXNzYWdlJzogaXRlbS5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlLnNob3dFcnJvcih7ICd0aXRsZSc6ICdFcnJvciBkZSBpbnRlcm5ldCcgfSk7XG4gICAgfSk7XG59XG4vL1xuXG5cblxuZXhwb3J0cy5zZW5kQkcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgLy8gZmlsZSBwYXRoIGFuZCB1cmxcbiAgICB2YXIgZmlsZSA9IFwiL3NvbWUvbG9jYWwvZmlsZS9wYXRoL2FuZC9maWxlL25hbWUuanBnXCI7XG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9zb21lLnJlbW90ZS5zZXJ2aWNlLmNvbS9wYXRoXCI7XG4gICAgdmFyIG5hbWUgPSBmaWxlLnN1YnN0cihmaWxlLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuXG4gICAgLy8gdXBsb2FkIGNvbmZpZ3VyYXRpb25cbiAgICB2YXIgYmdodHRwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7XG4gICAgdmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcbiAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVXBsb2FkaW5nIFwiICsgbmFtZVxuICAgIH07XG59XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYW1lcmEtcGx1c1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FtZXJhLXBsdXNcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhbWVyYS1wbHVzL0NhbWVyYVBsdXNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhbWVyYS1wbHVzXCIpOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zOkNhbT1cXFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhbWVyYS1wbHVzXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG4gIDxQYWdlLmFjdGlvbkJhcj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiQ2FtZXJhIFBsdXNcXFwiIGljb249XFxcIlxcXCI+PC9BY3Rpb25CYXI+XFxuICA8L1BhZ2UuYWN0aW9uQmFyPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLGF1dG9cXFwiIGNsYXNzPVxcXCJiZ19yZWRcXFwiPlxcbiAgICAgIDxDYW06Q2FtZXJhUGx1cyBpZD1cXFwiY2FtUGx1c1xcXCIgaGVpZ2h0PVxcXCI0MDBcXFwiIHdpZHRoPVxcXCIzMDBcXFwiXFxuICAgICAgICBzYXZlVG9HYWxsZXJ5PVxcXCJ0cnVlXFxcIiAgICBcXG4gICAgICAgIHNob3dDYXB0dXJlSWNvbj1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBzaG93R2FsbGVyeUljb249XFxcImZhbHNlXFxcIlxcbiAgICAgICAgc2hvd1RvZ2dsZUljb249XFxcImZhbHNlXFxcIlxcbiAgICAgICAgc2hvd0ZsYXNoSWNvbj1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBkZWJ1Zz1cXFwidHJ1ZVxcXCI+IFxcbiAgICAgIDwvQ2FtOkNhbWVyYVBsdXM+XFxuICAgICAgPEJ1dHRvbiByb3c9XFxcIjFcXFwiIHRleHQ9XFxcImdldFBob3RvXFxcIiB0YXA9XFxcInRhcEltYWdlbkNhbWFyYVxcXCIgLz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZSgnZGF0YS9vYnNlcnZhYmxlJykuT2JzZXJ2YWJsZTtcbmNvbnN0IFZpZXdNb2RlbCA9IG5ldyBPYnNlcnZhYmxlKHtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBWaWV3TW9kZWw7OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21haW4tdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9