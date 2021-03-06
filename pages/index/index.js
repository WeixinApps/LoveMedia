//index.js
//获取应用实例
/*
const app = getApp();
const pageInstance = {
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
};
*/
class Index{
  constructor(){
    this.app = getApp();
    this.data = {
      motto: 'Hello World',
      location:{},
      userInfo: {}
    };
    this.bindMethods();
  }
  bindMethods(){
    this.bindViewTap = this.bindViewTap.bind(this);
  }
  bindViewTap(){
    wx.navigateTo({
      url:'../logs/logs'
    });
  }
  onLoad(){
    console.log('onLoad');
    let setUserInfo = (userInfo) => {
      this.setData({
        userInfo:userInfo
      })
    }
    this.app.getUserInfo(setUserInfo);
    this.app.getLocation((location)=>{
      this.setData({
        location:location
      })
    });
  }
}
let pageInstance = new Index();
Page(pageInstance);
