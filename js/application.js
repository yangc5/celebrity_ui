// Here's the initial data. Again: don't worry about persistence :)
'use strict';

var data = [
  { name: "Mark-Paul Gosselaar", photo_url: "" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
];

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    var name = $('input[name="name"]').val();
    var imageUrl = $('input[name="photo_url"]').val();

    var card = '<div class="card four columns"> <div class="five columns"> <div class="image-wrapper"> <img src="'+imageUrl+'" onerror="this.src=\'/img/default.png\'" alt=""> </div> </div> <div class="seven columns"> <div class="name-wrapper"> '+name+' </div> </div> <img class="close" src="img/close.png" alt=""> </div>';

    $('.cards').append(card);
  })
});
