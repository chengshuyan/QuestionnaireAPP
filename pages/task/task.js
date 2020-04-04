// pages/task/task.js
var app=getApp();

Page({
   
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 50000, //自动切换时间间隔,5s
    duration: 1000, //  滑动动画时长1s
    currentSwiper: 0,
    haven_gold:40,
    should_back_gold:70,
    imgUrls: [
      '/images/questionnaire.png',
      '/images/icon_hall.jpg',
      '/images/icon_honey_pink.jpg',
      '/images/icon_honey_blue.jpg'
    ],
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  goto_task: function (event) {
    const url = "/pages/task/task";//得到页面url 
    wx.navigateTo({
      url: url
    })
  },
  goto_person:function (event) {
    const url = "/pages/person_center/person_center";
    wx.reLaunch({
      url: url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})