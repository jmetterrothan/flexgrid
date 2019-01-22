# flexgrid
A lightweight responsive grid. Live demo [here](https://goo.gl/tF2XUo)!

## Usage

```
npm install jmetterrothan-flexgrid
```

You can overwrite any of the following variables and create your own grid.
By default there is no prefix added, but you can create mutiple grids.

```sass
$flexgrid-breakpoint-tablet: 600px;
$flexgrid-breakpoint-laptop: 992px;
$flexgrid-breakpoint-desktop: 1200px;

$flexgrid-prefix: '';
$flexgrid-suffix: '';
$flexgrid-nbcols: 24;
$flexgrid-gutter: 16px;

@import '~jmetterrothan-flexgrid/src/assets/sass/grid';
```

## Using the grid :

In the following example we have a 24 column grid, hence by specifying the class `flexcol--12` the columns are each distributed 50% of the available width (they each take the space of 12 columns).

**Example 1 : basics**
```html
<div class="flexrow">
  <div class="flexcol flexcol--12"></div>
  <div class="flexcol flexcol--12"></div>
</div>
 ```
  
 > Note that the `flexrow--nogutter` class can be used on the grid to disable gutters.

**Example 2 : adding some responsive behaviour**

```html
<div class="flexrow">
  <div class="flexcol flexcol--12-t flexcol--8-l">1</div>
  <div class="flexcol flexcol--12-t flexcol--8-l">2</div>
  <div class="flexcol flexcol--12-t flexcol--8-l">3</div>
  <div class="flexcol flexcol--12-t flexcol--8-l">4</div>
  ...
</div>
 ```

> col_{NB_OF_COLUMNS}-{BREAKPOINT}

**Example 3 : nested grids**

```html
<div class="flexrow">
  <div class="flexcol flexcol--12">
    <div class="flexrow">
      <div class="flexcol flexcol--8"></div>
      <div class="flexcol flexcol--8"></div>
      <div class="flexcol flexcol--8"></div>
    </div>
  </div>
  <div class="flexcol flexcol--12">
    ...
  </div>
</div>
 ```
 > Gutters are respected even in deep nested grids

## Available breakpoint mixins and associated suffix

You can use the following breakpoint mixins :

- mobile-only `m-o`
- mobile-landscape-only `mt-o`
- mobile-portrait-only `mp-o`
- tablet-only `t-o`
- tablet-landscape-only `tl-o`
- tablet-portrait-only `tp-o`
- laptop-only `l-o`
- desktop-only `d-o`

**Example :**
```sass
@include tablet-only {
  // Style only applied to tablets
}
```

- breakpoint-mobile `m`
- breakpoint-mobile-landscape `ml`
- breakpoint-mobile-portrait `mp`
- breakpoint-tablet `t`
- breakpoint-tablet-landscape `tl`
- breakpoint-tablet-portrait `tp`
- breakpoint-laptop `l`
- breakpoint-desktop `d`

**Example :**
```sass
@include breakpoint-tablet {
  // Style only applied to devices with a width >= to the tablet breakpoint
}
```
