# Conditional

## Description:
I wrote this Angular filter to take care of a very specific scenario: Sometimes users want to see which password they have entered, usually to verify where they may have fat-fingered something. I don't think it's the best UI from a security standpoint, but some people feel the need for it.

I believe there is a security measure in HTML(5?) that doesn't allow you to mess with input types by accessing the DOM node's type property, so I created an Angular filter to take care of it instead.

## Dependencies:
* AngularJS 1.0.4

## Notes:
* Angular has changed a lot since this filter was written, so its entirely possible that it doesn't work with newer versions.

## Sample Usage:
```
<input type="{{showPassword | conditional:'text':'password'}}" name="password" placeholder="Password" data-ng-model="password" required>
```