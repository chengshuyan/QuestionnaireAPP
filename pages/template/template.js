//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/images/chart.png",
      "text": "返回商城"
    },
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/images/chart.png",
      "selectedIconPath": "/images/chart.png",
      "text": "拼团首页"
    },
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/images/chart.png",
      "selectedIconPath": "/images/chart.png",
      "text": "活动列表"

    },
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/images/chart.png",
      "selectedIconPath": "/images/chart.png",
      "text": "我的订单"
    },
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/images/chart.png",
      "selectedIconPath": "/images/chart.png",
      "text": "我的团"
    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}