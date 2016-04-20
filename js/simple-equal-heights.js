// http://codepen.io/Lewitje/pen/YybQEP original copy from Lewi Hussay updated to work with multiple divs
// Equal height - by Burfield www.burfield.co.uk
// 2016-30-03 - Changed - Refactored from jQuery to vanilla JS (@jacobwarduk http://www.jacobward.co.uk)
// Example usage use data-match-height="groupName" on anything!!!

var matchHeight = {

  matchHeight: function() {

    var groupName = Array.prototype.slice.call(document.querySelectorAll("[data-match-height]"));
    var groupHeights = {};

    for (var item of groupName) {

      var data = item.getAttribute("data-match-height");

      item.style.minHeight = "auto";

      if (groupHeights.hasOwnProperty(data)) {
        Object.defineProperty(groupHeights, data, {
          value: Math.max(groupHeights[data], item.offsetHeight),
          configurable: true,
          writable: true,
          enumerable: true
        });
      } else {
        groupHeights[data] = item.offsetHeight;
      }
    }

    var groupHeightsMax = groupHeights;

    Object.getOwnPropertyNames(groupHeightsMax).forEach(function(value) {

      var elementsToChange = document.querySelectorAll("[data-match-height='" + value + "']");

      for (var i = 0; i < elementsToChange.length; i++) {
        elementsToChange[i].style.height = Object.getOwnPropertyDescriptor(groupHeightsMax, value).value + "px";
      }
    });
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
