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
common_vendor.rn.database();
const _sfc_main = {
  data() {
    return {
      queryWhere: "",
      collectionList: "opendb-feedback",
      loadMore: {
        contentdown: "",
        contentrefresh: "",
        contentnomore: ""
      },
      options: __spreadValues({}, js_sdk_validator_opendbFeedback.enumConverter)
    };
  },
  onLoad(e) {
    this._id = e.id;
  },
  onReady() {
    if (this._id) {
      this.queryWhere = '_id=="' + this._id + '"';
    }
  },
  methods: {
    handleUpdate() {
      common_vendor.index.navigateTo({
        url: "./edit?id=" + this._id,
        events: {
          refreshData: () => {
            this.$refs.udb.loadData({
              clear: true
            });
          }
        }
      });
    },
    handleDelete() {
      this.$refs.udb.remove(this._id, {
        success: (res) => {
          common_vendor.index.navigateTo({
            url: "./list"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_load_more2 + _easycom_uni_dateformat2 + _easycom_unicloud_db2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_load_more + _easycom_uni_dateformat + _easycom_unicloud_db)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.w(({
      data,
      loading,
      error,
      options
    }, s0, i0) => {
      return common_vendor.e({
        a: error
      }, error ? {
        b: common_vendor.t(error.message)
      } : loading ? {
        d: "ee04cc4c-1-" + i0 + ",ee04cc4c-0",
        e: common_vendor.p({
          contentText: $data.loadMore,
          status: "loading"
        })
      } : data ? {
        g: common_vendor.t(data.user_id),
        h: "ee04cc4c-2-" + i0 + ",ee04cc4c-0",
        i: common_vendor.p({
          threshold: [0, 0],
          date: data.create_date
        }),
        j: common_vendor.t(data.content),
        k: common_vendor.t(data.imgs),
        l: common_vendor.t(data.is_reply == true ? "\u2705" : "\u274C"),
        m: common_vendor.t(data.feedback_id),
        n: common_vendor.t(data.contact),
        o: common_vendor.t(data.mobile),
        p: common_vendor.t(data.reply_count)
      } : {}, {
        c: loading,
        f: data,
        q: i0,
        r: s0
      });
    }, {
      name: "d",
      path: "a",
      vueId: "ee04cc4c-0"
    }),
    b: common_vendor.sr("udb", "ee04cc4c-0"),
    c: common_vendor.p({
      options: $data.options,
      collection: $data.collectionList,
      field: "user_id,create_date,content,imgs,is_reply,feedback_id,contact,mobile,reply_count",
      where: $data.queryWhere,
      getone: true,
      manual: true
    }),
    d: common_vendor.o((...args) => $options.handleUpdate && $options.handleUpdate(...args)),
    e: common_vendor.o((...args) => $options.handleDelete && $options.handleDelete(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/linma/Documents/HBuilderProjects/test-error/pages/opendb-feedback/detail.vue"]]);
wx.createPage(MiniProgramPage);
