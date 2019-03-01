// http://codepen.io/Lewitje/pen/YybQEP original copy from Lewi Hussay updated to work with multiple divs
// Equal height - by Burfield www.burfield.co.uk
// 2016-30-03 - Changed - Refactored from jQuery to vanilla JS (@jacobwarduk http://www.jacobward.co.uk)
// Example usage use data-match-height="groupName" on anything!!!

(function() {
  var matchHeight = {
    match: function() {
      var groupName = Array.prototype.slice.call(
          document.querySelectorAll('[data-match-height]')
        ),
        groupHeights = {};

      for (var item of groupName) {
        var data = item.getAttribute('data-match-height');
        item.style.minHeight = 'auto';

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
        var elementsToChange = document.querySelectorAll(
            "[data-match-height='" + value + "']"
          ),
          elementsLength = elementsToChange.length;

        for (var i = 0; i < elementsLength; i++) {
          elementsToChange[i].style.height =
            Object.getOwnPropertyDescriptor(groupHeightsMax, value).value +
            'px';
        }
      });
    },
    init: function() {
      this.match();
    }
  };

  // Initialising on DOM load
  (document.readyState === 'complete' && matchHeight.init()) ||
    document.addEventListener('DOMContentLoaded', matchHeight.init);

  return matchHeight;
})();
