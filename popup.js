// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeText = document.getElementById('changeText');
 var input=document.getElementsByTagName("INPUT");
for(var i=0;i<input.length;i++){

changeText.innerHTML=input[i].value;
}
chrome.storage.sync.get('text', function(data) {
  changeText.innerHTML = data.text;
  changeText.setAttribute('value', data.text);
});
changeText.onclick = function(element) {
    let text = element.target.value;
    //alert(text);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'var input=document.getElementsByTagName("input");for(var i=0;i<input.length;i++){if (input[i].value == "Cat"){;input[i].value = "' + text + '";input[i].focus();console.log(input[i].value);}}'});

    });
  };