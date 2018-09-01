# flexgrid
A lightweight responsive grid.

## Make it your own

You can overwrite any of the following variables and create your own grid.

```sass
$flexgrid-breakpoint-tablet: 600px;
$flexgrid-breakpoint-laptop: 992px;
$flexgrid-breakpoint-desktop: 1200px;

$flexgrid-nbcols: 24;
$flexgrid-gutter: 16px;

@import 'flexgrid/src/assets/sass/index';
```

## Using the grid :

In the following example we have a 24 column grid, hence by specifying the class `col__12` the columns are each distributed 50% of the available width (they each take the space of 12 columns).

**Example 1 : basics**
```html
<div class="flexgrid flexgrid_gutter">
  <div class="col col__12"></div>
  <div class="col col__12"></div>
</div>
 ```
  
 > Note that the `flexgrid_gutter` class is required to enable grid gutters.

**Example 2 : adding some responsive behaviour**

```html
<div class="flexgrid flexgrid_gutter">
  <div class="col col__12_t col__8_l">1</div>
  <div class="col col__12_t col__8_l">2</div>
  <div class="col col__12_t col__8_l">3</div>
  <div class="col col__12_t col__8_l">4</div>
</div>
 ```

## Available breakpoint mixins

You can use the following breakpoint mixins :

- mobile-only
- mobile-landscape-only
- mobile-portrait-only
- tablet-only
- tablet-landscape-only
- tablet-portrait-only
- laptop-only
- desktop-only

**Example :**
```sass
@include tablet-only {
  // Style only applied to tablets
}
```

- breakpoint-mobile
- breakpoint-mobile-landscape
- breakpoint-mobile-portrait
- breakpoint-tablet
- breakpoint-tablet-landscape
- breakpoint-tablet-portrait
- breakpoint-laptop
- breakpoint-desktop

**Example :**
```sass
@include breakpoint-tablet {
  // Style only applied to devices with a width >= to the tablet breakpoint
}
```
