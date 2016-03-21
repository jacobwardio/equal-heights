# Simple Equal Heights

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
[Download](https://github.com/BurfieldCreative/equal-heights/archive/master.zip) and copy the <code>simple-equal-heights.js</code> to a location in your site.

In your web page:
```html
<!-- include jQuery first -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>

<!-- include Simple Equal Heights -->
<script src="http://path/to/your/copy/of/simple-equal-heights.min.js"></script>
```

## Bower
To install simple-equal-heights via Bower:
```
bower install simple-equal-heights
```
