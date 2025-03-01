// ==UserScript==
// @name         CSDN-no-login-script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A script tool that allows you to copy and paste csdn code without logging in
// @author       Awan
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        none
// ==/UserScript==

function csdn (){

    let codes = document.querySelectorAll("code");
    codes.forEach(c => {
        c.contentEditable = "true";
    });
    }
    setTimeout(csdn,10);