# Demo

TODO:
- on iOS6, the address bar is jumping after navigating
  -> remove mechanism in angular that does auto scrolling!
  -> explain this in the slides!
- on iOS6, there is flickering when changing pages
  -> put them directly in a render layer!

Devices:
- Android 2.3 Emulator (Still 28% of the market, see http://developer.android.com/about/dashboards/index.html).
- iOS 6/7 Simulator


## ngView animation forward and backwards with css animation

Show app.js: define used css classes
Show nav/navCtrl.js: NavCtrl
Show index.html: ng-view and binding of NavCtrl#forward / NavCtrl#backward

Run the demo on iOS 7


## ngView animation with requestAnimationFrame

Run the demo on Android 2.3: Css animations not working properly.

One solution: requestAnimationFrame:
- timer changes translateX css property of page and by this moves the page

Change css classes in app.js:

    /* requestAnimationFrame animations */
    .constant('navigationCssClasses', {
      forward: 'rafNavForward',
      backward: 'rafNavBackward'
    })

Show nav/rafNavAnimation.js:
- registers for those css classes
- updates translateX property with a timer (requestAnimationFrame polyfill)

Run the demo on Android 2.3: runs smoothly!


## Fastclick via ngTouch / ngClick

Run the demo on Android 2.3: clicks are slow (300ms wait time).

Add the module 'ngTouch' as dependency to app.js (activates the ngTouch module):

Run the demo again: Clicks on links are fast now!


## Fastclick via fastclick.js

Remove the ngTouch module from app.js

Add the following line to app.js (activates fastclick.js):

    .run(function() {
        FastClick.attach(document.body);
     });


## Slide gestures via ngTouch

Add the ngTouch module to app.js again

Goal: Slide to right on a todo on page 1 -> fades the item out.

Show page1.html, page1Ctrl.js and page1.css

Run the demo.


## Carousel with angular-carousel:

Add module dependency 'angular-carousel' to app.js

Navigate to page2 and flip through carousel


## Accelerated scrolling on iOS

Run demo and open page3 on iOS:
- Show normal scrolling in iOS: No acceleration
- Add '-webkit-overflow-scrolling: touch;' to style in first column: Show acceleration

## Fake scrolling on Android 2.3

Run demo and open page3 on Android 2.3:
- No overflow scrolling in the left column
- Show that scrolling in second column is working though

Show app.js: Includes the module 'ajoslin.scrolly'.
Show page3.html: Uses the directive 'scrolly-scroll'.

Run demo page 3 again in Chrome Desktop, open DevTools, enable touch support:
- show how translateX is changed while scrolling

## Infinite Scrolling

Run demo page 3 in Chrome Desktop: Third column uses infinite scrolling.

Show directive 'infinite-scroll.js'
* Attention: needs to be integrated with scrolling mechanism!