var change = {};
var url = '';
var flag = false;
var hdgg = new HDGG({
    appkey: "06b0621e8e4cb2079e83255adab12b59",
    adSpaceKey:"528c0ef8159c60aeaa772ddc9d6dc861",
	times: 12,
	timesEle: '#countZa',
	recordEle: '.jiang',
	name: '红包争夺',
	type: 245,
	rem: 20 / 375,
	 // pddCustomDialog: false
	// quAnDouYao: false,
	entranceShow: false,
	gamecenterShow: false,   //右下角
	txEntranceShow: true
});
$(function() {
$('.person').addClass('personDown');
	 FZ(20, 375);
	var index = 0;

	if ($('#countZa').text() == '12') {
		hdgg.storage.remove('index')
		hdgg.storage.remove('change')
		$('.person').css({
			'left': '3rem',
			'top': '7.5rem'
		})
	}
	if (hdgg.storage.get('change')) {

		$('.person').css(hdgg.storage.get('change'))
	}
	
  function onTouchMove(inFlag) {
  if (inFlag) {
    document.getElementById('web').addEventListener('touchmove',onHandler, false);
  } else {
    document.getElementById('web').removeEventListener('touchmove',onHandler, false);
  }
}
  function onHandler(e) {
  e.preventDefault();
  var ev = e || window.event
  ev.preventDefault();

}

 onTouchMove(true);//禁用


   // document.body.addEventListener('touchmove',bodyScroll,false);  
   // document.getElementById('web').addEventListener('touchmove',bodyScroll,false); 

	$('.shaizi,.clickGo').on('click', function() {
		$('.zhezhao').hide()
		 
		if (flag) {
			// var startC =hdgg.start()
			return
		}
        onTouchMove(false);//启用
		var startC = hdgg.start()
		// $('.shaiziGo').css('background-position','0 0')
		if (startC < 0) {
			
			return
		}
		flag = true;
		$('.shaizi').removeClass('shaizi').addClass('shaiziGo').css('background-image',
			'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/longTiao.png)')

		index = hdgg.storage.get('index') ? hdgg.storage.get('index') : 0
		index++;
		hdgg.storage.set('index', index)
		if (index == 1) {
			setTimeout(function() {

				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/6.png)')
			}, 1000)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第一次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
					'left': '7.6rem',
					'top': '8.2rem'
				}, 800).animate({
					'left': '11.7rem',
					'top': '9rem'
				}, 800).animate({
					'left': '13.4rem',
					'top': '10rem'
				}, 500).animate({
					'left': '13.4rem',
					'top': '11.6rem'
				}, 500, function() {
					 
					$('.person').removeClass('personGo').addClass('personDown')
                  ajax()
				})
				change = {
					'left': '13.4rem',
					'top': '11.6rem'
				}
				hdgg.storage.set('change', change)
				$('.person').css({
					'left': '13.4rem',
					'top': '11.6rem'
				})
				// startC = hdgg.start();

			}, 1100)
		}

		if (index == 2) {
			setTimeout(function() {

				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/2.png)')
			}, 1000)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第二次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
					'left': '9rem',
					'top': '12.5rem'
				}, 500,function() {
					$('.person').removeClass('personGo').addClass('personDown')
					change = {
						'left': '9rem',
						'top': '12.5rem'
					}
					hdgg.storage.set('change', change)
					$('.person').css({
						'left': '9rem',
						'top': '12.5rem'
					})
				})
				 
				
				// startC = hdgg.start();
				flag = false
			}, 1100)

		}
		if (index == 3) {
			setTimeout(function() {
				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/1.png)')
			}, 1000)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第三次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
					'left': '5rem',
					'top': '17.4rem'
				}, 800, function() {
					$('.person').removeClass('personGo').addClass('personDown')
					ajax()
				})
				change = {
					'left': '5rem',
					'top': '17.4rem'
				}
				hdgg.storage.set('change', change)
				$('.person').css({
					'left': '5rem',
					'top': '17.4rem'
				})
				// startC = hdgg.start();
			}, 1100)


		}
		if (index == 4) {
			setTimeout(function() {
				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/3.png)')
			}, 1000)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第四次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
					'left': '3.2rem',
					'top': '19.9rem'
				}, 500).animate({
					'left': '5.3rem',
					'top': '20.4rem'
				}, 500).animate({
					'left': '7.3rem',
					'top': '20.8rem'
				}, 500, function() {
					$('.person').removeClass('personGo').addClass('personDown')
					ajax()
				})
				change = {
					'left': '7.3rem',
					'top': '20.8rem'
				}
				hdgg.storage.set('change', change)
				$('.person').css({
					'left': '7.3rem',
					'top': '20.8rem'
				})
				// startC = hdgg.start();
			}, 1100)

		}
		if (index == 5) {
			setTimeout(function() {
				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/5.png)')
			}, 500)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第五次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
						'left': '13.6rem',
						'top': '22rem'
					}, 800)
					.animate({
						'left': '13.3rem',
						'top': '26rem'
					}, 800, function() {
						$('.person').removeClass('personGo').addClass('personDown')
						$('.feiji').addClass('fengGo')
						setTimeout(function() {
							$('.feiji').removeClass('fengGo').hide()
							$('.person').animate({
													'left': '3rem',
													'top': '7.5rem'
												}, 400, function() {
													//文字提示弹窗
													$('.feiji').show()
													url = 'https://hdggcdn.bayimob.com/hdggstatic/lists5/feijit.png'
													text(url)
													setTimeout(function() {
														//文字弹窗提示消失
														$('.textBox').addClass('textHide')
														setTimeout(function() {
															$('.textBox').hide()
															ajax()
														}, 310)
							
													}, 2500)
												})
												hdgg.storage.set('change', {
													'left': '3rem',
													'top': '7.5rem'
												})
						}, 1000)

					})

				change = {
					'left': '13.3rem',
					'top': '26rem'
				}


				 
				// startC = hdgg.start();
			}, 1100)

		}

		if (index == 6) {
			setTimeout(function() {
				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/3.png)')
			}, 1000)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第六次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
						'left': '5.5rem',
						'top': '8rem'
					}, 500)
					.animate({
						'left': '10rem',
						'top': '8.4rem'
					}, 800, function() {
						$('.person').removeClass('personGo').addClass('personDown')
						$('.feng').addClass('fengGo')
						setTimeout(function() {
							$('.feng').removeClass('fengGo').hide()
							// $('.person').css({'left':'3rem','top':'7.5rem'}),
												$('.person').animate({
													'left': '3rem',
													'top': '7.5rem'
												}, 300, function() {
													//文字提示弹窗
													url = 'https://hdggcdn.bayimob.com/hdggstatic/lists5/jufengt.png'
													text(url)
													setTimeout(function() {
														//文字弹窗提示消失
														$('.feng').show()
														$('.textBox').addClass('textHide')
														setTimeout(function() {
															$('.textBox').hide()
															ajax()
														}, 310)
							
													}, 2000)
												})
							
												hdgg.storage.set('change', {
													'left': '3rem',
													'top': '7.5rem'
												})
						}, 1000)

					})

 
				// startC = hdgg.start();
			}, 1100)

		}
		if (index == 7) {
			setTimeout(function() {
				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/2.png)')
			}, 1000)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第七次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
						'left': '5.6rem',
						'top': '8rem'
					}, 500)
					.animate({
						'left': '7rem',
						'top': '8.3rem'
					}, 500, function() {
						hdgg.storage.set('n', 1)
						$('.person').removeClass('personGo').addClass('personDown')
						ajax()
					})

				change = {
					'left': '7rem',
					'top': '8.3rem'
				}
				$('.person').css({
					'left': '7rem',
					'top': '8.3rem'
				})
				hdgg.storage.set('change', change)

				// startC = hdgg.start(); 
			}, 1100)

		}
		if (index == 8) {
			hdgg.storage.remove('n')
			setTimeout(function() {
				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/4.png)')
			}, 1000)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第八次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
						'left': '13.4rem',
						'top': '12rem'
					}, 500)
					.animate({
						'left': '9.4rem',
						'top': '12.4rem'
					}, 800).animate({
						'left': '5rem',
						'top': '17.4rem'
					}, 800, function() {
						$('.person').removeClass('personGo').addClass('personDown')
						ajax()
					})

				change = {
					'left': '5rem',
					'top': '17.4rem'
				}
				$('.person').css({
					'left': '5rem',
					'top': '17.4rem'
				})
				hdgg.storage.set('change', change)

				// startC = hdgg.start(); 
			}, 1100)
		}
		if (index == 9) {
			setTimeout(function() {
				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/3.png)')
			}, 1000)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第九次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
					'left': '3.5rem',
					'top': '19.4rem'
				}, 500).animate({
					'left': '5.3rem',
					'top': '20.4rem'
				}, 500).animate({
					'left': '7.3rem',
					'top': '20.8rem'
				}, 500, function() {
					$('.person').removeClass('personGo').addClass('personDown')
					ajax()
				})
				change = {
					'left': '7.3rem',
					'top': '20.8rem'
				}
				hdgg.storage.set('change', change)
				$('.person').css({
					'left': '7.3rem',
					'top': '20.8rem'
				})
				// startC = hdgg.start();
			}, 1100)
		}

		if (index == 10) {
			setTimeout(function() {
				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/1.png)')
			}, 1000)

			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第十次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
					'left': '9.5rem',
					'top': '21rem'
				}, 500, function() {
					$('.person').removeClass('personGo').addClass('personDown')
					$('.zhadan').addClass('fengGo')
					setTimeout(function() {
						$('.zhadan').removeClass('fengGo').hide()
						// $('.person').css({'left':'3rem','top':'7.5rem'})
											$('.person').animate({
												'left': '3rem',
												'top': '7.5rem'
											}, 400, function() {
												//文字提示弹窗
												$('.zhadan').show()
												url = 'https://hdggcdn.bayimob.com/hdggstatic/lists5/zhadant.png'
												text(url)
												setTimeout(function() {
													//文字弹窗提示消失
													$('.textBox').addClass('textHide')
													setTimeout(function() {
														$('.textBox').hide()
														ajax()
													}, 310)
						
												}, 2000)
											})
						
											hdgg.storage.set('change', {
												'left': '3rem',
												'top': '7.5rem'
											})
					}, 1000)
				})
				 
			}, 1100)

			// startC = hdgg.start();
		}
		if (index == 11) {
			hdgg.storage.remove('n')
			setTimeout(function() {
				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/2.png)')
			}, 1000)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第十一次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
						'left': '5.6rem',
						'top': '8rem'
					}, 500)
					.animate({
						'left': '7rem',
						'top': '8.3rem'
					}, 1000, function() {
						hdgg.storage.set('n', 1)
						$('.person').removeClass('personGo').addClass('personDown')
						ajax()
					})

				change = {
					'left': '7rem',
					'top': '8.3rem'
				}
				$('.person').css({
					'left': '7rem',
					'top': '8.3rem'
				})
				hdgg.storage.set('change', change)

				// startC = hdgg.start(); 
			}, 1100)
		}
		if (index == 12) {
			setTimeout(function() {
				$('.shaiziGo').removeClass('shaiziGo').addClass('shaizi')
				$('.shaizi').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/lists5/6.png)')
			}, 1000)
			setTimeout(function() {
				change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
				// 小人第十二次移动距离
				$('.person').addClass('personGo').removeClass('personDown').animate({
						'left': '13.4rem',
						'top': '12rem'
					}, 500)
					.animate({
						'left': '9.4rem',
						'top': '12.4rem'
					}, 800).animate({
						'left': '5rem',
						'top': '17.4rem'
					}, 800).animate({
						'left': '3.5rem',
						'top': '19.4rem'
					}, 500).animate({
						'left': '5.3rem',
						'top': '20.4rem'
					}, 500,function() {
						$('.person').removeClass('personGo').addClass('personDown')
					})
				change = {
					'left': '3.5rem',
					'top': '19.4rem'
				}
				hdgg.storage.set('change', change)
				$('.person').css({
					'left': '3.5rem',
					'top': '19.4rem'
				})
				// startC = hdgg.start(); 
				 
				flag = false
			}, 1100)
		}


	})

	// 245

	function ajax() {
		hdgg.win({
			success: function(res) {

				alertCommon(res.ad.imageUrl, res.ad.advIntro);
                 flag = false;
				closeBtn(res);
				closeGo(res);
			}
		});
	}


})

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

 
function alertCommon(imageUrl, advIntro) {
   var strs = '<div class="popShowPrize" id="dialog5" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"><div class="caiguang"></div><div class="m-box"></div><div class="showPrize-dialog modal-body"><div class="red-bg"><div class="card-bg""><img class="resAd" src="' + imageUrl + '"></div><div class="detail"><div class="topic">' + advIntro + '</div><div class="goto"></div></div></div><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span></div></div>'
   $('body').append(strs);
   setTimeout(function () {
     $('#dialog5').append('<span id="close" class="close-btn closetc iconfont"></span>');
   }, 1500)
 }
//文字提示弹窗

function text(imgUrl) {
	var str = '<div class="textBox"><img src="' + imgUrl + '" /></div>';
	$('body').append(str);
}


//rem适配

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
}
// (function(doc, win) {
// var docEl = doc.documentElement,
// resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
// recalc = function() {
// var clientWidth = docEl.clientWidth;
// if (!clientWidth) return;
// if (clientWidth >= 640) {
// docEl.style.fontSize = '100px';
// } else {
// docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
// console.log(docEl.style.fontSize)
// var div = document.createElement('div');
// div.style.width = '3.5rem';
// div.style.height = '0';
// document.body.appendChild(div);
// var ideal = 140 * clientWidth / 750;
// console.log(ideal)
// console.log(div.clientWidth)
// var rmd = (div.clientWidth / ideal);
// console.log(rmd)
// if (rmd > 1.2 || rmd < 0.8) {
// docEl.style.fontSize = 100 * (clientWidth / 750) / rmd + 'px';
// console.log(docEl.style.fontSize)
// }
// document.body.removeChild(div);
// };
// };
// if (!doc.addEventListener) return;
// win.addEventListener(resizeEvt, recalc, false);
// doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

//         var defaultW = 750;
// 			if(/Android (d+.d+)/.test(navigator.userAgent)) {
// 				var version = parseFloat(RegExp.$1);
// 				if(version > 2.3) {
// 					var phoneScale = parseInt(window.screen.width) / defaultW;
// 					document.write('<meta name="viewport" content="width=' + defaultW + '", minimum-scale = ' + phoneScale + ", maximum-scale = " + phoneScale + ', target-densitydpi=device-dpi">')
// 				} else {
// 					document.write('<meta name="viewport" content="width=' + defaultW + '">')
// 				}
// 			} else {
// 				document.write('<meta name="viewport" content="width=' + defaultW + ', user-scalable=no">')
// 			};

//获取URL上面的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURIComponent(r[2]);
	return null;
}

function closeBtn(res) {
	$('#dialog5').on('click', '.close-btn', function() {
		res.close();
		$('#dialog5').addClass('hidem');
		$('#dialog5').remove();

		window.styleReset()


	})
}

function closeGo(res) {
	$('.goto').on('click', function() {
		res.click();
	});
	$('.popShowPrize img').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var imgs = 1;
		res.click(imgs);
	})
}

window.styleReset = function() {
	flag = false
	if (hdgg.storage.get('n') && hdgg.storage.get('n') == '1') {
		change = hdgg.storage.get('change') ? hdgg.storage.get('change') : {}
		// 小人第七次移动距离
		$('.person').addClass('personGo').animate({
				'left': '12rem',
				'top': '9.2rem'
			}, 1500)
			.animate({
				'left': '13.2rem',
				'top': '10rem'
			}, 1000)

		change = {
			'left': '13.2rem',
			'top': '10rem'
		}
		$('.person').css({
			'left': '13.2rem',
			'top': '10rem'
		})
		hdgg.storage.set('change', change)
		setTimeout(function() {
			$('.person').removeClass('personGo')
		}, 2600)
	}
}
