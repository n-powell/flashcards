$(document).ready(function(){
  $("div.col-md-4").click(function(){
    $(this).find("h2").toggle();
    $(this).find("p").toggle();
  });

  // $('#flash1').click(function(){
  //   $("#flash1 h2").toggle();
  //   $("#flash1 p").toggle();
  // });
  //
  // $('#flash2').click(function(){
  //   $("#flash2 h2").toggle();
  //   $("#flash2 p").toggle();
  // });
  // $('#flash3').click(function(){
  //   $("#flash3 h2").toggle();
  //   $("#flash3 p").toggle();
  // });
});
