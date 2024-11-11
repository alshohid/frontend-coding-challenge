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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserAgentProvider: function() { return /* binding */ UserAgentProvider; },\n/* harmony export */   useUserAgentContext: function() { return /* binding */ useUserAgentContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ useUserAgentContext,UserAgentProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst CONTEXT_ERROR = \"useUserAgentContext must be used within a UserAgentProvider\";\nconst UserAgentContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Custom hook to access the user agent context\nconst useUserAgentContext = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserAgentContext);\n    if (!context) {\n        throw new Error(CONTEXT_ERROR);\n    }\n    return context;\n};\n_s(useUserAgentContext, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n// UserAgentProvider component\nconst UserAgentProvider = (param)=>{\n    let { children, userAgent: userAgentProp } = param;\n    _s1();\n    // Local state for storing userAgent\n    const [userAgent, setUserAgent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userAgentProp);\n    // Effect hook to set the user agent when the component mounts (client-side only)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ( true && !userAgent) {\n            // Set user agent from window.navigator on the client-side\n            setUserAgent(window.navigator.userAgent);\n        }\n    }, [\n        userAgent\n    ]);\n    // Memoizing the context value to optimize re-renders\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            userAgent,\n            setUserAgent\n        }), [\n        userAgent\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserAgentContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/shohid/Downloads/frontend-coding-challenge/src/components/providers/userAgentProvider.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(UserAgentProvider, \"WeL0t7BdTyRoHdI/OrLYIonScwk=\");\n_c = UserAgentProvider;\nvar _c;\n$RefreshReg$(_c, \"UserAgentProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy91c2VyQWdlbnRQcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVFlO0FBR2YsTUFBTUssZ0JBQ0o7QUFlRixNQUFNQyxpQ0FBbUJOLG9EQUFhQSxDQUNwQ087QUFHRiwrQ0FBK0M7QUFDeEMsTUFBTUMsc0JBQXNCOztJQUNqQyxNQUFNQyxVQUFVUixpREFBVUEsQ0FBQ0s7SUFDM0IsSUFBSSxDQUFDRyxTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNTDtJQUNsQjtJQUNBLE9BQU9JO0FBQ1QsRUFBRTtHQU5XRDtBQVFiLDhCQUE4QjtBQUN2QixNQUFNRyxvQkFBc0Q7UUFBQyxFQUNsRUMsUUFBUSxFQUNSQyxXQUFXQyxhQUFhLEVBQ3pCOztJQUNDLG9DQUFvQztJQUNwQyxNQUFNLENBQUNELFdBQVdFLGFBQWEsR0FBR1osK0NBQVFBLENBQ3hDVztJQUdGLGlGQUFpRjtJQUNqRlYsZ0RBQVNBLENBQUM7UUFDUixJQUFJLEtBQTZCLElBQUksQ0FBQ1MsV0FBVztZQUMvQywwREFBMEQ7WUFDMURFLGFBQWFDLE9BQU9DLFNBQVMsQ0FBQ0osU0FBUztRQUN6QztJQUNGLEdBQUc7UUFBQ0E7S0FBVTtJQUVkLHFEQUFxRDtJQUNyRCxNQUFNSyxRQUFRaEIsOENBQU9BLENBQ25CLElBQU87WUFDTFc7WUFDQUU7UUFDRixJQUNBO1FBQUNGO0tBQVU7SUFHYixxQkFDRSw4REFBQ1AsaUJBQWlCYSxRQUFRO1FBQUNELE9BQU9BO2tCQUMvQk47Ozs7OztBQUdQLEVBQUU7SUEvQldEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVycy91c2VyQWdlbnRQcm92aWRlci50c3g/MGE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlQ29udGV4dCxcbiAgdXNlTWVtbyxcbiAgdXNlU3RhdGUsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlRWZmZWN0LFxufSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBDT05URVhUX0VSUk9SID1cbiAgXCJ1c2VVc2VyQWdlbnRDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVc2VyQWdlbnRQcm92aWRlclwiO1xuXG50eXBlIFVzZXJBZ2VudCA9IHN0cmluZztcblxudHlwZSBVc2VyQWdlbnRDb250ZXh0VHlwZSA9IHtcbiAgdXNlckFnZW50OiBVc2VyQWdlbnQgfCB1bmRlZmluZWQ7XG4gIHNldFVzZXJBZ2VudDogKHVzZXJBZ2VudDogVXNlckFnZW50IHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xufTtcblxudHlwZSBVc2VyQWdlbnRQcm92aWRlclByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICB1c2VyQWdlbnQ/OiBVc2VyQWdlbnQ7XG59O1xuXG5cbmNvbnN0IFVzZXJBZ2VudENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVzZXJBZ2VudENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPihcbiAgdW5kZWZpbmVkXG4pO1xuXG4vLyBDdXN0b20gaG9vayB0byBhY2Nlc3MgdGhlIHVzZXIgYWdlbnQgY29udGV4dFxuZXhwb3J0IGNvbnN0IHVzZVVzZXJBZ2VudENvbnRleHQgPSAoKTogVXNlckFnZW50Q29udGV4dFR5cGUgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQWdlbnRDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKENPTlRFWFRfRVJST1IpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuLy8gVXNlckFnZW50UHJvdmlkZXIgY29tcG9uZW50XG5leHBvcnQgY29uc3QgVXNlckFnZW50UHJvdmlkZXI6IFJlYWN0LkZDPFVzZXJBZ2VudFByb3ZpZGVyUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHVzZXJBZ2VudDogdXNlckFnZW50UHJvcCxcbn0pID0+IHtcbiAgLy8gTG9jYWwgc3RhdGUgZm9yIHN0b3JpbmcgdXNlckFnZW50XG4gIGNvbnN0IFt1c2VyQWdlbnQsIHNldFVzZXJBZ2VudF0gPSB1c2VTdGF0ZTxVc2VyQWdlbnQgfCB1bmRlZmluZWQ+KFxuICAgIHVzZXJBZ2VudFByb3BcbiAgKTtcblxuICAvLyBFZmZlY3QgaG9vayB0byBzZXQgdGhlIHVzZXIgYWdlbnQgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyAoY2xpZW50LXNpZGUgb25seSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdXNlckFnZW50KSB7XG4gICAgICAvLyBTZXQgdXNlciBhZ2VudCBmcm9tIHdpbmRvdy5uYXZpZ2F0b3Igb24gdGhlIGNsaWVudC1zaWRlXG4gICAgICBzZXRVc2VyQWdlbnQod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cbiAgfSwgW3VzZXJBZ2VudF0pO1xuXG4gIC8vIE1lbW9pemluZyB0aGUgY29udGV4dCB2YWx1ZSB0byBvcHRpbWl6ZSByZS1yZW5kZXJzXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbzxVc2VyQWdlbnRDb250ZXh0VHlwZT4oXG4gICAgKCkgPT4gKHtcbiAgICAgIHVzZXJBZ2VudCxcbiAgICAgIHNldFVzZXJBZ2VudCxcbiAgICB9KSxcbiAgICBbdXNlckFnZW50XVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJBZ2VudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1VzZXJBZ2VudENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ09OVEVYVF9FUlJPUiIsIlVzZXJBZ2VudENvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VVc2VyQWdlbnRDb250ZXh0IiwiY29udGV4dCIsIkVycm9yIiwiVXNlckFnZW50UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJBZ2VudCIsInVzZXJBZ2VudFByb3AiLCJzZXRVc2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/providers/userAgentProvider.tsx\n"));

/***/ })

});