/*input 的焦点事件*/

/*获取焦点时，改变button的颜色*/
$('#search-input').focus(function () {
    $('.search-btn').addClass('search-btn-active');
});

$('#search-input').blur(function () {
    $('.search-btn').removeClass('search-btn-active');
});
//输入框得到焦点时

$("#search-input").on('focus', function () {
    $('.search-hot').css('display', 'none');
});
//输入框失去焦点时
$("#search-input").on('blur', function () {
    $('.search-hot').css('display', 'block');
});


$('.navbar-toggle').click(function () {

    var show = $('#nav-menu').css('display');

    if (show == 'none') {
        $('#nav-menu').slideDown(1000);

    } else {
        $('#nav-menu').slideUp(1000);
    }
});