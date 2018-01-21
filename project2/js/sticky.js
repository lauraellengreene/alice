// JS FOR VERTICAL COUNTER
$(window).scroll(function() {
    $("div#vert_counter").text("px: " + $(window).scrollTop());

});


//JS FOR ALICE ////////
///////////////////////
$(window).scroll(function() {


if ($(this).scrollTop() > 400) {

  $("#alice").css({
    "position": "fixed",
    "top": "20",
    "opacity": "1",
    "background-color":"yellow",
    "left": "50%"

  });

    } else {
    $("#alice").css({
    "position": "absolute",
    "top": "200px" ,
    "opacity": "0",
    "background-color":"magenta",
    "padding":"5px",
    "left":"-40%"

});
}
////////////////////////////////////
///////////////////////////////////
  if ($(this).scrollTop() > 100)
    {
  $("div#hrz_mover").css({
    "left": ($(window).scrollTop()*0.5) + "px",
    "height": ($(window).scrollTop()*0.2) + "px",
    "animation-play-state": "paused"

  });
    } else {
    $("div#hrz_mover").css({
      "animation-play-state": "running"

    });
    }


///////////////////////////




///////////////////////////////////////
////Horizontal Counter ////


$("div#hrz_counter").css({
    "left": $(window).scrollTop() + "px"}).text("px:"+$(window).scrollTop());
});


$(window).scroll(function() {
  $("div#hrz_counter").css({
      "left": $(window).scrollTop() + "px"
  }).text("px:"+$(window).scrollTop());
});

/////////////Right to Left//////////////


$(window).scroll(function() {
  $("div#rtol").css({
      "right": ($(window).scrollTop()*0.5) + "px",
      "top":($(window).scrollTop()*0.25) + "px"
  }).text("px:"+$(window).scrollTop());
});





////JS for Sticky Div/////
$(window).scroll(function() {

if ($(this).scrollTop() > 600) {

  $("#sticky").css({
    "position": "fixed",
    "top": "0",
    "opacity": "1",
    "color":"lime"

  });

}

  else {
$("#sticky").css({
  "position": "absolute",
  "top": "600px" ,
  "opacity": "0",
  "background-color":"black",
  "padding":"5px",
  "color":"grey"
});
  }
});

$(window).scroll(function() {
  $("div#vert_counter").text("px:" +$(window).scrollTop());
});

$(window).scroll(function() {
  $("div.vert_parallax").css({
      "top": ($(window).scrollTop()*0.5) + "px"
  }).text("Slow:"+ $(window).scrollTop());
});
/*
$(window).scroll(function() {
  $("#parallax_wrap div:nth-child(3)").css({
      "top": ($(window).scrollTop()*2) + "px"
  }).text("Fast:"+ $(window).scrollTop());

});

  $(window).scroll(function() {
    $("#parallax_wrap div:nth-child(2)").css({
        "top": ($(window).scrollTop()*0.5) + "px"
    }).text("Slow:"+ $(window).scrollTop());
});
*/


$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
      $("p").addClass("test");
    } else {
      $("p").removeClass("test");
    }
  });
});
