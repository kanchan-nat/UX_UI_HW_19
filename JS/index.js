$("figcaption").hover(function(){
    $(this).css("background-color", "#504720");
    $(this).css("color", "#FED121");
    }, function(){
    $(this).css("background-color", "#FED121");
    $(this).css("color", "#504720");
  });

  $(".ss-column img").hover(function(){
    $(this).addClass('zoom');
    $("figcaption",this).css("background-color", "#504720");
    $("figcaption",this).css("color", "#FED121");
    }, function(){
    $(this).removeClass('zoom');
    $("figcaption",this).css("background-color", "#FED121");
    $("figcaption",this).css("color", "#504720");   
  });

  $(".fs-column img").hover(function(){
    $(this).addClass('zoom');
    $("figcaption",this).css("background-color", "#504720");
    $("figcaption",this).css("color", "#FED121");
    }, function(){
    $(this).removeClass('zoom');
    $("figcaption",this).css("background-color", "#FED121");
    $("figcaption",this).css("color", "#504720");   
  });
  
  $("button").hover(function(){
    $(this).css("background-color", "#504720");
    $(this).css("color", "#FED121");
    }, function(){
    $(this).css("background-color", "#FED121");
    $(this).css("color", "#504720");
  });

  $("#LinkIn").click(function(){
    window.open("https://www.linkedin.com/in/kanchan-nathan-6a94982a/")
  });

  $("#Insta").click(function(){
    window.open("https://www.instagram.com/kanchanathan/")
  });

  $("#Tweet").click(function(){
    window.open("https://twitter.com/")
  });





  

  

  

 


  