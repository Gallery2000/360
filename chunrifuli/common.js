var $first = null;
var $second = null;
var $third = null;
var play = null;

$(function() {
	FZ(20, 375);
	var hdgg = new HDGG({
		appkey: "06b0621e8e4cb2079e83255adab12b59",
		adSpaceKey:"528c0ef8159c60aeaa772ddc9d6dc861",
		times: 8,
		timesEle: '#countZa',
		recordEle: '.jiang',
		name: '春日福利（福利社）',
		type: 259,
		rem: 20 / 375,
		// pddCustomDialog: false
		quAnDouYao: false,
		entranceShow:true,
    txEntranceShow:true
	});
	$('.fan').show()
	//超过0点清空记录
	var agoTime = hdgg.storage.get('agoTime') ? hdgg.storage.get('agoTime') : new Date().getTime();
	if (new Date().getTime() > agoTime) {
		hdgg.storage.remove('agoTime');
		hdgg.storage.set('agoTime', new Date(new Date().toLocaleDateString()).getTime() / 1 + 86400000);
	}

	var dian = true;
	var haveTime = true;
	$('.starta').addClass('startaMove');
	 
	setTimeout(function() {
		// 		 if ($('#countZa').text() === '0') {
		// 		 	$('.no_num').show();
		// 		 }
		if (haveTime) {
			hdgg.storage.set('agoTime', new Date(new Date().toLocaleDateString()).getTime() / 1 + 86400000);
			haveTime = false;
		}
		// 		 if (!dian) {
		// 		 	return;
		// 		 }

		var startC = hdgg.start();

     
		$first = $($('.xiangziBox').children()).eq(0);
		$second = $($('.xiangziBox').children()).eq(1);
		$third = $($('.xiangziBox').children()).eq(2);
		$('.chai_red_bag').css('top','10.75rem')
		dian = false;
		$('.starta').hide();
		$('.startb').show();
		$('.DB_G_hand').show()
		$('.DB_guide').addClass('handb');
		$('.xiangzi').css('z-index', '2');

		$('.fan').addClass('addChai').addClass('fgt');

		$('startb').show();
		setTimeout(function() {
			$('.red_top').show()
			$('.card').show().animate({
				'top': '-2.5rem'
			}, 700);
		}, 400);

		setTimeout(function() {
			$('.prize_img img').attr('src', 'https://hdggcdn.bayimob.com/hdggstatic/WechatIMG170.jpeg');

			$('.left_hua').show();

			hdgg.win({
				success: function(res) {
                  if(startC > 0) {
                    res.close();
                  }
					if (res.ad.advLayout == 1) {
						$('.prize_img img').attr('src', '');
						$('.starta').removeClass('startaMove');
						$('.prize_img img').attr('src', res.ad.imageUrl);
						$('.prize_txt').text(res.ad.advIntro);
						closeGo(res);
					} else {


						alertCommon(res.ad.imageUrl)
						closeBtn(res);
						closeGo(res);
						// alert('此时为大弹窗')
					}
				},
				fail: function(e) {
					if (!e) {
						$('.red_top').show()
						$('.starta').removeClass('startaMove')
						$('.prize_img img').attr('src', 'https://hdggcdn.bayimob.com/hdggstatic/xuanzhuan9/ban.png');
						$('.starta,.startb').hide();
						$('.DB_G_hand').hide();
						$('.prize_txt').hide();
						$('.left_hua').show();
						$('.DB_guide').hide();
					}
				}
			});
			dian = true;
		});
	}, 1000)

	play = function(card) {
		var direction = GetSlideDirection(startX, startY, endX, endY);

		if (direction === 3 || direction === 0) {
			$('.left_hua').hide();
			dian = false;

			$first.show()
			$first.css({
				"position": "absolute",
				"left": "50%",
				"top": "11.75rem",
				"margin-left": "-6.5rem",
				"width": "13rem",
				"height": "14.525rem",
				"background-size": "100%",
				"z-index": "2",
				"background-image": "url(./images/hongbao.png)"

			})
			$('.startb').hide();

			$('.DB_G_hand').hide()
			$('.red_top').hide()
			$('.fan').hide()
			$(card).css('top', '4.6rem');
			$('.card').hide()
			var startC = hdgg.start();


			setTimeout(function() {
				$first.animate({
					"left": "1%",
					"top": "13rem",
					"width": "12.425rem",
					"height": "13.35rem",
					"margin-left": "0",
					"background-size": "100%",
					"z-index": "1"
				}, 600).css("background-image", "url(./images/hongbaobg.png)");
			}, 400);
			setTimeout(function() {
				$second.animate({
					"left": "32%",
					"top": "13rem",
					"width": "12.45rem",
					"height": "14.575rem",
					"background-size": "100%",
					"z-index": "1"
				}, 600);

			}, 400);
			setTimeout(function() {
				$third.animate({
					"position": "absolute",
					"left": "50%",
					"top": "10.75rem",
					"margin-left": "-6.8875rem",
					"width": "13.775rem",
					"height": "14.8rem",
					"background-size": "100%",
					"z-index": "2"
				}, 600).css("background-image", "url(./images/hongbao.png)");

				$third.animate({
					"position": "absolute",
					"left": "50%",
					"top": "12.75rem",
					"margin-left": "-6.8875rem",
					"width": "13.775rem",
					"height": "14.8rem",
					"background-size": "100%",
					"z-index": "2"
				}, 300).css("background-image", "url(./images/hongbao.png)");
			}, 400);
			$third.insertBefore($first);
			setTimeout(function() {
				$first = $($('.xiangziBox').children()).eq(0);
				$second = $($('.xiangziBox').children()).eq(1);
				$third = $($('.xiangziBox').children()).eq(2);
				if (startC < 0) {
					dian = true;
					$('.no_num').show();
					$('.fan').hide()
					$('.starta').hide()

				} else {
					$('.starta').css('top', '16rem')
					$('.starta').show();
					$('.starta').addClass('startaMove');
				}

				setTimeout(function() {
					$('.starta').hide();

					setTimeout(function() {


						$('.fan').addClass('addChai').addClass('fgt');
						$('.red_top').show()
						$('.left_hua').show();
						if (startC < 0) {
							$('.startb').hide();

							return;
						} else {
							$('.fan').show()
						}
						$first.css({
							"position": "absolute",
							"left": "50%",
							"top": "11.75rem",
							"margin-left": "-6.8875rem",
							"width": "13.775rem",
							"height": "14.8rem",
							"background-size": "100%",
							"z-index": "2",
							"background-image": "url(./images/hongbaohou.png)"

						})

					}, 200)

					setTimeout(function() {


						if ($('.prize_img img')[0].src == 'https://hdggcdn.bayimob.com/hdggstatic/xuanzhuan9/ban.png') {

							$('.startb').hide();
							$('.DB_G_hand').hide()
						} else {
							$('.startb').show();
							$('.DB_G_hand').show()
						}


					}, 400)
				}, 800)

				setTimeout(function() {

					$(card).show().animate({
						'top': '-2.5rem'
					}, 700);
				}, 1400)
			}, 1100);
			setTimeout(function() {
				$('.prize_img img').attr('src', 'https://hdggcdn.bayimob.com/hdggstatic/WechatIMG170.jpeg');


				hdgg.win({
					success: function(res) {
                      if(startC > 0) {
                        res.close();
                      }
						// $('.prize_img img').attr('src', '');
						if (res.ad.advLayout == 1) {
							$('.fan').hide()
							$('.prize_txt').show();
							$('.prize_img img').attr('src', res.ad.imageUrl);

							$('.prize_txt').text(res.ad.advIntro);
							$('.startb').hide();
							closeGo(res);
						} else {
							// alert('此时大弹窗')

							if (startC < 0) {
								return
							} else {

								alertCommon(res.ad.imageUrl)
								closeBtn(res);
								closeGo(res);
							}

						}
					},
					fail: function(e) {
						if (!e) {
							$('.prize_img img').attr('src', 'https://hdggcdn.bayimob.com/hdggstatic/xuanzhuan9/ban.png');
							$('.starta,.startb').hide();
							$('.prize_txt').hide();
							$('.left_hua').show();
							$('.DB_guide').hide();
						}
					}
				});
				dian = true;

			}, 1500);
		}
	}

	//向左滑动返回角度
	function GetSlideAngle(dx, dy) {
		return Math.atan2(dy, dx) * 180 / Math.PI;
	}

	//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
	function GetSlideDirection(startX, startY, endX, endY) {
		var dy = startY - endY;
		var dx = endX - startX;
		var result = 0;
		//如果滑动距离太短
		if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
			return result;
		}

		var angle = GetSlideAngle(dx, dy);
		if (angle >= -45 && angle < 45) {
			result = 4;
		} else if (angle >= 45 && angle < 135) {
			result = 1;
		} else if (angle >= -135 && angle < -45) {
			result = 2;
		} else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
			result = 3;
		}

		return result;
	}

	//滑动处理
	// history.pushState(null, null, document.URL);
	// window.addEventListener('popstate', function () {
	//   history.pushState(null, null, document.URL);
	// });
	var startX, startY, endX, endY;
	document.getElementsByClassName('left_hua')[0].addEventListener('touchstart', function(ev) {
		startX = ev.touches[0].pageX;
		startY = ev.touches[0].pageY;
	}, false);
	document.getElementsByClassName('left_hua')[0].addEventListener('touchend', function(ev) {
		endX = ev.changedTouches[0].pageX;
		endY = ev.changedTouches[0].pageY;
		if (!dian) {
			return;
		}
		// debugger
		play('.card');
	}, false);

	$('.rule').on('click', function() {
		$('.alerty').show();
		$('.zhenotice').show();
	})
	$('body .moresay').on('click', function() {
		$(this).toggleClass('activeadv')
		$('.moresayp').toggle();
	})
	$('.alerty').on('click', '.saclose', function() {
		$('.moresay').removeClass('activeadv');
		$('.moresayp').hide();
		$('.alerty').hide();
		$('.zhenotice').hide();
	});
	$('.close_zero').click(function() {
		$(this).parent().hide();
		// $('.chai_red_bag').hide();
		$('.prize_img img').attr('src', 'https://hdggcdn.bayimob.com/hdggstatic/xuanzhuan9/ban.png');
		$('.starta,.startb').hide()
		$('.DB_guide').hide();
		 if($('.prize_img img').attr('src')=='https://hdggcdn.bayimob.com/hdggstatic/xuanzhuan9/ban.png') {
			 $('.prize_txt').hide();
		 }
	});

	function closeGo(res) {
		$('.prize_img img').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			var imgs = 1;
			res.click(imgs);
		});
		$('.startb').click(function() {
			res.click();
		});
		$('#hdgg_show-win-custom-pdd2 #hdgg-image-custom-pdd').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			var imgs = 1;
			res.click(imgs);
		})
	}

	// $('#hdgg_show-win-custom-pdd .close-btn').click(function() {
	// 	alert(11)
	// 	play('.card');
	// })

});

function FZ(a, b) {
	function getFZ() {
		var width = document.documentElement.clientWidth || document.body.clientWidth;
		if (width > 750) {
			width = 750;
		}
		var fontSize = (a / b) * width;
		return fontSize;
	};
	document.documentElement.style.fontSize = getFZ() + "px";
	window.onresize = function() {
		setTimeout(function() {
			document.documentElement.style.fontSize = getFZ() + "px";
		}, 100);
	};
};

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURIComponent(r[2]);
	return null;
};

function alertCommon(imageUrl) {
	var strs = '<div id="hdgg_show-win-custom-pdd2"><img id="hdgg-image-custom-pdd" class="m-image" src="' + imageUrl +
		'"><div class="card-sunshine"></div><span class="close-btn closetc iconfont"></span></div>';
	$('body').append(strs)
	$('.prize_txt').hide();

}

function closeBtn(res) {
	$('#hdgg_show-win-custom-pdd2').on('click', '.close-btn', function() {
	 $('#hdgg_show-win-custom-pdd2').remove();
	 play('.card');
	})
}


