"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b3e8bd2872ff\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OWNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImIzZThiZDI4NzJmZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/providers/userAgentProvider.tsx":
/*!********************************************************!*\
  !*** ./src/components/providers/userAgentProvider.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserAgentProvider: function() { return /* binding */ UserAgentProvider; },\n/* harmony export */   useUserAgentContext: function() { return /* binding */ useUserAgentContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/providers/userAgentProvider.tsx\n/* __next_internal_client_entry_do_not_use__ useUserAgentContext,UserAgentProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst UserAgentContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useUserAgentContext = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserAgentContext);\n    if (context === undefined) {\n        throw new Error(\"useUserAgentContext must be used within a UserAgentProvider\");\n    }\n    return context;\n};\n_s(useUserAgentContext, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nconst UserAgentProvider = (param)=>{\n    let { children, userAgent: userAgentProp } = param;\n    _s1();\n    const [userAgent, setUserAgent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userAgentProp);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ( true && !userAgent) {\n            setUserAgent(window.navigator.userAgent);\n        }\n    }, [\n        userAgent\n    ]);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            userAgent,\n            setUserAgent\n        }), [\n        userAgent\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserAgentContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/shohid/Downloads/frontend-coding-challenge/src/components/providers/userAgentProvider.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(UserAgentProvider, \"WeL0t7BdTyRoHdI/OrLYIonScwk=\");\n_c = UserAgentProvider;\nvar _c;\n$RefreshReg$(_c, \"UserAgentProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy91c2VyQWdlbnRQcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2Q0FBNkM7OztBQVc5QjtBQVNmLE1BQU1LLGlDQUFtQkwsb0RBQWFBLENBQ3BDTTtBQUdLLE1BQU1DLHNCQUFzQjs7SUFDakMsTUFBTUMsVUFBVVAsaURBQVVBLENBQUNJO0lBQzNCLElBQUlHLFlBQVlGLFdBQVc7UUFDekIsTUFBTSxJQUFJRyxNQUNSO0lBRUo7SUFDQSxPQUFPRDtBQUNULEVBQUU7R0FSV0Q7QUFjTixNQUFNRyxvQkFBc0Q7UUFBQyxFQUNsRUMsUUFBUSxFQUNSQyxXQUFXQyxhQUFhLEVBQ3pCOztJQUNDLE1BQU0sQ0FBQ0QsV0FBV0UsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FDeENXO0lBR0ZWLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxLQUE2QixJQUFJLENBQUNTLFdBQVc7WUFDL0NFLGFBQWFDLE9BQU9DLFNBQVMsQ0FBQ0osU0FBUztRQUN6QztJQUNGLEdBQUc7UUFBQ0E7S0FBVTtJQUVkLE1BQU1LLFFBQVFiLDhDQUFPQSxDQUFDLElBQU87WUFBRVE7WUFBV0U7UUFBYSxJQUFJO1FBQUNGO0tBQVU7SUFFdEUscUJBQ0UsOERBQUNQLGlCQUFpQmEsUUFBUTtRQUFDRCxPQUFPQTtrQkFDL0JOOzs7Ozs7QUFHUCxFQUFFO0lBckJXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm92aWRlcnMvdXNlckFnZW50UHJvdmlkZXIudHN4PzBhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9wcm92aWRlcnMvdXNlckFnZW50UHJvdmlkZXIudHN4XG5cblwidXNlIGNsaWVudFwiOyAvLyBBZGQgdGhpcyBkaXJlY3RpdmUgdG8gbWFyayB0aGUgY29tcG9uZW50IGFzIGEgY2xpZW50LXNpZGUgY29tcG9uZW50XG5cbmltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZUNvbnRleHQsXG4gIHVzZVN0YXRlLFxuICB1c2VFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIFJlYWN0Tm9kZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgVXNlckFnZW50ID0gc3RyaW5nO1xuXG50eXBlIFVzZXJBZ2VudENvbnRleHRUeXBlID0ge1xuICB1c2VyQWdlbnQ6IFVzZXJBZ2VudCB8IHVuZGVmaW5lZDtcbiAgc2V0VXNlckFnZW50OiAodXNlckFnZW50OiBcIlVzZXJBZ2VudFwiIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xufTtcblxuY29uc3QgVXNlckFnZW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VXNlckFnZW50Q29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KFxuICB1bmRlZmluZWRcbik7XG5cbmV4cG9ydCBjb25zdCB1c2VVc2VyQWdlbnRDb250ZXh0ID0gKCk6IFVzZXJBZ2VudENvbnRleHRUeXBlID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckFnZW50Q29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcInVzZVVzZXJBZ2VudENvbnRleHQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFVzZXJBZ2VudFByb3ZpZGVyXCJcbiAgICApO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcbnR5cGUgVXNlckFnZW50UHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgdXNlckFnZW50PzogVXNlckFnZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJBZ2VudFByb3ZpZGVyOiBSZWFjdC5GQzxVc2VyQWdlbnRQcm92aWRlclByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICB1c2VyQWdlbnQ6IHVzZXJBZ2VudFByb3AsXG59KSA9PiB7XG4gIGNvbnN0IFt1c2VyQWdlbnQsIHNldFVzZXJBZ2VudF0gPSB1c2VTdGF0ZTxVc2VyQWdlbnQgfCB1bmRlZmluZWQ+KFxuICAgIHVzZXJBZ2VudFByb3BcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmICF1c2VyQWdlbnQpIHtcbiAgICAgIHNldFVzZXJBZ2VudCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuICB9LCBbdXNlckFnZW50XSk7XG5cbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7IHVzZXJBZ2VudCwgc2V0VXNlckFnZW50IH0pLCBbdXNlckFnZW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckFnZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVXNlckFnZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJVc2VyQWdlbnRDb250ZXh0IiwidW5kZWZpbmVkIiwidXNlVXNlckFnZW50Q29udGV4dCIsImNvbnRleHQiLCJFcnJvciIsIlVzZXJBZ2VudFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyQWdlbnQiLCJ1c2VyQWdlbnRQcm9wIiwic2V0VXNlckFnZW50Iiwid2luZG93IiwibmF2aWdhdG9yIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/providers/userAgentProvider.tsx\n"));

/***/ })

});