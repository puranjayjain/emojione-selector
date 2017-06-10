# \<emojione-selector\> v2

A polymer element that works best as a emoji picker and is powered by the [emojione](https://www.emojione.com/) library

## demo

https://puranjayjain.github.io/emojione-selector/

### Key Features:

- v1.x supports hybrid elements, v2.x supports es6 pure components
- Supports unicode diversity update
- Advanced search with multi keyword search
- Features a real-life demo
- Mobile first approach to a picker
- Independent of any containers like a dialog or menu, user is free to use it in a container of their choosing
- Built with a11y support

### Keyboard shortcuts:

- you can use `ctrl + (0-9)` to move through the various categories
- you can move thought the emoji list using `tab` (forwards) or `shift + tab` (go back)
- you can also use arrow keys to navigate through the emoji list

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing the Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

The application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Live Demo

Example:

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>

    <link rel="import" href="../iron-demo-helpers/demo-pages-shared-styles.html">
    <link rel="import" href="../iron-demo-helpers/demo-snippet.html">

    <link rel="import" href="emojione-selector.html">
  </template>
</custom-element-demo>
```
-->
```html
  <emojione-selector opened="true"></emojione-selector>
```

## TODO 

- Loads of Tests
- v1.x with hybrid support