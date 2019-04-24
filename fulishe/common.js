FZ(20, 375);
//倒数计时
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
var isAndroida = window.sessionStorage.getItem('isAndroid') || '';
var times = $('#countZa').text();
var appkey = getUrlParam('appkey');
var adSpaceKey = getUrlParam('adSpaceKey');
var hdgg = new HDGG({
  appkey: "06b0621e8e4cb2079e83255adab12b59",
  adSpaceKey:"528c0ef8159c60aeaa772ddc9d6dc861",
  times: times,
  timesEle: '#countZa',
  recordEle: '.jiang',
  name: '福利社',
  type: 23,
  rem: 20 / 375
});
$('.iconlists li').eq(0).on('click', function () {
  hdgg.gameCenterClick().then(function () {
    location.href = '/zaqiqiu/index.html';
  })
})
$('.iconlists li').eq(1).on('click', function () {
  hdgg.gameCenterClick().then(function () {
    location.href = '/xinyundazhuanpan/index.html';
  })
})
$('.iconlists li').eq(2).on('click', function () {
  hdgg.gameCenterClick().then(function () {
    location.href = '/chunrifuli/index.html';
  })
})
$('.iconlists li').eq(3).on('click', function () {
  hdgg.gameCenterClick().then(function () {
    location.href = '/zadan/index.html'
  })
})
$('.shopsclick').eq(0).on('click', function () {
  hdgg.gameCenterClick().then(function () {
    location.href = '/hongbaoyu/index.html';
  })
})
$('.shopsclick').eq(1).on('click', function () {
  hdgg.gameCenterClick().then(function () {
    location.href = '/jinridaji/index.html';
  })
})
$('.shopsclick').eq(2).on('click', function () {
  hdgg.gameCenterClick().then(function () {
    location.href = '/laoyulvxing/index.html';
  })
})
$('.shopsclick').eq(3).on('click', function () {
  hdgg.gameCenterClick().then(function () {
    location.href = '/xinzhuanpan/index.html';
  })
})
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true
});
var startes = true;
$('.banner').on('click', function () {
  if (startes == false) {
    return;
  }
  if ($('#countZa').text() == 0) {
    hdgg.start();
    return;
  }
  hdgg.start();
  startes = false;
  hdgg.win({
    success: function (res) {
      // console.log(res)
      alertCommon(res.ad.imageUrl, res.ad.advIntro);
      startes = true;
      closed(res);
      $('.goto').on('click', function () {
        res.click();
        location.href = res.ad.urlPath;
      })
      $('.card-bg img').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var imgs = 1;
        res.click(imgs);
        location.href = res.ad.urlPath;
      })

    }
  });
})

$('body').on('click', '.m-close,#hdgg_click_ad_btn', function () {
  startes = true;
})
$('.saclose').on('click', function () {
  $('.moresay').removeClass('activeadv');
  $('.moresayp').hide();
  $('.alerty').hide();
  $('.zhenotice').hide();
})


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
  window.onresize = function () {
    setTimeout(function () {
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

function alertCommon(imageUrl, advIntro) {
  var strs = '<div class="popShowPrize" id="dialog5" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"><div class="card-sunshine"></div><div class="m-box"></div><div class="showPrize-dialog modal-body"><div class="card-bg" style="background-image: url(../common/image/hongcardbg_goldegg.png)"><img src="' + imageUrl + '" alt=""></div><div class="red-bg"></div><div class="detail"><div class="topic">' + advIntro + '</div><div class="goto"></div></div><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span></div></div>'
  $('body').append(strs);
  setTimeout(function () {
    $('#dialog5').append('<span id="close" class="close-btn closetc iconfont"></span>');
  }, 1500)

}

function closed(res) {
  $('body').on('click', '#close', function () {
    res.close();
    $('#dialog5').addClass('hidem');
    $('#dialog5').remove();
    $('.leadStart').show();
    $('.shengzi2').attr("style", "");
    $('.gszreg').addClass('movereg');
  })
}