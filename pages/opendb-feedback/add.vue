<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validate-trigger="bind" >
      <uni-forms-item name="user_id" label="" required>
        <uni-easyinput placeholder="留言反馈用户ID/回复留言用户ID，参考uni-id-users表" v-model="formData.user_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="create_date" label="">
        <uni-datetime-picker return-type="timestamp" v-model="formData.create_date"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="content" label="" required>
        <uni-easyinput placeholder="留言内容/回复内容" v-model="formData.content" trim="right"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="imgs" label="">
        <uni-data-checkbox :multiple="true" v-model="formData.imgs"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="is_reply" label="">
        <switch @change="binddata('is_reply', $event.detail.value)" :checked="formData.is_reply"></switch>
      </uni-forms-item>
      <uni-forms-item name="feedback_id" label="">
        <uni-easyinput placeholder="被回复留言ID" v-model="formData.feedback_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="contact" label="">
        <uni-easyinput placeholder="联系人" v-model="formData.contact" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="mobile" label="">
        <uni-easyinput placeholder="联系电话" v-model="formData.mobile" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="reply_count" label="">
        <uni-easyinput placeholder="被回复条数" type="number" v-model="formData.reply_count"></uni-easyinput>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" @click="submit">提交</button>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/opendb-feedback.js';

  const db = uniCloud.database();
  const dbCollectionName = 'opendb-feedback';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.indexOf(key) > -1) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
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
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            icon: 'none',
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      }
    }
  }
</script>

<style>
  .uni-container {
    padding: 15px;
  }

  .uni-input-border,
  .uni-textarea-border {
    width: 100%;
    font-size: 14px;
    color: #666;
    border: 1px #e5e5e5 solid;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .uni-input-border {
    padding: 0 10px;
    height: 35px;

  }

  .uni-textarea-border {
    padding: 10px;
    height: 80px;
  }

  .uni-button-group {
    margin-top: 50px;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
  }

  .uni-button {
    width: 184px;
  }
</style>
