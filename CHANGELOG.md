# v1.0.0 (T.B.A)

* changed the recent emoji logic to only include an array with `:shortname:`

* added emoji-changed event along with emoji value for event-based applications 

# v2.0.0

* only supports pure v2.0 elements

* change the title to the version string

* adds breaking changes like emojione version to v3

* removes fuse js external dependency instead adds the script since fuse js is no longer on bower :sobs:

* dropped lodash dependency

* converted to es6 component, polyfills maybe required to support older browsers and adapter for es5 converted components see 
  [https://www.polymer-project.org/2.0/docs/es6](https://www.polymer-project.org/2.0/docs/es6)

* performance improvement using event delegation in emoji list tap even

* dropped `<iron-list>` in favor of `<dom-repeat>`

* changed the recent emoji logic to only include an array with `code_points.base` also the `primary key` in **emoji.json** 

* added emoji-changed event along with emoji value for event-based applications 

* added arrow key navigation in emoji list

* dropped `<paper-autocomplete-input-chips>` in favor of `<paper-chip>`