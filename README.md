Clearcode placeholder directive
=========

Create dynamic angular placeholder for inputs

Installation
--------------
``` bower install clearcodeangularjs/cc-placeholder-directive --save ```


Usage
------

Add ``` cc.placeholder.directive``` module to your app module list :


```
angular
    .module('yourAwesomeApp', [
        cc.placeholder.directive'
    ]);
```
and you are ready to go!

How to use :


```
<input type="text" class="form-control" placehold="Search for products" ng-model="name" style="box-shadow: none;">
```



Author
------

Roman Sek


License
----

LGPL

