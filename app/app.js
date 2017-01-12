'use strict';

// vendor module imports
import jQuery from 'jquery';
import $ from 'jquery';

window.jQuery = jQuery;
window.$ = $;

import 'foundation-sites'
import 'foundation-sites/scss/foundation.scss';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';

// custom module imports
import {default as AppComponent} from './app.component';
import {default as Components} from './components/components';
import {default as Services} from './services/services';
import {default as Directives} from './directives/directives';
import './styles/main.scss';

let app = angular.module('2508wApp', [ngAnimate, uiRouter, Components.name, Services.name, Directives.name])

app.$inject = ['$locationProvider', '$urlRouterProvider'];

app.config(($locationProvider, $urlRouterProvider) => {
    /* @ngInject */
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/blvd');
  })
  .directive('app', AppComponent);

$(document).foundation();
