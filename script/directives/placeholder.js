/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-placeholder-directive.

    cc-placeholder-directive is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-placeholder-directive is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-placeholder-directive.  If not, see <http://www.gnu.org/licenses/>.

*/
"use strict";

angular.module('cc.placeholder.directive', []).directive('placehold', function() {
    var _attr, value;

    function focus() {
        if (value === '') {
            angular.element(this).val('');
        }
    };

    function blur() {
        var element = angular.element(this);
        if (element.val() === '') {
            element.val(_attr.placehold);
        }
    };

    return {
        restrict : 'A',
        require : 'ngModel',
        link : function(scope, element, attr, ctrl) {
            _attr = attr;

            scope.$watch(attr.ngModel, function(val) {
                value = val || '';
            });

            element.bind('focus', focus);

            element.bind('blur', blur);

            ctrl.$formatters.unshift(function(val) {
                if (!val) {
                    value = '';
                    blur.apply(element);
                    return attr.placehold;
                }
                return val;
            });
        }
    };
});
