// miniprogram/pages/questionare-result/questionare-result.js
const db = wx.cloud.database()
const qcollection = db.collection('questionnaire')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		user_openid:"oyRnK5ZTqxOOlUArqGrqZS22RIqQ",
		active:0,
		robust:0,
		conservative:0
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let _this = this
		var active=_this.data.active
		var robust=_this.data.robust
		var conservative=_this.data.conservative
		qcollection.where({
      _openid:_this.data.user_openid
    }).get().then(res=>{
			console.log(res.data[0].answer.q2)
			switch(res.data[0].answer.q2){
				case '单身阶段':
					active+=70
					robust+=20
					conservative+=10
					break;
				case '家庭建立阶段':
					active+=50
					robust+=30
					conservative+=20
					break;
				case '家庭成长阶段':
					active+=40
					robust+=40
					conservative+=20
					break;
				case '子女大学阶段':
					active+=30
					robust+=50
					conservative+=20
					break;
				case '家庭成熟阶段':
					active+=20
					robust+=30
					conservative+=50
					break;
				case '退休养老阶段':
					active+=10
					robust+=30
					conservative+=60
					break;						
			}
			switch(res.data[0].answer.q3){
				case '3000元以下':
					active+=10
					robust+=10
					conservative+=80
					break;
				case '3000~8000元':
					active+=20
					robust+=20
					conservative+=60
					break;
				case '8000~15000元':
					active+=40
					robust+=30
					conservative+=30
					break;
				case '15000~50000元':
					active+=50
					robust+=30
					conservative+=20
					break;
				case '50000元以上':
					active+=70
					robust+=20
					conservative+=10
					break;						
			}
			switch(res.data[0].answer.q5){
				case '本金不亏损，最高收益4%':
					active+=10
					robust+=10
					conservative+=80
					break;
				case '本金最多亏损5%，最高收益15%':
					active+=20
					robust+=20
					conservative+=60
					break;
				case '本金最多亏损10%，最高收益25%':
					active+=40
					robust+=30
					conservative+=30
					break;
				case '本金最多亏损20%，最高收益40%':
					active+=50
					robust+=30
					conservative+=20
					break;					
			}
			_this.setData({
				active:active,
				robust:robust,
				conservative:conservative
			})
			console.log(_this.data)
		})
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

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})