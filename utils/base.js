class Base {
  cacheKey='';
  getEventKeyVal(event,key){
    return event.currentTarget.dataset[key]; 
  };

  setCacheData(data) {
    return wx.setStorageSync(this.cacheKey, data)
  };

  getCacheData(data) {
    return wx.getStorageSync(this.cacheKey)
  };
}
export {Base};