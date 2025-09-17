// Global Application State
const AppState = Object.freeze({
  currentType: "url",
  qrInstance: null,
  analytics: {
    sessionStart: Date.now(),
    generated: 0,
    downloads: 0,
  },
});

// DOM Elements Cache (for better performance optimization)
const Elements = {
  // Type Selector
  typeBtns: document.querySelectorAll(".type-btn"),
  inputGroups: document.querySelectorAll(".input-group"),

  // QR Display
  qrCanvas: document.getElementById("qr-canvas"),
  qrPlaceholder: document.getElementById("qr-placeholder"),

  // Inputs
  qrInputs: document.querySelectorAll(".qr-input"),
  sizeSlider: document.getElementById("qr-size"),
  sizeValue: document.getElementById("size-value"),
  colorPicker: document.getElementById("qr-color"),
  bgColorPicker: document.getElementById("bg-color"),

  // Download buttons
  downloadPng: document.getElementById("download-png"),
  downloadSvg: document.getElementById("download-svg"),
  copyLink: document.getElementById("copy-link"),

  // Info displays
  dataLength: document.getElementById("data-length"),
  qrVersion: document.getElementById("qr-version"),
  errorCorrection: document.getElementById("error-correction"),
};
