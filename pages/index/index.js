//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    modal: {
      isShow: false,
      title: '',
      desc: '',
      src: 'https://www.baidu.com/img/bd_logo1.png?qua=high',
      cancel: '重新拍摄',
      ok: '使用照片'
    }
  },
  showModalHandle:function(){
    let modal = this.data.modal;
    modal.isShow = true;
    this.setData({
      modal:modal
    });
  },
  modalImageHandle: function (e) {

    let btnType = e.detail.btnType;
    if (e.detail.modal) {
      this.setData({
        modal: e.detail.modal
      });
    }
    if (btnType == 'cancel') {
        console.log('click cancel event');
    } else if (btnType == 'ok') {
        console.log('click ok event');
    }
    
  }

})
