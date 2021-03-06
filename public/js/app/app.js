/**
 * Created with IntelliJ IDEA.
 * User: gbougeard
 * Date: 17/11/12
 * Time: 01:17
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var testus = angular.module('testus', ['ui']);

testus.config(function ($routeProvider) {
    $routeProvider.
        when('/wiz1', {
            controller: 'WizStep1Controller',
            templateUrl: '/fragments/release/wiz_step1.html'
        }).
        when('/wiz2', {
            controller: 'WizStep2Controller',
            templateUrl: '/fragments/release/wiz_step2.html'
        }).
        when('/wiz3', {
            controller: 'WizStep3Controller',
            templateUrl: '/fragments/release/wiz_step3.html'
        }).
        when('/wiz4', {
            controller: 'WizStep4Controller',
            templateUrl: '/fragments/release/wiz_step4.html'
        }).
        //when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
        otherwise({redirectTo: '/wiz1'});
});

testus.value('ui.config', {
    tinymce: {
//       theme: 'simple'
       theme: 'advanced'
//        mode : "textareas",
//        plugins : "autolink,lists,spellchecker,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",

    }
});









