$(document).on('turbolinks:load', function() {
// $(document).ready(function() {


  //==================================================//
  // Contact - Form                                   //
  //==================================================//
  (function() {
    var $formInput = $(".form-input");
    var $textInput = $(".form-textarea");
    var emailInput = $(".email-input");
    var nameInput = $(".name-input");

    // Auto-resize contact form
    $formInput.autosizeInput();
  	autosize($textInput); // For Text-area

    nameInput.keypress(function() {
        nameInput.css("border-bottom", "1px dashed #505050");
    });
    emailInput.keypress(function() {
        emailInput.css("border-bottom", "1px dashed #505050");
    });

    // TweenMax.to($("svg"), 1, { opacity: 1 })
    // TweenMax.to($("svg path"), 4, { strokeDashoffset: 0, delay: 2 })
    // TweenMax.to($(".paper-plane-mask"), 3, { left: "100%", width: 0, delay: 2 })

    // var pathString = "M6.044,73.835c0,0 68.026,-38.204 186.291,-36.833c90.058,1.045 132.836,32.117 157.582,51.596c47.589,37.458 10.037,66.43 -9.357,65.595c-15.835,-0.681 -44.514,-14.884 -31.322,-44.376c35.135,-78.553 158.913,-91.491 278.881,-37.206c67.246,30.428 165.956,50.908 245.957,-66.278";
    // var arrayPath = [];
    // // Snap SVG method to create a set of cubic bezier curves from the path string
    // var newPath = Snap.path.toCubic(pathString);
    // function setUpPoint(segment){
    // 	//using +=2 in the loop thanks to GSAP's Geek Ambassador, animation superhero Carl Schooff :D
    // 	for(var i = 0; i < segment.length; i+=2){
    // 		//create a new object for the point so it can be passed into the bezier plugin
    // 		var point = {};
    // 		point.x = segment[i];
    // 		point.y = segment[i+1];
    // 		//add the point to the array
    // 		arrayPath.push(point);
    //     $("#log").append("{x:" + point.x +",y:" + point.y + "}, ");
    // 	}//loop end
    // }
    // // loop through the curves collection
    // for(var i = 0; i < newPath.length; i++){
    // 	var segment = newPath[i],
    // 			point;
    // 	// the first element returned in the array is a letter, quite useless for the bezier Plugin, so we remove it
    // 	segment.shift();
    // 	//call the function to set up the points based on the segment returned
    // 	point = setUpPoint(segment);
    // }
    // console.log(arrayPath)

    // if($(window).width() >= 992) {
    //   var array = [{x:6.044,y:73.835}, {x:6.044,y:73.835}, {x:74.07,y:35.63099999999999}, {x:192.335,y:37.001999999999995}, {x:282.39300000000003,y:38.047}, {x:325.17100000000005,y:69.119}, {x:349.91700000000003,y:88.59799999999998}, {x:397.50600000000003,y:126.05599999999998}, {x:359.954,y:155.028}, {x:340.56000000000006,y:154.19299999999998}, {x:324.7250000000001,y:153.51199999999997}, {x:296.04600000000005,y:139.30899999999997}, {x:309.23800000000006,y:109.81699999999998}, {x:344.37300000000005,y:31.26399999999998}, {x:468.15100000000007,y:18.32599999999998}, {x:588.119,y:72.61099999999998}, {x:655.365,y:103.03899999999997}, {x:754.075,y:123.51899999999998}, {x:864.076,y:-60.33299999999997}];
    // } else {
    //   var array = [{x:6.044,y:73.835}, {x:6.044,y:73.835}, {x:74.07,y:35.63099999999999}, {x:192.335,y:37.001999999999995}, {x:282.39300000000003,y:38.047}, {x:325.17100000000005,y:69.119}, {x:349.91700000000003,y:88.59799999999998}, {x:397.50600000000003,y:126.05599999999998}, {x:359.954,y:155.028}, {x:340.56000000000006,y:154.19299999999998}, {x:324.7250000000001,y:153.51199999999997}, {x:296.04600000000005,y:139.30899999999997}, {x:309.23800000000006,y:109.81699999999998}, {x:344.37300000000005,y:31.26399999999998}, {x:468.15100000000007,y:18.32599999999998}, {x:588.119,y:72.61099999999998}, {x:655.365,y:103.03899999999997}, {x:754.075,y:123.51899999999998}, {x:790.076,y:-60.33299999999997}];
    // }
    //
    // var paperPlaneTL = new TimelineLite()
    //           .to($("svg"), 1, { opacity: 1 })
    //           .to($("svg #plane"), 2, { strokeDashoffset: 0 })
    //           .to($(".svg-plane"), 3, { bezier:{ type:"cubic", values: array, autoRotate: 45 }, ease: Power1.easeIn }, "-=2")
    //           .to($("svg #trail"), 5, { strokeDashoffset: 0 }, "-=2.15");
  })();




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
    var isFirefox = typeof InstallTrigger !== 'undefined';
    if(!isFirefox) {
      if(location.pathname != '/jewelries') {
    		var $window = $(window);
    		var isTweening = false;
    		document.onmousewheel = function(){ customScroll(); }
    		if(document.addEventListener){
    		    document.addEventListener('DOMMouseScroll', customScroll, false);
    		}
    		function customScroll(event){
    		   var delta = 0;
    		   if (!event){
    			   event = window.event;
    		   }
    		   if (event.wheelDelta) {
    			   delta = event.wheelDelta/120;
    		   } else if(event.detail) {
    			   delta = -event.detail/3;
    		   }
    		   if (delta){
    			      var scrollTop = $window.scrollTop();
    				   	var finScroll = scrollTop - parseInt(delta*100) * 3;
    				   	TweenMax.to($window, 0.7, {
    					   	scrollTo : { y: finScroll, autoKill:true },
    					   	ease: Power4.easeOut,
    					   	autoKill: true,
    					   	overwrite: 5,
    					   	onComplete: function(){
    					   		//console.log(isTweening);
    					   	}
    					});
    		   }
    		   if (event.preventDefault){
    			   event.preventDefault();
    		   }
    		   event.returnValue = false;
    		}
      } else {
        document.onmousewheel = function(){ normalScroll(); }
        if(document.addEventListener){
    		    document.addEventListener('DOMMouseScroll', normalScroll, false);
    		}
        function normalScroll() {

        }
      }
    }
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
