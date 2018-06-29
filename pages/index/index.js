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
    },
    inputModal:{
     
      isShow: false,
      title: '添加标签',
      desc: '',
      // src: 'https://www.baidu.com/img/bd_logo1.png?qua=high',
      cancel: '取消',
      ok: '确定'
    },
    buttonModal: {

      isShow: false,
      title: '添加标签',
      desc: '',
      // src: 'https://www.baidu.com/img/bd_logo1.png?qua=high',
      cancel: '取消',
      ok: '确定'
    }
  },
  showModalHandle:function(){
    let modal = this.data.modal;
    modal.isShow = true;
    this.setData({
      modal:modal
    });
  },
  showInputModalHandle:function(){
    let inputModal = this.data.inputModal;
    inputModal.isShow = true;
    this.setData({
      inputModal: inputModal
    });
  },
  showButtonModalHandle:function(){
    let buttonModal = this.data.buttonModal;
    buttonModal.isShow = true;
    this.setData({
      buttonModal: buttonModal
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
