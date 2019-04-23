$(function () {
    FZ(20, 375);
    var turnplate = {
      restaraunts: [],				//大转盘奖品名称
      colors: [],					//大转盘奖品区块对应背景颜色
      outsideRadius: 192,			//大转盘外圆的半径
      textRadius: 155,				//大转盘奖品位置距离圆心的距离
      insideRadius: 68,			//大转盘内圆的半径
      startAngle: 0,				//开始角度
  
      bRotate: false				//false:停止;ture:旋转
    };
  //var times = $('#countZa').text();
    var hdgg = new HDGG({
        appkey: "06b0621e8e4cb2079e83255adab12b59",
        adSpaceKey:"528c0ef8159c60aeaa772ddc9d6dc861",
      times: 8,
      timesEle: '#countZa',
      recordEle: '.jiang',
      name: '欢乐大转盘（福利社）',
      type: 264,
      rem: 20 / 375
    });
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: true
    });
    $(document).ready(function () {
      $('body').height(document.body.clientHeight - 160);
      $('.rule').on('click', function () {
        $('.alerty').show();
        $('.zhenotice').show();
      })
      $('body .moresay').on('click', function () {
        $(this).toggleClass('activeadv')
        $('.moresayp').toggle();
      })
      $('.alerty').on('click', '.saclose', function () {
        $('.moresay').removeClass('activeadv');
        $('.moresayp').hide();
        $('.alerty').hide();
        $('.zhenotice').hide();
      })
  
  
      //动态添加大转盘的奖品与奖品区域背景颜色
      turnplate.restaraunts = ["水果拼盘300元月卡", "2元现金红包", "夏威夷果一袋", "3元现金红包", "松子一袋 ", "5元现金红包"];
      turnplate.colors = ["#ffc41f", "#fff9e8", "#ffc41f", "#fff9e8", "#ffc41f", "#fff9e8"];
  
  
      var rotateTimeOut = function () {
        $('#wheelcanvas').rotate({
          angle: 0,
          animateTo: 2160,
          duration: 5000,
          callback: function () {
            alert('网络超时，请检查您的网络设置！');
          }
        });
      };
  
      //旋转转盘 item:奖品位置; txt：提示语;
      var rotateFn = function (item, txt) {
        var angles = 560;
        $('#wheelcanvas').stopRotate();
        $('canvas').removeClass('active');
        $("canvas").removeAttr("style");
        $('.bian').removeClass('active');
        $('.bian').removeAttr("style");
        $('#wheelcanvas').rotate({
          angle: 0,
          animateTo: angles + 1600,
          duration: 5000,
          callback: function () {
            hdgg.win({
              success: function (res) {
                console.log('111',res)
                alertCommon(res.ad.imageUrl, res.ad.advIntro, res.ad.receiveText);
                closeBtn(res);
                closeGo(res);
              }
            });
            $('#pointer').attr('src', 'https://hdggcdn.bayimob.com/hdggstatic/dazhuanpan/jt2.png');
            turnplate.bRotate = !turnplate.bRotate;
            $('.pointer').removeClass('stop');
            setTimeout(function () {
              $('canvas').addClass('active');
            }, 1000)
          }
        });
  
        $('.bian').rotate({
          angle: 0,
          animateTo: -(angles + 1600),
          duration: 5000,
          callback: function () {
            setTimeout(function () {
              $('.bian').addClass('active');
            }, 1000)
          }
        });
  
      };
  
      $('.pointer').click(function () {
        if ($(this).hasClass('stop')) {
          return;
        }
        if ($('#countZa').text() != 0) {
          $(this).addClass('stop');
        }
  
  
        var startC = hdgg.start();
        if (startC < 0) {
          return;
        }
        $('#pointer').attr('src', 'https://hdggcdn.bayimob.com/hdggstatic/dazhuanpan/jted.png');
        if (turnplate.bRotate) return;
        turnplate.bRotate = !turnplate.bRotate;
        //获取随机数(奖品个数范围内)
        var item = rnd(1, turnplate.restaraunts.length);
        //奖品数量等于10,指针落在对应奖品区域的中心角度[252, 216, 180, 144, 108, 72, 36, 360, 324, 288]
        rotateFn(item, turnplate.restaraunts[item - 1]);
      });
    });
  
    function rnd(n, m) {
      var random = Math.floor(Math.random() * (m - n + 1) + n);
      return random;
  
    }
  
  
  //页面所有元素加载完毕后执行drawRouletteWheel()方法对转盘进行渲染
    window.onload = function () {
      drawRouletteWheel();
    };
  
    function drawRouletteWheel() {
      var canvas = document.getElementById("wheelcanvas");
      if (canvas.getContext) {
        //根据奖品个数计算圆周角度
        var arc = Math.PI / (turnplate.restaraunts.length / 2);
        var ctx = canvas.getContext("2d");
        //在给定矩形内清空一个矩形
        ctx.clearRect(0, 0, 422, 422);
        //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
        ctx.strokeStyle = "#fff9e8";
        //font 属性设置或返回画布上文本内容的当前字体属性
        ctx.font = 'bold 18px Microsoft YaHei';
        for (var i = 0; i < turnplate.restaraunts.length; i++) {
          var angle = turnplate.startAngle + i * arc;
          ctx.fillStyle = turnplate.colors[i];
          ctx.beginPath();
          //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
          ctx.arc(211, 211, turnplate.outsideRadius, angle, angle + arc, false);
          ctx.arc(211, 211, turnplate.insideRadius, angle + arc, angle, true);
          ctx.stroke();
          ctx.fill();
          //锁画布(为了保存之前的画布状态)
          ctx.save();
  
          //改变画布文字颜色
          var b = i + 2;
          if (b % 2) {
            ctx.fillStyle = "#ffc41f";
          } else {
            ctx.fillStyle = "#ffeda0";
          }
          ;
  
          //----绘制奖品开始----
  
  
          var text = turnplate.restaraunts[i];
          var line_height = 17;
          //translate方法重新映射画布上的 (0,0) 位置
          ctx.translate(211 + Math.cos(angle + arc / 2) * turnplate.textRadius, 211 + Math.sin(angle + arc / 2) * turnplate.textRadius);
  
          //rotate方法旋转当前的绘图
          ctx.rotate(angle + arc / 2 + Math.PI / 2);
  
  
          //添加对应图标
  
          if (text.indexOf(turnplate.restaraunts[0]) >= 0) {
            var img = document.getElementById("diy1-img");
            img.onload = function () {
              ctx.drawImage(img, -45, -20);
            };
            ctx.drawImage(img, -45, -20);
          }
          ;
          if (text.indexOf(turnplate.restaraunts[1]) >= 0) {
            var img = document.getElementById("shan-img");
            img.onload = function () {
              ctx.drawImage(img, -35, -20);
            };
            ctx.drawImage(img, -35, -20);
          }
          ;
          if (text.indexOf(turnplate.restaraunts[2]) >= 0) {
            var img = document.getElementById("diy5-img");
            img.onload = function () {
              ctx.drawImage(img, -45, -20);
            };
            ctx.drawImage(img, -45, -20);
          }
          ;
          if (text.indexOf(turnplate.restaraunts[3]) >= 0) {
            var img = document.getElementById("diy2-img");
            img.onload = function () {
              ctx.drawImage(img, -45, -20);
            };
            ctx.drawImage(img, -45, -20);
          }
          ;
          if (text.indexOf(turnplate.restaraunts[4]) >= 0) {
            var img = document.getElementById("diy3-img");
            img.onload = function () {
              ctx.drawImage(img, -40, -20);
            };
            ctx.drawImage(img, -40, -20);
          }
          ;
          if (text.indexOf(turnplate.restaraunts[5]) >= 0) {
            var img = document.getElementById("shan-img");
            img.onload = function () {
              ctx.drawImage(img, -45, -20);
            };
            ctx.drawImage(img, -45, -20);
          }
          ;
          if (text.indexOf(turnplate.restaraunts[6]) >= 0) {
            var img = document.getElementById("diy2-img");
            img.onload = function () {
              ctx.drawImage(img, -40, -20);
            };
            ctx.drawImage(img, -40, -20);
          }
          ;
  
          if (text.indexOf(turnplate.restaraunts[7]) >= 0) {
            var img = document.getElementById("shan-img");
            img.onload = function () {
              ctx.drawImage(img, -45, -20);
            };
            ctx.drawImage(img, -45, -20);
          }
          ;
  
  
          //把当前画布返回（调整）到上一个save()状态之前
          ctx.restore();
          //----绘制奖品结束----
        }
      }
      $('canvas').addClass('active');
    };
  
  
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
  
    function alertCommon(imageUrl, advIntro, txt) {
      var strs = '<div class="popShowPrize" id="dialog5" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"><div class=""></div><div class="caiguang"></div><div class="m-box"></div><div class="showPrize-dialog modal-body"><div class="dings"><div class="card-bg""><img src="' + imageUrl + '" alt=""></div><div class="red-bg"></div><div class="red-bg1"></div><div class="red-bg2"></div><div class="detail"><div class="topic">' + advIntro + '</div><div class="goto">' + txt + '</div></div><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span></div></div></div>'
      $('body').append(strs);
      setTimeout(function () {
        $('#dialog5').append('<span id="close" class="close-btn closetc iconfont"></span>');
      }, 1500)
    }
  
    function closeBtn(res) {
      $('#dialog5').on('click', '.close-btn', function () {
        res.close();
        $('#dialog5').addClass('hidem');
        $('#dialog5').remove();
        $('.DB_guide').show();
      })
    }
  
    function closeGo(res) {
      $('.goto').on('click', function () {
        res.click();
      })
      $('.showPrize-dialog img').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var imgs = 1;
        res.click(imgs);
      })
    }
  })