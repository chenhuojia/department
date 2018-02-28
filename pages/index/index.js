//index.js
//获取应用实例
import {Index} from './index-model.js';
const index = new Index();
let col1H = 0;
let col2H = 0;
Page({
  data: {
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: [],
    icon: {
      'likeBefore': '../../images/icon/like-before.svg',
      'likeAfter': '../../images/icon/like-after.svg',
      'discuss': '../../images/icon/discuss.svg',
      'group': '../../images/icon/group.svg',
      'list':'../../images/icon/list.svg',
      'list2':'../../images/icon/list2.svg',
      'search':'../../images/icon/search.svg'
    },
    viewType:1,
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });

        this.loadImages();
      }
    })
  },
  
  detail:function(event){
    var id=index.getEventKeyVal(event,'id');
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },

  onImageLoad: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;         //图片原始宽度
    let oImgH = e.detail.height;        //图片原始高度
    let imgWidth = this.data.imgWidth;  //图片设置的宽度
    let scale = imgWidth / oImgW;        //比例计算
    let imgHeight = oImgH * scale;      //自适应高度
    
    let images = this.data.images;
    let imageObj = null;
    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.imgId === imageId) {
        imageObj = img;
        break;
      }
    }
    imageObj.height = imgHeight;
    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(imageObj);
    } else {
      col2H += imgHeight;
      col2.push(imageObj);
    }
    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2,
    };
    /***if (!loadingCount) {
      data.images = [];
    }**/
    this.setData(data);
  },

  loadImages: function () {
    var images = index.data();
    this.setData({
      loadingCount: images.length,
      images: images
    });
  },
  lower: function (e) {
    var images = index.data();
    var old=this.data.images;
    var newdata = old.concat(images);
    this.setData({
      loadingCount: newdata.length,
      images: newdata
    });
  },
  approve: function (event) {
    console.log(index.getEventKeyVal(event, 'id'));
  },
  changeViewType:function(event){
    var view = index.getEventKeyVal(event, 'view');
    if (view==1){
      view=2;
    }else{
      view=1;
    }
    this.setData({
        viewType:view,
    })
  }




})
