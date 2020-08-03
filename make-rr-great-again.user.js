// ==UserScript==
// @name     Make Riemurasia Great Again
// @include  https://www.riemurasia.net/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @description To remove trolls from Riemurasia.net
// ==/UserScript==

// select all comments based on author href attribute
var comments = $('a[href$="/user/DAI"],[href$="/user/highlander100"]');

// navigate up to parent div, hide comment
comments.parent().parent().parent().hide();
