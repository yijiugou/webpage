var topSwiper = new Swiper("#swiper1", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#pagination",
        clickable: true,
    },
});
var footSwiper = new Swiper("#swiper2", {
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#pagination2",
        clickable: true,
    },
});

var circleData = [
    {
        name: "changsha",
        top: "498",
        right: "364",
        img: "/content/images/changshaMap.jpg",
        openDate: "2017.04.06",
        trueName: "",
    },
    {
        name: "wuhan",
        top: "447",
        right: "351",
        img: "/content/images/湖北.jpg",
        openDate: "2018.05.04",
        trueName: "湖北",
    },
    {
        name: "nanchang",
        top: "480",
        right: "297",
        img: "/content/images/江西.jpg",
        openDate: "2018.06.06",
        trueName: "江西",
    },
    {
        name: "guangzhou",
        top: "577",
        right: "350",
        img: "/content/images/广东.jpg",
        openDate: "2018.07.09",
        trueName: "广东",
    },
    {
        name: "chengdu",
        top: "453",
        right: "531",
        img: "/content/images/四川.jpg",
        openDate: "2018.10.12",
        trueName: "四川",
    },
    {
        name: "chongqing",
        top: "466",
        right: "471",
        img: "/content/images/重庆.jpg",
        openDate: "2018.10.19",
        trueName: "重庆",
    },
    {
        name: "xian",
        top: "386",
        right: "450",
        img: "/content/images/陕西.jpg",
        openDate: "2018.10.26",
        trueName: "陕西",
    },
    {
        name: "guiyang",
        top: "526",
        right: "477",
        img: "/content/images/贵州.jpg",
        openDate: "2018.11.12",
        trueName: "贵州",
    },
    {
        name: "zhengzhou",
        top: "378",
        right: "356",
        img: "/content/images/河南.jpg",
        openDate: "2018.11.30",
        trueName: "河南",
    },
    {
        name: "nanning",
        top: "594",
        right: "444",
        img: "/content/images/广西.jpg",
        openDate: "2018.12.31",
        trueName: "广西",
    },
    {
        name: "fujian",
        top: "523",
        right: "230",
        img: "/content/images/福建.jpg",
        openDate: "2019.04.02",
        trueName: "福建",
    },
    {
        name: "hebei",
        top: "298",
        right: "336",
        img: "/content/images/河北.jpg",
        openDate: "2019.06.19",
        trueName: "河北",
    },
    {
        name: "shandong",
        top: "334",
        right: "302",
        img: "/content/images/山东.jpg",
        openDate: "2019.09.19",
        trueName: "山东",
    },
    {
        name: "nanjing",
        top: "410",
        right: "236",
        img: "/content/images/江苏.jpg",
        openDate: "2019.09.19",
        trueName: "南京",
    },
];

var time;
function circleInif() {
    for (var i = 0; i < circleData.length; i++) {
        $("#mapDiv").append(
            "<div class='circle' id='" + circleData[i].name + "'></div>"
        );
        $("#" + circleData[i].name).css("top", circleData[i].top + "px");
        $("#" + circleData[i].name).css("right", circleData[i].right + "px");
        if (circleData[i].name == "changsha") {
            $("#mapDiv").append(
                '<div class="nr imgDiv" id="' +
                    circleData[i].name +
                    'Img"><img src="' +
                    circleData[i].img +
                    '" /><div class="fr"><div class="time"><span>' +
                    circleData[i].openDate +
                    "</span></div><h4>" +
                    circleData[i].trueName +
                    "</h4></div></div>"
            );
        } else {
            $("#mapDiv").append(
                '<div class="nr imgDiv" id="' +
                    circleData[i].name +
                    'Img"><img style="width: 500px" src="' +
                    circleData[i].img +
                    '" /></div>'
            );
        }
    }

    //鼠标移动到上面
    $(".circle")
        .mouseover(function () {
            clearInterval(time);
            over(this);
        })
        .mouseout(function () {
            time = setInterval(showCity, 1500);
        });
    over($("#changsha"));
    time = setInterval(showCity, 1500);
}

var curName = "changsha";
function showCity() {
    for (var i = 0; i < circleData.length; i++) {
        if (curName == circleData[i].name) {
            var curIndex = i + 1;
            if (curIndex == circleData.length) {
                curIndex = 0;
            }
            curName = circleData[curIndex].name;

            over($("#" + curName));
            break;
        }
    }
}

function over(obj) {
    $(".imgDiv").hide();
    $(".active").removeClass("active");
    $(obj).addClass("active");
    var top = $(obj).position().top;
    var left = $(obj).position().left;
    var name = $(obj).prop("id");
    $("#" + name + "Img").fadeIn();

    //最小top
    var getTop = top - 100 < 200 ? 200 : top - 100;
    getTop = getTop > 380 ? 380 : getTop;

    $("#" + name + "Img").css("top", getTop + "px");

    lineCreate(top, left);
}

//划线
function lineCreate(top, left) {
    $(".lineDiv").css("top", top + 18 + "px");
    $(".lineDiv").css("left", "520px");
    $(".lineDiv").css("width", left - 520 + "px");
}

$(function () {
    //动画1
    turn($("#horizontal"));
    //动画2
    //circleInif();
    //高度计算
    initHeight();

    //绑定NAV招聘下拉
    initNavRecruit();
});

//翻转
var turn = function (target) {
    target.find(".no1").hover(
        function () {
            $(this).find(".nr:eq(0)").animate({ "margin-top": "-172px" }, 400);
        },
        function () {
            $(this).find(".nr:eq(0)").animate({ "margin-top": "0px" }, 400);
        }
    );

    target.find(".no2").hover(
        function () {
            $(this).find(".nr:eq(0)").animate({ "margin-top": "-172px" }, 400);
        },
        function () {
            $(this).find(".nr:eq(0)").animate({ "margin-top": "0px" }, 400);
        }
    );

    target.find(".no3").hover(
        function () {
            $(this).find(".nr:eq(0)").animate({ "margin-top": "-172px" }, 400);
        },
        function () {
            $(this).find(".nr:eq(0)").animate({ "margin-top": "0px" }, 400);
        }
    );
};

//元素高度
function initHeight() {
    $(".index2m").css("margin-top", $(".index1").height() + "px");
    var h1 = $(".index1").height();
    var h2 = $(".index3").height();
    var h3 = $(".index2m").height();
    $(".ceng3").css("margin-top", h1 + h2 + h3 + "px");
}
$(document).scroll(function () {
    if ($(document).scrollTop() > $(".index1").height()) {
        $(".index3").css("z-index", 10);
    } else {
        $(".index3").css("z-index", 1);
    }

    if ($(document).scrollTop() > 100) {
        $(".logo1").addClass("logo2");
        $(".zhaopin img").attr(
            "src",
            "/Content/images/school/downArrowshui.png"
        );
    } else {
        $(".logo1").removeClass("logo2");
        $(".zhaopin img").attr(
            "src",
            "/Content/images/school/downArrowsbai.png"
        );
    }
});

function initNavRecruit() {
    $(".zhaopin,.down-layer-index")
        .mouseover(function () {
            $(".down-layer-index").show();
        })
        .mouseout(function () {
            $(".down-layer-index").hide();
        });
    $(".down-layer-index a").mouseover(function () {
        $(".down-layer-index a").removeClass("currenta");
        $(this).addClass("currenta");
    });
}
