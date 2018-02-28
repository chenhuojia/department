//app.js
App({
  onLaunch: function () {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
       
      }
    })
  },
  globalData: {
    userInfo: null
  }
})