// http://codepen.io/Lewitje/pen/YybQEP original copy from Lewi Hussay updated to work with multiple divs
// Equal height - by Burfield www.burfield.co.uk
// 2016-30-03 - Changed - Refactored from jQuery to vanilla JS (@jacobwarduk http://www.jacobward.co.uk)
// Example usage use data-match-height="groupName"> on anything!!!

var matchHeight = {

  matchHeight: function() {

    var groupName = Array.prototype.slice.call(document.querySelectorAll("[data-match-height]"));
    var groupHeights = {};
    var groupHeightsMax = {};

    for (var item of groupName) {

      var data = item.getAttribute("data-match-height");

      item.style.minHeight = "auto";

      if (groupHeights.hasOwnProperty(data)) {
        Object.defineProperty(groupHeightsMax, groupHeights[data], {
          value: Math.max(groupHeights[data], item.offsetHeight),
          configurable: true,
          writable: true,
          enumerable: true
        });
      } else {
        groupHeightsMax[data] = item.offsetHeight;
      }
    }

    var groupHeightsAll = groupHeightsMax;


    /*
      TO DO:
      For some reason groupHeightsAll is not iterable, despite all it's properties being set to `enumerable: true`.
      This seems like a reasonable alternative to a `for` loop, given this situation.
    */

    Object.getOwnPropertyNames(groupHeightsAll).forEach(function(v) {
      // console.log(v + ": " + Object.getOwnPropertyDescriptor(groupHeightsAll, v).value);


      var elementsToChange = document.querySelectorAll("[data-match-height='" + v + "']");

      for (var i = 0; i < elementsToChange.length; i++) {
        elementsToChange[i].style.height = Object.getOwnPropertyDescriptor(groupHeightsAll, v).value + "px";
        console.log(v, elementsToChange[i].style.height);
      }


    });

  },

  eventListeners: function() {
    // window.onresize = this.matchHeight();
  },

  init: function() {
    this.eventListeners();
    this.matchHeight();
  }

};

document.addEventListener("DOMContentLoaded", function() {
  matchHeight.init();
});
