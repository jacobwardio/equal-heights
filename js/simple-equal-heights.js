// http://codepen.io/Lewitje/pen/YybQEP original copy from Lewi Hussay updated to work with multiple divs
// Equal height - by Burfield www.burfield.co.uk
// 2016-22-03 - Changed - Removed jQuery dependency (@jacobwarduk http://www.jacobward.co.uk)
// Example usage use data-match-height="groupName"> on anything!!!

var matchHeight = {

  matchHeight: function() {

    groupHeights = [];

    groupName = [].slice.call(document.querySelectorAll("[data-match-height]"));

    groupName.forEach(function(groupName, key, groupHeights) {

      var dataName = groupName;

      var key = dataName.getAttribute("data-match-height");

      if (!groupHeights[key]) {
        groupHeights[key] = [];
      }

      dataName.style.minHeight = "auto";

      for (var i = 0; i < dataName.attributes.length; i++) {
        groupHeights[key].push(groupName.offsetHeight);
      }

      var minHeight = Math.max.apply(null, groupHeights[key]);

      // console.log(minHeight);

      if (window.innerWidth > 600) {


        /*
            JUST NEED TO APPLY VALUES TO min-height CSS PROPERTY
        */
        var element = document.querySelector('[data-match-height="' + key + '"]');
        element.style.minHeight = minHeight;
        // element.setAttribute("style", "min-height: " + minHeight + ";");
        // console.log(" ");
        console.log(element); // SHOULD BE OUTPUTTING THE ASSIGNED VALUE - NOT FUCKING "AUTO" !!!!!
      }

    });









  },

  eventListeners: function() {
    // window.onresize = function() {
      this.matchHeight();
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
