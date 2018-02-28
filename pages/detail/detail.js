import {Detail} from './detail-model.js';
var detail=new Detail();

Page({

  data: {
    id:-1,
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
  }
})