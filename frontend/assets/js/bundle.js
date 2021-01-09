/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Desafio/form-controllers.ts":
/*!*****************************************!*\
  !*** ./src/Desafio/form-controllers.ts ***!
  \*****************************************/
/***/ (() => {


var showErrorMessage = "show-error-message";
var form = document.querySelector(".form");
var username = document.querySelector(".username");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
var password2 = document.querySelector(".password2");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    hideErrorMessages(this);
});
function hideErrorMessages(form) {
    form.querySelectorAll("." + showErrorMessage).forEach(function (e) {
        return e.classList.remove(showErrorMessage);
    });
}
function showErrorMessages(input, msg) {
    var formfileds = input.parentElement;
    var errorMessage = formfileds.querySelector(".error-message");
    errorMessage.innerText = msg;
    formfileds.classList.add(showErrorMessage);
}
showErrorMessages(username, "Digite o user");


/***/ }),

/***/ "./src/Desafio/index.ts":
/*!******************************!*\
  !*** ./src/Desafio/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-controllers */ "./src/Desafio/form-controllers.ts");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Desafio/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map