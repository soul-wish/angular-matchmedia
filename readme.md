# Angular matchMedia Service

This service is a set of bindings and helper functions for the browser matchMedia api. It allows you to check any media query right in your AngularJS application. It has one core method `check` and few helper shortcuts (see examples below). Also, you can configure service `rules` on *config* stage of your AngularJS app.

## Install via `npm`

```
$ npm install --save-dev angular-matchmedia
```

or you can download archive on [`Releases`](https://github.com/soul-wish/angular-matchmedia/releases) page.

After that just include `dist/angular-matchmedia.js` file in your application (between main AngularJS library and your app js file).

## Methods

### Core method

#### check(mediaQueryString)
Method allows you to check any media query right in your controller or service. You should pass just one parameter: any media query. Methods returns `true` or `false` depending on media query result.
```js
app.controller('MainCtrl', function($scope, matchMedia) {
    $scope.isThisIphone6 = matchMedia.check('only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)');
});
```

### Helpers

#### isPhone
Method allows you to check if your application is viewed on mobile device (according to the following default media query rule: `(max-width: 767px)`).
```js
app.controller('MainCtrl', function($scope, matchMedia) {
    $scope.isThisIphone6 = matchMedia.check('only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)');
});
```

#### isTablet
Method allows you to check if your application is viewed on tablet (according to the following default media query rule: `(min-width: 768px) and (max-width: 1024px)`).
```js
app.controller('MainCtrl', function($scope, matchMedia) {
    $scope.isThisIphone6 = matchMedia.check('only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)');
});
```

#### isDesktop
Method allows you to check if your application is viewed on desktop (according to the following default media query rule: `(min-width: 1025px)`).
```js
app.controller('MainCtrl', function($scope, matchMedia) {
    $scope.isThisIphone6 = matchMedia.check('only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)');
});
```

#### isPortrait
Method allows you to check if your application is viewed on device with portrait orientation (according to the following default media query rule: `(orientation: portrait)`).
```js
app.controller('MainCtrl', function($scope, matchMedia) {
    $scope.isThisIphone6 = matchMedia.check('only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)');
});
```

#### isLandscape
Method allows you to check if your application is viewed on device with landscape orientation (according to the following default media query rule: `(orientation: landscape)`).
```js
app.controller('MainCtrl', function($scope, matchMedia) {
    $scope.isThisIphone6 = matchMedia.check('only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)');
});
```

#### isRetina
Method allows you to check if your application is viewed on retina device (according to the following default media query rule: `(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`).
```js
app.controller('MainCtrl', function($scope, matchMedia) {
    $scope.isThisIphone6 = matchMedia.check('only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)');
});
```

## DEMO
You can check live demo of this service on [Plunker](http://plnkr.co/edit/a4259HHRiiwbDpKDpFct?p=preview).


## Usage example

```js
// add dependency to your application
var app = angular.module('application', ['angular-matchmedia']);

// you can change default `rules` of the service (set your own breakpoints) in your app config
app.config(["matchMediaProvider", function(matchMediaProvider) {
    matchMediaProvider.rules.phone = '(max-width: 767px)';
    matchMediaProvider.rules.tablet = '(min-width: 768px) and (max-width: 988px)';
}]);

// inject service into your controller and you are ready to go
app.controller('MainCtrl', function($scope, matchMedia) {
    $scope.isTablet = matchMedia.isTablet();
    $scope.isRetina = matchMedia.isRetina();
});
```

### Default rules (helper breakpoints)
```js
rules = {
    phone: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    desktop: '(min-width: 1025px)',
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)',
    retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
}
```

## TODO
- add additional helpers
- ability to register custom helpers (not sure if it is needed)
- ability to override existing helper methods

## License

MIT © [Sergey Lysenko](http://soulwish.info)
