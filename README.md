# Simple Equal Heights (No jQuery!)
Originally sourced from [Equal height by Lewi Hussey](http://codepen.io/Lewitje/pen/YybQEP) and upgraded to work on multiple divs at once.
A simple plugin that sets responsive equal heights by simply adding attributes directly to the mark up.

A set break point has been added so it will only take effect after 600px and up;

Download and open index.html to view the [demo](https://github.com/BurfieldCreative/equal-heights/archive/master.zip).


## How to Use
Group ANYTHING that needs an equal height by adding the attribute data-match-height=[groupName].
It evens works on nested divs etc. Even works on images (although they get stretched a touch) to view and open index.html from the [demo](https://github.com/BurfieldCreative/equal-heights/archive/master.zip)

```
<div class='class-name'>
    <div data-match-height="groupName1"></div>
    <div data-match-height="groupName1"></div>
    <div data-match-height="groupName1"></div>
</div>
```

## Install
[Download](https://github.com/BurfieldCreative/equal-heights/archive/master.zip) and copy the `simple-equal-heights.js` to a location in your site.

In your web page:
```html
<!-- include Simple Equal Heights -->
<script src="http://path/to/your/copy/of/simple-equal-heights.min.js"></script>
```

## Changelog
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org).

### [Unreleased]
#### Changed
 - Refactored code to ECMAScript6 (ES2015) - by [jacobwarduk](https://github.com/jacobwarduk)

### [0.0.6]() - 2016-03-22
#### Changed
 - *Refactored* code to remove jQuery dependency - by [jacobwarduk](https://github.com/jacobwarduk)
 - *Refactored* code to be object literal notation - by [jacobwarduk](https://github.com/jacobwarduk)
