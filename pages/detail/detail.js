import {Detail} from './detail-model.js';
var detail=new Detail();

Page({

  data: {
    scrollTop:0,
    id:-1,
    icon: {
      'likeBefore': '../../images/icon/like-before.svg',
      'likeAfter': '../../images/icon/like-after.svg',
    }
  },

  onLoad: function (option) {
    var id=0;
    if (option.id){
      id = option.id;
    }
    this.setData({
      id: id,
      itemData:detail.data
    });
  },

  approve:function(event){
    console.log(detail.getEventKeyVal(event, 'id'));
  },

  viewImage:function(evnet){
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: this.data.itemData.imgs // 需要预览的图片http链接列表
    })
  },
  goTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  goIndex: function (e) {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
})