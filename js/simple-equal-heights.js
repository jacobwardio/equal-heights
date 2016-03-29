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

      return groupHeights;

    });

  },

  stretchElements: function(groupHeights) {

    console.log(groupHeights);

    // var minHeight = Math.max.apply(null, groupHeights[key]);
    //
    // if (window.innerWidth > 600) {
    //
    //   var element = document.querySelector('[data-match-height="' + key + '"]');
    //   element.style.minHeight = minHeight;
    //   console.log(element.style.minHeight = minHeight);
    // }

  },

  eventListeners: function() {
    // window.onresize = function() {
    //   matchHeight();
    // });
  },

  init: function() {
    this.eventListeners();
    this.matchHeight();
    this.stretchElements();
  }

};

document.addEventListener("DOMContentLoaded", function() {
  matchHeight.init();
});
