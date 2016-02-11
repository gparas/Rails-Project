// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap
//= require mobiscroll.custom-2.17.1.min

$.mobiscroll.setDefaults({
    theme: 'airtickets-default'
});

$(function(){
    // create a listview
    $('#list').mobiscroll().listview({
        stages: {
            right: [
                {
                    key: 'stage1',
                    color: '#DE3D18', 
                    text: 'Reset',
                    icon: 'remove'
                    // action: function (li, inst) {
                    //     inst.remove(li);
                    //     return false;
                    // }
                }
            ]
        }
    });    

    $('#tabMenu').mobiscroll().menustrip({
        display: 'inline',
        context: 'main',
        type: 'tabs',
        onItemTap: function (item, inst) {
            $('.md-tab-h').removeClass('md-tab-sel');
            $('#' + item.data('tab')).addClass('md-tab-sel');
        }
    });

    $('.md-next').off().click(function () {
        $('#tabMenu').mobiscroll('next');
    });

    $('.md-prev').off().click(function () {
     $('#tabMenu').mobiscroll('prev');
 });

    $('.md-apps-ul').mobiscroll().listview({ 
        enhance: true,
        altRow: true,
        swipe: false
    });
});

