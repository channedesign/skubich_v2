$(document).on('turbolinks:load', function() {



  //==================================================//
  // Animations                                       //
  //==================================================//

  // Setting ScrollMagic Controller
  var animController = new ScrollMagic.Controller();
  // SmoothScroll Navbar Animation Scene
  (function() {
    animController.scrollTo(function (newpos) {
        TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
    });
    $(document).on("click", ".nav-link", function (e) {
      var id = $(this)[0].hash;
      if ($(id).length > 0) {
          e.preventDefault();
          // trigger scroll
          animController.scrollTo(id);
          // if supported by the browser we can even update the URL.
          if (window.history && window.history.pushState) {
              history.pushState("", document.title, id);
          }
      }
    });
  })();
  // Simple Background Parallax Scene
  (function() {
    // var parallaxBG1 = $(".parallax-bg-1");
    // var parallaxBG2 = $(".parallax-bg-2");
    var parallaxBGs = $.find(".parallax-bg");
    var $tm = TweenMax;
    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent && !navigator.userAgent.match('CriOS');
    // if(!isSafari) {


      parallaxBGs.forEach(function(bgs, index) {
        var num = index + 1;
        $(bgs).addClass("parallax-bg-" + num)
        var anchor = $(bgs).parent().addClass("parallax-bg-anchor" + num)
        console.log($(bgs).parent())
        var parallax = $tm.to($(".parallax-bg-" + num), 1, { y: '50%', ease: Power2.easeOut });
        var slideParallaxScene = new ScrollMagic.Scene({ triggerElement: ".parallax-bg-anchor" + num, duration: "100%", triggerHook: 0.2 })
                  .setTween(parallax)
                  .addTo(animController);
      });

      // var parallax1 = $tm.to(parallaxBG1, 1, { y: '50%', ease: Power1.easeOut });
      // var parallax2 = $tm.from(parallaxBG2, 1, { y: '-40%', ease: Power1.easeInOut });
      // var parallax2Out = $tm.to(parallaxBG2, 1, { y: '30%', ease: Power1.easeOut });

      // var slideParallax1Scene = new ScrollMagic.Scene({ triggerElement: '.intro', duration: "100%", triggerHook: 0 })
                // .setTween(parallax1)
                // .addTo(animController);

      // var slideParallax2Scene = new ScrollMagic.Scene({ triggerElement: '.parallax-2', duration: "100%", triggerHook: 1 })
      //           .setTween(parallax2)
      //           .addTo(animController);
      //
      // var slideParallax3Scene = new ScrollMagic.Scene({ triggerElement: '.parallax-2', duration: "100%", triggerHook: 0 })
      //           .setTween(parallax2Out)
      //           .addTo(animController);
    // }
  })();
  // MouseWheel SmoothScroll
  // (function(){
  //
	// 			var $window = $(window);
	// 			var isTweening = false;
  //
	// 			document.onmousewheel = function(){ customScroll(); }
	// 			if(document.addEventListener){
	// 			    document.addEventListener('DOMMouseScroll', customScroll, false);
	// 			}
  //
	// 			function customScroll(event){
  //
	// 			   var delta = 0;
  //
	// 			   if (!event){
	// 				   event = window.event;
	// 			   }
  //
	// 			   if (event.wheelDelta) {
	// 				   delta = event.wheelDelta/120;
	// 			   } else if(event.detail) {
	// 				   delta = -event.detail/3;
	// 			   }
  //
	// 			   if (delta){
  //
	// 			   		//console.log(isTweening);
  //
	// 			   		//if(!isTweening){
  //
	// 				   		//isTweening = true;
  //
	// 					   	var scrollTop = $window.scrollTop();
	// 					   	var finScroll = scrollTop - parseInt(delta*100) * 3;
  //
	// 					   	//console.log(finScroll);
  //
	// 					   	TweenMax.to($window, 0.7, {
	// 						   	scrollTo : { y: finScroll, autoKill:true },
	// 						   	ease: Power4.easeOut,
	// 						   	autoKill: true,
	// 						   	overwrite: 5,
	// 						   	onComplete: function(){
	// 						   		//console.log(isTweening);
	// 						   		//isTweening = false;
	// 						   	}
	// 						});
  //
	// 				   //}
	// 			   }
  //
	// 			   if (event.preventDefault){
	// 				   event.preventDefault();
	// 			   }
  //
	// 			   event.returnValue = false;
  //
	// 			}
  //
	// 		});
  // Hover over effect collections
  (function() {
    var imgMaskTLIn = new TimelineLite();
    var imgMaskTLOut = new TimelineLite();
    $("#collections").on({mouseenter: function(){
      imgMaskTLIn.to($(this), 0.7, { boxShadow: "15px 15px 15px 0px rgba(143,140,143,1)" })
                .to($(this).find(".collections-img-mask"), 0.5, { backgroundColor: "rgba(255, 255, 255, 0.7)" }, "-=0.7")
                .to($(this).find(".collection-name"), 0.5, { opacity: 1, scale: 1.4 }, "-=0.5")
    }, mouseleave: function() {
      imgMaskTLIn.clear()
      imgMaskTLOut.to($(this), 0.7, { boxShadow: "7px 7px 15px 0px rgba(143,140,143,1)" })
                .to($(this).find(".collections-img-mask"), 0.5, { backgroundColor: "rgba(255, 255, 255, 0)" }, "-=0.7")
                .to($(this).find(".collection-name"), 0.5, { opacity: 0, scale: 0.5 }, "-=0.5")
      }
    }, ".collections-img-wrapper")
  })();

  //==================================================//
  // Carousel                                         //
  //==================================================//

  // MySwiper init
  (function() {
    var mySwiper = new Swiper ('.swiper-container', {
     loop: true,
     pagination: '.swiper-pagination',
     paginationClickable: true,
   });
  })();

  //==================================================//
  // Admin                                            //
  //==================================================//

  // jquery-ui sortable
  (function() {
    $(".sortable").sortable({
      update: function() {
        $.post($(this).data("update-url"), $(this).sortable('serialize'))
      }
    });
  })();

});
