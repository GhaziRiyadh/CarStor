"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/navigation.vue */ "./resources/js/components/navigation.vue");
/* harmony import */ var _components_footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/footer.vue */ "./resources/js/components/footer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    navigation: _components_navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _components_footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    classes: String,
    Auth: Boolean,
    userImage: {
      type: String,
      "default": '/images/person.jpg'
    },
    userName: {
      type: String,
      "default": 'Itsmy'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Layouts_AppLayout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/AppLayout.vue */ "./resources/js/Layouts/AppLayout.vue");
/* harmony import */ var _components_card_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/card.vue */ "./resources/js/components/card.vue");
/* harmony import */ var _components_slider_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/slider.vue */ "./resources/js/components/slider.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Home",
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link,
    layout: _Layouts_AppLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CFcard: _components_card_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    slider: _components_slider_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  layout: _Layouts_AppLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      actives: {
        type: Boolean,
        "default": false
      },
      card: {
        desc: "pport For information about buying this title in bulk quantities, or for special sales which may include electronic versions; custom cover designs; and Sign opportunitie",
        image: "/images/cardImage.jpg",
        imagedesc: "Morcedce"
      }
    };
  },
  created: function created() {
    this.actives = false;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/button.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/button.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    btnType: {
      type: String,
      "default": "button"
    },
    text: {
      type: String,
      "default": "button"
    },
    classes: {
      type: String,
      "default": 'h-[40px] w-[140px]'
    },
    btnFun: Function
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/card.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/card.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/button.vue */ "./resources/js/components/button.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CFcard",
  components: {
    Button: _components_button_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: {
    carddata: {
      type: Object,
      "default": {
        image: "/images/cardImage.jpg",
        imagedesc: "imagedesc",
        title: "Morcedce",
        date: "2020/10/16"
      }
    },
    done: {
      type: Boolean,
      "default": false
    },
    buttonText: {
      type: String,
      "default": "Buy"
    },
    listdata: {
      type: Object,
      "default": {
        "model": "sx21",
        "company": "Morcedce",
        "price": "32000"
      }
    },
    bayUrl: {
      type: String,
      "default": "Home"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/footer.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/footer.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_input_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/input.vue */ "./resources/js/components/input.vue");
/* harmony import */ var _components_button_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/button.vue */ "./resources/js/components/button.vue");
/* harmony import */ var _iconify_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/vue */ "./node_modules/@iconify/vue/dist/iconify.mjs");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Footer",
  components: {
    Input: _components_input_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CarStorButton: _components_button_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Icon: _iconify_vue__WEBPACK_IMPORTED_MODULE_2__.Icon,
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.Link
  },
  data: function data() {
    return {
      twitterHover: Boolean,
      facebookHover: Boolean,
      whatsappHover: Boolean
    };
  },
  created: function created() {
    this.twitterHover = this.facebookHover = this.whatsappHover = false;
  },
  methods: {
    submit: function submit() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/input.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/input.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    classes: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navItem.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navItem.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  props: {
    active: {
      type: Boolean
    },
    link: String,
    text: {
      type: String,
      "default": "Home"
    }
  },
  data: function data() {
    return {
      actives: false
    };
  },
  created: function created() {
    this.actives = this.active ? this.active : false;
    console.log(this.actives, window.location.href);
  },
  methods: {
    hoverFun: function hoverFun(type) {
      this.active ? this.actives = true : this.actives = type;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navigation.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navigation.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_navItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/navItem.vue */ "./resources/js/components/navItem.vue");
/* harmony import */ var _iconify_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/vue */ "./node_modules/@iconify/vue/dist/iconify.mjs");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "nav",
  props: {
    classes: String,
    Auth: Boolean,
    userImage: {
      type: String,
      "default": "/images/person.jpg"
    },
    userName: {
      type: String,
      "default": "Itsmy"
    }
  },
  components: {
    navItem: _components_navItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Icon: _iconify_vue__WEBPACK_IMPORTED_MODULE_1__.Icon,
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Link
  },
  data: function data() {
    return {
      active1: {
        type: Boolean,
        "default": false
      },
      imageClick: Boolean,
      activeItem: {
        type: Boolean,
        "default": false
      },
      cartHover: Boolean,
      favoriteHover: Boolean,
      logoutHover: Boolean,
      profileHover: Boolean,
      selfUrl: String
    };
  },
  created: function created() {
    this.active = this.activeItem = this.imageClick = this.cartHover = this.favoriteHover = this.logoutHover = this.profileHover = false;
    this.selfUrl = window.location.href;
  },
  methods: {
    hoverFun: function hoverFun(action, activeItem) {
      this.active = activeItem ? activeItem : action;
    },
    activeFun: function activeFun(cond) {
      this.active = cond;
    },
    activeFunction: function activeFunction(cond) {
      return cond;
    },
    logoutFun: function logoutFun() {
      axios__WEBPACK_IMPORTED_MODULE_3___default().post("/logout").then(function (res) {
        window.location.replace(route("home"));
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue3_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-carousel */ "./node_modules/vue3-carousel/dist/carousel.es.js");
/* harmony import */ var vue3_carousel_dist_carousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue3-carousel/dist/carousel.css */ "./node_modules/vue3-carousel/dist/carousel.css");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "WrapAround",
  components: {
    Carousel: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel,
    Slide: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide,
    Navigation: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Navigation
  },
  props: {
    slideImage: {
      type: Array,
      "default": ["/images/sliderImage.jpg", "/images/sliderImage.jpg", "/images/sliderImage.jpg", "/images/sliderImage.jpg"]
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full h-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navigation");

  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navigation, {
    classes: "sticky top-0 bg-white",
    Auth: $props.Auth
  }, null, 8
  /* PROPS */
  , ["Auth"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex h-screen"
};
var _hoisted_2 = {
  "class": "flex-col w-2/3 m-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_slider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("slider");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_slider)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/button.vue?vue&type=template&id=190d103d":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/button.vue?vue&type=template&id=190d103d ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["textContent", "type"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(" ".concat($props.classes, " ")),
    onClick: _cache[0] || (_cache[0] = function () {
      return $props.btnFun && $props.btnFun.apply($props, arguments);
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.text),
    type: _ctx.type
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/card.vue?vue&type=template&id=c170f44a":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/card.vue?vue&type=template&id=c170f44a ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex h-[200px] bg-white rounded-md border border-gray-300"
};
var _hoisted_2 = ["src", "alt"];
var _hoisted_3 = {
  "class": "w-3/5 h-full p-3"
};
var _hoisted_4 = {
  "class": "flex items-end w-full h-1/5"
};
var _hoisted_5 = ["textContent"];
var _hoisted_6 = ["textContent"];
var _hoisted_7 = {
  "class": "w-full py-3 h-3/5"
};
var _hoisted_8 = ["textContent"];
var _hoisted_9 = ["textContent"];
var _hoisted_10 = {
  "class": "flex items-center justify-end w-full h-1/5"
};
var _hoisted_11 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "object-cover w-2/5 h-full rounded-l-md",
    src: $props.carddata.image,
    alt: $props.carddata.imagedesc
  }, null, 8
  /* PROPS */
  , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.carddata.title),
    "class": "mr-auto text-lg text-textcolor"
  }, null, 8
  /* PROPS */
  , _hoisted_5), !$props.done ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("data", {
    key: 0,
    "class": "ml-auto text-sm text-gray-300",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.carddata.date)
  }, null, 8
  /* PROPS */
  , _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.listdata, function (key, value) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: value,
      "class": "flex items-center justify-start"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("".concat(value, ":")),
      "class": "w-1/2 text-sm h-1/3 text-textcolor"
    }, null, 8
    /* PROPS */
    , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(key),
      "class": "w-1/2 text-sm text-gray-400 h-1/3"
    }, null, 8
    /* PROPS */
    , _hoisted_9)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [!$props.done ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: _ctx.route($props.bayUrl),
    "class": "border border-gray-300 text-center p-[8px] rounded-md text-textcolor hover:bg-primary bg-white hover:text-white hover:border-none block w-[124px] h-[40px]",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.buttonText)
  }, null, 8
  /* PROPS */
  , ["href", "textContent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.done ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("data", {
    key: 1,
    "class": "ml-auto text-sm text-gray-300",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.carddata.date)
  }, null, 8
  /* PROPS */
  , _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/footer.vue?vue&type=template&id=585a4226":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/footer.vue?vue&type=template&id=585a4226 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex w-full h-auto p-3 lg:p-5 bg-textcolor"
};
var _hoisted_2 = {
  "class": "flex flex-col w-auto h-auto m-auto lg:flex-row"
};
var _hoisted_3 = {
  "class": "border-gray-300 lg:border-r w-full h-auto lg:w-[590px] lg:h-[316px] flex items-center justify-center"
};
var _hoisted_4 = {
  "class": "w-[208px] h-[120px]"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "w-full text-[36px] text-center text-gray-200"
}, "Follow us", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "flex items-center justify-between w-full"
};
var _hoisted_7 = {
  "class": "border-gray-300 lg:border-l r w-full h-auto lg:w-[590px] lg:h-[316px] flex items-center justify-center"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "w-full text-[36px] text-center text-gray-200"
}, "Subscripe news", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "flex"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Icon");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_Input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Input");

  var _component_CarStorButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CarStorButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onMouseover: _cache[0] || (_cache[0] = function ($event) {
      return $data.twitterHover = true;
    }),
    onMouseleave: _cache[1] || (_cache[1] = function ($event) {
      return $data.twitterHover = false;
    }),
    "class": "w-full h-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
        "class": "w-full h-[36px]",
        icon: "akar-icons:twitter-fill",
        color: "".concat($data.twitterHover ? '#1DA1F2' : '#fff')
      }, null, 8
      /* PROPS */
      , ["color"])];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onMouseover: _cache[2] || (_cache[2] = function ($event) {
      return $data.facebookHover = true;
    }),
    onMouseleave: _cache[3] || (_cache[3] = function ($event) {
      return $data.facebookHover = false;
    }),
    "class": "w-full h-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
        "class": "w-full h-[36px]",
        icon: "akar-icons:facebook-fill",
        color: "".concat($data.facebookHover ? '#4267B2' : '#fff')
      }, null, 8
      /* PROPS */
      , ["color"])];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onMouseover: _cache[4] || (_cache[4] = function ($event) {
      return $data.whatsappHover = true;
    }),
    onMouseleave: _cache[5] || (_cache[5] = function ($event) {
      return $data.whatsappHover = false;
    }),
    "class": "w-full h-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
        "class": "w-full h-[36px]",
        icon: "akar-icons:whatsapp-fill",
        color: "".concat($data.whatsappHover ? '#25D366' : '#fff')
      }, null, 8
      /* PROPS */
      , ["color"])];
    }),
    _: 1
    /* STABLE */

  })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit && $options.submit.apply($options, arguments);
    }, ["prevent"]))
  }, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
    placeholder: "Add your email",
    classes: " bg-white p-2  mb-4 mt-2 text-white placeholder-gray-500",
    type: "email",
    name: "email"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CarStorButton, {
    classes: "m-auto text-xl bg-gray-400 rounded-md hover:text-white text-textcolor hover:bg-green-600 w-[140px] h-[40px]"
  })])], 32
  /* HYDRATE_EVENTS */
  )])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/input.vue?vue&type=template&id=7eba88e2":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/input.vue?vue&type=template&id=7eba88e2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("px-2 py-1 text-base bg-transparent border rounded-md outline-none ".concat($props.classes))
  }, null, 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navItem.vue?vue&type=template&id=c07d154a":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navItem.vue?vue&type=template&id=c07d154a ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center h-[48px]"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "w-[67px] h-full flex-row hover:border-b",
    onMouseover: _cache[0] || (_cache[0] = function ($event) {
      return $options.hoverFun(true);
    }),
    onMouseleave: _cache[1] || (_cache[1] = function ($event) {
      return $options.hoverFun(false);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.link,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(" ".concat($data.actives ? 'text-primary ' : 'text-gray-500', " text-lg text-center w-full transition duration-300 ease-in-out m-auto ")),
    innerHTML: $props.text
  }, null, 8
  /* PROPS */
  , ["href", "class", "innerHTML"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("\n        ".concat($data.actives ? ' w-full ' : ' w-0 ', "\n        transition-all\n        duration-700\n        ease-linear\n        h-0.5\n        bg-primary\n      "))
  }, null, 2
  /* CLASS */
  )], 32
  /* HYDRATE_EVENTS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navigation.vue?vue&type=template&id=5ce47ec2":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navigation.vue?vue&type=template&id=5ce47ec2 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/logo.png",
  "class": "object-cover w-[150px] h-full m-auto",
  alt: "logo"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "flex w-1/3 items-center justify-center h-full m-auto"
};
var _hoisted_3 = ["src", "alt"];
var _hoisted_4 = ["src"];
var _hoisted_5 = {
  "class": "ml-[100vw] w-full transition-all lg:hidden"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/logo.png",
  "class": "object-cover w-[150px] h-full m-auto",
  alt: "logo"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "w-auto h-full m-auto"
};
var _hoisted_8 = {
  "class": "flex w-[130px] h-full ml-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_navItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navItem");

  var _component_Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("lg:flex w-full h-[50px] hidden z-[999999] ".concat($props.classes))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('home'),
    "class": "flex w-1/3 h-full mr-auto"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navItem, {
    active: $data.selfUrl == _ctx.route('home') + '/',
    link: _ctx.route('home'),
    text: "Home",
    "class": "mx-2 hover:text-primary"
  }, null, 8
  /* PROPS */
  , ["active", "link"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navItem, {
    text: "Shop",
    link: _ctx.route('shop'),
    active: $data.selfUrl.includes('/shop'),
    "class": "mx-2 hover:text-primary"
  }, null, 8
  /* PROPS */
  , ["link", "active"])]), !$props.Auth ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: _ctx.route('login'),
    "class": "flex w-1/3 h-full ml-auto"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
        "class": "h-full w-[28px] m-auto",
        icon: "ant-design:login-outlined",
        color: "#1c304f"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.Auth ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $data.imageClick = !$data.imageClick;
    }),
    "class": "relative flex w-1/3 h-full ml-auto cursor-pointer"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "object-cover h-[36px] w-[36px] m-auto rounded-full",
    src: $props.userImage,
    alt: $props.userName
  }, null, 8
  /* PROPS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("absolute bg-white w-[200px] border border-gray-300 ".concat($data.imageClick ? 'h-auto rounded-lg p-1' : ' h-0 p-0 border-none rounded-[0px]', " top-[44px] right-[46px] "))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("w-full h-full border-b border-gray-300 rounded-t-lg ".concat($data.imageClick ? '' : 'hidden'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onMouseover: _cache[0] || (_cache[0] = function ($event) {
      return $data.profileHover = true;
    }),
    onMouseleave: _cache[1] || (_cache[1] = function ($event) {
      return $data.profileHover = false;
    }),
    href: _ctx.route('dashboard'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(" bg-white text-textcolor ".concat($data.imageClick ? 'flex p-[4px] my-0.5 items-center justify-between ' : 'hidden', " hover:bg-primary hover:text-white h-10 w-full rounded-md "))
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: $props.userImage,
        "class": "object-cover w-[32px] h-[32px] border-none rounded-full"
      }, null, 8
      /* PROPS */
      , _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("w-full px-2 text-left ".concat($data.profileHover ? 'font-bold' : ''))
      }, " Profile ", 2
      /* CLASS */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onMouseover: _cache[2] || (_cache[2] = function ($event) {
      return $data.cartHover = true;
    }),
    onMouseleave: _cache[3] || (_cache[3] = function ($event) {
      return $data.cartHover = false;
    }),
    href: _ctx.route('cart'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(" bg-white text-textcolor ".concat($data.imageClick ? 'flex p-[4px] my-0.5 items-center justify-between ' : 'hidden', " hover:bg-primary hover:text-white h-10 w-full rounded-md "))
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
        icon: "akar-icons:cart",
        "class": "object-cover w-auto h-full border-none",
        color: "".concat($data.cartHover ? '#fff' : '#1c304f')
      }, null, 8
      /* PROPS */
      , ["color"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("w-full px-2 text-left ".concat($data.cartHover ? 'font-bold' : ''))
      }, " Cart ", 2
      /* CLASS */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onMouseover: _cache[4] || (_cache[4] = function ($event) {
      return $data.favoriteHover = true;
    }),
    onMouseleave: _cache[5] || (_cache[5] = function ($event) {
      return $data.favoriteHover = false;
    }),
    href: _ctx.route('favorite'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(" bg-white text-textcolor ".concat($data.imageClick ? 'flex p-[4px] my-0.5 items-center justify-between' : 'hidden', " hover:bg-primary hover:text-white h-10 w-full rounded-md "))
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
        "class": "object-cover w-auto h-full border-none",
        icon: "ant-design:star-outlined",
        color: "".concat($data.favoriteHover ? '#fff' : '#1c304f')
      }, null, 8
      /* PROPS */
      , ["color"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("w-full px-2 text-left ".concat($data.favoriteHover ? 'font-bold' : ''))
      }, " Favorite ", 2
      /* CLASS */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onMouseover: _cache[6] || (_cache[6] = function ($event) {
      return $data.logoutHover = true;
    }),
    onMouseleave: _cache[7] || (_cache[7] = function ($event) {
      return $data.logoutHover = false;
    }),
    onClick: $options.logoutFun,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(" bg-white text-textcolor ".concat($data.imageClick ? 'flex p-[4px] my-0.5 items-center justify-between ' : 'hidden', " hover:bg-primary hover:text-white h-10 w-full rounded-md "))
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
        "class": "object-cover w-auto h-full border-none",
        icon: "ant-design:logout-outlined",
        color: "".concat($data.logoutHover ? '#fff' : '#1c304f')
      }, null, 8
      /* PROPS */
      , ["color"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("w-full px-2 text-left ".concat($data.logoutHover ? 'font-bold' : ''))
      }, " Logout ", 2
      /* CLASS */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick", "class"])], 2
  /* CLASS */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('home'),
    "class": "flex w-[300px] h-full mr-auto"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navItem, {
    "class": "mx-2 hover:text-primary"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navItem, {
    "class": "mx-2 hover:text-primary"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navItem, {
    "class": "mx-2 hover:text-primary"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navItem, {
    "class": "mx-2 hover:text-primary"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navItem, {
    "class": "mx-2 hover:text-primary"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
    "class": "w-full h-auto m-auto",
    icon: "ant-design:login-outlined",
    color: "#1c304f"
  })])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=template&id=459cf26c&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=template&id=459cf26c&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-459cf26c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "carousel__item"
};
var _hoisted_2 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Slide");

  var _component_Navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navigation");

  var _component_Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Carousel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Carousel, {
    "items-to-show": 2,
    "wrap-around": true
  }, {
    addons: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navigation)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.slideImage, function (slide) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {
          key: slide
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              "class": "object-cover rounded-md carousel__slide",
              src: slide,
              alt: ""
            }, null, 8
            /* PROPS */
            , _hoisted_2)])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-carousel/dist/carousel.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-carousel/dist/carousel.css ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".carousel__slide {\n  scroll-snap-stop: auto;\n  flex-shrink: 0;\n  margin: 0;\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.carousel {\n  position: relative;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.carousel * {\n  box-sizing: border-box;\n}\n\n.carousel__track {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\n.carousel__viewport {\n  overflow: hidden;\n}\n:root {\n  /* Color */\n  --vc-clr-primary: #642afb;\n  --vc-clr-secondary: #8e98f3;\n  --vc-clr-white: #ffffff;\n\n  /* Icon */\n  --vc-icn-width: 1.2em;\n\n  /* Navigation */\n  --vc-nav-width: 30px;\n  --vc-nav-color: #ffffff;\n  --vc-nav-background-color: var(--vc-clr-primary);\n\n  /* Pagination */\n  --vc-pgn-width: 10px;\n  --vc-pgn-height: 5px;\n  --vc-pgn-margin: 5px;\n  --vc-pgn-border-radius: 0;\n  --vc-pgn-background-color: var(--vc-clr-secondary);\n  --vc-pgn-active-color: var(--vc-clr-primary);\n}\n.carousel__prev,\n.carousel__next {\n  background-color: var(--vc-nav-background-color);\n  border-radius: var(--vc-nav-width);\n  width: var(--vc-nav-width);\n  height: var(--vc-nav-width);\n  text-align: center;\n  font-size: calc(var(--vc-nav-width) * 2 / 3);\n  padding: 0;\n  color: var(--vc-nav-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  border: 0;\n  cursor: pointer;\n}\n\n.carousel__prev {\n  top: 50%;\n  left: 0;\n  transform: translate(-50%, -50%);\n}\n\n.carousel__next {\n  top: 50%;\n  right: 0;\n  transform: translate(50%, -50%);\n}\n.carousel__icon {\n  width: var(--vc-icn-width);\n  height: var(--vc-icn-width);\n  fill: currentColor;\n}\n.carousel__pagination {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n}\n.carousel__pagination-button {\n  margin: var(--vc-pgn-margin);\n  width: var(--vc-pgn-width);\n  height: var(--vc-pgn-height);\n  border-radius: var(--vc-pgn-height);\n  border: 0;\n  cursor: pointer;\n  background-color: var(--vc-pgn-background-color);\n}\n\n.carousel__pagination-button--active {\n  background-color: var(--vc-pgn-active-color);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.carousel__slide > .carousel__item[data-v-459cf26c] {\n  transform: scale(1);\n  opacity: 0.5;\n  transition: 0.5s;\n  margin: 0px 10px;\n}\n.carousel__slide--visible > .carousel__item[data-v-459cf26c] {\n  opacity: 1;\n  transform: rotateY(0);\n}\n.carousel__slide--next > .carousel__item[data-v-459cf26c] {\n  transform: scale(0.9) translate(-10px);\n}\n.carousel__slide--prev > .carousel__item[data-v-459cf26c] {\n  transform: scale(0.9) translate(10px);\n}\n.carousel__slide--active > .carousel__item[data-v-459cf26c] {\n  transform: scale(1.1);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue3-carousel/dist/carousel.css":
/*!******************************************************!*\
  !*** ./node_modules/vue3-carousel/dist/carousel.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./carousel.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-carousel/dist/carousel.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_slider_vue_vue_type_style_index_0_id_459cf26c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_slider_vue_vue_type_style_index_0_id_459cf26c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_slider_vue_vue_type_style_index_0_id_459cf26c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue":
/*!********************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppLayout_vue_vue_type_template_id_5663af57__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=5663af57 */ "./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js */ "./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js");
/* harmony import */ var _media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppLayout_vue_vue_type_template_id_5663af57__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/AppLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488 */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js");
/* harmony import */ var _media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/button.vue":
/*!********************************************!*\
  !*** ./resources/js/components/button.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button_vue_vue_type_template_id_190d103d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.vue?vue&type=template&id=190d103d */ "./resources/js/components/button.vue?vue&type=template&id=190d103d");
/* harmony import */ var _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.vue?vue&type=script&lang=js */ "./resources/js/components/button.vue?vue&type=script&lang=js");
/* harmony import */ var _media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_button_vue_vue_type_template_id_190d103d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/button.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/card.vue":
/*!******************************************!*\
  !*** ./resources/js/components/card.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card_vue_vue_type_template_id_c170f44a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue?vue&type=template&id=c170f44a */ "./resources/js/components/card.vue?vue&type=template&id=c170f44a");
/* harmony import */ var _card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.vue?vue&type=script&lang=js */ "./resources/js/components/card.vue?vue&type=script&lang=js");
/* harmony import */ var _media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_card_vue_vue_type_template_id_c170f44a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/card.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/footer.vue":
/*!********************************************!*\
  !*** ./resources/js/components/footer.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_585a4226__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=585a4226 */ "./resources/js/components/footer.vue?vue&type=template&id=585a4226");
/* harmony import */ var _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js */ "./resources/js/components/footer.vue?vue&type=script&lang=js");
/* harmony import */ var _media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_footer_vue_vue_type_template_id_585a4226__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/input.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/input.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _input_vue_vue_type_template_id_7eba88e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.vue?vue&type=template&id=7eba88e2 */ "./resources/js/components/input.vue?vue&type=template&id=7eba88e2");
/* harmony import */ var _input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.vue?vue&type=script&lang=js */ "./resources/js/components/input.vue?vue&type=script&lang=js");
/* harmony import */ var _media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_input_vue_vue_type_template_id_7eba88e2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/input.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/navItem.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/navItem.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navItem_vue_vue_type_template_id_c07d154a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navItem.vue?vue&type=template&id=c07d154a */ "./resources/js/components/navItem.vue?vue&type=template&id=c07d154a");
/* harmony import */ var _navItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navItem.vue?vue&type=script&lang=js */ "./resources/js/components/navItem.vue?vue&type=script&lang=js");
/* harmony import */ var _media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_navItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_navItem_vue_vue_type_template_id_c07d154a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/navItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/navigation.vue":
/*!************************************************!*\
  !*** ./resources/js/components/navigation.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navigation_vue_vue_type_template_id_5ce47ec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.vue?vue&type=template&id=5ce47ec2 */ "./resources/js/components/navigation.vue?vue&type=template&id=5ce47ec2");
/* harmony import */ var _navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.vue?vue&type=script&lang=js */ "./resources/js/components/navigation.vue?vue&type=script&lang=js");
/* harmony import */ var _media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_navigation_vue_vue_type_template_id_5ce47ec2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/navigation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/slider.vue":
/*!********************************************!*\
  !*** ./resources/js/components/slider.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slider_vue_vue_type_template_id_459cf26c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.vue?vue&type=template&id=459cf26c&scoped=true */ "./resources/js/components/slider.vue?vue&type=template&id=459cf26c&scoped=true");
/* harmony import */ var _slider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.vue?vue&type=script&lang=js */ "./resources/js/components/slider.vue?vue&type=script&lang=js");
/* harmony import */ var _slider_vue_vue_type_style_index_0_id_459cf26c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css */ "./resources/js/components/slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css");
/* harmony import */ var _media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_media_riyadh_univ_Projects_CarStor_CarStorWithVuejs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_slider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_slider_vue_vue_type_template_id_459cf26c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-459cf26c"],['__file',"resources/js/components/slider.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/button.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/button.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./button.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/button.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/card.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/card.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./card.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/card.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/footer.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/footer.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/footer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/input.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/input.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./input.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/input.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/navItem.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/navItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./navItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/navigation.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/navigation.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./navigation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navigation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/slider.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/slider.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_slider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_slider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./slider.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57":
/*!**************************************************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLayout_vue_vue_type_template_id_5663af57__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLayout_vue_vue_type_template_id_5663af57__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLayout.vue?vue&type=template&id=5663af57 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57");


/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=6a63e488 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488");


/***/ }),

/***/ "./resources/js/components/button.vue?vue&type=template&id=190d103d":
/*!**************************************************************************!*\
  !*** ./resources/js/components/button.vue?vue&type=template&id=190d103d ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_button_vue_vue_type_template_id_190d103d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_button_vue_vue_type_template_id_190d103d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./button.vue?vue&type=template&id=190d103d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/button.vue?vue&type=template&id=190d103d");


/***/ }),

/***/ "./resources/js/components/card.vue?vue&type=template&id=c170f44a":
/*!************************************************************************!*\
  !*** ./resources/js/components/card.vue?vue&type=template&id=c170f44a ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_card_vue_vue_type_template_id_c170f44a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_card_vue_vue_type_template_id_c170f44a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./card.vue?vue&type=template&id=c170f44a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/card.vue?vue&type=template&id=c170f44a");


/***/ }),

/***/ "./resources/js/components/footer.vue?vue&type=template&id=585a4226":
/*!**************************************************************************!*\
  !*** ./resources/js/components/footer.vue?vue&type=template&id=585a4226 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_vue_vue_type_template_id_585a4226__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_vue_vue_type_template_id_585a4226__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./footer.vue?vue&type=template&id=585a4226 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/footer.vue?vue&type=template&id=585a4226");


/***/ }),

/***/ "./resources/js/components/input.vue?vue&type=template&id=7eba88e2":
/*!*************************************************************************!*\
  !*** ./resources/js/components/input.vue?vue&type=template&id=7eba88e2 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_input_vue_vue_type_template_id_7eba88e2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_input_vue_vue_type_template_id_7eba88e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./input.vue?vue&type=template&id=7eba88e2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/input.vue?vue&type=template&id=7eba88e2");


/***/ }),

/***/ "./resources/js/components/navItem.vue?vue&type=template&id=c07d154a":
/*!***************************************************************************!*\
  !*** ./resources/js/components/navItem.vue?vue&type=template&id=c07d154a ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navItem_vue_vue_type_template_id_c07d154a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navItem_vue_vue_type_template_id_c07d154a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./navItem.vue?vue&type=template&id=c07d154a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navItem.vue?vue&type=template&id=c07d154a");


/***/ }),

/***/ "./resources/js/components/navigation.vue?vue&type=template&id=5ce47ec2":
/*!******************************************************************************!*\
  !*** ./resources/js/components/navigation.vue?vue&type=template&id=5ce47ec2 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navigation_vue_vue_type_template_id_5ce47ec2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navigation_vue_vue_type_template_id_5ce47ec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./navigation.vue?vue&type=template&id=5ce47ec2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/navigation.vue?vue&type=template&id=5ce47ec2");


/***/ }),

/***/ "./resources/js/components/slider.vue?vue&type=template&id=459cf26c&scoped=true":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/slider.vue?vue&type=template&id=459cf26c&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_slider_vue_vue_type_template_id_459cf26c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_slider_vue_vue_type_template_id_459cf26c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./slider.vue?vue&type=template&id=459cf26c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=template&id=459cf26c&scoped=true");


/***/ }),

/***/ "./resources/js/components/slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_slider_vue_vue_type_style_index_0_id_459cf26c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider.vue?vue&type=style&index=0&id=459cf26c&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue3-carousel/dist/carousel.es.js":
/*!********************************************************!*\
  !*** ./node_modules/vue3-carousel/dist/carousel.es.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ Carousel),
/* harmony export */   "Icon": () => (/* binding */ Icon),
/* harmony export */   "Navigation": () => (/* binding */ Navigation),
/* harmony export */   "Pagination": () => (/* binding */ Pagination),
/* harmony export */   "Slide": () => (/* binding */ Slide)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/**
 * Vue 3 Carousel 0.1.35
 * (c) 2021
 * @license MIT
 */


const defaultConfigs = {
    itemsToShow: 1,
    itemsToScroll: 1,
    modelValue: 0,
    transition: 300,
    autoplay: 0,
    snapAlign: 'center',
    wrapAround: false,
    pauseAutoplayOnHover: false,
    mouseDrag: true,
    touchDrag: true,
    breakpoints: undefined,
};

/**
 * return a debounced version of the function
 * @param fn
 * @param delay
 */
function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    };
}
/**
 * return a throttle version of the function
 * Throttling
 *
 */
function throttle(fn, limit) {
    let inThrottle;
    return function (...args) {
        const self = this;
        if (!inThrottle) {
            fn.apply(self, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
function getSlidesVNodes(vNode) {
    var _a, _b, _c;
    // Return empty array if there's any node
    if (!vNode)
        return [];
    // Check if the Slides components are added directly without v-for (#72)
    if (((_b = (_a = vNode[0]) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.name) === 'CarouselSlide')
        return vNode;
    return ((_c = vNode[0]) === null || _c === void 0 ? void 0 : _c.children) || [];
}
function getMaxSlideIndex(config, slidesCount) {
    if (config.wrapAround) {
        return slidesCount - 1;
    }
    switch (config.snapAlign) {
        case 'start':
            return slidesCount - config.itemsToShow;
        case 'end':
            return slidesCount - 1;
        case 'center':
        case 'center-odd':
            return slidesCount - Math.ceil(config.itemsToShow / 2);
        case 'center-even':
            return slidesCount - Math.ceil(config.itemsToShow / 2);
        default:
            return 0;
    }
}
function getMinSlideIndex(config) {
    if (config.wrapAround) {
        return 0;
    }
    switch (config.snapAlign) {
        case 'start':
            return 0;
        case 'end':
            return config.itemsToShow - 1;
        case 'center':
        case 'center-odd':
            return Math.floor((config.itemsToShow - 1) / 2);
        case 'center-even':
            return Math.floor((config.itemsToShow - 2) / 2);
        default:
            return 0;
    }
}
function getCurrentSlideIndex(config, val, max, min) {
    if (config.wrapAround) {
        return val;
    }
    return Math.min(Math.max(val, min), max);
}
function getSlidesToScroll({ slidesBuffer, currentSlide, snapAlign, itemsToShow, wrapAround, slidesCount, }) {
    let output = slidesBuffer.indexOf(currentSlide);
    if (snapAlign === 'center' || snapAlign === 'center-odd') {
        output -= (itemsToShow - 1) / 2;
    }
    else if (snapAlign === 'center-even') {
        output -= (itemsToShow - 2) / 2;
    }
    else if (snapAlign === 'end') {
        output -= itemsToShow - 1;
    }
    if (!wrapAround) {
        const max = slidesCount - itemsToShow;
        const min = 0;
        output = Math.max(Math.min(output, max), min);
    }
    return output;
}

var Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Carousel',
    props: {
        // count of items to showed per view
        itemsToShow: {
            default: defaultConfigs.itemsToShow,
            type: Number,
        },
        // count of items to be scrolled
        itemsToScroll: {
            default: defaultConfigs.itemsToScroll,
            type: Number,
        },
        // control infinite scrolling mode
        wrapAround: {
            default: defaultConfigs.wrapAround,
            type: Boolean,
        },
        // control snap position alignment
        snapAlign: {
            default: defaultConfigs.snapAlign,
            validator(value) {
                // The value must match one of these strings
                return ['start', 'end', 'center', 'center-even', 'center-odd'].includes(value);
            },
        },
        // sliding transition time in ms
        transition: {
            default: defaultConfigs.transition,
            type: Number,
        },
        // an object to store breakpoints
        breakpoints: {
            default: defaultConfigs.breakpoints,
            type: Object,
        },
        // time to auto advance slides in ms
        autoplay: {
            default: defaultConfigs.autoplay,
            type: Number,
        },
        // pause autoplay when mouse hover over the carousel
        pauseAutoplayOnHover: {
            default: defaultConfigs.pauseAutoplayOnHover,
            type: Boolean,
        },
        // slide number number of initial slide
        modelValue: {
            default: undefined,
            type: Number,
        },
        // toggle mouse dragging.
        mouseDrag: {
            default: defaultConfigs.mouseDrag,
            type: Boolean,
        },
        // toggle mouse dragging.
        touchDrag: {
            default: defaultConfigs.touchDrag,
            type: Boolean,
        },
        // an object to pass all settings
        settings: {
            default() {
                return {};
            },
            type: Object,
        },
    },
    setup(props, { slots, emit, expose }) {
        var _a;
        const root = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const slides = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const slidesBuffer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const slideWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const slidesCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        const autoplayTimer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const transitionTimer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        let breakpoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        // generate carousel configs
        let defaultConfig = Object.assign({}, defaultConfigs);
        // current config
        const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, defaultConfigs));
        // slides
        const currentSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_a = config.modelValue) !== null && _a !== void 0 ? _a : 0);
        const prevSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const middleSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const maxSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const minSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('config', config);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slidesBuffer', slidesBuffer);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slidesCount', slidesCount);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('currentSlide', currentSlideIndex);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('maxSlide', maxSlideIndex);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('minSlide', minSlideIndex);
        /**
         * Configs
         */
        function initDefaultConfigs() {
            // generate carousel configs
            const mergedConfigs = Object.assign(Object.assign({}, props), props.settings);
            // Set breakpoints
            breakpoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(Object.assign({}, mergedConfigs.breakpoints));
            // remove extra values
            defaultConfig = Object.assign(Object.assign({}, mergedConfigs), { settings: undefined, breakpoints: undefined });
            bindConfigs(defaultConfig);
        }
        function updateBreakpointsConfigs() {
            const breakpointsArray = Object.keys(breakpoints.value)
                .map((key) => Number(key))
                .sort((a, b) => +b - +a);
            let newConfig = Object.assign({}, defaultConfig);
            breakpointsArray.some((breakpoint) => {
                const isMatched = window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
                if (isMatched) {
                    newConfig = Object.assign(Object.assign({}, newConfig), breakpoints.value[breakpoint]);
                    return true;
                }
                return false;
            });
            bindConfigs(newConfig);
        }
        function bindConfigs(newConfig) {
            for (let key in newConfig) {
                // @ts-ignore
                config[key] = newConfig[key];
            }
        }
        const handleWindowResize = debounce(() => {
            if (breakpoints.value) {
                updateBreakpointsConfigs();
                updateSlidesData();
            }
            updateSlideWidth();
        }, 16);
        /**
         * Setup functions
         */
        function updateSlideWidth() {
            if (!root.value)
                return;
            const rect = root.value.getBoundingClientRect();
            slideWidth.value = rect.width / config.itemsToShow;
        }
        function updateSlidesData() {
            slidesCount.value = slides.value.length;
            if (slidesCount.value <= 0)
                return;
            middleSlideIndex.value = Math.ceil((slidesCount.value - 1) / 2);
            maxSlideIndex.value = getMaxSlideIndex(config, slidesCount.value);
            minSlideIndex.value = getMinSlideIndex(config);
            currentSlideIndex.value = getCurrentSlideIndex(config, currentSlideIndex.value, maxSlideIndex.value, minSlideIndex.value);
        }
        function updateSlidesBuffer() {
            const slidesArray = [...Array(slidesCount.value).keys()];
            const shouldShiftSlides = config.wrapAround && config.itemsToShow + 1 <= slidesCount.value;
            if (shouldShiftSlides) {
                const buffer = config.itemsToShow !== 1
                    ? Math.round((slidesCount.value - config.itemsToShow) / 2)
                    : 0;
                let shifts = buffer - currentSlideIndex.value;
                if (config.snapAlign === 'end') {
                    shifts += Math.floor(config.itemsToShow - 1);
                }
                else if (config.snapAlign === 'center' || config.snapAlign === 'center-odd') {
                    shifts++;
                }
                // Check shifting directions
                if (shifts < 0) {
                    for (let i = shifts; i < 0; i++) {
                        slidesArray.push(Number(slidesArray.shift()));
                    }
                }
                else {
                    for (let i = 0; i < shifts; i++) {
                        slidesArray.unshift(Number(slidesArray.pop()));
                    }
                }
            }
            slidesBuffer.value = slidesArray;
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            if (breakpoints.value) {
                updateBreakpointsConfigs();
                updateSlidesData();
            }
            updateSlideWidth();
            if (config.autoplay && config.autoplay > 0) {
                initializeAutoplay();
            }
            window.addEventListener('resize', handleWindowResize, { passive: true });
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
            if (transitionTimer.value) {
                clearTimeout(transitionTimer.value);
            }
            resetAutoplayTimer(false);
        });
        /**
         * Carousel Event listeners
         */
        let isTouch = false;
        const startPosition = { x: 0, y: 0 };
        const endPosition = { x: 0, y: 0 };
        const dragged = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({ x: 0, y: 0 });
        const isDragging = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isHover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const handleMouseEnter = () => {
            isHover.value = true;
        };
        const handleMouseLeave = () => {
            isHover.value = false;
        };
        const handleDrag = throttle((event) => {
            if (!isTouch)
                event.preventDefault();
            endPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
            endPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
            const deltaX = endPosition.x - startPosition.x;
            const deltaY = endPosition.y - startPosition.y;
            dragged.y = deltaY;
            dragged.x = deltaX;
        }, 16);
        function handleDragStart(event) {
            isTouch = event.type === 'touchstart';
            if (!isTouch)
                event.preventDefault();
            if ((!isTouch && event.button !== 0) || isSliding.value) {
                return;
            }
            isDragging.value = true;
            startPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
            startPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
            document.addEventListener(isTouch ? 'touchmove' : 'mousemove', handleDrag);
            document.addEventListener(isTouch ? 'touchend' : 'mouseup', handleDragEnd);
        }
        function handleDragEnd() {
            isDragging.value = false;
            const tolerance = Math.sign(dragged.x) * 0.4;
            const draggedSlides = Math.round(dragged.x / slideWidth.value + tolerance);
            let newSlide = getCurrentSlideIndex(config, currentSlideIndex.value - draggedSlides, maxSlideIndex.value, minSlideIndex.value);
            slideTo(newSlide);
            dragged.x = 0;
            dragged.y = 0;
            document.removeEventListener(isTouch ? 'touchmove' : 'mousemove', handleDrag);
            document.removeEventListener(isTouch ? 'touchend' : 'mouseup', handleDragEnd);
        }
        /**
         * Autoplay
         */
        function initializeAutoplay() {
            autoplayTimer.value = setInterval(() => {
                if (config.pauseAutoplayOnHover && isHover.value) {
                    return;
                }
                next();
            }, config.autoplay);
        }
        function resetAutoplayTimer(restart = true) {
            if (!autoplayTimer.value) {
                return;
            }
            clearInterval(autoplayTimer.value);
            if (restart) {
                initializeAutoplay();
            }
        }
        /**
         * Navigation function
         */
        const isSliding = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        function slideTo(slideIndex, mute = false) {
            resetAutoplayTimer();
            if (currentSlideIndex.value === slideIndex || isSliding.value) {
                return;
            }
            // Wrap slide index
            const lastSlideIndex = slidesCount.value - 1;
            if (slideIndex > lastSlideIndex) {
                return slideTo(slideIndex - slidesCount.value);
            }
            if (slideIndex < 0) {
                return slideTo(slideIndex + slidesCount.value);
            }
            isSliding.value = true;
            prevSlideIndex.value = currentSlideIndex.value;
            currentSlideIndex.value = slideIndex;
            if (!mute) {
                emit('update:modelValue', currentSlideIndex.value);
            }
            transitionTimer.value = setTimeout(() => {
                if (config.wrapAround)
                    updateSlidesBuffer();
                isSliding.value = false;
            }, config.transition);
        }
        function next() {
            let nextSlide = currentSlideIndex.value + config.itemsToScroll;
            if (!config.wrapAround) {
                nextSlide = Math.min(nextSlide, maxSlideIndex.value);
            }
            slideTo(nextSlide);
        }
        function prev() {
            let prevSlide = currentSlideIndex.value - config.itemsToScroll;
            if (!config.wrapAround) {
                prevSlide = Math.max(prevSlide, minSlideIndex.value);
            }
            slideTo(prevSlide);
        }
        const nav = { slideTo, next, prev };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('nav', nav);
        /**
         * Track style
         */
        const slidesToScroll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => getSlidesToScroll({
            slidesBuffer: slidesBuffer.value,
            itemsToShow: config.itemsToShow,
            snapAlign: config.snapAlign,
            wrapAround: Boolean(config.wrapAround),
            currentSlide: currentSlideIndex.value,
            slidesCount: slidesCount.value,
        }));
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slidesToScroll', slidesToScroll);
        const trackStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const xScroll = dragged.x - slidesToScroll.value * slideWidth.value;
            return {
                transform: `translateX(${xScroll}px)`,
                transition: `${isSliding.value ? config.transition : 0}ms`,
            };
        });
        function initCarousel() {
            initDefaultConfigs();
        }
        function restartCarousel() {
            initDefaultConfigs();
            updateBreakpointsConfigs();
            updateSlidesData();
            updateSlidesBuffer();
            updateSlideWidth();
        }
        function updateCarousel() {
            updateSlidesData();
            updateSlidesBuffer();
        }
        // Update the carousel on props change
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(props, restartCarousel);
        // Init carousel
        initCarousel();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
            // Handel when slides added/removed
            const needToUpdate = slidesCount.value !== slides.value.length;
            const currentSlideUpdated = props.modelValue !== undefined && currentSlideIndex.value !== props.modelValue;
            if (currentSlideUpdated) {
                slideTo(Number(props.modelValue), true);
            }
            if (needToUpdate) {
                updateCarousel();
            }
        });
        const data = {
            config,
            slidesBuffer,
            slidesCount,
            slideWidth,
            currentSlide: currentSlideIndex,
            maxSlide: maxSlideIndex,
            minSlide: minSlideIndex,
            middleSlide: middleSlideIndex,
        };
        expose({
            updateBreakpointsConfigs,
            updateSlidesData,
            updateSlideWidth,
            updateSlidesBuffer,
            initCarousel,
            restartCarousel,
            updateCarousel,
            slideTo,
            next,
            prev,
            nav,
            data,
        });
        const slotSlides = slots.default || slots.slides;
        const slotAddons = slots.addons;
        const slotsProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);
        return () => {
            const slidesElements = getSlidesVNodes(slotSlides === null || slotSlides === void 0 ? void 0 : slotSlides(slotsProps));
            const addonsElements = (slotAddons === null || slotAddons === void 0 ? void 0 : slotAddons(slotsProps)) || [];
            slides.value = slidesElements;
            // Bind slide order
            slidesElements.forEach((el, index) => (el.props.index = index));
            const trackEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('ol', {
                class: 'carousel__track',
                style: trackStyle.value,
                onMousedown: config.mouseDrag ? handleDragStart : null,
                onTouchstart: config.touchDrag ? handleDragStart : null,
            }, slidesElements);
            const viewPortEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', { class: 'carousel__viewport' }, trackEl);
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('section', {
                ref: root,
                class: 'carousel',
                'aria-label': 'Gallery',
                onMouseenter: handleMouseEnter,
                onMouseleave: handleMouseLeave,
            }, [viewPortEl, addonsElements]);
        };
    },
});

const icons = {
    arrowUp: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
    arrowDown: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
    arrowRight: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
    arrowLeft: 'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z',
};

const Icon = (props) => {
    const iconName = props.name;
    if (!iconName || typeof iconName !== 'string') {
        return;
    }
    const path = icons[iconName];
    const pathEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('path', { d: path });
    props.title || iconName;
    const titleEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('title', null, iconName);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('svg', {
        class: 'carousel__icon',
        viewBox: '0 0 24 24',
        role: 'img',
    }, [titleEl, pathEl]);
};
Icon.props = { name: String, title: String };

const Navigation = (props, { slots, attrs }) => {
    const { next: slotNext, prev: slotPrev } = slots;
    const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('config', (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, defaultConfigs)));
    const maxSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('maxSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const minSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('minSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('nav', {});
    const prevButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
        type: 'button',
        class: [
            'carousel__prev',
            (!config.wrapAround && currentSlide.value <= minSlide.value) && 'carousel__prev--in-active',
            attrs === null || attrs === void 0 ? void 0 : attrs.class
        ],
        'aria-label': `Navigate to previous slide`,
        onClick: nav.prev,
    }, (slotPrev === null || slotPrev === void 0 ? void 0 : slotPrev()) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { name: 'arrowLeft' }));
    const nextButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
        type: 'button',
        class: [
            'carousel__next',
            (!config.wrapAround && currentSlide.value >= maxSlide.value) && 'carousel__next--in-active',
            attrs === null || attrs === void 0 ? void 0 : attrs.class
        ],
        'aria-label': `Navigate to next slide`,
        onClick: nav.next,
    }, (slotNext === null || slotNext === void 0 ? void 0 : slotNext()) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { name: 'arrowRight' }));
    return [prevButton, nextButton];
};

var Slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'CarouselSlide',
    props: {
        index: {
            type: Number,
            default: 1,
        },
    },
    setup(props, { slots }) {
        const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('config', (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, defaultConfigs)));
        const slidesBuffer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slidesBuffer', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]));
        const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const slidesToScroll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slidesToScroll', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const wrapOrder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.index);
        if (config.wrapAround) {
            updateOrder();
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(slidesBuffer, updateOrder);
        }
        function updateOrder() {
            wrapOrder.value = slidesBuffer.value.indexOf(props.index);
        }
        const slideStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const items = config.itemsToShow;
            const width = `${(1 / items) * 100}%`;
            return {
                width,
                order: wrapOrder.value.toString(),
            };
        });
        const isActive = () => props.index === currentSlide.value;
        const isVisible = () => {
            const min = Math.ceil(slidesToScroll.value);
            const max = Math.floor(slidesToScroll.value + config.itemsToShow);
            const current = slidesBuffer.value.slice(min, max);
            return current.includes(props.index);
        };
        const isPrev = () => props.index === slidesBuffer.value[Math.ceil(slidesToScroll.value) - 1];
        const isNext = () => props.index ===
            slidesBuffer.value[Math.floor(slidesToScroll.value + config.itemsToShow)];
        return () => {
            var _a;
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('li', {
                style: slideStyle.value,
                class: {
                    carousel__slide: true,
                    'carousel__slide--active': isActive(),
                    'carousel__slide--visible': isVisible(),
                    'carousel__slide--prev': isPrev(),
                    'carousel__slide--next': isNext(),
                },
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    },
});

const Pagination = () => {
    const maxSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('maxSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const minSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('minSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('nav', {});
    function handleButtonClick(slideNumber) {
        nav.slideTo(slideNumber);
    }
    const isActive = (slide) => {
        const val = currentSlide.value;
        return (val === slide ||
            (val > maxSlide.value && slide >= maxSlide.value) ||
            (val < minSlide.value && slide <= minSlide.value));
    };
    const children = [];
    for (let slide = minSlide.value; slide < maxSlide.value + 1; slide++) {
        const button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
            type: 'button',
            class: {
                'carousel__pagination-button': true,
                'carousel__pagination-button--active': isActive(slide),
            },
            'aria-label': `Navigate to slide ${slide + 1}`,
            onClick: () => handleButtonClick(slide),
        });
        const item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('li', { class: 'carousel__pagination-item', key: slide }, button);
        children.push(item);
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('ol', { class: 'carousel__pagination' }, children);
};




/***/ }),

/***/ "./node_modules/@iconify/vue/dist/iconify.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@iconify/vue/dist/iconify.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": () => (/* binding */ Icon),
/* harmony export */   "_api": () => (/* binding */ _api),
/* harmony export */   "addAPIProvider": () => (/* binding */ addAPIProvider),
/* harmony export */   "addCollection": () => (/* binding */ addCollection),
/* harmony export */   "addIcon": () => (/* binding */ addIcon),
/* harmony export */   "buildIcon": () => (/* binding */ buildIcon),
/* harmony export */   "calculateSize": () => (/* binding */ calculateSize),
/* harmony export */   "disableCache": () => (/* binding */ disableCache),
/* harmony export */   "enableCache": () => (/* binding */ enableCache),
/* harmony export */   "getIcon": () => (/* binding */ getIcon),
/* harmony export */   "iconExists": () => (/* binding */ iconExists),
/* harmony export */   "listIcons": () => (/* binding */ listIcons),
/* harmony export */   "loadIcons": () => (/* binding */ loadIcons),
/* harmony export */   "replaceIDs": () => (/* binding */ replaceIDs)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


// src/icon/index.ts
var matchName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
var iconDefaults = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16,
  rotate: 0,
  vFlip: false,
  hFlip: false
});
function fullIcon(data) {
  return { ...iconDefaults, ...data };
}

// src/icon/name.ts
var stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIcon(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIcon(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIcon(result, allowSimpleName) ? null : result;
  }
  return null;
};
var validateIcon = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchName)) && icon.name.match(matchName));
};

// src/icon/merge.ts
function mergeIconData(icon, alias) {
  const result = { ...icon };
  for (const key in iconDefaults) {
    const prop = key;
    if (alias[prop] !== void 0) {
      const value = alias[prop];
      if (result[prop] === void 0) {
        result[prop] = value;
        continue;
      }
      switch (prop) {
        case "rotate":
          result[prop] = (result[prop] + value) % 4;
          break;
        case "hFlip":
        case "vFlip":
          result[prop] = value !== result[prop];
          break;
        default:
          result[prop] = value;
      }
    }
  }
  return result;
}

// src/icon-set/get-icon.ts
function getIconData$1(data, name, full = false) {
  function getIcon(name2, iteration) {
    var _a, _b, _c, _d;
    if (data.icons[name2] !== void 0) {
      return Object.assign({}, data.icons[name2]);
    }
    if (iteration > 5) {
      return null;
    }
    if (((_a = data.aliases) == null ? void 0 : _a[name2]) !== void 0) {
      const item = (_b = data.aliases) == null ? void 0 : _b[name2];
      const result2 = getIcon(item.parent, iteration + 1);
      if (result2) {
        return mergeIconData(result2, item);
      }
      return result2;
    }
    if (iteration === 0 && ((_c = data.chars) == null ? void 0 : _c[name2]) !== void 0) {
      return getIcon((_d = data.chars) == null ? void 0 : _d[name2], iteration + 1);
    }
    return null;
  }
  const result = getIcon(name, 0);
  if (result) {
    for (const key in iconDefaults) {
      if (result[key] === void 0 && data[key] !== void 0) {
        result[key] = data[key];
      }
    }
  }
  return result && full ? fullIcon(result) : result;
}

// src/icon-set/validate.ts
var matchChar = /^[a-f0-9]+(-[a-f0-9]+)*$/;
function validateIconProps(item, fix) {
  for (const key in item) {
    const attr = key;
    const value = item[attr];
    const type = typeof value;
    if (type === "undefined") {
      delete item[attr];
      continue;
    }
    switch (key) {
      case "body":
      case "parent":
        if (type !== "string") {
          return key;
        }
        break;
      case "hFlip":
      case "vFlip":
      case "hidden":
        if (type !== "boolean") {
          if (fix) {
            delete item[attr];
          } else {
            return key;
          }
        }
        break;
      case "width":
      case "height":
      case "left":
      case "top":
      case "rotate":
      case "inlineHeight":
      case "inlineTop":
      case "verticalAlign":
        if (type !== "number") {
          if (fix) {
            delete item[attr];
          } else {
            return key;
          }
        }
        break;
      default:
        if (type === "object") {
          if (fix) {
            delete item[attr];
          } else {
            return key;
          }
        }
    }
  }
  return null;
}
function validateIconSet(obj, options) {
  const fix = !!(options == null ? void 0 : options.fix);
  if (typeof obj !== "object" || obj === null || typeof obj.icons !== "object" || !obj.icons) {
    throw new Error("Bad icon set");
  }
  const data = obj;
  if (typeof (options == null ? void 0 : options.prefix) === "string") {
    data.prefix = options.prefix;
  } else if (typeof data.prefix !== "string" || !data.prefix.match(matchName)) {
    throw new Error("Invalid prefix");
  }
  if (typeof (options == null ? void 0 : options.provider) === "string") {
    data.provider = options.provider;
  } else if (data.provider !== void 0) {
    const value = data.provider;
    if (typeof value !== "string" || value !== "" && !value.match(matchName)) {
      if (fix) {
        delete data.provider;
      } else {
        throw new Error("Invalid provider");
      }
    }
  }
  const icons = data.icons;
  Object.keys(icons).forEach((name) => {
    if (!name.match(matchName)) {
      if (fix) {
        delete icons[name];
        return;
      }
      throw new Error(`Invalid icon name: "${name}"`);
    }
    const item = icons[name];
    if (typeof item !== "object" || item === null || typeof item.body !== "string") {
      if (fix) {
        delete icons[name];
        return;
      }
      throw new Error(`Invalid icon: "${name}"`);
    }
    const key = typeof item.parent === "string" ? "parent" : validateIconProps(item, fix);
    if (key !== null) {
      if (fix) {
        delete icons[name];
        return;
      }
      throw new Error(`Invalid property "${key}" in icon "${name}"`);
    }
  });
  if (!Object.keys(data.icons).length) {
    throw new Error("Icon set is empty");
  }
  if (data.aliases !== void 0) {
    if (typeof data.aliases !== "object" || data.aliases === null) {
      if (fix) {
        delete data.aliases;
      } else {
        throw new Error("Invalid aliases list");
      }
    }
  }
  if (typeof data.aliases === "object") {
    let validateAlias = function(name, iteration) {
      if (validatedAliases.has(name)) {
        return !failedAliases.has(name);
      }
      const item = aliases[name];
      if (iteration > 5 || typeof item !== "object" || item === null || typeof item.parent !== "string" || !name.match(matchName)) {
        if (fix) {
          delete aliases[name];
          failedAliases.add(name);
          return false;
        }
        throw new Error(`Invalid icon alias: "${name}"`);
      }
      const parent = item.parent;
      if (data.icons[parent] === void 0) {
        if (aliases[parent] === void 0 || !validateAlias(parent, iteration + 1)) {
          if (fix) {
            delete aliases[name];
            failedAliases.add(name);
            return false;
          }
          throw new Error(`Missing parent icon for alias "${name}`);
        }
      }
      if (fix && item.body !== void 0) {
        delete item.body;
      }
      const key = item.body !== void 0 ? "body" : validateIconProps(item, fix);
      if (key !== null) {
        if (fix) {
          delete aliases[name];
          failedAliases.add(name);
          return false;
        }
        throw new Error(`Invalid property "${key}" in alias "${name}"`);
      }
      validatedAliases.add(name);
      return true;
    };
    const aliases = data.aliases;
    const validatedAliases = new Set();
    const failedAliases = new Set();
    Object.keys(aliases).forEach((name) => {
      validateAlias(name, 0);
    });
    if (fix && !Object.keys(data.aliases).length) {
      delete data.aliases;
    }
  }
  Object.keys(iconDefaults).forEach((prop) => {
    const expectedType = typeof iconDefaults[prop];
    const actualType = typeof data[prop];
    if (actualType !== "undefined" && actualType !== expectedType) {
      throw new Error(`Invalid value type for "${prop}"`);
    }
  });
  if (data.chars !== void 0) {
    if (typeof data.chars !== "object" || data.chars === null) {
      if (fix) {
        delete data.chars;
      } else {
        throw new Error("Invalid characters map");
      }
    }
  }
  if (typeof data.chars === "object") {
    const chars = data.chars;
    Object.keys(chars).forEach((char) => {
      var _a;
      if (!char.match(matchChar) || typeof chars[char] !== "string") {
        if (fix) {
          delete chars[char];
          return;
        }
        throw new Error(`Invalid character "${char}"`);
      }
      const target = chars[char];
      if (data.icons[target] === void 0 && ((_a = data.aliases) == null ? void 0 : _a[target]) === void 0) {
        if (fix) {
          delete chars[char];
          return;
        }
        throw new Error(`Character "${char}" points to missing icon "${target}"`);
      }
    });
    if (fix && !Object.keys(data.chars).length) {
      delete data.chars;
    }
  }
  return data;
}

// src/icon-set/parse.ts
function isVariation(item) {
  for (const key in iconDefaults) {
    if (item[key] !== void 0) {
      return true;
    }
  }
  return false;
}
function parseIconSet(data, callback, options) {
  options = options || {};
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  const validate = options.validate;
  if (validate !== false) {
    try {
      validateIconSet(data, typeof validate === "object" ? validate : { fix: true });
    } catch (err) {
      return names;
    }
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const icons = data.icons;
  Object.keys(icons).forEach((name) => {
    const iconData = getIconData$1(data, name, true);
    if (iconData) {
      callback(name, iconData);
      names.push(name);
    }
  });
  const parseAliases = options.aliases || "all";
  if (parseAliases !== "none" && typeof data.aliases === "object") {
    const aliases = data.aliases;
    Object.keys(aliases).forEach((name) => {
      if (parseAliases === "variations" && isVariation(aliases[name])) {
        return;
      }
      const iconData = getIconData$1(data, name, true);
      if (iconData) {
        callback(name, iconData);
        names.push(name);
      }
    });
  }
  return names;
}

// src/storage/storage.ts
var storage$1 = Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: Object.create(null),
    missing: Object.create(null)
  };
}
function getStorage(provider, prefix) {
  if (storage$1[provider] === void 0) {
    storage$1[provider] = Object.create(null);
  }
  const providerStorage = storage$1[provider];
  if (providerStorage[prefix] === void 0) {
    providerStorage[prefix] = newStorage(provider, prefix);
  }
  return providerStorage[prefix];
}
function addIconSet(storage2, data) {
  const t = Date.now();
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing[name] = t;
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = Object.freeze(fullIcon(icon));
      return true;
    }
  } catch (err) {
  }
  return false;
}
function getIconFromStorage(storage2, name) {
  const value = storage2.icons[name];
  return value === void 0 ? null : value;
}
function listIcons(provider, prefix) {
  let allIcons = [];
  let providers;
  if (typeof provider === "string") {
    providers = [provider];
  } else {
    providers = Object.keys(storage$1);
  }
  providers.forEach((provider2) => {
    let prefixes;
    if (typeof provider2 === "string" && typeof prefix === "string") {
      prefixes = [prefix];
    } else {
      prefixes = storage$1[provider2] === void 0 ? [] : Object.keys(storage$1[provider2]);
    }
    prefixes.forEach((prefix2) => {
      const storage2 = getStorage(provider2, prefix2);
      const icons = Object.keys(storage2.icons).map((name) => (provider2 !== "" ? "@" + provider2 + ":" : "") + prefix2 + ":" + name);
      allIcons = allIcons.concat(icons);
    });
  });
  return allIcons;
}

// src/storage/functions.ts
var simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  return icon ? getIconFromStorage(getStorage(icon.provider, icon.prefix), icon.name) : null;
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage, icon.name, data);
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = typeof data.provider === "string" ? data.provider : "";
  }
  if (simpleNames && provider === "" && (typeof data.prefix !== "string" || data.prefix === "")) {
    let added = false;
    parseIconSet(data, (name, icon) => {
      if (icon && addIcon(name, icon)) {
        added = true;
      }
    }, {
      validate: {
        fix: true,
        prefix: ""
      }
    });
    return added;
  }
  if (typeof data.prefix !== "string" || !validateIcon({
    provider,
    prefix: data.prefix,
    name: "a"
  })) {
    return false;
  }
  const storage = getStorage(provider, data.prefix);
  return !!addIconSet(storage, data);
}
function iconExists(name) {
  return getIconData(name) !== null;
}
function getIcon(name) {
  const result = getIconData(name);
  return result ? { ...result } : null;
}

// src/customisations/index.ts
var defaults = Object.freeze({
  inline: false,
  width: null,
  height: null,
  hAlign: "center",
  vAlign: "middle",
  slice: false,
  hFlip: false,
  vFlip: false,
  rotate: 0
});
function mergeCustomisations(defaults2, item) {
  const result = {};
  for (const key in defaults2) {
    const attr = key;
    result[attr] = defaults2[attr];
    if (item[attr] === void 0) {
      continue;
    }
    const value = item[attr];
    switch (attr) {
      case "inline":
      case "slice":
        if (typeof value === "boolean") {
          result[attr] = value;
        }
        break;
      case "hFlip":
      case "vFlip":
        if (value === true) {
          result[attr] = !result[attr];
        }
        break;
      case "hAlign":
      case "vAlign":
        if (typeof value === "string" && value !== "") {
          result[attr] = value;
        }
        break;
      case "width":
      case "height":
        if (typeof value === "string" && value !== "" || typeof value === "number" && value || value === null) {
          result[attr] = value;
        }
        break;
      case "rotate":
        if (typeof value === "number") {
          result[attr] += value;
        }
        break;
    }
  }
  return result;
}

// src/svg/size.ts
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision === void 0 ? 100 : precision;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

// src/svg/build.ts
function preserveAspectRatio(props) {
  let result = "";
  switch (props.hAlign) {
    case "left":
      result += "xMin";
      break;
    case "right":
      result += "xMax";
      break;
    default:
      result += "xMid";
  }
  switch (props.vAlign) {
    case "top":
      result += "YMin";
      break;
    case "bottom":
      result += "YMax";
      break;
    default:
      result += "YMid";
  }
  result += props.slice ? " slice" : " meet";
  return result;
}
function iconToSVG(icon, customisations) {
  const box = {
    left: icon.left,
    top: icon.top,
    width: icon.width,
    height: icon.height
  };
  let body = icon.body;
  [icon, customisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push("translate(" + (box.width + box.left) + " " + (0 - box.top) + ")");
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push("translate(" + (0 - box.left) + " " + (box.height + box.top) + ")");
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift("rotate(90 " + tempValue + " " + tempValue + ")");
        break;
      case 2:
        transformations.unshift("rotate(180 " + (box.width / 2 + box.left) + " " + (box.height / 2 + box.top) + ")");
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift("rotate(-90 " + tempValue + " " + tempValue + ")");
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== 0 || box.top !== 0) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = '<g transform="' + transformations.join(" ") + '">' + body + "</g>";
    }
  });
  let width, height;
  if (customisations.width === null && customisations.height === null) {
    height = "1em";
    width = calculateSize(height, box.width / box.height);
  } else if (customisations.width !== null && customisations.height !== null) {
    width = customisations.width;
    height = customisations.height;
  } else if (customisations.height !== null) {
    height = customisations.height;
    width = calculateSize(height, box.width / box.height);
  } else {
    width = customisations.width;
    height = calculateSize(width, box.height / box.width);
  }
  if (width === "auto") {
    width = box.width;
  }
  if (height === "auto") {
    height = box.height;
  }
  width = typeof width === "string" ? width : width + "";
  height = typeof height === "string" ? height : height + "";
  const result = {
    attributes: {
      width,
      height,
      preserveAspectRatio: preserveAspectRatio(customisations),
      viewBox: box.left + " " + box.top + " " + box.width + " " + box.height
    },
    body
  };
  if (customisations.inline) {
    result.inline = true;
  }
  return result;
}

// src/builder/functions.ts
function buildIcon(icon, customisations) {
  return iconToSVG(fullIcon(icon), customisations ? mergeCustomisations(defaults, customisations) : defaults);
}

// src/svg/id.ts
var regex = /\sid="(\S+)"/g;
var randomPrefix = "IconifyId-" + Date.now().toString(16) + "-" + (Math.random() * 16777216 | 0).toString(16) + "-";
var counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + counter++;
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"), "$1" + newID + "$3");
  });
  return body;
}

// src/api/modules.ts
var storage = Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}

// src/api/config.ts
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    resources,
    path: source.path === void 0 ? "/" : source.path,
    maxURL: source.maxURL ? source.maxURL : 500,
    rotate: source.rotate ? source.rotate : 750,
    timeout: source.timeout ? source.timeout : 5e3,
    random: source.random === true,
    index: source.index ? source.index : 0,
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
var configStorage = Object.create(null);
var fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
var fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
function listAPIProviders() {
  return Object.keys(configStorage);
}

// src/api/params.ts
var mergeParams = (base, params) => {
  let result = base, hasParams = result.indexOf("?") !== -1;
  function paramToString(value) {
    switch (typeof value) {
      case "boolean":
        return value ? "true" : "false";
      case "number":
        return encodeURIComponent(value);
      case "string":
        return encodeURIComponent(value);
      default:
        throw new Error("Invalid parameter");
    }
  }
  Object.keys(params).forEach((key) => {
    let value;
    try {
      value = paramToString(params[key]);
    } catch (err) {
      return;
    }
    result += (hasParams ? "&" : "?") + encodeURIComponent(key) + "=" + value;
    hasParams = true;
  });
  return result;
};

// src/api/modules/fetch.ts
var maxLengthCache = Object.create(null);
var pathCache = Object.create(null);
var detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
  try {
    const chunk = String.fromCharCode(114) + String.fromCharCode(101);
    const req = global[chunk + "qui" + chunk];
    callback = req("cross-fetch");
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
  return null;
};
var fetchModule = detectFetch();
function setFetch(fetch2) {
  fetchModule = fetch2;
}
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = mergeParams(prefix + ".json", {
      icons: ""
    });
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  const cacheKey = provider + ":" + prefix;
  pathCache[provider] = config.path;
  maxLengthCache[cacheKey] = result;
  return result;
}
var prepare = (provider, prefix, icons) => {
  const results = [];
  let maxLength = maxLengthCache[prefix];
  if (maxLength === void 0) {
    maxLength = calculateMaxLength(provider, prefix);
  }
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    if (pathCache[provider] === void 0) {
      const config = getAPIConfig(provider);
      if (!config) {
        return "/";
      }
      pathCache[provider] = config.path;
    }
    return pathCache[provider];
  }
  return "/";
}
var send = (host, params, status) => {
  if (!fetchModule) {
    status.done(void 0, 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      path += mergeParams(prefix + ".json", {
        icons: iconsList
      });
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      status.done(void 0, 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    if (response.status !== 200) {
      setTimeout(() => {
        status.done(void 0, response.status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        status.done(void 0, defaultError);
      });
      return;
    }
    setTimeout(() => {
      status.done(data);
    });
  }).catch(() => {
    status.done(void 0, defaultError);
  });
};
var fetchAPIModule = {
  prepare,
  send
};

// src/icon/sort.ts
function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage = Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    if (storage[provider] === void 0) {
      storage[provider] = Object.create(null);
    }
    const providerStorage = storage[provider];
    if (providerStorage[prefix] === void 0) {
      providerStorage[prefix] = getStorage(provider, prefix);
    }
    const localStorage = providerStorage[prefix];
    let list;
    if (localStorage.icons[name] !== void 0) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing[name] !== void 0) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}

// src/api/callbacks.ts
var callbacks = Object.create(null);
var pendingUpdates = Object.create(null);
function removeCallback(sources, id) {
  sources.forEach((source) => {
    const provider = source.provider;
    if (callbacks[provider] === void 0) {
      return;
    }
    const providerCallbacks = callbacks[provider];
    const prefix = source.prefix;
    const items = providerCallbacks[prefix];
    if (items) {
      providerCallbacks[prefix] = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(provider, prefix) {
  if (pendingUpdates[provider] === void 0) {
    pendingUpdates[provider] = Object.create(null);
  }
  const providerPendingUpdates = pendingUpdates[provider];
  if (!providerPendingUpdates[prefix]) {
    providerPendingUpdates[prefix] = true;
    setTimeout(() => {
      providerPendingUpdates[prefix] = false;
      if (callbacks[provider] === void 0 || callbacks[provider][prefix] === void 0) {
        return;
      }
      const items = callbacks[provider][prefix].slice(0);
      if (!items.length) {
        return;
      }
      const storage = getStorage(provider, prefix);
      let hasPending = false;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage.icons[name] !== void 0) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage.missing[name] !== void 0) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([
              {
                provider,
                prefix
              }
            ], item.id);
          }
          item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
        }
      });
    });
  }
}
var idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach((source) => {
    const provider = source.provider;
    const prefix = source.prefix;
    if (callbacks[provider] === void 0) {
      callbacks[provider] = Object.create(null);
    }
    const providerCallbacks = callbacks[provider];
    if (providerCallbacks[prefix] === void 0) {
      providerCallbacks[prefix] = [];
    }
    providerCallbacks[prefix].push(item);
  });
  return abort;
}

// src/icon/list.ts
function listToIcons(list, validate = true, simpleNames = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, false, simpleNames) : item;
    if (!validate || validateIcon(icon, simpleNames)) {
      result.push({
        provider: icon.provider,
        prefix: icon.prefix,
        name: icon.name
      });
    }
  });
  return result;
}

// src/config.ts
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};

// src/query.ts
function sendQuery(config, payload, query, done, success) {
  const resourcesCount = config.resources.length;
  const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
  let resources;
  if (config.random) {
    let list = config.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError = void 0;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach((item) => {
      if (item.abort) {
        item.abort();
      }
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue = queue.filter((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
      if (item.abort) {
        item.abort();
      }
      return false;
    });
  }
  function moduleResponse(item, data, error) {
    const isError = data === void 0;
    queue = queue.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (isError) {
      if (error !== void 0) {
        lastError = error;
      }
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (success && !config.random) {
      const index = config.resources.indexOf(item.resource);
      if (index !== -1 && index !== config.index) {
        success(index);
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        const timeout2 = typeof config.timeout === "function" ? config.timeout(startTime) : config.timeout;
        if (timeout2) {
          timer = setTimeout(() => {
            resetTimer();
            if (status === "pending") {
              clearQueue();
              failQuery();
            }
          }, timeout2);
          return;
        }
      }
      failQuery();
      return;
    }
    const item = {
      getQueryStatus,
      status: "pending",
      resource,
      done: (data, error) => {
        moduleResponse(item, data, error);
      }
    };
    queue.push(item);
    queriesSent++;
    const timeout = typeof config.rotate === "function" ? config.rotate(queriesSent, startTime) : config.rotate;
    timer = setTimeout(execNext, timeout);
    query(resource, payload, item);
  }
  setTimeout(execNext);
  return getQueryStatus;
}

// src/index.ts
function setConfig(config) {
  if (typeof config !== "object" || typeof config.resources !== "object" || !(config.resources instanceof Array) || !config.resources.length) {
    throw new Error("Invalid Reduncancy configuration");
  }
  const newConfig = Object.create(null);
  let key;
  for (key in defaultConfig) {
    if (config[key] !== void 0) {
      newConfig[key] = config[key];
    } else {
      newConfig[key] = defaultConfig[key];
    }
  }
  return newConfig;
}
function initRedundancy(cfg) {
  const config = setConfig(cfg);
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(config, payload, queryCallback, (data, error) => {
      cleanup();
      if (doneCallback) {
        doneCallback(data, error);
      }
    }, (newIndex) => {
      config.index = newIndex;
    });
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    const result = queries.find((value) => {
      return callback(value);
    });
    return result !== void 0 ? result : null;
  }
  const instance = {
    query,
    find,
    setIndex: (index) => {
      config.index = index;
    },
    getIndex: () => config.index,
    cleanup
  };
  return instance;
}

// src/api/query.ts
function emptyCallback$1() {
}
var redundancyCache = Object.create(null);
function getRedundancyCache(provider) {
  if (redundancyCache[provider] === void 0) {
    const config = getAPIConfig(provider);
    if (!config) {
      return;
    }
    const redundancy = initRedundancy(config);
    const cachedReundancy = {
      config,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config = createAPIConfig(target);
    if (config) {
      redundancy = initRedundancy(config);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send = api.send;
      }
    }
  }
  if (!redundancy || !send) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send, callback)().abort;
}

// src/cache.ts
var cache = {};

// src/api/icons.ts
function emptyCallback() {
}
var pendingIcons = Object.create(null);
var iconsToLoad = Object.create(null);
var loaderFlags = Object.create(null);
var queueFlags = Object.create(null);
function loadedNewIcons(provider, prefix) {
  if (loaderFlags[provider] === void 0) {
    loaderFlags[provider] = Object.create(null);
  }
  const providerLoaderFlags = loaderFlags[provider];
  if (!providerLoaderFlags[prefix]) {
    providerLoaderFlags[prefix] = true;
    setTimeout(() => {
      providerLoaderFlags[prefix] = false;
      updateCallbacks(provider, prefix);
    });
  }
}
var errorsCache = Object.create(null);
function loadNewIcons(provider, prefix, icons) {
  function err() {
    const key = (provider === "" ? "" : "@" + provider + ":") + prefix;
    const time = Math.floor(Date.now() / 6e4);
    if (errorsCache[key] < time) {
      errorsCache[key] = time;
      console.error('Unable to retrieve icons for "' + key + '" because API is not configured properly.');
    }
  }
  if (iconsToLoad[provider] === void 0) {
    iconsToLoad[provider] = Object.create(null);
  }
  const providerIconsToLoad = iconsToLoad[provider];
  if (queueFlags[provider] === void 0) {
    queueFlags[provider] = Object.create(null);
  }
  const providerQueueFlags = queueFlags[provider];
  if (pendingIcons[provider] === void 0) {
    pendingIcons[provider] = Object.create(null);
  }
  const providerPendingIcons = pendingIcons[provider];
  if (providerIconsToLoad[prefix] === void 0) {
    providerIconsToLoad[prefix] = icons;
  } else {
    providerIconsToLoad[prefix] = providerIconsToLoad[prefix].concat(icons).sort();
  }
  if (!providerQueueFlags[prefix]) {
    providerQueueFlags[prefix] = true;
    setTimeout(() => {
      providerQueueFlags[prefix] = false;
      const icons2 = providerIconsToLoad[prefix];
      delete providerIconsToLoad[prefix];
      const api = getAPIModule(provider);
      if (!api) {
        err();
        return;
      }
      const params = api.prepare(provider, prefix, icons2);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data, error) => {
          const storage = getStorage(provider, prefix);
          if (typeof data !== "object") {
            if (error !== 404) {
              return;
            }
            const t = Date.now();
            item.icons.forEach((name) => {
              storage.missing[name] = t;
            });
          } else {
            try {
              const parsed = addIconSet(storage, data);
              if (!parsed.length) {
                return;
              }
              const pending = providerPendingIcons[prefix];
              parsed.forEach((name) => {
                delete pending[name];
              });
              if (cache.store) {
                cache.store(provider, data);
              }
            } catch (err2) {
              console.error(err2);
            }
          }
          loadedNewIcons(provider, prefix);
        });
      });
    });
  }
}
var loadIcons = (icons, callback) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const provider = icon.provider;
    const prefix = icon.prefix;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push({
      provider,
      prefix
    });
    if (pendingIcons[provider] === void 0) {
      pendingIcons[provider] = Object.create(null);
    }
    const providerPendingIcons = pendingIcons[provider];
    if (providerPendingIcons[prefix] === void 0) {
      providerPendingIcons[prefix] = Object.create(null);
    }
    if (newIcons[provider] === void 0) {
      newIcons[provider] = Object.create(null);
    }
    const providerNewIcons = newIcons[provider];
    if (providerNewIcons[prefix] === void 0) {
      providerNewIcons[prefix] = [];
    }
  });
  const time = Date.now();
  sortedIcons.pending.forEach((icon) => {
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const pendingQueue = pendingIcons[provider][prefix];
    if (pendingQueue[name] === void 0) {
      pendingQueue[name] = time;
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((source) => {
    const provider = source.provider;
    const prefix = source.prefix;
    if (newIcons[provider][prefix].length) {
      loadNewIcons(provider, prefix, newIcons[provider][prefix]);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};

// src/browser-storage/index.ts
var cacheVersion = "iconify2";
var cachePrefix = "iconify";
var countKey = cachePrefix + "-count";
var versionKey = cachePrefix + "-version";
var hour = 36e5;
var cacheExpiration = 168;
var config = {
  local: true,
  session: true
};
var loaded = false;
var count = {
  local: 0,
  session: 0
};
var emptyList = {
  local: [],
  session: []
};
var _window = typeof window === "undefined" ? {} : window;
function getGlobal(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  config[key] = false;
  return null;
}
function setCount(storage, key, value) {
  try {
    storage.setItem(countKey, value + "");
    count[key] = value;
    return true;
  } catch (err) {
    return false;
  }
}
function getCount(storage) {
  const count2 = storage.getItem(countKey);
  if (count2) {
    const total = parseInt(count2);
    return total ? total : 0;
  }
  return 0;
}
function initCache(storage, key) {
  try {
    storage.setItem(versionKey, cacheVersion);
  } catch (err) {
  }
  setCount(storage, key, 0);
}
function destroyCache(storage) {
  try {
    const total = getCount(storage);
    for (let i = 0; i < total; i++) {
      storage.removeItem(cachePrefix + i);
    }
  } catch (err) {
  }
}
var loadCache = () => {
  if (loaded) {
    return;
  }
  loaded = true;
  const minTime = Math.floor(Date.now() / hour) - cacheExpiration;
  function load(key) {
    const func = getGlobal(key);
    if (!func) {
      return;
    }
    const getItem = (index) => {
      const name = cachePrefix + index;
      const item = func.getItem(name);
      if (typeof item !== "string") {
        return false;
      }
      let valid = true;
      try {
        const data = JSON.parse(item);
        if (typeof data !== "object" || typeof data.cached !== "number" || data.cached < minTime || typeof data.provider !== "string" || typeof data.data !== "object" || typeof data.data.prefix !== "string") {
          valid = false;
        } else {
          const provider = data.provider;
          const prefix = data.data.prefix;
          const storage = getStorage(provider, prefix);
          valid = addIconSet(storage, data.data).length > 0;
        }
      } catch (err) {
        valid = false;
      }
      if (!valid) {
        func.removeItem(name);
      }
      return valid;
    };
    try {
      const version = func.getItem(versionKey);
      if (version !== cacheVersion) {
        if (version) {
          destroyCache(func);
        }
        initCache(func, key);
        return;
      }
      let total = getCount(func);
      for (let i = total - 1; i >= 0; i--) {
        if (!getItem(i)) {
          if (i === total - 1) {
            total--;
          } else {
            emptyList[key].push(i);
          }
        }
      }
      setCount(func, key, total);
    } catch (err) {
    }
  }
  for (const key in config) {
    load(key);
  }
};
var storeCache = (provider, data) => {
  if (!loaded) {
    loadCache();
  }
  function store(key) {
    if (!config[key]) {
      return false;
    }
    const func = getGlobal(key);
    if (!func) {
      return false;
    }
    let index = emptyList[key].shift();
    if (index === void 0) {
      index = count[key];
      if (!setCount(func, key, index + 1)) {
        return false;
      }
    }
    try {
      const item = {
        cached: Math.floor(Date.now() / hour),
        provider,
        data
      };
      func.setItem(cachePrefix + index, JSON.stringify(item));
    } catch (err) {
      return false;
    }
    return true;
  }
  if (!store("local")) {
    store("session");
  }
};

// src/browser-storage/functions.ts
function toggleBrowserCache(storage, value) {
  switch (storage) {
    case "local":
    case "session":
      config[storage] = value;
      break;
    case "all":
      for (const key in config) {
        config[key] = value;
      }
      break;
  }
}

// src/customisations/shorthand.ts
var separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function alignmentFromString(custom, align) {
  align.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "left":
      case "center":
      case "right":
        custom.hAlign = value;
        break;
      case "top":
      case "middle":
      case "bottom":
        custom.vAlign = value;
        break;
      case "slice":
      case "crop":
        custom.slice = true;
        break;
      case "meet":
        custom.slice = false;
    }
  });
}

// src/customisations/rotate.ts
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}

/**
 * Default SVG attributes
 */
const svgDefaults = {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': true,
    'role': 'img',
};
/**
 * Aliases for customisations.
 * In Vue 'v-' properties are reserved, so v-align and v-flip must be renamed
 */
let customisationAliases = {};
['horizontal', 'vertical'].forEach((prefix) => {
    ['Align', 'Flip'].forEach((suffix) => {
        const attr = prefix.slice(0, 1) + suffix;
        const value = {
            attr,
            boolean: suffix === 'Flip',
        };
        // vertical-align
        customisationAliases[prefix + '-' + suffix.toLowerCase()] = value;
        // v-align
        customisationAliases[prefix.slice(0, 1) + '-' + suffix.toLowerCase()] =
            value;
        // verticalAlign
        customisationAliases[prefix + suffix] = value;
    });
});
/**
 * Render icon
 */
const render = (
// Icon must be validated before calling this function
icon, 
// Partial properties
props) => {
    // Split properties
    const customisations = mergeCustomisations(defaults, props);
    const componentProps = { ...svgDefaults };
    // Copy style
    let style = typeof props.style === 'object' && !(props.style instanceof Array)
        ? { ...props.style }
        : {};
    // Get element properties
    for (let key in props) {
        const value = props[key];
        if (value === void 0) {
            continue;
        }
        switch (key) {
            // Properties to ignore
            case 'icon':
            case 'style':
            case 'onLoad':
                break;
            // Boolean attributes
            case 'inline':
            case 'hFlip':
            case 'vFlip':
                customisations[key] =
                    value === true || value === 'true' || value === 1;
                break;
            // Flip as string: 'horizontal,vertical'
            case 'flip':
                if (typeof value === 'string') {
                    flipFromString(customisations, value);
                }
                break;
            // Alignment as string
            case 'align':
                if (typeof value === 'string') {
                    alignmentFromString(customisations, value);
                }
                break;
            // Color: override style
            case 'color':
                style.color = value;
                break;
            // Rotation as string
            case 'rotate':
                if (typeof value === 'string') {
                    customisations[key] = rotateFromString(value);
                }
                else if (typeof value === 'number') {
                    customisations[key] = value;
                }
                break;
            // Remove aria-hidden
            case 'ariaHidden':
            case 'aria-hidden':
                // Vue transforms 'aria-hidden' property to 'ariaHidden'
                if (value !== true && value !== 'true') {
                    delete componentProps['aria-hidden'];
                }
                break;
            default:
                if (customisationAliases[key] !== void 0) {
                    // Aliases for customisations
                    if (customisationAliases[key].boolean &&
                        (value === true || value === 'true' || value === 1)) {
                        // Check for boolean
                        customisations[customisationAliases[key].attr] = true;
                    }
                    else if (!customisationAliases[key].boolean &&
                        typeof value === 'string' &&
                        value !== '') {
                        // String
                        customisations[customisationAliases[key].attr] = value;
                    }
                }
                else if (defaults[key] === void 0) {
                    // Copy missing property if it does not exist in customisations
                    componentProps[key] = value;
                }
        }
    }
    // Generate icon
    const item = iconToSVG(icon, customisations);
    // Add icon stuff
    for (let key in item.attributes) {
        componentProps[key] = item.attributes[key];
    }
    if (item.inline &&
        style.verticalAlign === void 0 &&
        style['vertical-align'] === void 0) {
        style.verticalAlign = '-0.125em';
    }
    // Counter for ids based on "id" property to render icons consistently on server and client
    let localCounter = 0;
    const id = props.id;
    // Add innerHTML and style to props
    componentProps['innerHTML'] = replaceIDs(item.body, id ? () => id + '-' + localCounter++ : 'iconify-vue-');
    if (Object.keys(style).length > 0) {
        componentProps['style'] = style;
    }
    // Render icon
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('svg', componentProps);
};

/**
 * Enable cache
 */
function enableCache(storage) {
    toggleBrowserCache(storage, true);
}
/**
 * Disable cache
 */
function disableCache(storage) {
    toggleBrowserCache(storage, false);
}
/**
 * Initialise stuff
 */
// Enable short names
allowSimpleNames(true);
// Set API module
setAPIModule('', fetchAPIModule);
/**
 * Browser stuff
 */
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    // Set cache and load existing cache
    cache.store = storeCache;
    loadCache();
    const _window = window;
    // Load icons from global "IconifyPreload"
    if (_window.IconifyPreload !== void 0) {
        const preload = _window.IconifyPreload;
        const err = 'Invalid IconifyPreload syntax.';
        if (typeof preload === 'object' && preload !== null) {
            (preload instanceof Array ? preload : [preload]).forEach((item) => {
                try {
                    if (
                    // Check if item is an object and not null/array
                    typeof item !== 'object' ||
                        item === null ||
                        item instanceof Array ||
                        // Check for 'icons' and 'prefix'
                        typeof item.icons !== 'object' ||
                        typeof item.prefix !== 'string' ||
                        // Add icon set
                        !addCollection(item)) {
                        console.error(err);
                    }
                }
                catch (e) {
                    console.error(err);
                }
            });
        }
    }
    // Set API from global "IconifyProviders"
    if (_window.IconifyProviders !== void 0) {
        const providers = _window.IconifyProviders;
        if (typeof providers === 'object' && providers !== null) {
            for (let key in providers) {
                const err = 'IconifyProviders[' + key + '] is invalid.';
                try {
                    const value = providers[key];
                    if (typeof value !== 'object' ||
                        !value ||
                        value.resources === void 0) {
                        continue;
                    }
                    if (!addAPIProvider(key, value)) {
                        console.error(err);
                    }
                }
                catch (e) {
                    console.error(err);
                }
            }
        }
    }
}
const Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    // Do not inherit other attributes: it is handled by render()
    inheritAttrs: false,
    // Set initial data
    data() {
        return {
            // Mounted status
            mounted: false,
            // Callback counter to trigger re-render
            counter: 0,
        };
    },
    beforeMount() {
        // Current icon name
        this._name = '';
        // Loading
        this._loadingIcon = null;
        // Mark as mounted
        this.mounted = true;
    },
    unmounted() {
        this.abortLoading();
    },
    methods: {
        abortLoading() {
            if (this._loadingIcon) {
                this._loadingIcon.abort();
                this._loadingIcon = null;
            }
        },
        // Get data for icon to render or null
        getIcon(icon, onload) {
            // Icon is an object
            if (typeof icon === 'object' &&
                icon !== null &&
                typeof icon.body === 'string') {
                // Stop loading
                this._name = '';
                this.abortLoading();
                return {
                    data: fullIcon(icon),
                };
            }
            // Invalid icon?
            let iconName;
            if (typeof icon !== 'string' ||
                (iconName = stringToIcon(icon, false, true)) === null) {
                this.abortLoading();
                return null;
            }
            // Load icon
            const data = getIconData(iconName);
            if (data === null) {
                // Icon needs to be loaded
                if (!this._loadingIcon || this._loadingIcon.name !== icon) {
                    // New icon to load
                    this.abortLoading();
                    this._name = '';
                    this._loadingIcon = {
                        name: icon,
                        abort: loadIcons([iconName], () => {
                            this.counter++;
                        }),
                    };
                }
                return null;
            }
            // Icon data is available
            this.abortLoading();
            if (this._name !== icon) {
                this._name = icon;
                if (onload) {
                    onload(icon);
                }
            }
            // Add classes
            const classes = ['iconify'];
            if (iconName.prefix !== '') {
                classes.push('iconify--' + iconName.prefix);
            }
            if (iconName.provider !== '') {
                classes.push('iconify--' + iconName.provider);
            }
            return { data, classes };
        },
    },
    // Render icon
    render() {
        if (!this.mounted) {
            return this.$slots.default ? this.$slots.default() : null;
        }
        // Re-render when counter changes
        this.counter;
        // Get icon data
        const props = this.$attrs;
        const icon = this.getIcon(props.icon, props.onLoad);
        // Validate icon object
        if (!icon) {
            return this.$slots.default ? this.$slots.default() : null;
        }
        // Add classes
        let newProps = props;
        if (icon.classes) {
            newProps = {
                ...props,
                class: (typeof props['class'] === 'string'
                    ? props['class'] + ' '
                    : '') + icon.classes.join(' '),
            };
        }
        // Render icon
        return render(icon.data, newProps);
    },
});
/**
 * Internal API
 */
const _api = {
    getAPIConfig,
    setAPIModule,
    sendAPIQuery,
    setFetch,
    listAPIProviders,
    mergeParams,
};




/***/ })

}]);