"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/user-agent/page",{

/***/ "(app-pages-browser)/./src/components/providers/userAgentProvider.tsx":
/*!********************************************************!*\
  !*** ./src/components/providers/userAgentProvider.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserAgentProvider: function() { return /* binding */ UserAgentProvider; },\n/* harmony export */   useUserAgentContext: function() { return /* binding */ useUserAgentContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\"use clietn\";\n\n// Error constant for context\nconst CONTEXT_ERROR = \"useUserAgentContext must be used within a UserAgentProvider\";\n// Creating the context\nconst UserAgentContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Custom hook to access the user agent context\nconst useUserAgentContext = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserAgentContext);\n    if (!context) {\n        throw new Error(CONTEXT_ERROR);\n    }\n    return context;\n};\n_s(useUserAgentContext, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n// UserAgentProvider component\nconst UserAgentProvider = (param)=>{\n    let { children, userAgent: userAgentProp } = param;\n    _s1();\n    // Local state for storing userAgent\n    const [userAgent, setUserAgent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userAgentProp);\n    // Effect hook to set the user agent when the component mounts (client-side only)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ( true && !userAgent) {\n            // Set user agent from window.navigator on the client-side\n            setUserAgent(window.navigator.userAgent);\n        }\n    }, [\n        userAgent\n    ]);\n    // Memoizing the context value to optimize re-renders\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            userAgent,\n            setUserAgent\n        }), [\n        userAgent\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserAgentContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/shohid/Downloads/frontend-coding-challenge/src/components/providers/userAgentProvider.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(UserAgentProvider, \"WeL0t7BdTyRoHdI/OrLYIonScwk=\");\n_c = UserAgentProvider;\nvar _c;\n$RefreshReg$(_c, \"UserAgentProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy91c2VyQWdlbnRQcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBUWU7QUFFZiw2QkFBNkI7QUFDN0IsTUFBTUssZ0JBQ0o7QUFlRix1QkFBdUI7QUFDdkIsTUFBTUMsaUNBQW1CTixvREFBYUEsQ0FDcENPO0FBR0YsK0NBQStDO0FBQ3hDLE1BQU1DLHNCQUFzQjs7SUFDakMsTUFBTUMsVUFBVVIsaURBQVVBLENBQUNLO0lBQzNCLElBQUksQ0FBQ0csU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTUw7SUFDbEI7SUFDQSxPQUFPSTtBQUNULEVBQUU7R0FOV0Q7QUFRYiw4QkFBOEI7QUFDdkIsTUFBTUcsb0JBQXNEO1FBQUMsRUFDbEVDLFFBQVEsRUFDUkMsV0FBV0MsYUFBYSxFQUN6Qjs7SUFDQyxvQ0FBb0M7SUFDcEMsTUFBTSxDQUFDRCxXQUFXRSxhQUFhLEdBQUdaLCtDQUFRQSxDQUN4Q1c7SUFHRixpRkFBaUY7SUFDakZWLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxLQUE2QixJQUFJLENBQUNTLFdBQVc7WUFDL0MsMERBQTBEO1lBQzFERSxhQUFhQyxPQUFPQyxTQUFTLENBQUNKLFNBQVM7UUFDekM7SUFDRixHQUFHO1FBQUNBO0tBQVU7SUFFZCxxREFBcUQ7SUFDckQsTUFBTUssUUFBUWhCLDhDQUFPQSxDQUNuQixJQUFPO1lBQ0xXO1lBQ0FFO1FBQ0YsSUFDQTtRQUFDRjtLQUFVO0lBR2IscUJBQ0UsOERBQUNQLGlCQUFpQmEsUUFBUTtRQUFDRCxPQUFPQTtrQkFDL0JOOzs7Ozs7QUFHUCxFQUFFO0lBL0JXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm92aWRlcnMvdXNlckFnZW50UHJvdmlkZXIudHN4PzBhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZXRuXCJcbmltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZUNvbnRleHQsXG4gIHVzZU1lbW8sXG4gIHVzZVN0YXRlLFxuICBSZWFjdE5vZGUsXG4gIHVzZUVmZmVjdCxcbn0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIEVycm9yIGNvbnN0YW50IGZvciBjb250ZXh0XG5jb25zdCBDT05URVhUX0VSUk9SID1cbiAgXCJ1c2VVc2VyQWdlbnRDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVc2VyQWdlbnRQcm92aWRlclwiO1xuXG4vLyBEZWZpbmluZyB0eXBlcyBmb3IgVXNlckFnZW50IGFuZCBDb250ZXh0XG50eXBlIFVzZXJBZ2VudCA9IHN0cmluZztcblxudHlwZSBVc2VyQWdlbnRDb250ZXh0VHlwZSA9IHtcbiAgdXNlckFnZW50OiBVc2VyQWdlbnQgfCB1bmRlZmluZWQ7XG4gIHNldFVzZXJBZ2VudDogKHVzZXJBZ2VudDogVXNlckFnZW50IHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xufTtcblxudHlwZSBVc2VyQWdlbnRQcm92aWRlclByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICB1c2VyQWdlbnQ/OiBVc2VyQWdlbnQ7XG59O1xuXG4vLyBDcmVhdGluZyB0aGUgY29udGV4dFxuY29uc3QgVXNlckFnZW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VXNlckFnZW50Q29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KFxuICB1bmRlZmluZWRcbik7XG5cbi8vIEN1c3RvbSBob29rIHRvIGFjY2VzcyB0aGUgdXNlciBhZ2VudCBjb250ZXh0XG5leHBvcnQgY29uc3QgdXNlVXNlckFnZW50Q29udGV4dCA9ICgpOiBVc2VyQWdlbnRDb250ZXh0VHlwZSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJBZ2VudENvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoQ09OVEVYVF9FUlJPUik7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG4vLyBVc2VyQWdlbnRQcm92aWRlciBjb21wb25lbnRcbmV4cG9ydCBjb25zdCBVc2VyQWdlbnRQcm92aWRlcjogUmVhY3QuRkM8VXNlckFnZW50UHJvdmlkZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgdXNlckFnZW50OiB1c2VyQWdlbnRQcm9wLFxufSkgPT4ge1xuICAvLyBMb2NhbCBzdGF0ZSBmb3Igc3RvcmluZyB1c2VyQWdlbnRcbiAgY29uc3QgW3VzZXJBZ2VudCwgc2V0VXNlckFnZW50XSA9IHVzZVN0YXRlPFVzZXJBZ2VudCB8IHVuZGVmaW5lZD4oXG4gICAgdXNlckFnZW50UHJvcFxuICApO1xuXG4gIC8vIEVmZmVjdCBob29rIHRvIHNldCB0aGUgdXNlciBhZ2VudCB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzIChjbGllbnQtc2lkZSBvbmx5KVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmICF1c2VyQWdlbnQpIHtcbiAgICAgIC8vIFNldCB1c2VyIGFnZW50IGZyb20gd2luZG93Lm5hdmlnYXRvciBvbiB0aGUgY2xpZW50LXNpZGVcbiAgICAgIHNldFVzZXJBZ2VudCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuICB9LCBbdXNlckFnZW50XSk7XG5cbiAgLy8gTWVtb2l6aW5nIHRoZSBjb250ZXh0IHZhbHVlIHRvIG9wdGltaXplIHJlLXJlbmRlcnNcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vPFVzZXJBZ2VudENvbnRleHRUeXBlPihcbiAgICAoKSA9PiAoe1xuICAgICAgdXNlckFnZW50LFxuICAgICAgc2V0VXNlckFnZW50LFxuICAgIH0pLFxuICAgIFt1c2VyQWdlbnRdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckFnZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVXNlckFnZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDT05URVhUX0VSUk9SIiwiVXNlckFnZW50Q29udGV4dCIsInVuZGVmaW5lZCIsInVzZVVzZXJBZ2VudENvbnRleHQiLCJjb250ZXh0IiwiRXJyb3IiLCJVc2VyQWdlbnRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlckFnZW50IiwidXNlckFnZW50UHJvcCIsInNldFVzZXJBZ2VudCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/providers/userAgentProvider.tsx\n"));

/***/ })

});