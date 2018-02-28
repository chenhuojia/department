// pages/category/category.js
import {Category} from './category-model.js';
var category=new Category();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
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

  _loadData:function(){
      this.setData({
          cate:category.data
      });
  },

  group:function(event){
    var id=category.getEventKeyVal(event,'id');
    wx.navigateTo({
      url: '../categoryList/index?id='+id,
    })
  }
})