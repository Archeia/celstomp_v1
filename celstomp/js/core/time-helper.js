const fps = 24;
const seconds = 5;

let totalFrames = 120;
let currentFrame = 0;

let contentW = 2560;
let contentH = 1440;

let frameW = 1280;
let frameH = 720;
let frameX = Math.floor((contentW - frameW) / 2);
let frameY = Math.floor((contentH - frameH) / 2);

let constrainToFrame = false;
let projectName = "Untitled Project";
