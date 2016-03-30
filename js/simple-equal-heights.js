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

      groupHeightsAll = groupHeights;

    });

    console.log(groupHeightsAll["p"].offsetHeight);

    for (var index in groupHeightsAll) {
      // var minHeight = Math.max.apply(Math, groupHeightsAll[index]);
      // console.log(minHeight);
      // console.log(index[key]);

      // if (window.innerWidth > 600) {
      //     var element = document.querySelectorAll('[data-match-height="' + index + '"]');
      //     element.style.minHeight = minHeight + "px";
      //   }
    }



    // groupHeightsAll.forEach(function(item, undefined, groupHeightsAll) {
    //
    //   var minHeight = Math.max.apply(Math, groupHeightsAll);
    //   console.log(minHeight);
    //
    //   if (window.innerWidth > 600) {
    //     var element = document.querySelectorAll('[data-match-height="' + item + '"]');
    //     element.style.minHeight = minHeight + "px";
    //   }
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
