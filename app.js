//app.js
App({
  onLaunch: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        wx.chooseLocation({
          success: function(res) {
            console.log(res)
          },
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})