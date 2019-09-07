$(document).ready(function() {


  $('li').append('<span class="close">X</span>');
  $(document).on('click', 'li', function(){
    $(this).toggleClass('checked')
  });

  $(document).on('click','.close', function(){
    $(this).parent().remove();
  });

  $(document).on('click','.add',  function() {
  var val = $('#input').val();
    if (val === '') {
     alert('Write something please!');
  }
    else {
  $('#ul').append('<li>' + val + '<span class="close">X</span></li>');
  }
});



});


