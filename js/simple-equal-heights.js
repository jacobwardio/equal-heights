// http://codepen.io/Lewitje/pen/YybQEP original copy from Lewi Hussay updated to work with multiple divs
// Equal height - by Burfield www.burfield.co.uk
// 2016-30-03 - Changed - Refactored from jQuery to vanilla JS (@jacobwarduk http://www.jacobward.co.uk)
// Example usage use data-match-height="groupName"> on anything!!!

var matchHeight = {

  matchHeight: function() {


    var groupName = [].slice.call(document.querySelectorAll("[data-match-height]"));
    var groupHeightsAll = [];

    groupName.forEach(function(item, undefined, groupHeights) {

      var key = item.getAttribute("data-match-height");

      if (!groupHeights[key]) {
        groupHeights[key] = [];
      }

      item.style.minHeight = "auto";

      for (var i = 0; i < item.attributes.length; i++) {
        groupHeights[key].push(item.offsetHeight);
      }


      //
      // // THIS NEEDS TO BE MOVED OUT OF THE LOOP SOMEHOW - RETAINING THE ARRAY KEY[VALUE] PAIRS!
      // var minHeight = Math.max.apply(null, groupHeights[key]);
      //
      // if (window.innerWidth > 600) {
      //   var element = document.querySelector('[data-match-height="' + key + '"]');
      //     // console.log(element.style);
      //   element.style.minHeight = minHeight + "px";
      // }
      //


      console.log(key);

      groupHeightsAll = groupHeights;

    });

    // console.log(groupHeightsAll[key]);


    // groupHeightsAll.forEach(function(groupHeightsAll, index) {
    //
    //   console.log(index + ": " + groupHeightsAll[keyVal] + "\n\n");
    //   // var minHeight = Math.max.apply(Math, groupHeightsAll[height]);
    //   //
    //   // if (window.innerWidth > 600) {
    //   //   var element = document.querySelectorAll('[data-match-height="' + height + '"]');
    //   //   element.style.minHeight = minHeight + "px";
    //   // }
    // });


  },

  eventListeners: function() {
    window.onresize = this.matchHeight();
  },

  init: function() {
    this.eventListeners();
    this.matchHeight();
  }

};

document.addEventListener("DOMContentLoaded", function() {
  matchHeight.init();
});
