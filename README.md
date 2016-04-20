# [WIP] Simple Equal Heights (No jQuery!)

A simple plugin that sets responsive equal heights to block level elements by simply adding attributes directly to the mark up.

View the demo on [CodePen]().

Original plugin sourced from [Equal height by Lewi Hussey](http://codepen.io/Lewitje/pen/YybQEP).

Upgraded to work on multiple divs at once by [stevesnow100](https://github.com/stevesnow100).

Refactored to vanilla JavaScript and remove jQuery dependency by [jacobwarduk](https://github.com/jacobwarduk).


## How to Use
Group ANYTHING that needs an equal height by adding the attribute data-match-height=[groupName].
It evens works on nested divs etc. Even works on images (although they get stretched a touch).

```html
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

## To do
 -

## Changelog
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org).

### [Unreleased]
#### Changed
 - *Refactored* code to ECMAScript6 (ES2015) - by [jacobwarduk](https://github.com/jacobwarduk)

### [0.1.0]() - 2016-03-22
#### Changed
 - *Refactored* code to remove jQuery dependency - by [jacobwarduk](https://github.com/jacobwarduk)
 - *Refactored* code to be object literal notation - by [jacobwarduk](https://github.com/jacobwarduk)
