//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selected: 0
  },
  toggleTab: function (e) {
    var index = e.currentTarget.dataset.index;
    var selected = this.data.selected;
    if (index == selected) {
      return;
    }
    this.setData({
      selected: index
    })
  },
})
