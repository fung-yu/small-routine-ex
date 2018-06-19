Component({
  properties: {
    // 这里定义了modal属性，属性值可以在组件使用时指定
    modal: {
      type: Object,
      value: {},
    }
  },
  data: {
    // 这里是一些组件内部数据
  },
  methods: {
    // 这里是一个自定义方法
    cancelHandle: function () {
      var modal = this.data.modal;
      modal.isShow = false;
      this.setData({
        modal:modal
      });
      this.triggerEvent('Modal', { btnType: 'cancel'})
    },
    okHandle: function (e) {
      var modal = this.data.modal;
      modal.isShow = false;
      this.setData({
        modal: modal
      });
      this.triggerEvent('Modal', { btnType: 'ok'})
    }
  }
})