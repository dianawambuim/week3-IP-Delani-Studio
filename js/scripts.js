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
$(document).ready(function() {
  $("#form2").submit(function(event) {
    event.preventDefault();

    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    if (fname == "" || email == ""){
      alert("enter a name and your email address ");
      
    }else
    {alert("we have received your message. Thank you for reaching out")}

                event.preventDefault();
    });
});
      