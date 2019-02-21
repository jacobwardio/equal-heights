[# JS Equal Heights Plugin (No jQuery deps)

A simple plugin that sets responsive equal heights to block level elements by simply adding attributes directly to the mark up.

Fork from (Jacob Ward's Repository)[https://github.com/jacobwarduk/equal-heights].

Upgraded to work on multiple divs at once by [stevesnow100](https://github.com/stevesnow100).

Refactored to vanilla JavaScript and remove jQuery dependency by [jacobwarduk](https://github.com/jacobwarduk).

## How to Use

Group ANYTHING that needs an equal height by adding the attribute data-match-height=[groupName].
It evens works on nested divs etc. Even works on images (although they get stretched a touch).

```html
<div>
  <div data-match-height="groupName1"></div>
  <div data-match-height="groupName1"></div>
  <div data-match-height="groupName1"></div>
</div>
```

## Install

Copy the `simple-equal-heights.js` from the `src` directory to your scripts directory for your site.

In your web page:

```html
<!-- include Simple Equal Heights -->
<script src="http://path/to/your/copy/of/simple-equal-heights.js"></script>
```

## Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org).

### [0.1.1]() - 2016-06-24

#### Changed

- Window resize event hooked into, instead of overwritten - by [jacobwarduk](https://github.com/jacobwarduk)
-

### [0.1.0]() - 2016-04-20

#### Changed

- _Refactored_ code to remove jQuery dependency - by [jacobwarduk](https://github.com/jacobwarduk)
- _Refactored_ code to be object literal notation - by [jacobwarduk](https://github.com/jacobwarduk)
  ](# JS Equal Heights Plugin (No jQuery deps)

A simple plugin that sets responsive equal heights to block level elements by simply adding attributes directly to the mark up.

View the demo on [CodePen](http://codepen.io/jacobwarduk/pen/pbEZav).

Original plugin sourced from [Equal height by Lewi Hussey](http://codepen.io/Lewitje/pen/YybQEP).

Upgraded to work on multiple divs at once by [stevesnow100](https://github.com/stevesnow100).

Refactored to vanilla JavaScript and remove jQuery dependency by [jacobwarduk](https://github.com/jacobwarduk).

## How to Use

Group ANYTHING that needs an equal height by adding the attribute data-match-height=[groupName].
It evens works on nested divs etc. Even works on images (although they get stretched a touch).

```html
<div>
  <div data-match-height="groupName1"></div>
  <div data-match-height="groupName1"></div>
  <div data-match-height="groupName1"></div>
</div>
```

## Install

Copy the `simple-equal-heights.js` from the `src` directory to your scripts directory for your site.

In your web page:

```html
<!-- include Simple Equal Heights -->
<script src="http://path/to/your/copy/of/simple-equal-heights.js"></script>
```

## To do

-

## Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org).

### [0.1.1]() - 2016-06-24

#### Changed

- Window resize event hooked into, instead of overwritten - by [jacobwarduk](https://github.com/jacobwarduk)
-

### [0.1.0]() - 2016-04-20

#### Changed

- _Refactored_ code to remove jQuery dependency - by [jacobwarduk](https://github.com/jacobwarduk)
- _Refactored_ code to be object literal notation - by [jacobwarduk](https://github.com/jacobwarduk))
