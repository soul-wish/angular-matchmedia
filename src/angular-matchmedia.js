(function() {
    'use strict';

    angular.module('angular-matchmedia', [])
        .provider('matchMedia', [function() {
            var matchMedia = {},
                self = this,
                window;

            self.rules = {
                phone: '(max-width: 767px)',
                tablet: '(min-width: 768px) and (max-width: 1024px)',
                desktop: '(min-width: 1025px)',
                portrait: '(orientation: portrait)',
                landscape: '(orientation: landscape)',
                retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
            };

            matchMedia.check = function(mq) {
                if (!mq) {
                    return;
                }

                return window.matchMedia(mq).matches;
            };

            matchMedia.isPhone = function() {
                return window.matchMedia(self.rules.phone).matches;
            };

            matchMedia.isTablet = function() {
                return window.matchMedia(self.rules.tablet).matches;
            };

            matchMedia.isDesktop = function() {
                return window.matchMedia(self.rules.desktop).matches;
            };

            matchMedia.isPortrait = function() {
                return window.matchMedia(self.rules.portrait).matches;
            };

            matchMedia.isLandscape = function() {
                return window.matchMedia(self.rules.landscape).matches;
            };

            matchMedia.isRetina = function() {
                return window.matchMedia(self.rules.retina).matches;
            };

            this.$get = ['$window', function($window) {
                window = $window;
                return matchMedia;
            }];
        }]);
})();
