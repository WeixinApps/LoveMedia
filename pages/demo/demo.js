class Demo{
  constructor(){
    this.bindMethods();
  }
  bindMethods(){
    this.showNewPage = this.showNewPage.bind(this);
  }
  showNewPage(){
    wx.navigateTo({
      url:'../logs/logs'
    });
  }
  onShareAppMessage(){
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/demo?id=123'
    }
  }
}
Page(new Demo());