"use strict";

var Helper = function () {
	this.txtEach = $("#txtEach");
	this.btnEach = $("#btnEach");
	this.dvEach = $("#dvEach");

	this.txtMap = $("#txtMap");
	this.btnMap = $("#btnMap");
	this.dvMap = $("#dvMap");
	
	this.SlidImg = $(".SlidImg");
	this.btnImgBack = $("#btnImgBack");
	this.btnImgNext = $("#btnImgNext");
};

Helper.prototype.bind = function(){
	var h = this;
	h.btnEach.click(function () {
		var data = h.txtEach.val();
		h.dvEach.html("");
        gd.each(data.split(','),function(index, value){
			h.dvEach.append(index + " : " + value + "<br />");
		});
    });
	
	h.btnMap.click(function () {
		var data = h.txtMap.val();
		h.dvMap.html("");
        var newdata = gd.map(data.split(','),function(index, value){
			return (index%2==0?true:false)
		});
		
		gd.each(newdata,function(index, value){
			h.dvMap.append(index + " : " + value + "<br />");
		});
    });
	
	
	h.btnImgBack.click(function () {
        gd.ImgSlideBack(h.SlidImg);
    });
	h.btnImgNext.click(function () {
        gd.ImgSlideNext(h.SlidImg);
    });
    gd.ImgSlideNext(h.SlidImg);
	
};

$(document).ready(function(){
	var Handler=new Helper();
	Handler.bind();
});