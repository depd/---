// pages/personSea/personSea.js
Page({

  data:{
    selected1:true,
    selected2:false,
    selected3:false,
  },

  selected1: function (e) {
    var selected1 = this.data.selected1;
    var selected2 = this.data.selected2;
    var selected3 = this.data.selected3;
    this.setData({
      selected1:true,
      selected2:false,
      selected3:false,
    })
  },

  selected2: function (e) {
    this.setData({
      selected1:false,
      selected2:true,
      selected3:false,
    })
  },

  selected3: function (e) {
    this.setData({
      selected1:false,
      selected2:false,
      selected3:true,
    })
  },
})