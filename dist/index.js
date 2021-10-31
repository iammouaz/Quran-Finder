/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetFromAPI": () => (/* binding */ GetFromAPI),
/* harmony export */   "GetVersenumber": () => (/* binding */ GetVersenumber),
/* harmony export */   "GetPartenumber": () => (/* binding */ GetPartenumber)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
// eslint-disable-next-line import/no-cycle


const API = 'https://api.quran.com/api/v4/';
const String = 'search?q=';
const Counter = document.getElementById('counter');

const GetFromAPI = async (any) => {
  const respone = await fetch(API + String + any);
  const data = await respone.json();
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.CreateModal)(data.search.results, data.search.results.words);
  Counter.innerHTML += `<h2>Total Result is : ${data.search.total_results} </h2>`;
  console.log(data.search.results);
};

const GetPartenumber = (id) => id.substring(0, id.indexOf(':'));
const GetVersenumber = (id) => id.substring(id.indexOf(':') + 1);

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateModal": () => (/* binding */ CreateModal)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */


const Search = document.getElementById('search');
const results = document.getElementById('results');

const CreateModal = (data) => {
  data.forEach((e) => {
    results.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Verse Number is : ${_api__WEBPACK_IMPORTED_MODULE_0__.GetVersenumber(e.verse_key)}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Juz Number is :${_api__WEBPACK_IMPORTED_MODULE_0__.GetPartenumber(e.verse_key)}</h6>
      <p class="card-text">${(e.text)}</p>
    </div>
    </div>`;
  });
};

const GetInput = async () => {
  const Input = document.getElementById('data').value;
  _api__WEBPACK_IMPORTED_MODULE_0__.GetFromAPI(Input);
};

Search.addEventListener('click', GetInput);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVc7QUFDYixnREFBZ0QsMkJBQTJCO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNzRDs7Ozs7Ozs7Ozs7Ozs7OztBQ25CdEQ7QUFDQTtBQUNnQzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0EsaURBQWlELGdEQUFxQixjQUFjO0FBQ3BGLGlFQUFpRSxnREFBcUIsY0FBYztBQUNwRyw2QkFBNkIsU0FBUztBQUN0QztBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDRDQUFpQjtBQUNuQjs7QUFFQTs7QUFFdUI7Ozs7Ozs7VUMxQnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVyYW5maW5kZXIvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3F1cmFuZmluZGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3F1cmFuZmluZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1cmFuZmluZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9xdXJhbmZpbmRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3F1cmFuZmluZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcXVyYW5maW5kZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9xdXJhbmZpbmRlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcXVyYW5maW5kZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCB7IENyZWF0ZU1vZGFsIH0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IEFQSSA9ICdodHRwczovL2FwaS5xdXJhbi5jb20vYXBpL3Y0Lyc7XG5jb25zdCBTdHJpbmcgPSAnc2VhcmNoP3E9JztcbmNvbnN0IENvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRlcicpO1xuXG5jb25zdCBHZXRGcm9tQVBJID0gYXN5bmMgKGFueSkgPT4ge1xuICBjb25zdCByZXNwb25lID0gYXdhaXQgZmV0Y2goQVBJICsgU3RyaW5nICsgYW55KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbmUuanNvbigpO1xuICBDcmVhdGVNb2RhbChkYXRhLnNlYXJjaC5yZXN1bHRzLCBkYXRhLnNlYXJjaC5yZXN1bHRzLndvcmRzKTtcbiAgQ291bnRlci5pbm5lckhUTUwgKz0gYDxoMj5Ub3RhbCBSZXN1bHQgaXMgOiAke2RhdGEuc2VhcmNoLnRvdGFsX3Jlc3VsdHN9IDwvaDI+YDtcbiAgY29uc29sZS5sb2coZGF0YS5zZWFyY2gucmVzdWx0cyk7XG59O1xuXG5jb25zdCBHZXRQYXJ0ZW51bWJlciA9IChpZCkgPT4gaWQuc3Vic3RyaW5nKDAsIGlkLmluZGV4T2YoJzonKSk7XG5jb25zdCBHZXRWZXJzZW51bWJlciA9IChpZCkgPT4gaWQuc3Vic3RyaW5nKGlkLmluZGV4T2YoJzonKSArIDEpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgR2V0RnJvbUFQSSwgR2V0VmVyc2VudW1iZXIsIEdldFBhcnRlbnVtYmVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCAqIGFzIEFwaVJ1biBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IFNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuXG5jb25zdCBDcmVhdGVNb2RhbCA9IChkYXRhKSA9PiB7XG4gIGRhdGEuZm9yRWFjaCgoZSkgPT4ge1xuICAgIHJlc3VsdHMuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwid2lkdGg6IDE4cmVtO1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5WZXJzZSBOdW1iZXIgaXMgOiAke0FwaVJ1bi5HZXRWZXJzZW51bWJlcihlLnZlcnNlX2tleSl9PC9oNT5cbiAgICAgIDxoNiBjbGFzcz1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+SnV6IE51bWJlciBpcyA6JHtBcGlSdW4uR2V0UGFydGVudW1iZXIoZS52ZXJzZV9rZXkpfTwvaDY+XG4gICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPiR7KGUudGV4dCl9PC9wPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH0pO1xufTtcblxuY29uc3QgR2V0SW5wdXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGEnKS52YWx1ZTtcbiAgQXBpUnVuLkdldEZyb21BUEkoSW5wdXQpO1xufTtcblxuU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgR2V0SW5wdXQpO1xuXG5leHBvcnQgeyBDcmVhdGVNb2RhbCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==