// pages/person_center/person_center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    level: 5,
    liveness: 1500,
    honest_level: 25,
    gold_coin: 120,
    username:"铠甲琵琶",
    something:"It is funny."
  },

  goto_goldpage: function (event) {
    const url = "/pages/goldpage/goldpage";//得到页面url 
    wx.navigateTo({
      url: url
    })
  },
  goto_honest_recoding: function (event) {
    const url = "/pages/honest_recoding/honest_recoding";
    wx.navigateTo({
      url: url
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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