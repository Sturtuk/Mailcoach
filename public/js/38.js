(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./resources/js/components/Paginator.tsx":
/*!***********************************************!*\
  !*** ./resources/js/components/Paginator.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Paginator; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Paginator(_ref) {\n  var currentPage = _ref.currentPage,\n      lastPage = _ref.lastPage,\n      labels = _ref.labels,\n      onChange = _ref.onChange;\n  var hasPrevious = currentPage > 1;\n  var hasNext = currentPage < lastPage;\n\n  if (!hasNext && !hasPrevious) {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"grid cols-auto justify-center gap-4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: hasPrevious ? 'link' : 'text-gray-500',\n    disabled: !hasPrevious,\n    onClick: function onClick() {\n      return onChange(currentPage - 1);\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"mr-2 fas fa-angle-left opacity-50\"\n  }), labels ? labels.previous : 'Previous'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: hasNext ? 'link' : 'text-gray-500',\n    disabled: !hasNext,\n    onClick: function onClick() {\n      return onChange(currentPage + 1);\n    }\n  }, labels ? labels.next : 'Next', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"ml-2 fas fa-angle-right opacity-50\"\n  })));\n}\n\n//# sourceURL=webpack:///./resources/js/components/Paginator.tsx?");

/***/ }),

/***/ "./resources/js/components/SortToggle.tsx":
/*!************************************************!*\
  !*** ./resources/js/components/SortToggle.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SortToggle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SortToggle(_ref) {\n  var name = _ref.name,\n      value = _ref.value,\n      onChange = _ref.onChange,\n      className = _ref.className,\n      children = _ref.children;\n  var isActive = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"trimStart\"])(value, '-') === name;\n  var isDesc = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"startsWith\"])(value, '-');\n\n  function handleClick(event) {\n    event.preventDefault();\n    onChange(isActive ? \"\".concat(isDesc ? '' : '-').concat(name) : name);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleClick,\n    className: \"\".concat(className, \" focus:outline-none\")\n  }, children, isActive && (isDesc ? ' ↓' : ' ↑'));\n}\n\n//# sourceURL=webpack:///./resources/js/components/SortToggle.tsx?");

/***/ }),

/***/ "./resources/js/hooks/useDebounce.ts":
/*!*******************************************!*\
  !*** ./resources/js/hooks/useDebounce.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useDebounce; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useDebounce(callback, deps) {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"debounce\"])(callback, 250), deps);\n}\n\n//# sourceURL=webpack:///./resources/js/hooks/useDebounce.ts?");

/***/ }),

/***/ "./resources/js/hooks/useFetcher.ts":
/*!******************************************!*\
  !*** ./resources/js/hooks/useFetcher.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useFetcher; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDebounce */ \"./resources/js/hooks/useDebounce.ts\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ \"./node_modules/@inertiajs/inertia/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction useFetcher(_ref) {\n  var key = _ref.key,\n      url = _ref.url,\n      defaultSort = _ref.defaultSort;\n\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__[\"usePage\"])(),\n      request = _usePage.request;\n\n  var debouncedFetch = Object(_useDebounce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function (_ref2) {\n    var sort = _ref2.sort,\n        page = _ref2.page,\n        filter = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, [\"sort\", \"page\"]);\n\n    var queryParams = Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"defaultsDeep\"])({\n      sort: sort,\n      page: page,\n      filter: filter\n    }, request.query);\n\n    if (queryParams.sort === defaultSort) {\n      queryParams.sort = undefined;\n    }\n\n    if (!queryParams.sort) {\n      queryParams.sort = undefined;\n    }\n\n    if (queryParams.page === 1) {\n      queryParams.page = undefined;\n    }\n\n    queryParams.filter = Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"mapValues\"])(queryParams.filter, function (value) {\n      return value ? value : undefined;\n    });\n    var queryString = Object(qs__WEBPACK_IMPORTED_MODULE_5__[\"stringify\"])(queryParams, {\n      skipNulls: true,\n      sort: alphabeticalSort\n    });\n    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__[\"Inertia\"].visit(queryString ? \"\".concat(url, \"?\").concat(queryString) : url, {\n      preserveState: true,\n      preserveScroll: queryParams.page !== request.query.page,\n      only: [key, 'request']\n    });\n  }, [request, key, url, defaultSort]);\n  var _request$query = request.query,\n      sort = _request$query.sort,\n      page = _request$query.page,\n      filter = _request$query.filter;\n  return [_objectSpread({\n    sort: sort || defaultSort,\n    page: page || 1\n  }, filter), debouncedFetch];\n}\n\nfunction alphabeticalSort(a, b) {\n  return a.localeCompare(b);\n}\n\n//# sourceURL=webpack:///./resources/js/hooks/useFetcher.ts?");

/***/ }),

/***/ "./resources/js/views/users/Index.tsx":
/*!********************************************!*\
  !*** ./resources/js/views/users/Index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Layout */ \"./resources/js/views/layouts/Layout.tsx\");\n/* harmony import */ var hooks_useFetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useFetcher */ \"./resources/js/hooks/useFetcher.ts\");\n/* harmony import */ var components_SortToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SortToggle */ \"./resources/js/components/SortToggle.tsx\");\n/* harmony import */ var components_Paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Paginator */ \"./resources/js/components/Paginator.tsx\");\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/index */ \"./resources/js/util/index.ts\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @inertiajs/inertia */ \"./node_modules/@inertiajs/inertia/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nfunction Index(_ref) {\n  var users = _ref.users,\n      total_users_count = _ref.total_users_count,\n      links = _ref.links;\n\n  var _useFetcher = Object(hooks_useFetcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    key: 'users',\n    url: links.users.index,\n    defaultSort: 'email'\n  }),\n      _useFetcher2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useFetcher, 2),\n      query = _useFetcher2[0],\n      fetchUsers = _useFetcher2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Users\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"main\", {\n    className: \"layout-main\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", {\n    className: \"card card-grid\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", {\n    className: \"markup-h1\"\n  }, \"Users\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"flex justify-between\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__[\"InertiaLink\"], {\n    href: links.users.create,\n    className: \"button\"\n  }, \"Add user\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-input w-64 rounded-full\",\n    placeholder: \"Filter users\\u2026\",\n    defaultValue: query.search,\n    onChange: function onChange(e) {\n      return fetchUsers({\n        search: e.target.value\n      });\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"table\", {\n    className: \"table\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SortToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    name: \"email\",\n    value: query.sort,\n    onChange: function onChange(sort) {\n      return fetchUsers({\n        sort: sort\n      });\n    }\n  }, \"Email\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SortToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    name: \"name\",\n    value: query.sort,\n    onChange: function onChange(sort) {\n      return fetchUsers({\n        sort: sort\n      });\n    }\n  }, \"Name\")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tbody\", null, users.data.map(function (user) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", {\n      key: user.id,\n      className: \"tr-clickable\",\n      onClick: function onClick() {\n        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_8__[\"Inertia\"].visit(user.links.edit);\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", null, user.email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", null, user.name));\n  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n    className: \"table-status\"\n  }, users.meta.total !== total_users_count ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, \"Displaying \", users.meta.total, \" of \", total_users_count, ' ', Object(_util_index__WEBPACK_IMPORTED_MODULE_6__[\"pluralize\"])('subscriber', total_users_count), \".\", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__[\"InertiaLink\"], {\n    href: links.users.index,\n    className: \"underline\"\n  }, \"Show all\")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, \"Displaying all \", total_users_count, \" \", Object(_util_index__WEBPACK_IMPORTED_MODULE_6__[\"pluralize\"])('subscriber', total_users_count), \".\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Paginator__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    currentPage: users.meta.current_page,\n    lastPage: users.meta.last_page,\n    onChange: function onChange(page) {\n      return fetchUsers({\n        page: page\n      });\n    }\n  }))));\n}\n\n//# sourceURL=webpack:///./resources/js/views/users/Index.tsx?");

/***/ })

}]);