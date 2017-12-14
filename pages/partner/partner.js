//index.js
//获取应用实例
const app = getApp()

Page({

  parnter:function(){
    wx.navigateTo({
      url: '../partnerStails/partnerStails',
    })
  },

  qrCode:function(){
    wx.navigateTo({
      url: '../qrCode/qrCode',
    })
  },
  userQuery:function(){
    wx.navigateTo({
      url: '../userQuery/userQuery',
    })
  }
})
