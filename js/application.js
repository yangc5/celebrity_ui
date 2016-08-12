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

function makeCard(name, imageUrl){
    var card = '<div class="card four columns"> <div class="five columns"> <div class="image-wrapper"> <img src="'+imageUrl+'" onerror="this.src=\'/img/default.png\'" alt=""> </div> </div> <div class="seven columns"> <div class="name-wrapper"> '+name+' </div> </div> <img class="close" src="img/close.png" alt=""> </div>';
    return card;
}

$(document).ready(function(){
  //populate data
  var name, imageUrl, card;

  data.forEach(function(celeb){
    name = celeb.name;
    imageUrl = celeb.photo_url;
    card = makeCard(name, imageUrl);
    $('.cards').prepend(card);
  });

  //form submission
  $('form').submit(function(event){
    event.preventDefault();
    name = $('input[name="name"]').val();
    imageUrl = $('input[name="photo_url"]').val();
    $('input[name="name"]').val('');
    $('input[name="photo_url"]').val('');
    card = makeCard(name, imageUrl);
    $('.cards').prepend(card);
  });

  //hovering
  $('.cards').on('mouseenter', '.card', function(){
      $(this).find('.close').addClass('hover');
  });
  $('.cards').on('mouseleave', '.card', function(){
      $(this).find('.close').removeClass('hover');
  });

  //remove cards
  $('.cards').on('click', '.close', function(){
    $(this).parent().remove();
  })
});
