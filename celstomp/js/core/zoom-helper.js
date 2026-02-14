// leave global here for now - quick refactor
let zoom = 1;
let offsetX = 0;
let offsetY = 0;

const ZOOM_MIN = 0.01;
const ZOOM_MAX = 16;

function getWorldZoomMin(canvasEl = null) {
  const c = canvasEl || document.getElementById("drawCanvas");
  if (!c) return ZOOM_MIN;
  const dpr = window.devicePixelRatio || 1;
  const cssW = (c.width || 0) / dpr;
  const cssH = (c.height || 0) / dpr;
  const worldW = Math.max(1, Number(contentW) || 1);
  const worldH = Math.max(1, Number(contentH) || 1);
  if (!cssW || !cssH) return ZOOM_MIN;
  const fit = Math.min(cssW / worldW, cssH / worldH);
  if (!Number.isFinite(fit) || fit <= 0) return ZOOM_MIN;
  return Math.max(ZOOM_MIN, fit);
}

function clampZoomToWorld(z, canvasEl = null) {
  const min = getWorldZoomMin(canvasEl);
  return Math.max(min, Math.min(ZOOM_MAX, Number(z) || 1));
}

const getZoom = () => zoom;
const setZoom = (z) => zoom = z;

const getOffsetX = () => offsetX;
const setOffsetX = (x) => offsetX = x;

const getOffsetY = () => offsetY;
const setOffsetY = (y) => offsetY = y;
