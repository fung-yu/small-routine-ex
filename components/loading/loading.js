// components/common/load.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isReachBottom: {
      type: Boolean,
      value: 'false',
    },
    hasMoreInfo: {
      type: Boolean,
      value: 'false',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loadingImg:'../../images/loading.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
