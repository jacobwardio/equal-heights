// http://codepen.io/Lewitje/pen/YybQEP original copy from Lewi Hussay updated to work with multiple divs
// Equal height - by Burfield www.burfield.co.uk
// Example usage use <div class='div-class' data-match-height="groupName1"> on anything!!!

var matchHeight = (function () {

    "use strict";

    function matchHeight(){
        //get all matched height attr
        var groupName = $('[data-match-height]');
        var groupHeights = [];

        // for each attr set the min height to auto this makes it responsive
        $(groupName).each(function(){

            var dataName = $(this);

            var key = dataName.data('match-height');

            //create an array of heights
            if(!(key in groupHeights)){
                groupHeights[key] = [];
            }

            dataName.css('min-height', 'auto');

            dataName.each(function() {

                groupHeights[key].push(dataName.outerHeight());

            });

            return groupHeights.key;

        });

        var obj = groupHeights;

        for (var index in obj) {
            if (!obj.hasOwnProperty(index)) {
                continue;
            }

            var minHeight = Math.max.apply(null, obj[index]);
            //set the new min height
            $('[data-match-height="'+index+'"]').css('min-height', minHeight);

        }

    }

    function eventListeners(){
        $(window).on('resize', function() {
            matchHeight();
        });
    }

    function init() {
        eventListeners();
        matchHeight();
    }

    return {
        init: init
    };

}());

$(document).ready(function() {
    matchHeight.init();
});
