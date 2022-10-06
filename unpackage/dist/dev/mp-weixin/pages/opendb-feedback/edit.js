"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
var js_sdk_validator_opendbFeedback = require("../../js_sdk/validator/opendb-feedback.js");
const db = common_vendor.rn.database();
const dbCollectionName = "opendb-feedback";
function getValidator(fields) {
  let result = {};
  for (let key in js_sdk_validator_opendbFeedback.validator) {
    if (fields.indexOf(key) > -1) {
      result[key] = js_sdk_validator_opendbFeedback.validator[key];
    }
  }
  return result;
}
const _sfc_main = {
  data() {
    let formData = {
      "user_id": "",
      "create_date": null,
      "content": "",
      "imgs": [],
      "is_reply": null,
      "feedback_id": "",
      "contact": "",
      "mobile": "",
      "reply_count": null
    };
    return {
      formData,
      formOptions: {},
      rules: __spreadValues({}, getValidator(Object.keys(formData)))
    };
  },
  onLoad(e) {
    if (e.id) {
      const id = e.id;
      this.formDataId = id;
      this.getDetail(id);
    }
  },
  onReady() {
    this.$refs.form.setRules(this.rules);
  },
  methods: {
    submit() {
      common_vendor.index.showLoading({
        mask: true
      });
      this.$refs.form.validate().then((res) => {
        return this.submitForm(res);
      }).catch(() => {
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    },
    submitForm(value) {
      return db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
        common_vendor.index.showToast({
          icon: "none",
          title: "\u4FEE\u6539\u6210\u529F"
        });
        this.getOpenerEventChannel().emit("refreshData");
        setTimeout(() => common_vendor.index.navigateBack(), 500);
      }).catch((err) => {
        common_vendor.index.showModal({
          content: err.message || "\u8BF7\u6C42\u670D\u52A1\u5931\u8D25",
          showCancel: false
        });
      });
    },
    getDetail(id) {
      common_vendor.index.showLoading({
        mask: true
      });
      db.collection(dbCollectionName).doc(id).field("user_id,create_date,content,imgs,is_reply,feedback_id,contact,mobile,reply_count").get().then((res) => {
        const data = res.result.data[0];
        if (data) {
          this.formData = data;
        }
      }).catch((err) => {
        common_vendor.index.showModal({
          content: err.message || "\u8BF7\u6C42\u670D\u52A1\u5931\u8D25",
          showCancel: false
        });
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_data_checkbox2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_datetime_picker + _easycom_uni_data_checkbox + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.user_id = $event),
    b: common_vendor.p({
      placeholder: "\u7559\u8A00\u53CD\u9988\u7528\u6237ID/\u56DE\u590D\u7559\u8A00\u7528\u6237ID\uFF0C\u53C2\u8003uni-id-users\u8868",
      modelValue: $data.formData.user_id
    }),
    c: common_vendor.p({
      name: "user_id",
      label: "",
      required: true
    }),
    d: common_vendor.o(($event) => $data.formData.create_date = $event),
    e: common_vendor.p({
      ["return-type"]: "timestamp",
      modelValue: $data.formData.create_date
    }),
    f: common_vendor.p({
      name: "create_date",
      label: ""
    }),
    g: common_vendor.o(($event) => $data.formData.content = $event),
    h: common_vendor.p({
      placeholder: "\u7559\u8A00\u5185\u5BB9/\u56DE\u590D\u5185\u5BB9",
      trim: "right",
      modelValue: $data.formData.content
    }),
    i: common_vendor.p({
      name: "content",
      label: "",
      required: true
    }),
    j: common_vendor.o(($event) => $data.formData.imgs = $event),
    k: common_vendor.p({
      multiple: true,
      modelValue: $data.formData.imgs
    }),
    l: common_vendor.p({
      name: "imgs",
      label: ""
    }),
    m: common_vendor.o(($event) => _ctx.binddata("is_reply", $event.detail.value)),
    n: $data.formData.is_reply,
    o: common_vendor.p({
      name: "is_reply",
      label: ""
    }),
    p: common_vendor.o(($event) => $data.formData.feedback_id = $event),
    q: common_vendor.p({
      placeholder: "\u88AB\u56DE\u590D\u7559\u8A00ID",
      modelValue: $data.formData.feedback_id
    }),
    r: common_vendor.p({
      name: "feedback_id",
      label: ""
    }),
    s: common_vendor.o(($event) => $data.formData.contact = $event),
    t: common_vendor.p({
      placeholder: "\u8054\u7CFB\u4EBA",
      trim: "both",
      modelValue: $data.formData.contact
    }),
    v: common_vendor.p({
      name: "contact",
      label: ""
    }),
    w: common_vendor.o(($event) => $data.formData.mobile = $event),
    x: common_vendor.p({
      placeholder: "\u8054\u7CFB\u7535\u8BDD",
      trim: "both",
      modelValue: $data.formData.mobile
    }),
    y: common_vendor.p({
      name: "mobile",
      label: ""
    }),
    z: common_vendor.o(($event) => $data.formData.reply_count = $event),
    A: common_vendor.p({
      placeholder: "\u88AB\u56DE\u590D\u6761\u6570",
      type: "number",
      modelValue: $data.formData.reply_count
    }),
    B: common_vendor.p({
      name: "reply_count",
      label: ""
    }),
    C: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    D: common_vendor.sr("form", "61c29353-0"),
    E: common_vendor.p({
      model: $data.formData,
      ["validate-trigger"]: "submit",
      ["err-show-type"]: "toast"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/linma/Documents/HBuilderProjects/test-error/pages/opendb-feedback/edit.vue"]]);
wx.createPage(MiniProgramPage);
