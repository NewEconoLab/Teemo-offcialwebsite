var app = {
    init: function ()
    {
        //nav 点击
        this.onNavClick();
        // 语言选择事件你
        this.onLanguageClick();
        //滚动事件
        this.onScrollEvent();
        //
        this.onScrollNav();
        //
        this.onToggleMenu();
        
    },
    onNavClick: function ()
    {
        $("#nav").on("click", "li", function ()
        {
            $("#right").removeClass("active");
            //获取元素id
            var elementId = $(this).data("boxid");
            //获取元素高度
            var elementTop = $('#' + elementId).offset().top - 100;

            //清楚所有的active
            $("#nav").find('li').removeClass('active');
            $(this).addClass('active');

            $('html,body').animate({ scrollTop: elementTop }, 500);
        })
    },
    onLanguageClick: function ()
    {
        let flag = false;
        $("#language").on("click", function ()
        {
            flag = !flag;
            if(flag){
                $("#selectlang").show();
            }else{
                $("#selectlang").hide();
            }
        })
        $("#selectlang").on("click", "li", function (e)
        {
            let event = e || window.event;
            event.stopPropagation();
            $("#selectlang").hide();
        })
    },
    onScrollEvent: function ()
    {
        var theHeight = $('#introduce').offset().top - document.documentElement.clientHeight + 300;
        console.log(theHeight);
        $(document).on('scroll', function ()
        {
            if ($(document).scrollTop() >= theHeight)
            {
                console.log('222')
                $('#introduce').addClass('active');
            }
        })
    },
    onScrollNav: function ()
    {
        let welcomeHeight = $('#welcome').offset().top - document.documentElement.clientHeight + 300;
        let introduceHeight = $('#introduce').offset().top - document.documentElement.clientHeight + 300;
        let traitHeight = $('#trait').offset().top - document.documentElement.clientHeight + 300;
        let aboutHeight = $('#about').offset().top - document.documentElement.clientHeight + 300;
        let helpHeight = $('#help').offset().top - document.documentElement.clientHeight + 300;
        $(document).on('scroll', function ()
        {
            if ($(document).scrollTop() >= helpHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=help]").addClass('active');
            }
            else if ($(document).scrollTop() >= aboutHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=about]").addClass('active');
            }
            else if ($(document).scrollTop() >= traitHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=trait]").addClass('active');
            }
            else if ($(document).scrollTop() >= introduceHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=introduce]").addClass('active');
            }
            else if ($(document).scrollTop() >= welcomeHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=welcome]").addClass('active');
            }

        })
    },
    onToggleMenu(){
        $("#menu").on('click',function(){
            $("#right").addClass("active");
        })
        $("#closeBtn").on('click',function(){
            $("#right").removeClass("active");
        })
    }
}


$(function ()
{
    app.init();
})