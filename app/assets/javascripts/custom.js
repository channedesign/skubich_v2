$(document).on('turbolinks:load', function() {
// $(document).ready(function() {


  //==================================================//
  // Animations                                       //
  //==================================================//

  // Setting ScrollMagic Controller
  var animController = new ScrollMagic.Controller();
  // SmoothScroll Navbar Animation Scene
  (function() {
    animController.scrollTo(function (newpos) {
        TweenMax.to(window, 1, {scrollTo: {y: newpos - 30}, ease:Power1.easeInOut});
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
    var parallaxBGs = $.find(".parallax-bg");
    var parallaxBGs2 = $.find(".parallax-bg-2");
    var $tm = TweenMax;
    // var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    //            navigator.userAgent && !navigator.userAgent.match('CriOS');


    parallaxBGs.forEach(function(bgs, index) {
      var num = index + 1;
      $(bgs).addClass("parallax-bg-" + num)
      $(bgs).parent().addClass("parallax-bg-anchor" + num)
      var parallax = $tm.to($(".parallax-bg-" + num), 1, { y: '50%', ease: Power2.easeOut });
      var slideParallaxScene = new ScrollMagic.Scene({ triggerElement: ".parallax-bg-anchor" + num, duration: "100%", triggerHook: 0.2 })
                .setTween(parallax)
                .addTo(animController);
    });

    parallaxBGs2.forEach(function(bgs, index) {
      var num = index + 1;
      $(bgs).addClass("parallax-bg-2-" + num)
      $(bgs).parent().addClass("parallax-bg-2-anchor" + num)
      var parallaxIn = $tm.from($(".parallax-bg-2-" + num), 1, { y: '30%' });
      var parallaxOut = $tm.to($(".parallax-bg-2-" + num), 1, { y: '-30%' });
      // var parallaxIn = $tm.from($(".parallax-bg-2-" + num), 1, { y: '60%' });
      // var parallaxOut = $tm.to($(".parallax-bg-2-" + num), 1, { y: '-30%' });
      var slideParallaxSceneIn = new ScrollMagic.Scene({ triggerElement: ".parallax-bg-2-anchor" + num, duration: "100%", triggerHook: 1 })
                .setTween(parallaxIn)
                .addTo(animController);
      var slideParallaxSceneOut = new ScrollMagic.Scene({ triggerElement: ".parallax-bg-2-anchor" + num, duration: "100%", triggerHook: 0 })
                .setTween(parallaxOut)
                .addTo(animController);
    });
  })();
  // MouseWheel SmoothScroll
  (function(){
    // if(location.pathname === '/') {
  	// 	var $window = $(window);
  	// 	var isTweening = false;
  	// 	document.onmousewheel = function(){ customScroll(); }
  	// 	if(document.addEventListener){
  	// 	    document.addEventListener('DOMMouseScroll', customScroll, false);
  	// 	}
  	// 	function customScroll(event){
  	// 	   var delta = 0;
  	// 	   if (!event){
  	// 		   event = window.event;
  	// 	   }
  	// 	   if (event.wheelDelta) {
  	// 		   delta = event.wheelDelta/120;
  	// 	   } else if(event.detail) {
  	// 		   delta = -event.detail/3;
  	// 	   }
  	// 	   if (delta){
  	// 		      var scrollTop = $window.scrollTop();
  	// 			   	var finScroll = scrollTop - parseInt(delta*100) * 3;
  	// 			   	TweenMax.to($window, 0.7, {
  	// 				   	scrollTo : { y: finScroll, autoKill:true },
  	// 				   	ease: Power4.easeOut,
  	// 				   	autoKill: true,
  	// 				   	overwrite: 5,
  	// 				   	onComplete: function(){
  	// 				   		//console.log(isTweening);
  	// 				   	}
  	// 				});
  	// 	   }
  	// 	   if (event.preventDefault){
  	// 		   event.preventDefault();
  	// 	   }
  	// 	   event.returnValue = false;
  	// 	}
    // }
	})();
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

  // Parallax Element
  (function() {
    // var elements = $.find(".parallax-element");
    // var $tm = TweenMax;
    // elements.forEach(function(el, index) {
    //   var num = index + 1;
    //   $(el).addClass("parallax-element-" + num);
    //   var parallaxElementAnim = $tm.from($(".parallax-element-" + num ), 2, { y: 50, opacity: 0, ease: Power4.easeOut });
    //
    //   var parallaxElementScene = new ScrollMagic.Scene({ triggerElement: ".parallax-element-" + num })
    //             .setTween(parallaxElementAnim)
    //             .addTo(animController);
    // }) ;
    var elements = $.find(".parallax-element-detected");
    var $tm = TweenMax;
    elements.forEach(function(el, index) {
      var num = index + 1;
      $(el).addClass("parallax-element-" + num);
      var parallaxElementAnim = $tm.staggerFrom($(".parallax-element-" + num + " .parallax-element"), 2, { y: 100, opacity: 0, ease: Power4.easeOut }, 0.2);

      var parallaxElementScene = new ScrollMagic.Scene({ triggerElement: ".parallax-element-" + num, offset: -100, reverse: false })
                .setTween(parallaxElementAnim)
                .addTo(animController);
    }) ;
  })();

  //==================================================//
  // Carousel                                         //
  //==================================================//

  // MySwiper init
  (function() {
    var mySwiper = new Swiper ('.swiper-container', {
      speed: 500,
     pagination: '.swiper-pagination',
     paginationClickable: true,
   });
  })();

  //==================================================//
  // Jewelries Modal                                  //
  //==================================================//

  $('#jewelryModal').on('show.bs.modal', function (event) {
    var jewelry = $(event.relatedTarget); // Button that triggered the modal
    var title = jewelry.data('jewelry-title');
    var picture = jewelry.data('jewelry-picture');
    var inspiration = jewelry.data('jewelry-inspiration');
    var material = jewelry.data('jewelry-material');

    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.jewelry-picture').html("<img src='" + picture + "' />");
    modal.find('.jewelry-inspiration').text(inspiration);
    modal.find('.jewelry-material').text(material);
  });

  //==================================================//
  // Admin                                            //
  //==================================================//

  // jquery-ui sortable
  (function() {
    $(".sortable").sortable({
      cursor: 'move',
      update: function() {
        $.post($(this).data("update-url"), $(this).sortable('serialize'))
      }
    });
    $(".vertical-sortable").sortable({
      axis: "y",
      cursor: 'move',
      update: function() {
        $.post($(this).data("update-url"), $(this).sortable('serialize'))
      }
    });
  })();

});
