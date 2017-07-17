var app = angular.module('app', []);

app.config(function ($compileProvider) {
    var debugEnabled = $compileProvider.debugInfoEnabled();
    console.log("debugInfoEnabled=", debugEnabled);
});