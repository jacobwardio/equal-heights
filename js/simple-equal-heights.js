// http://codepen.io/Lewitje/pen/YybQEP original copy from Lewi Hussay updated to work with multiple divs
// Equal height - by Burfield www.burfield.co.uk
// 2016-30-03 - Changed - Refactored from jQuery to vanilla JS (@jacobwarduk http://www.jacobward.co.uk)
// Example usage use data-match-height="groupName"> on anything!!!

var matchHeight = {

  matchHeight: function() {

    let groupName = [].slice.call(document.querySelectorAll("[data-match-height]"));
    var groupHeights = {};
    var i = 0;

    for (let item of groupName) {

      var data = item.getAttribute("data-match-height");

      item.style.minHeight = "auto";

      if (groupHeights.hasOwnProperty(data)) {
        Object.defineProperty(groupHeights, groupHeights[data], {
          value: Math.max(groupHeights[data], item.offsetHeight),
          writable: true,
          enumerable: true,
          configurable: true
        });
        console.log("has prop");
      } else {
        groupHeights[data] = item.offsetHeight;
      }

        // console.log( data, item.offsetHeight);

    }

    var groupHeightsAll = groupHeights;


    console.log(groupHeightsAll);




    // for (var index in groupHeightsAll) {
    //   if (!groupHeightsAll.hasOwnProperty(index)) {
    //     continue;
    //   }
    //
    //
    // }


    // console.log(groupHeights);

    // console.log(groupHeights.item_3);


    // groupName.forEach(function(item, key, groupHeights) {
    //
    //   var data = item.getAttribute("data-match-height");
    //
    //   item.style.minHeight = "auto";
    //
    //   for (var i = 0; i < item.attributes.length; i++) {
    //     groupHeights[key] = {
    //       "data": data,
    //       "height": item.offsetHeight
    //     }
    //   }
    //
    //   groupHeightsAll = groupHeights;
    //
    //   return groupHeights[key];
    //
    // });



    // for (var i = 0; i < groupHeightsAll.length; i++) {
    //   // console.log(groupHeightsAll[i].data);
    //   // console.log(groupHeightsAll[i].height);
    //
    //   var minHeight = groupHeightsAll[i].height; // NEED TO GET THE MAX HEIGHT FOR EACH .data IN HERE!!!
    //
    //   // console.log(groupHeightsAll);
    //
    //   if (window.innerWidth > 600) {
    //     var element = document.querySelector('[data-match-height="' + groupHeightsAll[i].data + '"]');
    //     element.style.minHeight = minHeight + "px";
    //   }
    // }


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
