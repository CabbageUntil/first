/**
 * Created by admin on 2018/9/10.
 */
function big(id) {
    var addNum = $(id).text();
    /*  console.log(addNum);*/
    if ( addNum >= 100 ) {
        $(id).addClass('big-active');
    }

}

big('#ok-oneRemote-1');
big('#ok-oneRemote-2');
big('#ok-oneRemote-3');
big('#ok-oneRemote-4');
big('#ok-oneRemote-5');

big('#no-oneRemote-1');
big('#no-oneRemote-2');
big('#no-oneRemote-3');
big('#no-oneRemote-4');
big('#no-oneRemote-5');

big('#ask-oneRemote-1');
big('#ask-oneRemote-2');
big('#ask-oneRemote-3');
big('#ask-oneRemote-4');
big('#ask-oneRemote-5');

big('#ok-AANETS-1');
big('#no-AANETS-1');
big('#ask-AANETS-1');

big('#ok-AARDP-1');
big('#no-AARDP-1');
big('#ask-AARDP-1');

big('#ok-AARDP-2');
big('#no-AARDP-2');
big('#ask-AARDP-2');

big('#ok-IPRemote-1');
big('#no-IPRemote-1');
big('#ask-IPRemote-1');

/*oneRemote*/
var okoneRemote1 = $('#ok-oneRemote-1');
var nooneRemote1 = $('#no-oneRemote-1');
var askoneRemote1 = $('#ask-oneRemote-1');

var okoneRemote2 = $('#ok-oneRemote-2');
var nooneRemote2 = $('#no-oneRemote-2');
var askoneRemote2 = $('#ask-oneRemote-2');

var okoneRemote3 = $('#ok-oneRemote-3');
var nooneRemote3 = $('#no-oneRemote-3');
var askoneRemote3 = $('#ask-oneRemote-3');

var okoneRemote4 = $('#ok-oneRemote-4');
var nooneRemote4 = $('#no-oneRemote-4');
var askoneRemote4 = $('#ask-oneRemote-4');

var okoneRemote5 = $('#ok-oneRemote-5');
var nooneRemote5 = $('#no-oneRemote-5');
var askoneRemote5 = $('#ask-oneRemote-5');


/*AANETS*/
var okAANETS1 = $('#ok-AANETS-1');
var noAANETS1 = $('#no-AANETS-1');
var askAANETS1 = $('#ask-AANETS-1');

/*oneRemote*/
var okAARDP1 = $('#ok-AARDP-1');
var noAARDP1 = $('#no-AARDP-1');
var askAARDP1 = $('#ask-AARDP-1');

var okAARDP2 = $('#ok-AARDP-2');
var noAARDP2 = $('#no-AARDP-2');
var askAARDP2 = $('#ask-AARDP-2');


/*IPRemote*/
var okIPRemote1 = $('#ok-IPRemote-1');
var noIPRemote1 = $('#no-IPRemote-1');
var askIPRemote1 = $('#ask-IPRemote-1');

/*oneRemote*/
$("#likes-oneRemote-1").on("click", "li", function (e) {
    var tt = $(this).index();
    switch (tt) {
        case 0:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(okoneRemote1.text());
            num += 1;
            okoneRemote1.text(num);
            break;
        case 1:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(nooneRemote1.text());
            num += 1;
            nooneRemote1.text(num);
            break;
        case 2:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(askoneRemote1.text());
            num += 1;
            askoneRemote1.text(num);
            break;
    }
});

$("#likes-oneRemote-2").on("click", "li", function (e) {
    var tt = $(this).index();
    switch (tt) {
        case 0:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(okoneRemote2.text());
            num += 1;
            okoneRemote2.text(num);
            break;
        case 1:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(nooneRemote2.text());
            num += 1;
            nooneRemote2.text(num);
            break;
        case 2:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(askoneRemote2.text());
            num += 1;
            askoneRemote2.text(num);
            break;
    }
});

$("#likes-oneRemote-3").on("click", "li", function (e) {
    var tt = $(this).index();
    switch (tt) {
        case 0:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(okoneRemote3.text());
            num += 1;
            okoneRemote3.text(num);
            break;
        case 1:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(nooneRemote3.text());
            num += 1;
            nooneRemote3.text(num);
            break;
        case 2:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(askoneRemote3.text());
            num += 1;
            askoneRemote3.text(num);
            break;
    }
});

$("#likes-oneRemote-4").on("click", "li", function (e) {
    var tt = $(this).index();
    switch (tt) {
        case 0:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(okoneRemote4.text());
            num += 1;
            okoneRemote4.text(num);
            break;
        case 1:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(nooneRemote4.text());
            num += 1;
            nooneRemote4.text(num);
            break;
        case 2:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(askoneRemote4.text());
            num += 1;
            askoneRemote4.text(num);
            break;
    }
});

$("#likes-oneRemote-5").on("click", "li", function (e) {
    var tt = $(this).index();
    switch (tt) {
        case 0:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(okoneRemote5.text());
            num += 1;
            okoneRemote5.text(num);
            break;
        case 1:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(nooneRemote5.text());
            num += 1;
            nooneRemote5.text(num);
            break;
        case 2:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(askoneRemote5.text());
            num += 1;
            askoneRemote5.text(num);
            break;
    }
});


/*AANETS*/
$("#likes-AANETS-1").on("click", "li", function (e) {
    var tt = $(this).index();
    switch (tt) {
        case 0:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(okAANETS1.text());
            num += 1;
            okAANETS1.text(num);
            break;
        case 1:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(noAANETS1.text());
            num += 1;
            noAANETS1.text(num);
            break;
        case 2:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(askAANETS1.text());
            num += 1;
            askAANETS1.text(num);
            break;
    }
});


/*AARDP*/
$("#likes-AARDP-1").on("click", "li", function (e) {
    var tt = $(this).index();
    switch (tt) {
        case 0:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(okAARDP1.text());
            num += 1;
            okAARDP1.text(num);
            break;
        case 1:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(noAARDP1.text());
            num += 1;
            noAARDP1.text(num);
            break;
        case 2:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(askAARDP1.text());
            num += 1;
            askAARDP1.text(num);
            break;
    }
});

$("#likes-AARDP-2").on("click", "li", function (e) {
    var tt = $(this).index();
    switch (tt) {
        case 0:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(okAARDP2.text());
            num += 1;
            okAARDP2.text(num);
            break;
        case 1:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(noAARDP2.text());
            num += 1;
            noAARDP2.text(num);
            break;
        case 2:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(askAARDP2.text());
            num += 1;
            askAARDP2.text(num);
            break;
    }
});

/*video*/
$("#likes-IPRemote-1").on("click", "li", function (e) {
    var tt = $(this).index();
    switch (tt) {
        case 0:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(okIPRemote1.text());
            num += 1;
            okIPRemote1.text(num);
            break;
        case 1:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(noIPRemote1.text());
            num += 1;
            noIPRemote1.text(num);
            break;
        case 2:
            $(this).addClass('likes-ul-active disabled').siblings().addClass('disabled');
            var num = parseInt(askIPRemote1.text());
            num += 1;
            askIPRemote1.text(num);
            break;
    }
});


$(document).ready(function (e) {
    $(".container-ul").on("click", "li", function (e) {
        var tt = $(this).index();
        /* console.log(tt);*/
        switch (tt) {
            case 0:
                $(this).addClass('active-tab').siblings().removeClass('active-tab');
                $("#oneRemote-pc").show();
                $('#oneRemoteWeb-app').hide();
                $('#AANETS-video').hide();
                $('#AARDP-video').hide();
                $('#IPRemote-video').hide();

                break;
            case 1:
                $(this).addClass('active-tab').siblings().removeClass('active-tab');
                $("#oneRemote-pc").hide();
                $('#oneRemoteWeb-app').show();
                $('#AANETS-video').hide();
                $('#AARDP-video').hide();
                $('#IPRemote-video').hide();
                break;
            case 2:
                $(this).addClass('active-tab').siblings().removeClass('active-tab');
                $("#oneRemote-pc").hide();
                $('#oneRemoteWeb-app').hide();
                $('#AANETS-video').show();
                $('#AARDP-video').hide();
                $('#IPRemote-video').hide();
                break;
            case 3:
                $(this).addClass('active-tab').siblings().removeClass('active-tab');
                $("#oneRemote-pc").hide();
                $('#oneRemoteWeb-app').hide();
                $('#AANETS-video').hide();
                $('#AARDP-video').show();
                $('#IPRemote-video').hide();
                break;
            case 4:
                $(this).addClass('active-tab').siblings().removeClass('active-tab');
                $("#oneRemote-pc").hide();
                $('#oneRemoteWeb-app').hide();
                $('#AANETS-video').hide();
                $('#AARDP-video').hide();
                $('#IPRemote-video').show();
                break;
        }
    });
});