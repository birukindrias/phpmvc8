(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  setTimeout(() => {
    if(!sessionStorage.getItem('cookiesAlertDisplayed')) {
      $('#cookiesAlert').modal('toggle');
    }

    if(sessionStorage.getItem('cookiesAlertDisplayed')) {
      $('#cookiesAlert').modal('hide');
      $('#cookiesAlert').hide();
    }
  },1000);

  $('#cookiesAlert').on('show.bs.modal', function(e) {
    if(!sessionStorage.getItem('cookiesAlertDisplayed')){
      sessionStorage.setItem('cookiesAlertDisplayed', 'true');
      // $("#cookiesAlert").removeClass("show");
      // $("#cookiesAlert").css({display:'none'});
      $('#cookiesAlert').modal('hide');
      $('#cookiesAlert').hide();
    }
  });

  // $(".cookiesAlertDismiss").on("click", function(){
  //   alert(sessionStorage.getItem('cookiesAlertDisplayed'));
  //   if(!sessionStorage.getItem('cookiesAlertDisplayed')){
  //     sessionStorage.setItem('cookiesAlertDisplayed', 'true');
  //     // $("#cookiesAlert").removeClass("show");
  //     // $("#cookiesAlert").css({display:'none'});
  //     $('#cookiesAlert').modal('toggle');
  //   }
  // });

  // Back to top button
  $(window).on('scroll',function() {
    if ($(this).scrollTop() > 10) {
      $('.back-to-top').fadeIn('slow');
      $('.relatedTopicsModal').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('.relatedTopicsModal').fadeOut('slow');
    }
  });
  $('.back-to-top').on('click',function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Header scroll class
  $(window).on('scroll',function() {
    let urlArray = window.location.href.split('/');
    if ($(this).scrollTop() > 10) {
      $('#header').addClass('header-scrolled');
      $("div#siteSearchBox").css('margin-top','0px');
    } else {
      $('#header').removeClass('header-scrolled');
      if(urlArray[urlArray.length-1] === 'topics'){
        $("nav.main-nav ul").show(100);
      }

      $("div#siteSearchBox").css('margin-top','58px');
    }
  });

  function disableScrolling(){
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  function enableScrolling(){
    window.onscroll=function(){};
  }


  // Displaying Search.

  $("#searchTriggerMainNavigation").on("click",function(e){

    e.preventDefault();

    jQuery('input').keypress(function(event){
      let enterOkClass =  jQuery(this).attr('class');
      if (event.which == 13 && enterOkClass != 'enterSubmit') {
        event.preventDefault();
        return false;
      }
    });

    $(".row.searchWrapper").fadeIn(500);
    $("#siteSearchField").focus();
  });

  if ($(window).scrollTop() > 10) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      if (target.length) {
        let top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  let nav_sections = $('section');
  let main_nav = $('.main-nav, .mobile-nav');
  let main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    let cur_pos = $(this).scrollTop();

    nav_sections.each(function() {
      let top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li')
            .addClass('active');
      }
    });
  });


})(jQuery);
