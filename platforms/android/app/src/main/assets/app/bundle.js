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

/***/ "./app.scss":
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/sass-loader/lib/loader.js):\nError: Cannot find module 'node-sass'\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:507:25)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (/Users/victor/NS/testbg/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at Object.sassLoader (/Users/victor/NS/testbg/node_modules/sass-loader/lib/loader.js:46:72)");

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
const CameraPlus = __webpack_require__("../node_modules/@nstudio/nativescript-camera-plus/camera-plus.js");

let page, cam;
exports.onNavigatingTo = function navigatingTo(args) {
    page = args.object;
    page.bindingContext = ViewModel;
    cam = page.getViewById("camPlus");
}

exports.tapImagenCamara = function () {
    console.log('tapImagenCamara()');
    console.log(cam);

    cam.on(CameraPlus.errorEvent, args => {
        console.log('*** CameraPlus errorEvent ***');
    });

    cam.on(CameraPlus.toggleCameraEvent, (args) => {
        console.log('toggleCameraEvent listener on main-view-model.ts');
    });

    cam.on(CameraPlus.photoCapturedEvent, (args) => {
        console.log('photoCapturedEvent listener on main-view-model.ts');
    });

    cam.requestCameraPermissions().then(function () {
        console.log(1);
        if (!cam) {
            console.log(2); 
            cam = new CameraPlus();
        }
        console.log(3);
        cam.takePicture({ saveToGallery: true, confirm: true, keepAspectRatio: true, width: 1920, height: 1440 });
    });
}; 
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

module.exports = "<Page xmlns:Cam=\"@nstudio/nativescript-camera-plus\" navigatingTo=\"onNavigatingTo\">\n  <Page.actionBar>\n    <ActionBar title=\"Camera Plus\" icon=\"\"></ActionBar>\n  </Page.actionBar>\n    <GridLayout rows=\"*,auto\" class=\"bg_red\">\n      <Cam:CameraPlus row=\"0\" id=\"camPlus\" height=\"400\" width=\"300\"\n        saveToGallery=\"true\"    \n        showCaptureIcon=\"true\"\n        showGalleryIcon=\"false\"\n        showToggleIcon=\"false\"\n        showFlashIcon=\"false\"\n        debug=\"true\"> \n      </Cam:CameraPlus>\n      <Button row=\"1\" text=\"getPhoto\" tap=\"tapImagenCamara\" />\n    </GridLayout>\n</Page>"; 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vZHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9tYWluLXZpZXctbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSjs7Ozs7Ozs7QUNsQ0EsaUU7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEUsS0FBSztBQUNM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QUFtQzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSwyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1RkFBdUY7QUFDaEgsS0FBSztBQUNMLEU7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEUsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDMUNBLHFIQUF1RSxRQUFRLG1CQUFPLENBQUMsa0VBQW1DLEVBQUUsRUFBRTtBQUM5SCxrRkFBa0YsUUFBUSxtQkFBTyxDQUFDLGtFQUFtQyxFQUFFLEVBQUU7O0FBRXpJLGlwQjtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDBDQUEwQztBQUNyRSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNWQSxpRUFBbUIsbUJBQU8sQ0FBQyxrRUFBaUI7QUFDNUM7QUFDQSxDQUFDO0FBQ0QsNEI7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiwrQ0FBK0M7QUFDMUUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vY29tbW9uL2R0LmpzXCI6IFwiLi9jb21tb24vZHQuanNcIixcblx0XCIuL2NvbW1vbi9lbmNvZGUuanNcIjogXCIuL2NvbW1vbi9lbmNvZGUuanNcIixcblx0XCIuL2NvbW1vbi9scy5qc1wiOiBcIi4vY29tbW9uL2xzLmpzXCIsXG5cdFwiLi9jb21tb24vbWVzc2FnZS5qc1wiOiBcIi4vY29tbW9uL21lc3NhZ2UuanNcIixcblx0XCIuL2NvbW1vbi9uYXYuanNcIjogXCIuL2NvbW1vbi9uYXYuanNcIixcblx0XCIuL2NvbW1vbi9wbGF0Zm9ybS5qc1wiOiBcIi4vY29tbW9uL3BsYXRmb3JtLmpzXCIsXG5cdFwiLi9jb21tb24vdXJsLmpzXCI6IFwiLi9jb21tb24vdXJsLmpzXCIsXG5cdFwiLi9tYWluLXBhZ2UuanNcIjogXCIuL21haW4tcGFnZS5qc1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4vbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCI6IFwiLi9tYWluLXZpZXctbW9kZWwuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcIm1haW4tcGFnZVxcXCI+XFxuPC9GcmFtZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAtcm9vdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9hcHAtcm9vdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgIGxldCBhcHBsaWNhdGlvbkNoZWNrUGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uQ2hlY2tQbGF0Zm9ybS5hbmRyb2lkICYmICFnbG9iYWxbXCJfX3NuYXBzaG90XCJdKSB7XG4gICAgICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gTGl2ZVN5bmNcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBob3QgdXBkYXRlcyBhcmUgYXBwbGllZCwgYXNrIHRoZSBtb2R1bGVzIHRvIGFwcGx5IHRoZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMoeyB0eXBlLCBwYXRoIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIGluaXRpYWwgYXBwIHN0YXJ0XG4gICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvKD88IVxcYkFwcF9SZXNvdXJjZXNcXGIuKikoPzwhXFwuXFwvXFxidGVzdHNcXGJcXC8uKj8pXFwuKHhtbHxjc3N8anN8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIC8qXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuanMgZmlsZSBpcyB0aGUgZW50cnkgcG9pbnQgdG8geW91ciBhcHBsaWNhdGlvbi5cbllvdSBjYW4gdXNlIHRoaXMgZmlsZSB0byBwZXJmb3JtIGFwcC1sZXZlbCBpbml0aWFsaXphdGlvbiwgYnV0IHRoZSBwcmltYXJ5XG5wdXJwb3NlIG9mIHRoZSBmaWxlIGlzIHRvIHBhc3MgY29udHJvbCB0byB0aGUgYXBw4oCZcyBmaXJzdCBtb2R1bGUuXG4qL1xuXG5jb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiBcImFwcC1yb290XCIgfSk7XG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgIiwiZXhwb3J0cy5nZXREYXRlZGlmID0gZnVuY3Rpb24gKGZlY2hhKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZmVjaGEgPSBuZXcgRGF0ZShmZWNoYSk7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHNlZyA9IChub3cgLSBmZWNoYSkgLyAxMDAwO1xuXG4gICAgICAgIGNvbnN0IGRpYXMgPSBNYXRoLmZsb29yKHNlZyAvIDYwIC8gNjAgLyAyNCk7XG4gICAgICAgIGNvbnN0IGhvcmFzID0gTWF0aC5yb3VuZChzZWcgLyA2MCAvIDYwKSAlIDI0O1xuICAgICAgICBjb25zdCBtaW51dG9zID0gTWF0aC5yb3VuZChzZWcgLyA2MCkgJSA2MDtcbiAgICAgICAgY29uc3Qgc2VndW5kb3MgPSBNYXRoLnJvdW5kKHNlZykgJSA2MDtcblxuICAgICAgICBjb25zdCBkID0gZGlhcyA+IDAgPyBkaWFzICsgJyBkw61hcyAnIDogJyc7XG4gICAgICAgIGNvbnN0IGggPSBob3JhcyA+IDAgPyBob3JhcyArICcgaG9yYXMgJyA6ICcnO1xuICAgICAgICBjb25zdCBtID0gbWludXRvcyA+IDAgPyBtaW51dG9zICsgJyBtaW4gJyA6ICcnO1xuICAgICAgICBjb25zdCBzID0gc2VndW5kb3MgPiAwID8gc2VndW5kb3MgKyAnIHNlZycgOiAnMSBzZWcnO1xuXG4gICAgICAgIGNvbnN0IGRpZmYgPSBkaWFzID4gMSA/IGQgOiAoaG9yYXMgPiAxID8gaCA6IChtaW51dG9zID4gMSA/IG0gOiBzKSk7XG4gICAgICAgIHJldHVybiAnaGFjZSAnICsgZGlmZjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5leHBvcnRzLmZvcm1hdERhdGVUaW1lTXlTcWwgPSBmdW5jdGlvbiAoZmVjaGEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZmVjaGEpLFxuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLFxuICAgICAgICBmb3JtYXRlZE1vbnRoID0gKG1vbnRoLmxlbmd0aCA9PT0gMSkgPyAoJzAnICsgbW9udGgpIDogbW9udGgsXG4gICAgICAgIGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgICAgIGZvcm1hdGVkRGF5ID0gKGRheS5sZW5ndGggPT09IDEpID8gKCcwJyArIGRheSkgOiBkYXksXG4gICAgICAgIGhvdXIgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKSxcbiAgICAgICAgZm9ybWF0ZWRIb3VyID0gKGhvdXIubGVuZ3RoID09PSAxKSA/ICgnMCcgKyBob3VyKSA6IGhvdXIsXG4gICAgICAgIG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCksXG4gICAgICAgIGZvcm1hdGVkTWludXRlID0gKG1pbnV0ZS5sZW5ndGggPT09IDEpID8gKCcwJyArIG1pbnV0ZSkgOiBtaW51dGUsXG4gICAgICAgIHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCksXG4gICAgICAgIGZvcm1hdGVkU2Vjb25kID0gKHNlY29uZC5sZW5ndGggPT09IDEpID8gKCcwJyArIHNlY29uZCkgOiBzZWNvbmQ7XG4gICAgcmV0dXJuIHllYXIgKyAnLScgKyBmb3JtYXRlZE1vbnRoICsgJy0nICsgZm9ybWF0ZWREYXkgKyAnICcgKyBmb3JtYXRlZEhvdXIgKyAnOicgKyBmb3JtYXRlZE1pbnV0ZSArICc6JyArIGZvcm1hdGVkU2Vjb25kO1xufTtcbmV4cG9ydHMuZm9ybWF0RGF0ZU15U3FsID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgY29uc3QgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCBkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgcmV0dXJuIHkgKyAnLScgKyAobSA8IDEwID8gJzAnICsgbSA6IG0pICsgJy0nICsgKGQgPCAxMCA/ICcwJyArIGQgOiBkKTtcbn1cbmV4cG9ydHMuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGNvbnN0IHkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIHJldHVybiB5ICsgJy0nICsgKG0gPCAxMCA/ICcwJyArIG0gOiBtKSArICctJyArIChkIDwgMTAgPyAnMCcgKyBkIDogZCk7XG59XG5leHBvcnRzLmFkZERheXMgPSBmdW5jdGlvbiAoZmVjaGEsIGNhbnRpZGFkKSB7XG4gICAgdmFyIG15RGF0ZSA9IG5ldyBEYXRlKGZlY2hhKTtcbiAgICBteURhdGUuc2V0RGF0ZShteURhdGUuZ2V0RGF0ZSgpICsgY2FudGlkYWQpO1xuICAgIHJldHVybiBteURhdGU7XG59XG5leHBvcnRzLmdldE1vbnRoID0gZnVuY3Rpb24gKG1lcywgZ2V0TmFtZSkge1xuICAgIGNvbnN0IG1lc2VzID0geyAwOiBcIkVuZXJvXCIsIDE6IFwiRmVicmVyb1wiLCAyOiBcIk1hcnpvXCIsIDM6IFwiQWJyaWxcIiwgNDogXCJNYXlvXCIsIDU6IFwiSnVuaW9cIiwgNjogXCJKdWxpb1wiLCA3OiBcIkFnb3N0b1wiLCA4OiBcIlNlcHRpZW1icmVcIiwgOTogXCJPY3R1YnJlXCIsIDEwOiBcIk5vdmllbWJyZVwiLCAxMTogXCJEaWNpZW1icmVcIiB9O1xuICAgIGlmIChnZXROYW1lKSB7XG4gICAgICAgIHJldHVybiBtZXNlc1ttZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gbWVzZXMpIHtcbiAgICAgICAgICAgIGlmIChtZXNlc1tpXSA9PSBtZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZm9ybWF0RGF0ZVRpbWVVcmwgPSBmdW5jdGlvbiAoZmVjaGEpIHtcbiAgICBmZWNoYSA9IGZlY2hhLnJlcGxhY2UoLzovZywgXCIlM0FcIik7XG4gICAgZmVjaGEgPSBmZWNoYS5yZXBsYWNlKFwiIFwiLCBcIiUyMFwiKTtcbiAgICByZXR1cm4gZmVjaGE7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbW1vbi9kdC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi9kdC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCIvLyBmdW5jaW9uIGRlIGF5dWRhIHBhcmEgbGEgZnVuY2lvbiBvYmoydXJpXG5mdW5jdGlvbiBqb2luKHBhdGgsIGtleSkge1xuICAgIHJldHVybiBwYXRoICE9IG51bGwgPyBwYXRoICsgXCJbXCIgKyBrZXkgKyBcIl1cIiA6IGtleTtcbn1cblxuLyoqXG4gKiBGdW5jaW9uIHF1ZSBjb252aWVydGUgdW4gb2JqZXRvfGFycmF5IGVuIHVuYSBjYWRlbmEgdXJpIGNvZGlmaWNhZGEuXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogb2JqZXRvIHF1ZSBzZXLDoSBjb252ZXJ0aWRvIGEgdW5hIHVyaVxuICogQHBhcmFtIHtib29sZWFufSBlbmNvZGVLZXkgdmFsb3IgcXVlIGluZGljYSBzaSBkZWJlIGNvZGlmaWNhciBsb3Mga2V5cywgcG9yIGRlZmVjdG8gZXMgZmFsc2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBwYXJhbWV0cm8gb3BjaW9uYWwgdXNhZG8gZW4gbGEgcmVjdXJzaXZpZGFkIFt1c2FkbyBlbiBsYSByZWN1cnNpdmlkYWRdLlxuICogQHBhcmFtIHthcnJheXxvYmplY3R9IHJlc3VsdCBvYmpldG8gcHJpbmNpcGFsIGRvbmRlIHNlIGd1YXJkYXLDoW4gdG9kb3MgbG9zIGRhdG9zIFt1c2FkbyBlbiBsYSByZWN1cnNpdmlkYWRdLlxuICovXG5mdW5jdGlvbiBvYmoydXJpKG9iaiwgZW5jb2RlS2V5LCBwYXRoLCByZXN1bHQpIHtcblxuICAgIGVuY29kZUtleSA9IGVuY29kZUtleSB8fCBmYWxzZTtcblxuICAgIC8vIFNpIGVzIGxhIHByaW1lcmVyYSBsbGFtYWRhIG9zZWEgY3VhbmRvIG5vIGVzIHVuIGxsYW1hZG8gZGUgbGEgcmVjdXJzaXZpZGFkXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgICAgcmVzdWx0ID0ge307XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblxuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcblxuICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgICBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpKSB7XG4gICAgICAgICAgICBjYXNlIFwiW29iamVjdCBBcnJheV1cIjpcbiAgICAgICAgICAgIGNhc2UgXCJbb2JqZWN0IE9iamVjdF1cIjpcbiAgICAgICAgICAgICAgICBvYmoydXJpKHZhbCwgZW5jb2RlS2V5LCBqb2luKHBhdGgsIGtleSksIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3VsdFtqb2luKHBhdGgsIGtleSldID0gZW5jb2RlS2V5ID8gdmFsIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMocmVzdWx0KS5tYXAoZnVuY3Rpb24gKHBhaXIsIGkpIHtcbiAgICAgICAgcmV0dXJuIChlbmNvZGVLZXkgPyBwYWlyLm1hcChlbmNvZGVVUklDb21wb25lbnQpIDogcGFpcikuam9pbignPScpO1xuICAgIH0pLmpvaW4oJyYnKTtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaiwgZW5jb2RlS2V5LCBwYXRoLCByZXN1bHQpIHtcbiAgICByZXR1cm4gb2JqMnVyaShvYmosIGVuY29kZUtleSwgcGF0aCwgcmVzdWx0KTtcbn1cbmV4cG9ydHMuZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKG9mZnNldCxsYXN0X3BhZ2UpIHtcbiAgICBpZiAobGFzdF9wYWdlKSB7XG4gICAgICAgIGlmIChvZmZzZXQgPCBsYXN0X3BhZ2UpIHtcbiAgICAgICAgICAgIG9mZnNldCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0ID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldDtcbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vY29tbW9uL2VuY29kZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi9lbmNvZGUuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcbmV4cG9ydHMuc2V0U3RyaW5nID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcobmFtZSwgdmFsdWUpO1xyXG59XHJcbmV4cG9ydHMuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHJldHVybiBhcHBTZXR0aW5ncy5nZXRTdHJpbmcobmFtZSk7XHJcbn1cclxuZXhwb3J0cy5zZXRKc29uID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcobmFtZSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydHMuZ2V0SnNvbiA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICBjb25zdCBsaXN0VmlldyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhuYW1lKTtcclxuICAgIHJldHVybiBsaXN0VmlldyA/IEpTT04ucGFyc2UobGlzdFZpZXcpIDogbnVsbDtcclxufVxyXG5leHBvcnRzLnNldE51bWJlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG4gICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKG5hbWUsIHZhbHVlKTtcclxufVxyXG5leHBvcnRzLmdldE51bWJlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICByZXR1cm4gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKG5hbWUpO1xyXG59XHJcbmV4cG9ydHMuc2V0Qm9vbCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG4gICAgYXBwU2V0dGluZ3Muc2V0Qm9vbGVhbihuYW1lLCB2YWx1ZSk7XHJcbn1cclxuZXhwb3J0cy5nZXRCb29sID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHJldHVybiBhcHBTZXR0aW5ncy5nZXRCb29sZWFuKG5hbWUpO1xyXG59XHJcbmV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHJldHVybiBhcHBTZXR0aW5ncy5yZW1vdmUobmFtZSk7XHJcbn1cclxuZXhwb3J0cy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBhcHBTZXR0aW5ncy5jbGVhcigpO1xyXG59XHJcbmV4cG9ydHMuZ2V0T2JqZWN0UGFyYW1zID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSkge1xyXG4gICAgY29uc3QgbGlzdFZpZXcgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcob2JqZWN0KTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBsaXN0VmlldyA/IEpTT04ucGFyc2UobGlzdFZpZXcpIDogbnVsbDtcclxuICAgIGlmIChwcm9maWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2ZpbGVbbmFtZV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucmVxdWVzdCA9IGZ1bmN0aW9uICh1cmwsIG1ldGhvZCwgY29udGVudCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAnZXMnLFxyXG4gICAgICAgICAgICAneC1kZXZpY2UtdHlwZSc6IDEsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd0b2tlbicpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShjb250ZW50KVxyXG4gICAgfVxyXG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbW1vbi9scy5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi9scy5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBGZWVkYmFja1BsdWdpbiA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1mZWVkYmFjaycpO1xuY29uc3QgZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2tQbHVnaW4uRmVlZGJhY2soKTtcblxuZXhwb3J0cy5zaG93U3VjY2VzcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgZmVlZGJhY2suc3VjY2Vzcyhib2R5KTtcbn1cbmV4cG9ydHMuc2hvd1dhcm5pbmcgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgIGZlZWRiYWNrLndhcm5pbmcoYm9keSk7XG59XG5leHBvcnRzLnNob3dFcnJvciA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgLy9mZWVkYmFjay5zaG93KGJvZHkpO1xuICAgIGZlZWRiYWNrLmVycm9yKGJvZHkpO1xufVxuZXhwb3J0cy5zaG93SW5mbyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgZmVlZGJhY2suaW5mbyhib2R5KTtcbn1cbmV4cG9ydHMuaGlkZUZlZWRiYWNrID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICBmZWVkYmFjay5oaWRlKGJvZHkpO1xufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21tb24vbWVzc2FnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi9tZXNzYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IGZyYW1lTW9kdWxlID0gcmVxdWlyZSgndWkvZnJhbWUnKTtcclxuZXhwb3J0cy5nb0JhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xyXG4gICAgdG9wbW9zdC5nb0JhY2soKTtcclxufVxyXG5mdW5jdGlvbiBnb1RvRnVuYyhwYWdpbmEsIGhpc3RvcnksIGl0ZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdnb3RvOiAnICsgJ2NvbXBvbmVudHMvJyArIHBhZ2luYSk7XHJcbiAgICBjb25zdCB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xyXG4gICAgdG9wbW9zdC5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogJy4vY29tcG9uZW50cy8nICsgcGFnaW5hLFxyXG4gICAgICAgIGNsZWFySGlzdG9yeTogaGlzdG9yeSxcclxuICAgICAgICBjb250ZXh0OiBpdGVtXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdvVG8gPSBmdW5jdGlvbiAocGFnaW5hLCBoaXN0b3J5LCBpdGVtKSB7XHJcbiAgICBnb1RvRnVuYyhwYWdpbmEsIGhpc3RvcnksIGl0ZW0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBteVBhZ2UgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XHJcbiAgICByZXR1cm4gbXlQYWdlLmlkO1xyXG59XHJcbmV4cG9ydHMuZXJyb3IgPSBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgIGdvVG9GdW5jKCdsb2dpbi9sb2dpbicsIHRydWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21tb24vbmF2LmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vY29tbW9uL25hdi5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBhcHAgPSByZXF1aXJlKCdhcHBsaWNhdGlvbicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZShcInBsYXRmb3JtXCIpO1xuZXhwb3J0cy5nZXRQbGF0Zm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgcmV0dXJuICdhbmRyb2lkJztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2lvcyc7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRTY3JlZW5EaW1lbnNpb25zID0gZnVuY3Rpb24gKHRpcG8pIHtcbiAgICBzd2l0Y2ggKHRpcG8pIHtcbiAgICAgICAgY2FzZSAnaGVpZ2h0JzpcbiAgICAgICAgICAgIHJldHVybiAocGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gKHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyk7XG4gICAgfVxufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21tb24vcGxhdGZvcm0uanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9jb21tb24vcGxhdGZvcm0uanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiZXhwb3J0cy5pbWdTaXplID0gZnVuY3Rpb24gKHVybCwgc2l6ZSkge1xuICAgIGlmICh1cmwpIHtcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL194c3xfc3xfbXxfbHxfeGwvLCAnJyk7XG4gICAgICAgIGNvbnN0IGxhc3QgPSB1cmwubGFzdEluZGV4T2YoJy4nKTsgXG4gICAgICAgIHVybCA9IFt1cmwuc3Vic3RyaW5nKDAsIGxhc3QpLCBzaXplLCB1cmwuc3Vic3RyaW5nKGxhc3QsIHVybC5sZW5ndGgpXS5qb2luKCcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vY29tbW9uL3VybC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2NvbW1vbi91cmwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgVmlld01vZGVsID0gcmVxdWlyZSgnLi9tYWluLXZpZXctbW9kZWwnKTtcbmNvbnN0IENhbWVyYVBsdXMgPSByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FtZXJhLXBsdXMnKTtcblxubGV0IHBhZ2UsIGNhbTtcbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gVmlld01vZGVsO1xuICAgIGNhbSA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJjYW1QbHVzXCIpO1xufVxuXG5leHBvcnRzLnRhcEltYWdlbkNhbWFyYSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygndGFwSW1hZ2VuQ2FtYXJhKCknKTtcbiAgICBjb25zb2xlLmxvZyhjYW0pO1xuXG4gICAgY2FtLm9uKENhbWVyYVBsdXMuZXJyb3JFdmVudCwgYXJncyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcqKiogQ2FtZXJhUGx1cyBlcnJvckV2ZW50ICoqKicpO1xuICAgIH0pO1xuXG4gICAgY2FtLm9uKENhbWVyYVBsdXMudG9nZ2xlQ2FtZXJhRXZlbnQsIChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2dnbGVDYW1lcmFFdmVudCBsaXN0ZW5lciBvbiBtYWluLXZpZXctbW9kZWwudHMnKTtcbiAgICB9KTtcblxuICAgIGNhbS5vbihDYW1lcmFQbHVzLnBob3RvQ2FwdHVyZWRFdmVudCwgKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Bob3RvQ2FwdHVyZWRFdmVudCBsaXN0ZW5lciBvbiBtYWluLXZpZXctbW9kZWwudHMnKTtcbiAgICB9KTtcblxuICAgIGNhbS5yZXF1ZXN0Q2FtZXJhUGVybWlzc2lvbnMoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICAgIGlmICghY2FtKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygyKTsgXG4gICAgICAgICAgICBjYW0gPSBuZXcgQ2FtZXJhUGx1cygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKDMpO1xuICAgICAgICBjYW0udGFrZVBpY3R1cmUoeyBzYXZlVG9HYWxsZXJ5OiB0cnVlLCBjb25maXJtOiB0cnVlLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHdpZHRoOiAxOTIwLCBoZWlnaHQ6IDE0NDAgfSk7XG4gICAgfSk7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21haW4tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FtZXJhLXBsdXNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhbWVyYS1wbHVzXCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYW1lcmEtcGx1cy9DYW1lcmFQbHVzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIkBuc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYW1lcmEtcGx1c1wiKTsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxuczpDYW09XFxcIkBuc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYW1lcmEtcGx1c1xcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICA8UGFnZS5hY3Rpb25CYXI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkNhbWVyYSBQbHVzXFxcIiBpY29uPVxcXCJcXFwiPjwvQWN0aW9uQmFyPlxcbiAgPC9QYWdlLmFjdGlvbkJhcj5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKixhdXRvXFxcIiBjbGFzcz1cXFwiYmdfcmVkXFxcIj5cXG4gICAgICA8Q2FtOkNhbWVyYVBsdXMgcm93PVxcXCIwXFxcIiBpZD1cXFwiY2FtUGx1c1xcXCIgaGVpZ2h0PVxcXCI0MDBcXFwiIHdpZHRoPVxcXCIzMDBcXFwiXFxuICAgICAgICBzYXZlVG9HYWxsZXJ5PVxcXCJ0cnVlXFxcIiAgICBcXG4gICAgICAgIHNob3dDYXB0dXJlSWNvbj1cXFwidHJ1ZVxcXCJcXG4gICAgICAgIHNob3dHYWxsZXJ5SWNvbj1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBzaG93VG9nZ2xlSWNvbj1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBzaG93Rmxhc2hJY29uPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGRlYnVnPVxcXCJ0cnVlXFxcIj4gXFxuICAgICAgPC9DYW06Q2FtZXJhUGx1cz5cXG4gICAgICA8QnV0dG9uIHJvdz1cXFwiMVxcXCIgdGV4dD1cXFwiZ2V0UGhvdG9cXFwiIHRhcD1cXFwidGFwSW1hZ2VuQ2FtYXJhXFxcIiAvPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9tYWluLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKCdkYXRhL29ic2VydmFibGUnKS5PYnNlcnZhYmxlO1xuY29uc3QgVmlld01vZGVsID0gbmV3IE9ic2VydmFibGUoe1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdNb2RlbDs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=