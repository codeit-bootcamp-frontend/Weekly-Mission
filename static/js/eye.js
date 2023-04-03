window.onload = $(document).ready(function(){
  $('.password-input i').on('click',function(){
      $('input').toggleClass('active');
      if($('input').hasClass('active')){
          $(this).attr('class',"fa fa-eye-slash fa-lg")
          .prev('input').attr('type',"text");
      }else{
          $(this).attr('class',"fa fa-eye fa-lg")
          .prev('input').attr('type','password');
      }
  });
});
