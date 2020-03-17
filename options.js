// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
;
const lButtonText = ['Cat', 'Helo', 'heldp'];
const kButtonText = ['Dog', 'Hello', 'help'];
var input=document.getElementsByTagName("input");

function constructOptions(kButtonText) {
  var input=document.getElementsByTagName("input");
   for (let item of kButtonText) {
     let page = document.getElementById('buttonDiv');
    let button = document.createElement('button');
    button.innerHTML = item;

    button.addEventListener('click', function() {
       for (let litem of lButtonText) {
        var input=document.getElementsByTagName("input");
        for(var i=0;i<input.length;i++){
           input[i].focus();
           if(input[i].value===litem){
      chrome.storage.sync.set({text: item}, function() {
        console.log('text is ' + item);
        

        
          
        
      
      })
    }
  }
}
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonText);
