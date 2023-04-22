/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 305:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ plugins_button; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/button.vue?vue&type=template&id=35c800ac&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "gdp-button",
    class: [`gdp-button--${_vm.type}`, {
      'is-plain': _vm.plain,
      'is-round': _vm.round,
      'is-circle': _vm.circle,
      'is-disabled': _vm.disabled
    }],
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm.icon ? _c('i', {
    class: _vm.icon
  }) : _vm._e(), _vm.$slots.default ? _c('span', [_vm._t("default")], 2) : _vm._e()]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/button.vue?vue&type=script&lang=js&
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'gdpButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  created() {
    console.log(this.$slots);
  },
  mounted() {
    console.log(this.$options);
    console.log(this.$options.filters.capitalize);
    // console.log(this.$options.propsData.hasOwnProperty('disabled'))
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
});
;// CONCATENATED MODULE: ./src/plugins/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/button.vue?vue&type=style&index=0&id=35c800ac&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugins/button.vue?vue&type=style&index=0&id=35c800ac&prod&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/plugins/button.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  plugins_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "35c800ac",
  null
  
)

/* harmony default export */ var plugins_button = (component.exports);

/***/ }),

/***/ 555:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ plugins_checkbox; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/checkbox.vue?vue&type=template&id=206e9a6d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', {
    staticClass: "gdp-checkbox",
    class: {
      'is-checked': _vm.isChecked
    }
  }, [_c('span', {
    staticClass: "gdp-checkbox__input"
  }, [_c('span', {
    staticClass: "gdp-checkbox__inner"
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.model,
      expression: "model"
    }],
    staticClass: "gdp-checkbox__original",
    attrs: {
      "type": "checkbox",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.label,
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : _vm.model
    },
    on: {
      "change": function ($event) {
        var $$a = _vm.model,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = _vm.label,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.model = $$c;
        }
      }
    }
  })]), _c('span', {
    staticClass: "gdp-checkbox__label"
  }, [_vm._t("default"), !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()], 2)]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/checkbox.vue?vue&type=script&lang=js&
/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: 'GdpCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get() {
        // return this.value
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        // this.$emit('input', value)
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value);
      }
    },
    isGroup() {
      return !!this.CheckboxGroup;
    },
    isChecked() {
      // 如果是group包裹，判断label是否在model中
      // 如果没有group包裹，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model;
    }
  }
});
;// CONCATENATED MODULE: ./src/plugins/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/checkbox.vue?vue&type=style&index=0&id=206e9a6d&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugins/checkbox.vue?vue&type=style&index=0&id=206e9a6d&prod&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/plugins/checkbox.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  plugins_checkboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "206e9a6d",
  null
  
)

/* harmony default export */ var plugins_checkbox = (component.exports);

/***/ }),

/***/ 181:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ checkboxGroup; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/checkboxGroup.vue?vue&type=template&id=22979578&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._t("default")], 2);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/checkboxGroup.vue?vue&type=script&lang=js&
/* harmony default export */ var checkboxGroupvue_type_script_lang_js_ = ({
  name: 'GdpCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    };
  }
});
;// CONCATENATED MODULE: ./src/plugins/checkboxGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_checkboxGroupvue_type_script_lang_js_ = (checkboxGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/plugins/checkboxGroup.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  plugins_checkboxGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "22979578",
  null
  
)

/* harmony default export */ var checkboxGroup = (component.exports);

/***/ }),

/***/ 331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ dialog; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/dialog.vue?vue&type=template&id=3b988d76&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "dialog-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.visible,
      expression: "visible"
    }],
    staticClass: "gdp-dialog__wrapper",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.handleClose.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "gdp-dialog",
    style: {
      width: _vm.width,
      marginTop: _vm.top
    }
  }, [_c('div', {
    staticClass: "gdp-dialog__header"
  }, [_vm._t("title", function () {
    return [_c('span', {
      staticClass: "gdp-dialog__title"
    }, [_vm._v(_vm._s(_vm.title))])];
  }), _c('button', {
    staticClass: "gdp-dialog__headerbtn",
    on: {
      "click": _vm.handleClose
    }
  }, [_c('i', {
    staticClass: "gdp-icon-close"
  })])], 2), _c('div', {
    staticClass: "gdp-dialog__body"
  }, [_vm._t("default")], 2), _vm.$slots.footer ? _c('div', {
    staticClass: "gdp-dialog__footer"
  }, [_vm._t("footer")], 2) : _vm._e()])])]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/dialog.vue?vue&type=script&lang=js&
/* harmony default export */ var dialogvue_type_script_lang_js_ = ({
  name: 'GdpDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '150px'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      console.log(2222);
      // this.$emit('close', false)
      this.$emit('update:visible', false);
    }
  }
});
;// CONCATENATED MODULE: ./src/plugins/dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_dialogvue_type_script_lang_js_ = (dialogvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/dialog.vue?vue&type=style&index=0&id=3b988d76&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugins/dialog.vue?vue&type=style&index=0&id=3b988d76&prod&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/plugins/dialog.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  plugins_dialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3b988d76",
  null
  
)

/* harmony default export */ var dialog = (component.exports);

/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ plugins_form; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/form.vue?vue&type=template&id=0ac7dbc1&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gdp-form"
  }, [_vm._t("default")], 2);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/form.vue?vue&type=script&lang=js&
/* harmony default export */ var formvue_type_script_lang_js_ = ({
  name: 'GdpForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide() {
    return {
      Form: this
    };
  }
});
;// CONCATENATED MODULE: ./src/plugins/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/plugins/form.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  plugins_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0ac7dbc1",
  null
  
)

/* harmony default export */ var plugins_form = (component.exports);

/***/ }),

/***/ 869:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ formItem; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/formItem.vue?vue&type=template&id=8b3ded12&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gdp-form-item"
  }, [_c('label', {
    staticClass: "gdp-form-item__label",
    style: _vm.labelStyle
  }, [_vm._v(_vm._s(_vm.label))]), _c('div', {
    staticClass: "gdp-form-item__content"
  }, [_vm._t("default")], 2)]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/formItem.vue?vue&type=script&lang=js&
/* harmony default export */ var formItemvue_type_script_lang_js_ = ({
  name: 'GdpFormItem',
  inject: {
    Form: {
      default: ''
    }
  },
  props: {
    label: String
  },
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/plugins/formItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_formItemvue_type_script_lang_js_ = (formItemvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/formItem.vue?vue&type=style&index=0&id=8b3ded12&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugins/formItem.vue?vue&type=style&index=0&id=8b3ded12&prod&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/plugins/formItem.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  plugins_formItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8b3ded12",
  null
  
)

/* harmony default export */ var formItem = (component.exports);

/***/ }),

/***/ 10:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ input; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/input.vue?vue&type=template&id=93fa358c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gdp-input",
    class: {
      'suffix': _vm.showSuffix
    }
  }, [_c('input', {
    staticClass: "gdp-input__inner",
    class: {
      'is-disabled': _vm.disabled
    },
    attrs: {
      "type": _vm.showPassword ? _vm.passwordVisible ? 'text' : 'password' : _vm.type,
      "placeholder": _vm.placeholder,
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": _vm.handleInput
    }
  }), _vm.showSuffix ? _c('span', {
    staticClass: "gdp-input__suffix"
  }, [_vm.clearable && _vm.value ? _c('i', {
    staticClass: "gdp-icon-shanchu",
    on: {
      "click": _vm.clear
    }
  }) : _vm._e(), _vm.showPassword && _vm.value ? _c('i', {
    staticClass: "gdp-icon-chakanmima",
    class: {
      'gdp-input__suffix__active': _vm.passwordVisible
    },
    on: {
      "click": _vm.handlePassword
    }
  }) : _vm._e()]) : _vm._e()]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/input.vue?vue&type=script&lang=js&
/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'GdpInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passwordVisible: false
    };
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    }
  },
  methods: {
    handleInput(e) {
      console.log(e);
      this.$emit('input', e.target.value);
    },
    clear() {
      this.$emit('input', '');
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
});
;// CONCATENATED MODULE: ./src/plugins/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/input.vue?vue&type=style&index=0&id=93fa358c&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugins/input.vue?vue&type=style&index=0&id=93fa358c&prod&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/plugins/input.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  plugins_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "93fa358c",
  null
  
)

/* harmony default export */ var input = (component.exports);

/***/ }),

/***/ 969:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ plugins_radio; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/radio.vue?vue&type=template&id=032b3f28&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', {
    staticClass: "gdp-radio",
    class: {
      'is-checked': _vm.label == _vm.model
    }
  }, [_c('span', {
    staticClass: "gdp-radio__input"
  }, [_c('span', {
    staticClass: "gdp-radio__inner"
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.model,
      expression: "model"
    }],
    staticClass: "gdp-radio__original",
    attrs: {
      "type": "radio",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.label,
      "checked": _vm._q(_vm.model, _vm.label)
    },
    on: {
      "change": function ($event) {
        _vm.model = _vm.label;
      }
    }
  })]), _c('span', {
    staticClass: "gdp-radio__label"
  }, [_vm._t("default"), !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()], 2)]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/radio.vue?vue&type=script&lang=js&
/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: 'GdpRadio',
  // inject: ['foo'],
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  created() {
    console.log(this.label);
    console.log(this.value);
    // console.log(this.foo)
    console.log(this.RadioGroup);
  },
  computed: {
    model: {
      get() {
        // return this.value
        // 这里通过isGroup 判断是否有被group包裹
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 触发父组件给当前组件注册的input事件
        // this.$emit('input', value)
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value);
      }
    },
    isGroup() {
      return !!this.RadioGroup;
    }
  }
});
;// CONCATENATED MODULE: ./src/plugins/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/radio.vue?vue&type=style&index=0&id=032b3f28&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugins/radio.vue?vue&type=style&index=0&id=032b3f28&prod&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/plugins/radio.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  plugins_radiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "032b3f28",
  null
  
)

/* harmony default export */ var plugins_radio = (component.exports);

/***/ }),

/***/ 439:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ radioGroup; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/radioGroup.vue?vue&type=template&id=76fcebbd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gdp-radio-group"
  }, [_vm._t("default")], 2);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/radioGroup.vue?vue&type=script&lang=js&
/* harmony default export */ var radioGroupvue_type_script_lang_js_ = ({
  name: 'GdpRadioGroup',
  // provide: {
  //   foo: 'bar'
  // },
  provide() {
    return {
      RadioGroup: this
    };
  },
  props: {
    // gdp-radio-group接收到了 value 值
    // 将来还需要触发 当前组件的input事件
    // provido 与 inject
    value: null
  }
});
;// CONCATENATED MODULE: ./src/plugins/radioGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_radioGroupvue_type_script_lang_js_ = (radioGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/plugins/radioGroup.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  plugins_radioGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var radioGroup = (component.exports);

/***/ }),

/***/ 369:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ plugins_switch; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/switch.vue?vue&type=template&id=7caafa10&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gdp-switch",
    class: {
      'is-checked': _vm.value
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('input', {
    ref: "input",
    staticClass: "gdp-switch__input",
    attrs: {
      "type": "checkbox",
      "name": _vm.name
    }
  }), _c('span', {
    ref: "core",
    staticClass: "gdp-switch__core"
  }, [_c('span', {
    staticClass: "gdp-switch__button"
  })])]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/switch.vue?vue&type=script&lang=js&
/* harmony default export */ var switchvue_type_script_lang_js_ = ({
  name: 'GdpSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  watch: {
    value() {
      this.coreStyle();
    }
  },
  mounted() {
    // 修改开关的颜色
    this.coreStyle();
  },
  methods: {
    handleClick() {
      this.$emit('input', !this.value);
    },
    coreStyle() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
      this.$refs.input.checked = this.value;
    }
  }
});
;// CONCATENATED MODULE: ./src/plugins/switch.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_switchvue_type_script_lang_js_ = (switchvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/switch.vue?vue&type=style&index=0&id=7caafa10&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugins/switch.vue?vue&type=style&index=0&id=7caafa10&prod&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/plugins/switch.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  plugins_switchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7caafa10",
  null
  
)

/* harmony default export */ var plugins_switch = (component.exports);

/***/ }),

/***/ 1:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 861:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./button.vue": 305,
	"./checkbox.vue": 555,
	"./checkboxGroup.vue": 181,
	"./dialog.vue": 331,
	"./form.vue": 607,
	"./formItem.vue": 869,
	"./input.vue": 10,
	"./radio.vue": 969,
	"./radioGroup.vue": 439,
	"./switch.vue": 369
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 861;

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./src/plugins/index.js
// 动态引入并注册
// 学习金渡讲师说的一次引入，终身受用 => 全局注册，分布式动态路由

// a. 优化重复的import引入操作 => 项目实战
// require.context() webpack API 引入文件
// 1.路径   2.是否匹配子集   3.匹配规则
const requireComponent = __webpack_require__(861);
const install = Vue => {
  // 注册单个组件
  if (install.installed) return;
  install.installed;
  console.log(requireComponent.keys());
  requireComponent.keys().forEach(element => {
    // 第 i 个循环粒子
    const config = requireComponent(element);
    const componentName = config.default.name;
    Vue.component(componentName, config.default || config);
  });
};

// import Button from './button'
// import Dialog from './dialog'
// import Input from './input'
// import Checkbox from './checkbox'
// import Radio from './radio'
// import RadioGroup from './radioGroup'
// import Switch from './switch'
// import CheckboxGroup from './checkboxGroup'
// import Form from './form'
// import FormItem from './formItem'

// 存储组件列表
// const components = [
//   Button,
//   Dialog,
//   Input,
//   Checkbox,
//   Radio,
//   RadioGroup,
//   Switch,
//   CheckboxGroup,
//   Form,
//   FormItem
// ]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// const install = function (Vue) {
//   // 遍历注册全局组件
//   components.forEach(component => {
//     Vue.component(component.name, component)
//   })
// }

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var plugins = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (plugins);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=gdp-ui-jd.common.js.map