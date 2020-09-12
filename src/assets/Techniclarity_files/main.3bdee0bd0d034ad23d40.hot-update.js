webpackHotUpdate("main",{

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.module.css */ "./src/styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_cloud_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/cloud-1.png */ "./src/assets/cloud-1.png");
/* harmony import */ var _assets_cloud_1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_cloud_1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_cloud_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/cloud-2.png */ "./src/assets/cloud-2.png");
/* harmony import */ var _assets_cloud_2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_cloud_2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_cloud_3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/cloud-3.png */ "./src/assets/cloud-3.png");
/* harmony import */ var _assets_cloud_3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_cloud_3_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_globe_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/globe.png */ "./src/assets/globe.png");
/* harmony import */ var _assets_globe_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_globe_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_pink_circle_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/pink-circle.svg */ "./src/assets/pink-circle.svg");
/* harmony import */ var _assets_pink_circle_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_pink_circle_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_green_diamond_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/green-diamond.svg */ "./src/assets/green-diamond.svg");
/* harmony import */ var _assets_green_diamond_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_green_diamond_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_cloud_freebie_right_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/cloud-freebie-right.png */ "./src/assets/cloud-freebie-right.png");
/* harmony import */ var _assets_cloud_freebie_right_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_cloud_freebie_right_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_cloud_freebie_left_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/cloud-freebie-left.png */ "./src/assets/cloud-freebie-left.png");
/* harmony import */ var _assets_cloud_freebie_left_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_cloud_freebie_left_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_glossary_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/glossary.png */ "./src/assets/glossary.png");
/* harmony import */ var _assets_glossary_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_glossary_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_line_rocket_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/line-rocket.svg */ "./src/assets/line-rocket.svg");
/* harmony import */ var _assets_line_rocket_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_line_rocket_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_line_hand_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/line-hand.svg */ "./src/assets/line-hand.svg");
/* harmony import */ var _assets_line_hand_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_line_hand_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_hand_globe_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/hand-globe.png */ "./src/assets/hand-globe.png");
/* harmony import */ var _assets_hand_globe_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_hand_globe_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_onScreen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/onScreen */ "./src/shared/onScreen.js");
/* harmony import */ var _components_NewsletterSignup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/NewsletterSignup */ "./src/components/NewsletterSignup.js");
var _jsxFileName = "/Users/sophiehebdidge/techniclarity-dot-com/src/pages/Home.js";


















function Home({
  setHeaderColour
}) {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setHeaderColour('#262DBA');
    const timer = setTimeout(() => {
      setHeaderColour('#8294F1');
      setLoaded(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const glossaryOnScreen = Object(_shared_onScreen__WEBPACK_IMPORTED_MODULE_15__["default"])(ref, '-300px');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `container-fluid position-relative vh-100 d-flex align-items-center ${loaded ? _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.containerTopLoaded : _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.containerTop}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_cloud_1_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Cloud Background",
    className: `position-absolute h-25 ${loaded ? _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloudTopLoaded : _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloudTop}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_cloud_3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Cloud Background",
    className: `position-absolute h-25 ${loaded ? _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloudMiddleLoaded : _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloudMiddle}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_cloud_2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Cloud Background",
    className: `position-absolute h-25 ${loaded ? _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloudBottomLoaded : _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloudBottom}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_globe_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Globe Background",
    className: `position-absolute h-75 ${_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.globe}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_pink_circle_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Globe Background",
    className: `position-absolute h-75 ${_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pinkGlobe}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-75 ml-5 pl-5 row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "Stop dreaming about your startup. Learn just enough tech to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 73
    }
  }, "make it happen.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "We develop female founders by teaching them the tech know-how they need to lead a startup to success."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: ref,
    className: `bg-cyan p-4 container-fluid position-relative d-flex align-items-center`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_cloud_freebie_left_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Cloud Background",
    className: `position-absolute h-100 ${glossaryOnScreen ? _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloudFreebieLeftLoaded : _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloudFreebieLeft}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_cloud_freebie_right_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Cloud Background",
    className: `position-absolute h-100 ${glossaryOnScreen ? _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloudFreebieRightLoaded : _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloudFreebieRight}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_glossary_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Glossary",
    className: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5 text-center my-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "Free!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "Glossary"), " of Tech Lingo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "All the tech jargon you need to know so that you can chat about your product with ease."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "purple",
    href: "https://view.flodesk.com/pages/5f4e822801a6b70026d79b01",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "Get your free glossary"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 my-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, "Course"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Product ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 23
    }
  }, "Launchpad")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }, "starting point"), " you need to get your idea ready for your future technical team."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "Product Launchpad is an online course that guides you through the first few steps of creating your app or web platform. You\u2019ll learn all the knowledge you need to launch your product and put all that new know-how into practice at the same time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "red",
    href: "/course",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "Find out more")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 position-relative d-flex justify-content-center align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_green_diamond_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Green diamond background",
    className: `w-100`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_line_rocket_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "Line drawing of a rocket",
    className: `h-50 position-absolute`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 position-relative d-flex justify-content-center align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_pink_circle_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Pink circle background",
    className: `w-100`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_line_hand_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "Line drawing of a hand",
    className: `w-75 position-absolute`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6  my-auto ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, "Tuition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, "Work ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 43
    }
  }, "together"), " 1:1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, "Get ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 42
    }
  }, "an expert take"), " on your tech plans and idea. "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, "You can do all the research in the world, but sometimes all you need is an experienced pair of eyes to validate your thinking. You\u2019ll leave with solutions to problems that have been holding you back, so that you can lead with confidence."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "red",
    href: "/tuition",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, "Find out more")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `bg-cyan p-4 container-fluid position-relative d-flex align-items-center`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5 text-center my-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, "Newsletter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 44
    }
  }, "handbook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, "You don\u2019t need more advice (or inbox clutter), you just need high-quality info that stops you feeling like a fraud when you\u2019re running your startup."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsletterSignup__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_hand_globe_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "Line drawing of a hand holding a globe",
    className: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=main.3bdee0bd0d034ad23d40.hot-update.js.map