require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
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
	"./app.css": "./app.css",
	"./app.js": "./app.js",
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

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the \nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
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

/***/ "./common/dt.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.getDatedif = function (fecha) {
    try {
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
    return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
}
exports.addDays = function (fecha, cantidad) {
    var myDate = new Date(fecha);
    myDate.setDate(myDate.getDate() + cantidad);
    return myDate;
}
exports.getMonth = function (mes, getName) {
    const meses = { 0: "Enero", 1: "Febrero", 2: "Marzo", 3: "Abril", 4: "Mayo", 5: "Junio", 6: "Julio", 7: "Agosto", 8: "Septiembre", 9: "Octubre", 10: "Noviembre", 11: "Diciembre" };
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
    fecha = fecha.replace(/:/g, "%3A");
    fecha = fecha.replace(" ", "%20");
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
const camera = __webpack_require__("../node_modules/@nstudio/nativescript-camera-plus/camera-plus.js");
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

    camera.requestCameraPermissions().then(() => {
        if (!camera) {
            camera = new CameraPlus();
        }
        camera.takePicture({ saveToGallery: true });
    });
}

function saveResizeImage(imageAsset) {
    source.fromAsset(imageAsset).then((source) => { //fromAsset=bits
        //console.log(`Size: ${source.width}x${source.height}`);
        const bmp = BitmapFactory.create(source.width, source.height);
        const image_name = dt.formatDateTimeMySql(new Date());
        const image_url = ViewModel.get('path') + "/" + image_name + '.jpeg';
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

module.exports = "<!-- <Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"My App\" icon=\"\"></ActionBar>\n    <StackLayout class=\"p-20\">\n        <Label text=\"Tap the button\" class=\"h1 text-center\"/>\n        <Button text=\"TAP\" tap=\"tapImagenCamara\" class=\"-primary\"/>\n        <Label text=\"{{ message }}\" class=\"h2 text-center\" textWrap=\"true\"/>\n    </StackLayout>\n</Page>\n -->\n<Page xmlns:Cam=\"@nstudio/nativescript-camera-plus\" navigatingTo=\"onNavigatingTo\">\n  <Page.actionBar>\n    <ActionBar title=\"Camera Plus Demo\" icon=\"\"></ActionBar>\n  </Page.actionBar>\n    <StackLayout>\n      <Cam:CameraPlus id=\"camPlus\"\n        saveToGallery=\"true\"      \n        showCaptureIcon=\"true\"\n        showGalleryIcon=\"true\"\n        showToggleIcon=\"true\"       \n        showFlashIcon=\"true\"\n        debug=\"true\">\n      </Cam:CameraPlus>\n    </StackLayout>\n</Page>"; 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9kdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vZW5jb2RlLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9scy5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vbmF2LmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vdXJsLmpzIiwid2VicGFjazovLy8uL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UueG1sIiwid2VicGFjazovLy8uL21haW4tdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKOzs7Ozs7OztBQ2xDQSxpRTtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJC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ckQsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNULHNDQUFzQztBQUN0QztBQUNBLGFBQWE7QUFDYixtQ0FBbUMsc0RBQXNEO0FBQ3pGO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCLCtCQUErQjtBQUMxRCxLQUFLO0FBQ0w7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBOEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEUsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDN1FBLHFIQUF1RSxRQUFRLG1CQUFPLENBQUMsa0VBQW1DLEVBQUUsRUFBRTtBQUM5SCxrRkFBa0YsUUFBUSxtQkFBTyxDQUFDLGtFQUFtQyxFQUFFLEVBQUU7O0FBRXpJLGlYQUFpWCxXQUFXLGlsQjtBQUM1WCxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiwwQ0FBMEM7QUFDckUsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDVkEsaUVBQW1CLG1CQUFPLENBQUMsa0VBQWlCO0FBQzVDO0FBQ0EsQ0FBQztBQUNELDRCO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQStDO0FBQzFFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vY29tbW9uL2R0LmpzXCI6IFwiLi9jb21tb24vZHQuanNcIixcblx0XCIuL2NvbW1vbi9lbmNvZGUuanNcIjogXCIuL2NvbW1vbi9lbmNvZGUuanNcIixcblx0XCIuL2NvbW1vbi9scy5qc1wiOiBcIi4vY29tbW9uL2xzLmpzXCIsXG5cdFwiLi9jb21tb24vbWVzc2FnZS5qc1wiOiBcIi4vY29tbW9uL21lc3NhZ2UuanNcIixcblx0XCIuL2NvbW1vbi9uYXYuanNcIjogXCIuL2NvbW1vbi9uYXYuanNcIixcblx0XCIuL2NvbW1vbi9wbGF0Zm9ybS5qc1wiOiBcIi4vY29tbW9uL3BsYXRmb3JtLmpzXCIsXG5cdFwiLi9jb21tb24vdXJsLmpzXCI6IFwiLi9jb21tb24vdXJsLmpzXCIsXG5cdFwiLi9tYWluLXBhZ2UuanNcIjogXCIuL21haW4tcGFnZS5qc1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4vbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCI6IFwiLi9tYWluLXZpZXctbW9kZWwuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcIm1haW4tcGFnZVxcXCI+XFxuPC9GcmFtZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAtcm9vdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9hcHAtcm9vdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBcXG5OYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5UaGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgQnV0dG9ucyB0aGF0IGhhdmUgdGhlXFxuXFxcIi1wcmltYXJ5XFxcIiBjbGFzcyBtb2RpZmllci5cXG5cIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vYXBwLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uQ2hlY2tQbGF0Zm9ybSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgICAgICBpZiAoYXBwbGljYXRpb25DaGVja1BsYXRmb3JtLmFuZHJvaWQgJiYgIWdsb2JhbFtcIl9fc25hcHNob3RcIl0pIHtcbiAgICAgICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xucmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgICAgIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MtcmVndWxhclwiKSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGhtclVwZGF0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG1yXCIpLmhtclVwZGF0ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBMaXZlU3luY1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGhvdCB1cGRhdGVzIGFyZSBhcHBsaWVkLCBhc2sgdGhlIG1vZHVsZXMgdG8gYXBwbHkgdGhlIGNoYW5nZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyh7IHR5cGUsIHBhdGggfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gaW5pdGlhbCBhcHAgc3RhcnRcbiAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIn4vXCIsIHRydWUsIC8oPzwhXFxiQXBwX1Jlc291cmNlc1xcYi4qKSg/PCFcXC5cXC9cXGJ0ZXN0c1xcYlxcLy4qPylcXC4oeG1sfGNzc3xqc3woPzwhXFwuZFxcLil0c3woPzwhXFxiX1tcXHctXSpcXC4pc2NzcykkLyk7XG4gICAgICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoY29udGV4dC5pZCwgKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJITVI6IEFjY2VwdCBtb2R1bGUgJ1wiICsgY29udGV4dC5pZCArIFwiJyBmcm9tICdcIiArIG1vZHVsZS5pZCArIFwiJ1wiKTsgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcbiAgICAgICAgLypcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5qcyBmaWxlIGlzIHRoZSBlbnRyeSBwb2ludCB0byB5b3VyIGFwcGxpY2F0aW9uLlxuWW91IGNhbiB1c2UgdGhpcyBmaWxlIHRvIHBlcmZvcm0gYXBwLWxldmVsIGluaXRpYWxpemF0aW9uLCBidXQgdGhlIHByaW1hcnlcbnB1cnBvc2Ugb2YgdGhlIGZpbGUgaXMgdG8gcGFzcyBjb250cm9sIHRvIHRoZSBhcHDigJlzIGZpcnN0IG1vZHVsZS5cbiovXG5cbmNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG5cbmFwcGxpY2F0aW9uLnJ1bih7IG1vZHVsZU5hbWU6IFwiYXBwLXJvb3RcIiB9KTtcblxuLypcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuYmUgZXhlY3V0ZWQgb24gaU9TLlxuKi9cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9hcHAuanNcIiB9KTtcbiAgICB9KTtcbn0gXG4gICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAiLCJleHBvcnRzLmdldERhdGVkaWYgPSBmdW5jdGlvbiAoZmVjaGEpIHtcbiAgICB0cnkge1xuICAgICAgICBmZWNoYSA9IG5ldyBEYXRlKGZlY2hhKTtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3Qgc2VnID0gKG5vdyAtIGZlY2hhKSAvIDEwMDA7XG5cbiAgICAgICAgY29uc3QgZGlhcyA9IE1hdGguZmxvb3Ioc2VnIC8gNjAgLyA2MCAvIDI0KTtcbiAgICAgICAgY29uc3QgaG9yYXMgPSBNYXRoLnJvdW5kKHNlZyAvIDYwIC8gNjApICUgMjQ7XG4gICAgICAgIGNvbnN0IG1pbnV0b3MgPSBNYXRoLnJvdW5kKHNlZyAvIDYwKSAlIDYwO1xuICAgICAgICBjb25zdCBzZWd1bmRvcyA9IE1hdGgucm91bmQoc2VnKSAlIDYwO1xuXG4gICAgICAgIGNvbnN0IGQgPSBkaWFzID4gMCA/IGRpYXMgKyAnIGTDrWFzICcgOiAnJztcbiAgICAgICAgY29uc3QgaCA9IGhvcmFzID4gMCA/IGhvcmFzICsgJyBob3JhcyAnIDogJyc7XG4gICAgICAgIGNvbnN0IG0gPSBtaW51dG9zID4gMCA/IG1pbnV0b3MgKyAnIG1pbiAnIDogJyc7XG4gICAgICAgIGNvbnN0IHMgPSBzZWd1bmRvcyA+IDAgPyBzZWd1bmRvcyArICcgc2VnJyA6ICcxIHNlZyc7XG5cbiAgICAgICAgY29uc3QgZGlmZiA9IGRpYXMgPiAxID8gZCA6IChob3JhcyA+IDEgPyBoIDogKG1pbnV0b3MgPiAxID8gbSA6IHMpKTtcbiAgICAgICAgcmV0dXJuICdoYWNlICcgKyBkaWZmO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbmV4cG9ydHMuZm9ybWF0RGF0ZVRpbWVNeVNxbCA9IGZ1bmN0aW9uIChmZWNoYSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmZWNoYSksXG4gICAgICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCksXG4gICAgICAgIGZvcm1hdGVkTW9udGggPSAobW9udGgubGVuZ3RoID09PSAxKSA/ICgnMCcgKyBtb250aCkgOiBtb250aCxcbiAgICAgICAgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSxcbiAgICAgICAgZm9ybWF0ZWREYXkgPSAoZGF5Lmxlbmd0aCA9PT0gMSkgPyAoJzAnICsgZGF5KSA6IGRheSxcbiAgICAgICAgaG91ciA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLFxuICAgICAgICBmb3JtYXRlZEhvdXIgPSAoaG91ci5sZW5ndGggPT09IDEpID8gKCcwJyArIGhvdXIpIDogaG91cixcbiAgICAgICAgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKSxcbiAgICAgICAgZm9ybWF0ZWRNaW51dGUgPSAobWludXRlLmxlbmd0aCA9PT0gMSkgPyAoJzAnICsgbWludXRlKSA6IG1pbnV0ZSxcbiAgICAgICAgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKSxcbiAgICAgICAgZm9ybWF0ZWRTZWNvbmQgPSAoc2Vjb25kLmxlbmd0aCA9PT0gMSkgPyAoJzAnICsgc2Vjb25kKSA6IHNlY29uZDtcbiAgICByZXR1cm4geWVhciArICctJyArIGZvcm1hdGVkTW9udGggKyAnLScgKyBmb3JtYXRlZERheSArICcgJyArIGZvcm1hdGVkSG91ciArICc6JyArIGZvcm1hdGVkTWludXRlICsgJzonICsgZm9ybWF0ZWRTZWNvbmQ7XG59O1xuZXhwb3J0cy5mb3JtYXREYXRlTXlTcWwgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBjb25zdCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IGQgPSBkYXRlLmdldERhdGUoKTtcbiAgICByZXR1cm4geSArICctJyArIChtIDwgMTAgPyAnMCcgKyBtIDogbSkgKyAnLScgKyAoZCA8IDEwID8gJzAnICsgZCA6IGQpO1xufVxuZXhwb3J0cy5mb3JtYXREYXRlID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgY29uc3QgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCBkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgcmV0dXJuIHkgKyAnLScgKyAobSA8IDEwID8gJzAnICsgbSA6IG0pICsgJy0nICsgKGQgPCAxMCA/ICcwJyArIGQgOiBkKTtcbn1cbmV4cG9ydHMuYWRkRGF5cyA9IGZ1bmN0aW9uIChmZWNoYSwgY2FudGlkYWQpIHtcbiAgICB2YXIgbXlEYXRlID0gbmV3IERhdGUoZmVjaGEpO1xuICAgIG15RGF0ZS5zZXREYXRlKG15RGF0ZS5nZXREYXRlKCkgKyBjYW50aWRhZCk7XG4gICAgcmV0dXJuIG15RGF0ZTtcbn1cbmV4cG9ydHMuZ2V0TW9udGggPSBmdW5jdGlvbiAobWVzLCBnZXROYW1lKSB7XG4gICAgY29uc3QgbWVzZXMgPSB7IDA6IFwiRW5lcm9cIiwgMTogXCJGZWJyZXJvXCIsIDI6IFwiTWFyem9cIiwgMzogXCJBYnJpbFwiLCA0OiBcIk1heW9cIiwgNTogXCJKdW5pb1wiLCA2OiBcIkp1bGlvXCIsIDc6IFwiQWdvc3RvXCIsIDg6IFwiU2VwdGllbWJyZVwiLCA5OiBcIk9jdHVicmVcIiwgMTA6IFwiTm92aWVtYnJlXCIsIDExOiBcIkRpY2llbWJyZVwiIH07XG4gICAgaWYgKGdldE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG1lc2VzW21lc107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBtZXNlcykge1xuICAgICAgICAgICAgaWYgKG1lc2VzW2ldID09IG1lcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5mb3JtYXREYXRlVGltZVVybCA9IGZ1bmN0aW9uIChmZWNoYSkge1xuICAgIGZlY2hhID0gZmVjaGEucmVwbGFjZSgvOi9nLCBcIiUzQVwiKTtcbiAgICBmZWNoYSA9IGZlY2hhLnJlcGxhY2UoXCIgXCIsIFwiJTIwXCIpO1xuICAgIHJldHVybiBmZWNoYTtcbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vY29tbW9uL2R0LmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vY29tbW9uL2R0LmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIi8vIGZ1bmNpb24gZGUgYXl1ZGEgcGFyYSBsYSBmdW5jaW9uIG9iajJ1cmlcbmZ1bmN0aW9uIGpvaW4ocGF0aCwga2V5KSB7XG4gICAgcmV0dXJuIHBhdGggIT0gbnVsbCA/IHBhdGggKyBcIltcIiArIGtleSArIFwiXVwiIDoga2V5O1xufVxuXG4vKipcbiAqIEZ1bmNpb24gcXVlIGNvbnZpZXJ0ZSB1biBvYmpldG98YXJyYXkgZW4gdW5hIGNhZGVuYSB1cmkgY29kaWZpY2FkYS5cbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBvYmpldG8gcXVlIHNlcsOhIGNvbnZlcnRpZG8gYSB1bmEgdXJpXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGVuY29kZUtleSB2YWxvciBxdWUgaW5kaWNhIHNpIGRlYmUgY29kaWZpY2FyIGxvcyBrZXlzLCBwb3IgZGVmZWN0byBlcyBmYWxzZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIHBhcmFtZXRybyBvcGNpb25hbCB1c2FkbyBlbiBsYSByZWN1cnNpdmlkYWQgW3VzYWRvIGVuIGxhIHJlY3Vyc2l2aWRhZF0uXG4gKiBAcGFyYW0ge2FycmF5fG9iamVjdH0gcmVzdWx0IG9iamV0byBwcmluY2lwYWwgZG9uZGUgc2UgZ3VhcmRhcsOhbiB0b2RvcyBsb3MgZGF0b3MgW3VzYWRvIGVuIGxhIHJlY3Vyc2l2aWRhZF0uXG4gKi9cbmZ1bmN0aW9uIG9iajJ1cmkob2JqLCBlbmNvZGVLZXksIHBhdGgsIHJlc3VsdCkge1xuXG4gICAgZW5jb2RlS2V5ID0gZW5jb2RlS2V5IHx8IGZhbHNlO1xuXG4gICAgLy8gU2kgZXMgbGEgcHJpbWVyZXJhIGxsYW1hZGEgb3NlYSBjdWFuZG8gbm8gZXMgdW4gbGxhbWFkbyBkZSBsYSByZWN1cnNpdmlkYWRcbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB7fTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuXG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuXG4gICAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgICBpZiAodmFsID09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICAgIHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJbb2JqZWN0IEFycmF5XVwiOlxuICAgICAgICAgICAgY2FzZSBcIltvYmplY3QgT2JqZWN0XVwiOlxuICAgICAgICAgICAgICAgIG9iajJ1cmkodmFsLCBlbmNvZGVLZXksIGpvaW4ocGF0aCwga2V5KSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0W2pvaW4ocGF0aCwga2V5KV0gPSBlbmNvZGVLZXkgPyB2YWwgOiBlbmNvZGVVUklDb21wb25lbnQodmFsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhyZXN1bHQpLm1hcChmdW5jdGlvbiAocGFpciwgaSkge1xuICAgICAgICByZXR1cm4gKGVuY29kZUtleSA/IHBhaXIubWFwKGVuY29kZVVSSUNvbXBvbmVudCkgOiBwYWlyKS5qb2luKCc9Jyk7XG4gICAgfSkuam9pbignJicpO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAob2JqLCBlbmNvZGVLZXksIHBhdGgsIHJlc3VsdCkge1xuICAgIHJldHVybiBvYmoydXJpKG9iaiwgZW5jb2RlS2V5LCBwYXRoLCByZXN1bHQpO1xufVxuZXhwb3J0cy5nZXRPZmZzZXQgPSBmdW5jdGlvbiAob2Zmc2V0LGxhc3RfcGFnZSkge1xuICAgIGlmIChsYXN0X3BhZ2UpIHtcbiAgICAgICAgaWYgKG9mZnNldCA8IGxhc3RfcGFnZSkge1xuICAgICAgICAgICAgb2Zmc2V0Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQgPSAxO1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0O1xufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21tb24vZW5jb2RlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vY29tbW9uL2VuY29kZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuZXhwb3J0cy5zZXRTdHJpbmcgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhuYW1lLCB2YWx1ZSk7XHJcbn1cclxuZXhwb3J0cy5nZXRTdHJpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgcmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhuYW1lKTtcclxufVxyXG5leHBvcnRzLnNldEpzb24gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhuYW1lLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0cy5nZXRKc29uID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIGNvbnN0IGxpc3RWaWV3ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKG5hbWUpO1xyXG4gICAgcmV0dXJuIGxpc3RWaWV3ID8gSlNPTi5wYXJzZShsaXN0VmlldykgOiBudWxsO1xyXG59XHJcbmV4cG9ydHMuc2V0TnVtYmVyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIobmFtZSwgdmFsdWUpO1xyXG59XHJcbmV4cG9ydHMuZ2V0TnVtYmVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHJldHVybiBhcHBTZXR0aW5ncy5nZXROdW1iZXIobmFtZSk7XHJcbn1cclxuZXhwb3J0cy5zZXRCb29sID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBhcHBTZXR0aW5ncy5zZXRCb29sZWFuKG5hbWUsIHZhbHVlKTtcclxufVxyXG5leHBvcnRzLmdldEJvb2wgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgcmV0dXJuIGFwcFNldHRpbmdzLmdldEJvb2xlYW4obmFtZSk7XHJcbn1cclxuZXhwb3J0cy5yZW1vdmUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgcmV0dXJuIGFwcFNldHRpbmdzLnJlbW92ZShuYW1lKTtcclxufVxyXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGFwcFNldHRpbmdzLmNsZWFyKCk7XHJcbn1cclxuZXhwb3J0cy5nZXRPYmplY3RQYXJhbXMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lKSB7XHJcbiAgICBjb25zdCBsaXN0VmlldyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhvYmplY3QpO1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IGxpc3RWaWV3ID8gSlNPTi5wYXJzZShsaXN0VmlldykgOiBudWxsO1xyXG4gICAgaWYgKHByb2ZpbGUpIHtcclxuICAgICAgICByZXR1cm4gcHJvZmlsZVtuYW1lXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5yZXF1ZXN0ID0gZnVuY3Rpb24gKHVybCwgbWV0aG9kLCBjb250ZW50KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdlcycsXHJcbiAgICAgICAgICAgICd4LWRldmljZS10eXBlJzogMSxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ3Rva2VuJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpXHJcbiAgICB9XHJcbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vY29tbW9uL2xzLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vY29tbW9uL2xzLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IEZlZWRiYWNrUGx1Z2luID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWZlZWRiYWNrJyk7XG5jb25zdCBmZWVkYmFjayA9IG5ldyBGZWVkYmFja1BsdWdpbi5GZWVkYmFjaygpO1xuXG5leHBvcnRzLnNob3dTdWNjZXNzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICBmZWVkYmFjay5zdWNjZXNzKGJvZHkpO1xufVxuZXhwb3J0cy5zaG93V2FybmluZyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgZmVlZGJhY2sud2FybmluZyhib2R5KTtcbn1cbmV4cG9ydHMuc2hvd0Vycm9yID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAvL2ZlZWRiYWNrLnNob3coYm9keSk7XG4gICAgZmVlZGJhY2suZXJyb3IoYm9keSk7XG59XG5leHBvcnRzLnNob3dJbmZvID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICBmZWVkYmFjay5pbmZvKGJvZHkpO1xufVxuZXhwb3J0cy5oaWRlRmVlZGJhY2sgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgIGZlZWRiYWNrLmhpZGUoYm9keSk7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbW1vbi9tZXNzYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vY29tbW9uL21lc3NhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgZnJhbWVNb2R1bGUgPSByZXF1aXJlKCd1aS9mcmFtZScpO1xyXG5leHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHRvcG1vc3QgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCk7XHJcbiAgICB0b3Btb3N0LmdvQmFjaygpO1xyXG59XHJcbmZ1bmN0aW9uIGdvVG9GdW5jKHBhZ2luYSwgaGlzdG9yeSwgaXRlbSkge1xyXG4gICAgY29uc29sZS5sb2coJ2dvdG86ICcgKyAnY29tcG9uZW50cy8nICsgcGFnaW5hKTtcclxuICAgIGNvbnN0IHRvcG1vc3QgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCk7XHJcbiAgICB0b3Btb3N0Lm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiAnLi9jb21wb25lbnRzLycgKyBwYWdpbmEsXHJcbiAgICAgICAgY2xlYXJIaXN0b3J5OiBoaXN0b3J5LFxyXG4gICAgICAgIGNvbnRleHQ6IGl0ZW1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ29UbyA9IGZ1bmN0aW9uIChwYWdpbmEsIGhpc3RvcnksIGl0ZW0pIHtcclxuICAgIGdvVG9GdW5jKHBhZ2luYSwgaGlzdG9yeSwgaXRlbSk7XHJcbn1cclxuZXhwb3J0cy5nZXRDdXJyZW50UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG15UGFnZSA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5jdXJyZW50UGFnZTtcclxuICAgIHJldHVybiBteVBhZ2UuaWQ7XHJcbn1cclxuZXhwb3J0cy5lcnJvciA9IGZ1bmN0aW9uIChjb2RlKSB7XHJcbiAgICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgICAgICBjYXNlIDQwMTpcclxuICAgICAgICAgICAgZ29Ub0Z1bmMoJ2xvZ2luL2xvZ2luJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbW1vbi9uYXYuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9jb21tb24vbmF2LmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IGFwcCA9IHJlcXVpcmUoJ2FwcGxpY2F0aW9uJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKFwicGxhdGZvcm1cIik7XG5leHBvcnRzLmdldFBsYXRmb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChhcHAuYW5kcm9pZCkge1xuICAgICAgICByZXR1cm4gJ2FuZHJvaWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnaW9zJztcbiAgICB9XG59XG5leHBvcnRzLmdldFNjcmVlbkRpbWVuc2lvbnMgPSBmdW5jdGlvbiAodGlwbykge1xuICAgIHN3aXRjaCAodGlwbykge1xuICAgICAgICBjYXNlICdoZWlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIChwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAocGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzKTtcbiAgICB9XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbW1vbi9wbGF0Zm9ybS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi9wbGF0Zm9ybS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJleHBvcnRzLmltZ1NpemUgPSBmdW5jdGlvbiAodXJsLCBzaXplKSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvX3hzfF9zfF9tfF9sfF94bC8sICcnKTtcbiAgICAgICAgY29uc3QgbGFzdCA9IHVybC5sYXN0SW5kZXhPZignLicpOyBcbiAgICAgICAgdXJsID0gW3VybC5zdWJzdHJpbmcoMCwgbGFzdCksIHNpemUsIHVybC5zdWJzdHJpbmcobGFzdCwgdXJsLmxlbmd0aCldLmpvaW4oJycpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21tb24vdXJsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vY29tbW9uL3VybC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBWaWV3TW9kZWwgPSByZXF1aXJlKCcuL21haW4tdmlldy1tb2RlbCcpO1xuXG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgY2FtZXJhID0gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhbWVyYS1wbHVzJyk7XG5jb25zdCBCaXRtYXBGYWN0b3J5ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iaXRtYXAtZmFjdG9yeVwiKTtcbmNvbnN0IGZpbGVTeXN0ZW1Nb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtJyk7XG5jb25zdCBpbWFnZVNvdXJjZU1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlJyk7XG5cbmNvbnN0IGxzID0gcmVxdWlyZSgnfi9jb21tb24vbHMnKTtcbmNvbnN0IGR0ID0gcmVxdWlyZSgnfi9jb21tb24vZHQnKTtcbmNvbnN0IG1lc3NhZ2UgPSByZXF1aXJlKCd+L2NvbW1vbi9tZXNzYWdlJyk7XG5cbmxldCBwYWdlO1xuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIGlmIChscy5nZXRCb29sKCdjbGVhcicpKSB7XG4gICAgICAgIGxzLnNldEJvb2woJ2NsZWFyJywgZmFsc2UpO1xuICAgICAgICBWaWV3TW9kZWwuc2V0KCdpbWFnZV91cmwnLCB1bmRlZmluZWQpO1xuICAgICAgICBWaWV3TW9kZWwuc2V0KCdpbWdfc3QnLCAwKTtcbiAgICAgICAgc2V0UGF0aCgpO1xuICAgICAgICBzZXRTYXZlSW1hZ2VzKCk7XG4gICAgfVxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBWaWV3TW9kZWw7XG59XG5mdW5jdGlvbiBzZXRQYXRoKCkge1xuICAgIGxldCBmb2xkZXJEZXN0ID0gZmlsZVN5c3RlbU1vZHVsZS5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xuICAgIGlmIChscy5nZXRTdHJpbmcoJ3BsYXRmb3JtJykgPT0gJ2lvcycpIHtcbiAgICAgICAgZm9sZGVyRGVzdCA9IGZpbGVTeXN0ZW1Nb2R1bGUua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgIH1cbiAgICBmb2xkZXJEZXN0ID0gZmlsZVN5c3RlbU1vZHVsZS5wYXRoLmpvaW4oZm9sZGVyRGVzdC5wYXRoLCBcInRtcC92cG9cIik7XG4gICAgY29uc3QgZm9sZGVyID0gZmlsZVN5c3RlbU1vZHVsZS5Gb2xkZXIuZnJvbVBhdGgoZm9sZGVyRGVzdCk7XG4gICAgY29uc29sZS5sb2coZm9sZGVyLnBhdGgpO1xuICAgIFZpZXdNb2RlbC5zZXQoJ3BhdGgnLCBmb2xkZXIucGF0aCk7XG4gICAgLy9nZXRGaWxlc0Zyb21QYXRoKGZvbGRlcik7XG4gICAgLy9yZW1vdmVGaWxlc0Zyb21QYXRoKGZvbGRlcik7XG59XG5cbmZ1bmN0aW9uIGdldEZpbGVzRnJvbVBhdGgoZm9sZGVyKSB7XG4gICAgZm9sZGVyLmdldEVudGl0aWVzKClcbiAgICAgICAgLnRoZW4oKGVudGl0aWVzKSA9PiB7XG4gICAgICAgICAgICAvLyBlbnRpdGllcyBpcyBhcnJheSB3aXRoIHRoZSBkb2N1bWVudCdzIGZpbGVzIGFuZCBmb2xkZXJzLlxuICAgICAgICAgICAgZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRpdHkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogZW50aXR5LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZDogZW50aXR5Lmxhc3RNb2RpZmllZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgLy8gRmFpbGVkIHRvIG9idGFpbiBmb2xkZXIncyBjb250ZW50cy5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5zdGFjayk7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGaWxlc0Zyb21QYXRoKGZvbGRlcikge1xuICAgIGZvbGRlci5jbGVhcigpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIFN1Y2Nlc3NmdWxseSBjbGVhcmVkIHRoZSBmb2xkZXIuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdE1lc3NhZ2VcIiwgXCJGb2xkZXIgc3VjY2Vzc2Z1bGx5IGNsZWFyZWQhXCIpO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUuc3RhY2spO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0U2F2ZUltYWdlcygpIHtcbiAgICBpZiAobHMuZ2V0Qm9vbCgnc2F2ZUltYWdlcycpKSB7XG4gICAgICAgIFZpZXdNb2RlbC5zZXQoJ3NhdmVJbWFnZXMnLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBWaWV3TW9kZWwuc2V0KCdzYXZlSW1hZ2VzJywgZmFsc2UpO1xuICAgIH1cbn1cbi8vbG9naWMgaW1hZ2UgYW5kIGNhbWVyYVxuZXhwb3J0cy50YXBDbGVhckltYWdlID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBhcmdzLm9iamVjdC5jbGFzc05hbWUgPSBhcmdzLm9iamVjdC5jbGFzc05hbWUucmVwbGFjZSgnIHNjYWxlX2luJywgJycpO1xuICAgIGFyZ3Mub2JqZWN0LmNsYXNzTmFtZSArPSAnIHNjYWxlX2luJztcbiAgICBWaWV3TW9kZWwuc2V0KCdpbWFnZScsIHVuZGVmaW5lZCk7XG59XG5cbmNvbnN0IHNvdXJjZSA9IG5ldyBpbWFnZVNvdXJjZU1vZHVsZS5JbWFnZVNvdXJjZSgpO1xuZXhwb3J0cy50YXBJbWFnZW5DYW1hcmEgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9jb25zdCBvcHRpb25zID0geyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlLCBzYXZlVG9HYWxsZXJ5OiBWaWV3TW9kZWwuZ2V0KCdzYXZlSW1hZ2VzJykgfTtcbiAgICAvLyBjYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucykuXG4gICAgLy8gICAgIHRoZW4oKGltYWdlQXNzZXQpID0+IHtcbiAgICAvLyAgICAgICAgIGltYWdlQXNzZXQub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgLy8gICAgICAgICBzYXZlUmVzaXplSW1hZ2UoaW1hZ2VBc3NldCk7XG4gICAgLy8gICAgIH0sICgpID0+IHsgfSk7XG5cbiAgICBjYW1lcmEucmVxdWVzdENhbWVyYVBlcm1pc3Npb25zKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmICghY2FtZXJhKSB7XG4gICAgICAgICAgICBjYW1lcmEgPSBuZXcgQ2FtZXJhUGx1cygpO1xuICAgICAgICB9XG4gICAgICAgIGNhbWVyYS50YWtlUGljdHVyZSh7IHNhdmVUb0dhbGxlcnk6IHRydWUgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVSZXNpemVJbWFnZShpbWFnZUFzc2V0KSB7XG4gICAgc291cmNlLmZyb21Bc3NldChpbWFnZUFzc2V0KS50aGVuKChzb3VyY2UpID0+IHsgLy9mcm9tQXNzZXQ9Yml0c1xuICAgICAgICAvL2NvbnNvbGUubG9nKGBTaXplOiAke3NvdXJjZS53aWR0aH14JHtzb3VyY2UuaGVpZ2h0fWApO1xuICAgICAgICBjb25zdCBibXAgPSBCaXRtYXBGYWN0b3J5LmNyZWF0ZShzb3VyY2Uud2lkdGgsIHNvdXJjZS5oZWlnaHQpO1xuICAgICAgICBjb25zdCBpbWFnZV9uYW1lID0gZHQuZm9ybWF0RGF0ZVRpbWVNeVNxbChuZXcgRGF0ZSgpKTtcbiAgICAgICAgY29uc3QgaW1hZ2VfdXJsID0gVmlld01vZGVsLmdldCgncGF0aCcpICsgXCIvXCIgKyBpbWFnZV9uYW1lICsgJy5qcGVnJztcbiAgICAgICAgYm1wLmRpc3Bvc2UoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgIGIuaW5zZXJ0KHNvdXJjZSk7XG4gICAgICAgICAgICAvLyAjIyBNYXggZGltZW5zaW9uLiBSZXNwZWN0cyBhc3BlY3QgcmF0aW8uXG4gICAgICAgICAgICBsZXQgYjI7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGxzLmdldFN0cmluZygncGxhdGZvcm0nKSk7XG4gICAgICAgICAgICBpZiAobHMuZ2V0U3RyaW5nKCdwbGF0Zm9ybScpID09ICdhbmRyb2lkJykge1xuICAgICAgICAgICAgICAgIGIyID0gYi5yZXNpemVNYXgoODAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYjIgPSBiLnJlc2l6ZU1heCg0MDApOyAvLyBpb3MgKiAyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0aHVtYl9pbWFnZSA9IGIyLnRvSW1hZ2VTb3VyY2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHNhdmVkID0gdGh1bWJfaW1hZ2Uuc2F2ZVRvRmlsZShcbiAgICAgICAgICAgICAgICBpbWFnZV91cmwsXG4gICAgICAgICAgICAgICAgJ2pwZWcnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHNhdmVkKSB7XG4gICAgICAgICAgICAgICAgVmlld01vZGVsLnNldCgnaW1hZ2VfdXJsJywgaW1hZ2VfdXJsKTtcbiAgICAgICAgICAgICAgICBWaWV3TW9kZWwuc2V0KCdpbWdfc3QnLCAyKTsgLy8yPWxvYWRpbmdcbiAgICAgICAgICAgICAgICBwb3N0SW1hZ2VBV1MoaW1hZ2VfdXJsLCBpbWFnZV9uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZpbGUoaW1hZ2VfbmFtZSkge1xuICAgIGxldCBjdXJyZW50QXBwID0gZmlsZVN5c3RlbU1vZHVsZS5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xuICAgIGlmIChscy5nZXRTdHJpbmcoJ3BsYXRmb3JtJykgPT0gJ2lvcycpIHtcbiAgICAgICAgY3VycmVudEFwcCA9IGZpbGVTeXN0ZW1Nb2R1bGUua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgIH1cbiAgICBjb25zdCBwYXRoID0gZmlsZVN5c3RlbU1vZHVsZS5wYXRoLmpvaW4oY3VycmVudEFwcC5wYXRoLCAndG1wL3Zwby8nICsgaW1hZ2VfbmFtZSk7XG4gICAgLy9jb25zb2xlLmxvZyhwYXRoKTtcbiAgICBjb25zdCBmaWxlID0gZmlsZVN5c3RlbU1vZHVsZS5GaWxlLmZyb21QYXRoKHBhdGgpO1xuICAgIGZpbGUucmVtb3ZlKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRNZXNzYWdlXCIsIFwiRmlsZSBzdWNjZXNzZnVsbHkgZGVsZXRlZCFcIik7XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnN0YWNrKTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2ZpbGVQYXJhbXMocGFyYW0pIHtcbiAgICBjb25zdCBwcm9maWxlID0gbHMuZ2V0SnNvbigncHJvZmlsZScpO1xuICAgIGlmIChwcm9maWxlKSB7XG4gICAgICAgIHJldHVybiBwcm9maWxlW3BhcmFtXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcG9zdEltYWdlQVdTKGltYWdlX3VybCwgaW1hZ2VfbmFtZSkge1xuICAgIGNvbnN0IGltZyA9IGltYWdlU291cmNlTW9kdWxlLmZyb21GaWxlKGltYWdlX3VybCk7XG4gICAgY29uc29sZS5sb2coaW1hZ2VfdXJsKTtcbiAgICBjb25zdCBjb250ZW50ID0ge1xuICAgICAgICAnaW1hZ2UnOiBpbWcudG9CYXNlNjRTdHJpbmcoXCJwbmdcIiksXG4gICAgICAgICdmYWNlJzogVmlld01vZGVsLmdldCgndW5pdHNfZmFjZXNfaWQnKSxcbiAgICAgICAgJ3VzZXInOiBnZXRQcm9maWxlUGFyYW1zKCdpZCcpLFxuICAgICAgICAnY2xpZW50JzogZ2V0UHJvZmlsZVBhcmFtcygnY2xpZW50JykuaWQsXG4gICAgICAgICdzZXRfZGF0ZXRpbWUnOiB0cnVlLFxuICAgICAgICAnZGF0ZXRpbWUnOiBpbWFnZV9uYW1lLFxuICAgICAgICAndHlwZSc6ICdib2FyZC9pbmNpZGVuY2VzJyxcbiAgICAgICAgJ21pbWUnOiAnaW1hZ2UvanBlZydcbiAgICB9O1xuICAgIGh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogbHMuZ2V0U3RyaW5nKCdhd3NpbWcnKSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShjb250ZW50KVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgbGV0IGltYWdlID0gSlNPTi5wYXJzZShyLmNvbnRlbnQpO1xuICAgICAgICBjb25zb2xlLmRpcihpbWFnZSk7XG4gICAgICAgIGlmIChpbWFnZS5lcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGF3cycpO1xuICAgICAgICAgICAgVmlld01vZGVsLnNldCgnaW1nX3N0JywgMyk7IC8vZXJyb3JcbiAgICAgICAgICAgIG1lc3NhZ2Uuc2hvd0Vycm9yKHsgJ3RpdGxlJzogJ0Vycm9yIGFsIGVudmlhciBsYSBpbWFnZW4nLCAnbWVzc2FnZSc6IGltYWdlLm1lc3NhZ2UgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb2sgYXdzJyk7XG4gICAgICAgICAgICBpbWFnZSA9IGltYWdlLmRhdGE7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhscy5nZXRTdHJpbmcoJ2F3cycpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGltYWdlLnVybCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWFnZS51cmwucmVwbGFjZSgnLmpwZWcnLCAnX20uanBlZycpKTtcbiAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltYWdlX3VybCcsIGxzLmdldFN0cmluZygnYXdzJykgKyBpbWFnZS51cmwucmVwbGFjZSgnLmpwZWcnLCAnX20uanBlZycpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFZpZXdNb2RlbC5nZXQoJ2ltYWdlX3VybCcpKTtcbiAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ2ltZ19zdCcsIDEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlb212ZTogJyArIGltYWdlX25hbWUgKyAnLmpwZWcnKTtcbiAgICAgICAgICAgIHJlbW92ZUZpbGUoaW1hZ2VfbmFtZSArICcuanBlZycpO1xuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBWaWV3TW9kZWwuc2V0KCdpbWdfc3QnLCAzKTsgLy9lcnJvclxuICAgICAgICBtZXNzYWdlLnNob3dFcnJvcih7ICd0aXRsZSc6ICdFcnJvciBkZSBpbnRlcm5ldCBhbCBlbnZpYXIgbGEgaW1hZ2VuJywgJ21lc3NhZ2UnOiAnSW50ZW50ZSBudWV2YW1lbnRlLicgfSk7XG4gICAgfSk7XG59XG4vL1xuXG5leHBvcnRzLnRhcEFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoVmlld01vZGVsLmdldCgnaW1nX3N0JykgIT09IDEpIHtcbiAgICAgICAgbWVzc2FnZS5zaG93V2FybmluZyh7ICd0aXRsZSc6ICdFcnJvciBkZSBpbWFnZW4nLCAnbWVzc2FnZSc6IFZpZXdNb2RlbC5nZXQoJ2ltZ19zdCcpID09IDAgPyAnSW5ncmVzZSB1bmEgaW1hZ2VuJyA6ICdFcnJvciBkZSBpbWFnZW4nIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvc3RJbmNpZGVuY2UoJ1BPU1QnLCAndW5pdHMvZmFjZXMvaW5jaWRlbmNlcycsIHtcbiAgICAgICAgXCJ1bml0c19mYWNlc19pZFwiOiBWaWV3TW9kZWwuZ2V0KCd1bml0c19mYWNlc19pZCcpLFxuICAgICAgICBcImltYWdlX3VybFwiOiBWaWV3TW9kZWwuZ2V0KCdpbWFnZV91cmwnKS5yZXBsYWNlKGxzLmdldFN0cmluZygnYXdzJyksICcnKS5yZXBsYWNlKCdfbS5qcGVnJywgJy5qcGVnJyksXG4gICAgICAgICdvYnNlcnZhdGlvbic6IFZpZXdNb2RlbC5nZXQoJ29ic2VydmF0aW9uJykgPyBWaWV3TW9kZWwuZ2V0KCdvYnNlcnZhdGlvbicpIDogbnVsbFxuICAgIH0pO1xufVxuXG4vL1NlbmQgaW50YWxsYXRpb25zIGxvZ2ljXG5mdW5jdGlvbiBwb3N0SW5jaWRlbmNlKG1ldGhvZCwgdXJsLCBjb250ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJwb3N0SW5jaWRlbmNlKClcIik7XG4gICAgY29uc29sZS5sb2coJ21ldG9kaDogJyArIG1ldGhvZCk7XG4gICAgY29uc29sZS5kaXIoY29udGVudCk7XG4gICAgY29uc29sZS5sb2coJ2ltYWdlX3VybDogJyArIGNvbnRlbnQuaW1hZ2VfdXJsKTtcbiAgICB1cmwgPSBscy5nZXRTdHJpbmcoJ2Nvbm5lY3Rpb24nKSArIHVybDtcbiAgICBjb25zb2xlLmxvZygndXJsOiAnICsgdXJsKTtcbiAgICBodHRwLnJlcXVlc3QobHMucmVxdWVzdCh1cmwsIG1ldGhvZCwgY29udGVudCkpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgY29uc29sZS5kaXIocik7XG4gICAgICAgIGxldCBpdGVtID0gSlNPTi5wYXJzZShyLmNvbnRlbnQpO1xuICAgICAgICBpZiAoci5zdGF0dXNDb2RlID09IDIwMSkge1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW0uZGF0YTtcbiAgICAgICAgICAgIFZpZXdNb2RlbC5zZXQoJ3VwZGF0ZV9pbWFnZV91cmwnLCBmYWxzZSk7IC8vIGFsd2F5cyB1cGRhdGUgaW1hZ2VcbiAgICAgICAgICAgIGlmIChWaWV3TW9kZWwuZ2V0KCd1cGRhdGVfaW1hZ2VfdXJsJykpIHsgLy9lZGl0XG4gICAgICAgICAgICAgICAgVmlld01vZGVsLnNldCgndXBkYXRlX2ltYWdlX3VybCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwb3N0SW5jaWRlbmNlKCdQVVQnLCAndW5pdHMvZmFjZXMvJyArIFZpZXdNb2RlbC5nZXQoJ3VuaXRzX2ZhY2VzX2lkJyksIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlX3VybCc6IGNvbnRlbnQuaW1hZ2VfdXJsLFxuICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnZ2V0R3BzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2dvVG9JbmNpZGVuY2VzKGl0ZW0ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoci5zdGF0dXNDb2RlID09IDIwMikgeyAvL2NyZWF0ZWRcbiAgICAgICAgICAgICAgICAvL2dvVG9JbmNpZGVuY2VzKGl0ZW0ubWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc2hvd0Vycm9yKHsgJ3RpdGxlJzogJ0Vycm9yIGFsIGVudmlhcicsICdtZXNzYWdlJzogaXRlbS5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlLnNob3dFcnJvcih7ICd0aXRsZSc6ICdFcnJvciBkZSBpbnRlcm5ldCcgfSk7XG4gICAgfSk7XG59XG4vL1xuXG5cblxuZXhwb3J0cy5zZW5kQkcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgLy8gZmlsZSBwYXRoIGFuZCB1cmxcbiAgICB2YXIgZmlsZSA9IFwiL3NvbWUvbG9jYWwvZmlsZS9wYXRoL2FuZC9maWxlL25hbWUuanBnXCI7XG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9zb21lLnJlbW90ZS5zZXJ2aWNlLmNvbS9wYXRoXCI7XG4gICAgdmFyIG5hbWUgPSBmaWxlLnN1YnN0cihmaWxlLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuXG4gICAgLy8gdXBsb2FkIGNvbmZpZ3VyYXRpb25cbiAgICB2YXIgYmdodHRwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7XG4gICAgdmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcbiAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVXBsb2FkaW5nIFwiICsgbmFtZVxuICAgIH07XG59XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYW1lcmEtcGx1c1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FtZXJhLXBsdXNcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhbWVyYS1wbHVzL0NhbWVyYVBsdXNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhbWVyYS1wbHVzXCIpOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIk15IEFwcFxcXCIgaWNvbj1cXFwiXFxcIj48L0FjdGlvbkJhcj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUYXAgdGhlIGJ1dHRvblxcXCIgY2xhc3M9XFxcImgxIHRleHQtY2VudGVyXFxcIi8+XFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlRBUFxcXCIgdGFwPVxcXCJ0YXBJbWFnZW5DYW1hcmFcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCIvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG1lc3NhZ2UgfX1cXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L1BhZ2U+XFxuIC0tPlxcbjxQYWdlIHhtbG5zOkNhbT1cXFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhbWVyYS1wbHVzXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG4gIDxQYWdlLmFjdGlvbkJhcj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiQ2FtZXJhIFBsdXMgRGVtb1xcXCIgaWNvbj1cXFwiXFxcIj48L0FjdGlvbkJhcj5cXG4gIDwvUGFnZS5hY3Rpb25CYXI+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICA8Q2FtOkNhbWVyYVBsdXMgaWQ9XFxcImNhbVBsdXNcXFwiXFxuICAgICAgICBzYXZlVG9HYWxsZXJ5PVxcXCJ0cnVlXFxcIiAgICAgIFxcbiAgICAgICAgc2hvd0NhcHR1cmVJY29uPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgc2hvd0dhbGxlcnlJY29uPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgc2hvd1RvZ2dsZUljb249XFxcInRydWVcXFwiICAgICAgIFxcbiAgICAgICAgc2hvd0ZsYXNoSWNvbj1cXFwidHJ1ZVxcXCJcXG4gICAgICAgIGRlYnVnPVxcXCJ0cnVlXFxcIj5cXG4gICAgICA8L0NhbTpDYW1lcmFQbHVzPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZSgnZGF0YS9vYnNlcnZhYmxlJykuT2JzZXJ2YWJsZTtcbmNvbnN0IFZpZXdNb2RlbCA9IG5ldyBPYnNlcnZhYmxlKHtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBWaWV3TW9kZWw7OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21haW4tdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9