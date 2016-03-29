// http://codepen.io/Lewitje/pen/YybQEP original copy from Lewi Hussay updated to work with multiple divs
// Equal height - by Burfield www.burfield.co.uk
// 2016-22-03 - Changed - Removed jQuery dependency (@jacobwarduk http://www.jacobward.co.uk)
// Example usage use data-match-height="groupName"> on anything!!!

var matchHeight = {

  matchHeight: function() {

    var groupName = [].slice.call(document.querySelectorAll("[data-match-height]"));
    var groupHeights = [];

    groupName.forEach(function(groupName, key, groupHeights) {

      var dataName = groupName;

      var key = groupName.getAttribute("data-match-height");

      if (!(groupHeights.hasOwnProperty(key))) {
        groupHeights[key] = [];
      }

      dataName.style.minHeight = "auto";

      for (var i = 0; i < dataName.attributes.length; i++) {
        groupHeights[key].push(groupName.offsetHeight);
      }

      console.log(groupHeights[key]);
      return groupHeights[key];

    });

    var obj = groupHeights;

    for (var index of obj) {
      if (!obj.hasOwnProperty(index)) {
        continue;
      }

      var minHeight = Math.max.apply(null, obj[index]);

      if (window.innerWidth() > 600) {
        document.querySelector("data-match-height=\"" + index + "\"").style.minHeight = minHeight;
      } else {
        document.querySelector("data-match-height=\"" + index + "\"").style.minHeight = "auto";
      }

    }

  },

  eventListeners: function() {
    // window.onresize = function() {
    //   matchHeight();
    // });
  },

  init: function() {
    this.eventListeners();
    this.matchHeight();
  }

};

document.addEventListener("DOMContentLoaded", function() {
  matchHeight.init();
});
