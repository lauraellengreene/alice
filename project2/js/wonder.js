/*$(window).scroll(function() {
    $("div#vert_counter").text("px: " + $(window).scrollTop());

});*/
 ////////ALICE//////////////




///////RABBIT////////////////

$(window).scroll(function() {

if ($(this).scrollTop() > 800) {

  $("#rabbit").css({
    "position": "fixed",
    "top": "300",
    "opacity": "1",

    });
  }

  else {
  $("#rabbit").css({
  "position": "absolute",
  "opacity": "0"
  });
  }

});


////////////Catepiller //////


$(window).scroll(function() {

  $("div#rtol").css({
      "right": ($(window).scrollTop()*0.5),
      "top":($(window).scrollTop()*0.25)
  });


});



  //////////MAD HATT///////

  $(window).scroll(function() {

  if ($(this).scrollTop() > 2000) {

    $("#cat").css({
      "position": "fixed",
      "top": "2050",
      "opacity": "1",

      });
    }

    else {
    $("#cat").css({
    "position": "absolute",
    "opacity": "0"
    });
    }

  });

  var cuckooSound = new buzz.sound( 'sounds/cuckoo', { formats: ['wav'] } );

    var tickSound = new buzz.sound( 'sounds/tick', { formats: ['wav'] } );

$(function() {

  $('#koo').mouseenter( function() {
    cuckooSound.play();
  });

  $('#koo').mouseleave( function() {
    cuckooSound.stop();
  });

  $('#tick').mouseenter( function() {
    tickSound.play();
  });

  $('#tick').mouseleave( function() {
    tickSound.stop();
  });

});




  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
