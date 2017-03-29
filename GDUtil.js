//     GDUtil.js 1.0.2
//     (c) 2017 Girish Dubey (GDDon)
//     Underscore may be freely distributed under the MIT license.

(function() {
	"use strict";
	var GDUtil=function(){
		version : "1.0.3"
	};
	
	String.prototype.replaceAll = function (oldText, newText, ignoreCase) {
		var str = this.toString(), i = -1, _text;
		if (typeof oldText === "string") {
			if (ignoreCase === true) {
				_text = oldText.toLowerCase();
				while ((i = str.toLowerCase().indexOf(_text, i >= 0 ? i + newText.length : 0)) !== -1) {
					str = str.substring(0, i)
							.concat(newText)
							.concat(str.substring(i + _text.length));
				}
			} else {
				return this.split(oldText).join(newText);
			}
		}
		return str;
	};
	
	GDUtil.prototype.each = function(arr, callback) {
        if (typeof callback == 'function') {
			var i = 0;
            for (; i < arr.length; i++) {
                callback(i, arr[i]);
            }
        }
    };
	
    GDUtil.prototype.map = function(arr, callback) {
        var newarr = [];
        if (typeof callback == 'function') {
			var i = 0;
            for (; i < arr.length; i++) {
                if (callback(i, arr[i])) {
                    newarr.push(arr[i]);
                }
            }
        }
        return newarr;
    };
	
	GDUtil.prototype.ImgSlideNext = function (ctrl) {
		var n = 0;

		$.each(ctrl, function (index, item) {
			if ($(this).attr("currActive") && $(this).attr("currActive") == "true") {
				n = index + 1;
			}
		});

		if (n == ctrl.length)
			n = 0;

		$.each(ctrl, function (index, item) {
			if (n == index) {
				$(this).css("display", "block");
				$(this).attr("currActive", true);
			} else {
				$(this).css("display", "none");
				$(this).attr("currActive", false);
			}
		});
	};
	
	GDUtil.prototype.ImgSlideBack = function (ctrl) {
		var n = 0;

		$.each(ctrl, function (index, item) {
			if ($(this).attr("currActive") && $(this).attr("currActive") == "true") {
				n = index;
			}
		});

		if (n == 0)
			n = ctrl.length;

		$.each(ctrl, function (index, item) {
			if ((n-1) == index) {
				$(this).css("display", "block");
				$(this).attr("currActive", true);
			} else {
				$(this).css("display", "none");
				$(this).attr("currActive", false);
			}
		});
	};

	window.gd = new GDUtil();
}());


