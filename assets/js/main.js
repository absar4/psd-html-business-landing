let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("myactive", "dot")
    //   dots[i].className.replace("myactive", "dot")
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className = "dot myactive";
}


function myloader() {
  $('.loading').fadeOut("slow");
}

// jQuery starts.....
$('document').ready(function () {
  new WOW().init();
  $('.waypoint-animation-SlideIn').waypoint(function (direction) {
    $('.waypoint-animation-SlideIn').addClass('animated backInDown')
  }, {
    offset: '60%',
  });

  $(window).load(function() {
   $('.preloader').fadeOut('slow');
  });
  
  $(document).scroll(function () {
    var $nav = $(".pos-fix");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $(".McButton").toggleClass('myhamtop', $(this).scrollTop() > $nav.height());
    $('.logo').toggleClass('ml24', $(this).scrollTop() > $nav.height());

  });


  $(".nav-link").click(function () {
    // If the clicked element has the nav-active class, remove the nav-active class from EVERY .nav-link>.state element
    if ($(this).hasClass("nav-active")) {
      $(".nav-link").removeClass("nav-active");
    }
    // Else, the element doesn't have the nav-active class, so we remove it from every element before applying it to the element that was clicked
    else {
      $(".nav-link").removeClass("nav-active");
      $(this).addClass("nav-active");
    }
  });

  $(window).on('scroll load', function () {

    $('section').each(function () {

      let top = $(window).scrollTop();
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');

      if (top >= offset && top < offset + height) {
        $('.myulnav li a').removeClass('nav-active');
        $('.myulnav').find(`[href="#${id}"]`).addClass('nav-active');
        if (id == 'excaptional-customer-service') {
          // console.log('SERVICES SEC');
          $('.myservices').addClass('nav-active');
          
        }
        if (id == 'counters') {
          $('.myportfolio').addClass('nav-active');
        }
      }
      // console.log();

    });

  })

  if ($('.McButton').click()) {
    console.log($('.McButton').click());
  }






  // Filter Functionality
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };
  // bind filter button click
  $('.filters-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
      filter: filterValue
    });
  });
  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  // End Filter Functionality



  // Counters Functionality
  var a = 0;
  $(window).scroll(function () {
    var oTop = $(".counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-number");
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {
            duration: 850,
            easing: "swing",
            step: function () {
              //$this.text(Math.ceil(this.countNum));
              $this.text(
                Math.ceil(this.countNum).toLocaleString("en") + "+"
              );
            },
            complete: function () {
              $this.text(
                Math.ceil(this.countNum).toLocaleString("en") + "+"
              );
              //alert('finished');
            }
          }
        );
      });
      a = 1;
    }
  });

  // Text area
  $('.textareacolor').on('click', () => {
    $('.textareacolor').removeClass('textareacolor');
  });


  // nav hamburger
  var McButton = $(".McButton");
  var McBar1 = McButton.find("b:nth-child(1)");
  var McBar2 = McButton.find("b:nth-child(2)");
  var McBar3 = McButton.find("b:nth-child(3)");




  McButton.on('click', function () {
    $(this).toggleClass("active");
    $('.myulnav').toggleClass('my-nav-toggle');

    if (McButton.hasClass("active")) {
      McBar1.velocity({
        top: "50%"
      }, {
        duration: 200,
        easing: "swing"
      });
      McBar3.velocity({
          top: "50%"
        }, {
          duration: 200,
          easing: "swing"
        })
        .velocity({
          rotateZ: "90deg"
        }, {
          duration: 800,
          delay: 200,
          easing: [500, 20]
        });
      McButton.velocity({
        rotateZ: "135deg"
      }, {
        duration: 800,
        delay: 200,
        easing: [500, 20]
      });
    } else {
      McButton.velocity("reverse");
      McBar3.velocity({
          rotateZ: "0deg"
        }, {
          duration: 800,
          easing: [500, 20]
        })
        .velocity({
          top: "100%"
        }, {
          duration: 200,
          easing: "swing"
        });
      McBar1.velocity("reverse", {
        delay: 800
      });
    }
  });
  // !nav hamburger


});
