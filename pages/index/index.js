var app = getApp()
Page({
  data: {
    // banner
    level:5,
    liveness:1500,
    honest_level:25,
    gold_coin:120,
    imgUrls: [
      '/images/questionnaire.png',
      '/images/questionnaire.png',
      '/images/questionnaire.png'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 5000, //自动切换时间间隔,5s
    duration: 1000, //  滑动动画时长1s

    imgUrls_ad:[
      '/images/ad/ad_0.jpg',
      '/images/ad/ad_1.jpg',
      '/images/ad/ad_2.jpg',
      '/images/ad/ad_3.jpg',
      '/images/ad/ad_4.jpg',
      '/images/ad/ad_5.jpg',
      '/images/ad/ad_6.jpg',
      '/images/ad/ad_7.jpg'
    ],
    indicatorDots_ad: false, //是否显示面板指示点
    autoplay_ad: true, //是否自动切换
    interval_ad: 30000, //自动切换时间间隔,30s
    duration_ad: 1000, //  滑动动画时长1s
  },

goto_my_questionnaire:function(event){
  const url = "/pages/questionnaire/questionnaire";//得到页面url 
  wx.navigateTo({
    url: url})
},

  goto_task: function (event) {
    const url = "/pages/task/task";//得到页面url 
    wx.navigateTo({
      url: url
    })
  },
  goto_group: function (event) {
    const url = "/pages/group/group";//得到页面url 
    wx.navigateTo({
      url: url
    })
  },
  goto_shop: function (event) {
    const url = "/pages/shop/shop";//得到页面url 
    wx.navigateTo({
      url: url
    })
  },

  durationChange: function (e){
  }
})