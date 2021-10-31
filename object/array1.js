function a(x) {
    x();
}

function doIt() {
    console.log('doIt');
}

function doRight() {
    console.log('doRight');
}

a(doIt);
a(doRight);