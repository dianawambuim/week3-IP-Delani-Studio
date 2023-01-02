// $(document).ready(function () {

//  $("#design").click(function () {
// if ($('#designp').hasClass('d-none')) {
// $('#designp').removeClass('d-none');
//  } else {
//     $('#designp').addClass('d-none');
//  }
//  });

//  });


$(document).ready(function(){
  $(".designp").hide();
  $(".developmentp").hide();
  $(".productp").hide();
});
$("#design").click(function(){
  $(".designp").show();
  $("#design").hide();
});
$("#development").click(function(){
  $(".developmentp").show();
  $("#development").hide();
});
$("#product").click(function(){
  $(".productp").show();
  $("#product").hide();
});
$(".productp").click(function(){
  $(".productp").hide();
  $("#product").show();
});
$(".developmentp").click(function(){
  $(".developmentp").hide();
  $("#development").show();
});
$(".designp").click(function(){
  $(".designp").hide();
  $("#design").show();
});