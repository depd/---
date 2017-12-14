//index.js
//获取应用实例
const app = getApp()

Page({

  //  用户查询
  userQuery:function(){
    wx.navigateTo({
      url: '../userQuery/userQuery',
    })
  },

  //  私海
  personSea:function(){
    wx.navigateTo({
      url: '../personSea/personSea',
    })
  },

  // 合伙人 
  parnter: function () {
    wx.navigateTo({
      url: '../partnerStails/partnerStails',
    })
  },

  //  跳转二维码
  qrCode: function () {
    wx.navigateTo({
      url: '../qrCode/qrCode',
    })
  },
  
})
