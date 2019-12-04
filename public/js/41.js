(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./resources/js/components/NavigationLink.tsx":
/*!****************************************************!*\
  !*** ./resources/js/components/NavigationLink.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavigationLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction NavigationLink(_ref) {\n  var href = _ref.href,\n      children = _ref.children;\n\n  function activeClass(routeUrl) {\n    return window.location.href.startsWith(routeUrl) ? 'is-active' : '';\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__[\"InertiaLink\"], {\n    className: \"\".concat(activeClass(href), \" hover:text-green-500\"),\n    href: href\n  }, children);\n}\n\n//# sourceURL=webpack:///./resources/js/components/NavigationLink.tsx?");

/***/ }),

/***/ "./resources/js/views/layouts/Layout.tsx":
/*!***********************************************!*\
  !*** ./resources/js/views/layouts/Layout.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var views_layouts_components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! views/layouts/components/Navigation */ \"./resources/js/views/layouts/components/Navigation.tsx\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var views_layouts_components_Flash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! views/layouts/components/Flash */ \"./resources/js/views/layouts/components/Flash.tsx\");\n\n\n\n\nfunction Layout(_ref) {\n  var children = _ref.children,\n      title = _ref.title;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.title = \"\".concat(title, \" \\u2013 Email Campaigns\");\n  }, [title]);\n\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__[\"usePage\"])(),\n      current_user = _usePage.current_user;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, current_user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(views_layouts_components_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(views_layouts_components_Flash__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), children);\n}\n\n//# sourceURL=webpack:///./resources/js/views/layouts/Layout.tsx?");

/***/ }),

/***/ "./resources/js/views/layouts/components/Flash.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/views/layouts/components/Flash.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Flash; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Flash() {\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__[\"usePage\"])(),\n      flash = _usePage.flash;\n\n  return flash && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: flash.type === 'success' ? 'bg-green-200' : 'bg-red-200'\n  }, flash.message);\n}\n\n//# sourceURL=webpack:///./resources/js/views/layouts/components/Flash.tsx?");

/***/ }),

/***/ "./resources/js/views/layouts/components/Navigation.tsx":
/*!**************************************************************!*\
  !*** ./resources/js/views/layouts/components/Navigation.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navigation; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/NavigationLink */ \"./resources/js/components/NavigationLink.tsx\");\n\n\n\n\nfunction Navigation() {\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__[\"usePage\"])(),\n      links = _usePage.links;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      expanded = _useState2[0],\n      setExpanded = _useState2[1];\n\n  function toggleExpanded() {\n    setExpanded(!expanded);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (expanded) {\n      window.addEventListener('click', toggleExpanded);\n    }\n\n    return function () {\n      window.removeEventListener('click', toggleExpanded);\n    };\n  }, [expanded]);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"header\", {\n    className: \"py-6 text-gray-700\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"nav\", {\n    className: \"layout-col flex justify-between items-center\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__[\"InertiaLink\"], {\n    href: \"/\",\n    className: \"group flex justify-start items-center leading-none\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"svg\", {\n    className: \"h-8 w-auto mr-2\",\n    viewBox: \"0 0 512 440\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"g\", {\n    className: \"opacity-0 group-hover:opacity-100\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ellipse\", {\n    transform: \"matrix(0.7071 -0.7071 0.7071 0.7071 -118.8743 389.8963)\",\n    fill: \"#9AE6B4\",\n    cx: \"411.2\",\n    cy: \"338.4\",\n    rx: \"92.8\",\n    ry: \"92.8\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ellipse\", {\n    transform: \"matrix(0.7071 -0.7071 0.7071 0.7071 -210.0841 169.6964)\",\n    fill: \"#9AE6B4\",\n    cx: \"99.8\",\n    cy: \"338.4\",\n    rx: \"92.8\",\n    ry: \"92.8\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n    fill: \"#9AE6B4\",\n    d: \"M444.5,30.9c0,0-113.8-21.4-189.6-21.4c-75.7,0-188.4,21.4-188.4,21.4l22.4,191.7 c65.6,13.1,123.4,47.8,165.7,96.3l0.2,0.1c42.7-49,101-83.8,167.3-96.7L444.5,30.9z\"\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"g\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n    fill: \"#4A5568\",\n    d: \"M99.8,245.7C48.6,245.7,7,287.2,7,338.4s41.5,92.8,92.8,92.8c51.2,0,92.8-41.5,92.8-92.8 S151,245.7,99.8,245.7z M99.8,391.6c-29.3,0-53.1-23.8-53.1-53.1s23.8-53.1,53.1-53.1c29.3,0,53.1,23.8,53.1,53.1 S129.1,391.6,99.8,391.6z\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n    fill: \"#4A5568\",\n    d: \"M411.2,245.7c-51.2,0-92.8,41.5-92.8,92.8s41.5,92.8,92.8,92.8c51.2,0,92.8-41.5,92.8-92.8 S462.5,245.7,411.2,245.7z M411.2,391.6c-29.3,0-53.1-23.8-53.1-53.1s23.8-53.1,53.1-53.1c29.3,0,53.1,23.8,53.1,53.1 S440.5,391.6,411.2,391.6z\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n    fill: \"#4A5568\",\n    d: \"M444.5,30.9c0,0-113.8-21.4-189.6-21.4c-75.7,0-188.4,21.4-188.4,21.4l22.4,191.7 c65.6,13.1,123.4,47.8,165.7,96.3l0.2,0.1c42.7-49,101-83.8,167.3-96.7L444.5,30.9z M254.9,49.1c45.6,0,107.2,8.4,145.8,14.6 l-13.4,114.2L338,123.8l26-19.7l-17.3-22.9L257.1,149l-89.6-67.7l-17.3,22.9l25,18.9l-51.4,56.7L110.3,63.6 C148.6,57.5,209.5,49.1,254.9,49.1z M254.7,262.8c-31.8-28.3-68.7-50.5-108.5-65.1l51.9-57.3l58.9,44.5l57.9-43.8l50.7,55.6 C325,211.4,287.2,233.9,254.7,262.8z\"\n  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    className: \"font-bold text-lg\"\n  }, \"MailCoach\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", {\n    className: \"grid cols-auto justify-end gap-6 leading-none\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    href: links.campaigns.index\n  }, \"Campaigns\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    href: links.templates.index\n  }, \"Templates\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    href: links.email_lists.index\n  }, \"Email lists\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    href: links.subscribers.index\n  }, \"Subscribers\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: \"group\",\n    onClick: toggleExpanded\n  }, \"Service\", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    className: \"\".concat(!expanded ? 'opacity-0' : '', \" fas fa-user absolute top-0 left-0 text-green-300 group-hover:opacity-100\")\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    className: \"far fa-user z-10\"\n  })), expanded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"absolute right-0 -mr-2 z-10 p-6 bg-gray-200 shadow-xl\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", {\n    className: \"grid gap-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__[\"InertiaLink\"], {\n    className: \"hover:text-green-500\",\n    href: links.account.index\n  }, \"Account\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__[\"InertiaLink\"], {\n    className: \"hover:text-green-500\",\n    href: links.users.index\n  }, \"Users\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__[\"InertiaLink\"], {\n    className: \"hover:text-green-500\",\n    href: links.configuration.index\n  }, \"Configuration\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__[\"InertiaLink\"], {\n    className: \"hover:text-green-500\",\n    method: \"POST\",\n    href: links.account.logout\n  }, \"Log out\"))))))));\n}\n\n//# sourceURL=webpack:///./resources/js/views/layouts/components/Navigation.tsx?");

/***/ }),

/***/ "./resources/js/views/subscribers/Create.tsx":
/*!***************************************************!*\
  !*** ./resources/js/views/subscribers/Create.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Create; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var views_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! views/layouts/Layout */ \"./resources/js/views/layouts/Layout.tsx\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms */ \"./resources/js/forms/index.tsx\");\n/* harmony import */ var _partials_SubscriberFormFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/SubscriberFormFields */ \"./resources/js/views/subscribers/partials/SubscriberFormFields.tsx\");\n\n\n\n\n\nfunction Create(_ref) {\n  var subscriber = _ref.subscriber,\n      emailListOptions = _ref.emailListOptions,\n      links = _ref.links;\n  var form = Object(_forms__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"])(subscriber, subscriber.links.store, 'POST');\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(views_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Create subscriber\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    className: \"layout-main\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"card card-grid\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"breadcrumbs\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__[\"InertiaLink\"], {\n    href: links.subscribers.index\n  }, \"Subscribers\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Create a new subscriber\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"card-grid\",\n    onSubmit: form.submit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_SubscriberFormFields__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    emailListOptions: emailListOptions,\n    form: form\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"buttons\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"button\"\n  }, \"Save\"))))));\n}\n\n//# sourceURL=webpack:///./resources/js/views/subscribers/Create.tsx?");

/***/ })

}]);