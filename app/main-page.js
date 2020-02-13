const ViewModel = require('./main-view-model');
const CameraPlus = require('@nstudio/nativescript-camera-plus');

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
}