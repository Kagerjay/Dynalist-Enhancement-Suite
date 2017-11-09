// ==UserScript==
// @name         Toggle Image Sizes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  shows how to use babel compiler
// @author       You
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/keyboardjs/2.3.3/keyboard.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @match        https://dynalist.io/d/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[


/* jshint ignore:end */
    /* jshint esnext: false */
    /* jshint esversion: 6 */

    // Your code here...
    alert("I am an alert box!");
    console.log("This script loaded in");
    $("img").css("border", "3px solid red");
    $('.node-inline-code').css("font-size", "20px");

    // ▲ My First tamperscript file ES6 version

/* jshint ignore:start */
]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);
/* jshint ignore:end */
