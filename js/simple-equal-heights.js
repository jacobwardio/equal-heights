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

      var minHeight = Math.max.apply(null, groupHeights[key]);

      console.log(key);
      console.log(minHeight);

      if (window.innerWidth > 600) {
        var foo = document.querySelector("[data-match-height=\"" + key + "\"]").style.minHeight = minHeight;
        console.log(foo);
        // document.querySelector("[data-match-height=\"" + key + "\"]").style.minHeight = minHeight;
      } else {
        document.querySelector("data-match-height=\"" + key + "\"").style.minHeight = "auto";
      }

    });

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
