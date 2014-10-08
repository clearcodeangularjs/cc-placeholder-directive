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
'use strict';

describe('placehold directive ', function() {
    var scope, element, model_value;

    beforeEach(module('sandboxApp'));

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
        scope.other_model = 'not your bussiness';
    }));

    describe('when placehold is assigned a String', function() {
        beforeEach(inject(function($compile){
            element = angular.element('<input type="text" ng-model="input_model" placehold="dummy placeholder"/>');
            $compile(element)(scope);
        }));

        afterEach(function() {
            expect(scope.input_model).toBe(model_value);
        });

        describe('when initial model value is not set', function(){
            beforeEach(function() {
                model_value = undefined;
                scope.$digest();
            });

            it('should contain placehold text', function() {
                expect(element.val()).toBe('dummy placeholder');
            });

            describe('after focus event', function() {
                beforeEach(function() {
                    element.triggerHandler('focus');
                });

                it('should contain empty String', function() {
                    expect(element.val()).toBe('');
                });

                describe('after blur event', function() {
                    beforeEach(function() {
                        element.triggerHandler('blur');
                    });

                    it('should contain placehold text', function() {
                        expect(element.val()).toBe('dummy placeholder');
                    });
                });
            });

            describe('after model is set to "chimichanga"', function() {
                beforeEach(function() {
                    scope.input_model = 'chimichanga';
                    model_value = 'chimichanga';
                    scope.$digest();
                });

                it('should contain "chimichanga"', function() {
                    expect(element.val()).toBe('chimichanga');
                });

                describe('after model is set to ""', function() {
                    beforeEach(function() {
                        scope.input_model = '';
                        model_value = '';
                        scope.$digest();
                    });

                    it('should contain "dummy placeholder"', function() {
                        expect(element.val()).toBe('dummy placeholder');
                    });
                });

                describe('after focus event', function() {
                    beforeEach(function() {
                        element.triggerHandler('focus');
                    });

                    it('should contain "chimichanga"', function() {
                        expect(element.val()).toBe('chimichanga');
                    });
                });
            });
        });

        describe('when initial model value is empty String', function(){
            beforeEach(function() {
                scope.input_model = '';
                model_value = '';
                scope.$digest();
            });

            it('should contain placehold text', function() {
                expect(element.val()).toBe('dummy placeholder');
            });

            describe('after focus event', function() {
                beforeEach(function() {
                    element.triggerHandler('focus');
                });

                it('should contain empty String', function() {
                    expect(element.val()).toBe('');
                });

                describe('after blur event', function() {
                    beforeEach(function() {
                        element.triggerHandler('blur');
                    });

                    it('should contain placehold text', function() {
                        expect(element.val()).toBe('dummy placeholder');
                    });
                });
            });
        });

        describe('when initial model value is "user text"', function(){
            beforeEach(function() {
                scope.input_model = 'user text';
                model_value = 'user text';
                scope.$digest();
            });

            it('should contain placehold text', function() {
                expect(element.val()).toBe('user text');
            });

            describe('after focus event', function() {
                beforeEach(function() {
                    element.triggerHandler('focus');
                });

                it('should contain "user text"', function() {
                    expect(element.val()).toBe('user text');
                });

                describe('after blur event', function() {
                    beforeEach(function() {
                        element.triggerHandler('blur');
                    });

                    it('should contain placehold text', function() {
                        expect(element.val()).toBe('user text');
                    });
                });
            });
        });
    });
});
