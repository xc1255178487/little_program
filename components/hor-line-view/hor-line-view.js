// components/hor-line-view/hor-line-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    leftIcon:{
      type:String,
      value: ''
    },
    label:{
      type: String,
      value: ''
    },
    signText:{ // 中间提示文字，当redPoint存在时，背景为红色
      type:String,
      value:''
    },
    redPoint:{
      type: Boolean,
      value: false
    },
    rightIcon:{
      type: String,
      value: ''
    },
    target: { // 默认 是打开对应页面，传入对应路径即可 或者 ‘_contact’ 打开客服页面
      type: String,
      value: ''
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    showSign:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击事件
     * 1.跳转路径
     * 2.打开客服页面
     * 3.执行传入的函数
     */
    _clickItem(){
      let that = this;
      if (that.data.target === '_contact') {
        return;
      } else {
        wx.navigateTo({
          url: that.data.target,
        })
      }
      if(that.data.redPoint){
        that._hiddenSign();
      }
    },
    /**
     * 
     */
    _hiddenSign(){
      let that = this;
      that.setData({
        showSign: false
      })
    }
  }
})
