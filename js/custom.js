/* =====================================
All JavaScript fuctions Start
======================================*/

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
 /* 

	> Top Search bar Show Hide function by = custom.js  
	> On scroll content animated function by = Viewportchecker.js 	
	> Video responsive function by = custom.js 
	> magnificPopup function	by = magnific-popup.js
	> magnificPopup for video function	by = magnific-popup.js
	> Vertically center Bootstrap modal popup function by = custom.js
	> Main menu sticky on top  when scroll down function by = custom.js
	> page scroll top on button click function by = custom.js	
	> input type file function by = custom.js	 
	> input Placeholder in IE9 function by = custom.js
	> footer fixed on bottom function by = custom.js	
	> accordion active calss function by = custom.js
    > Nav submenu show hide on mobile by = custom.js
	> Vertical Nav submenu show hide on mobile by = custom.js
	> Home Carousel_1 Full Screen with no margin function by = owl.carousel.js
	> related with content function by = owl.carousel.js
	> Fade slider for home function by = owl.carousel.js
	> home_carousel_1 Full Screen with no margin function by = owl.carousel.js
	> home_carousel_2 Full Screen with no margin function by = owl.carousel.js
	> home_projects_filter Full Screen with no margin function by = owl.carousel.js
	> Home page testimonial function by = owl.carousel.js
    > home_client_carouse function by = owl.carousel.js 
	> work carousel  function by = owl.carousel.js
    > Hover Tab  function
    > Portfolio Carousel no margin function by = owl.carousel.js ========================== //

	
 */	

/*--------------------------------------------------------------------------------------------
	window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
 /* 
	 > equal each box
	 > text animation function 
	 > masonry function function by = isotope.pkgd.min.js
	 > page loader function by = custom.js
 */	
 
/*--------------------------------------------------------------------------------------------
	Window Scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
 /*
 	 > Window on scroll header color fill 
 */

/*--------------------------------------------------------------------------------------------
	Window Resize ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	

//  > Top Search bar Show Hide function by = custom.js =================== //	
	 function site_search(){
			jQuery('a[href="#search"]').on('click', function(event) {                    
			jQuery('#search').addClass('open');
			jQuery('#search > form > input[type="search"]').focus();
		});
					
		jQuery('#search, #search button.close').on('click keyup', function(event) {
			if (event.target === this || event.target.className === 'close') {
				jQuery(this).removeClass('open');
			}
		});  
	 }	
	 
// > Video responsive function by = custom.js ========================= //	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  

// > magnificPopup function	by = magnific-popup.js =========================== //
	function magnific_popup(){
        jQuery('.mfp-gallery').magnificPopup({
          delegate: '.mfp-link',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          }
       });
	}

// > magnificPopup for video function	by = magnific-popup.js ===================== //	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}

// Vertically center Bootstrap modal popup function by = custom.js ==============//
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}

// > Main menu sticky on top  when scroll down function by = custom.js ========== //		
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
			  element: jQuery('.sticky-header')
			})
		}
	}

// > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}

// > input type file function by = custom.js ========================== //	 	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}

// > input Placeholder in IE9 function by = custom.js ======================== //	
	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	


// > footer fixed on bottom function by = custom.js ======================== //	
	function footer_fixed() {
	  jQuery('.site-footer').css('display', 'block');
	  jQuery('.site-footer').css('height', 'auto');
	  var footerHeight = jQuery('.site-footer').outerHeight();
	  jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
	  jQuery('.site-footer').css('height', footerHeight);
	}

// > accordion active calss function by = custom.js ========================= //	
	function accordion_active() {
		$('.acod-head a').on('click', function() {
			$('.acod-head').removeClass('acc-actives');
			$(this).parents('.acod-head').addClass('acc-actives');
			$('.acod-title').removeClass('acc-actives'); //just to make a visual sense
			$(this).parent().addClass('acc-actives'); //just to make a visual sense
			($(this).parents('.acod-head').attr('class'));
		 });
	}	

// > Nav submenu show hide on mobile by = custom.js
	 function mobile_nav(){
		jQuery(".sub-menu").parent('li').addClass('has-child');
		jQuery(".mega-menu").parent('li').addClass('has-child');
		jQuery("<div class='glyphicon glyphicon-chevron-right submenu-toogle'></div>").insertAfter(".has-child > a");
		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {
			jQuery(this).next(jQuery('.sub-menu')).slideToggle('fast', function(){
				jQuery(this).parent().toggleClass('nav-active');
			});
			ev.stopPropagation();
		});
		
		  jQuery('.has-child').on('click',function(ev) {
		   jQuery(this).find(jQuery('.sub-menu')).slideToggle('fast', function(){
			jQuery(this).parent().toggleClass('nav-active');
		   });
		  });
		
	 }

// >Vertical Nav submenu show hide on mobile by = custom.js
 function vertical_nav(){
//		jQuery(".v-sub-menu").parent('li').addClass('has-child');
//		jQuery("<div class='glyphicon glyphicon-chevron-right submenu-toogle'></div>").insertAfter(".has-child > a");
//		jQuery('.has-child a+.submenu-toogle').click(function(ev) {
//			jQuery(this).next(jQuery('.v-sub-menu')).slideToggle('fast', function(){
//				jQuery(this).parent().toggleClass('nav-active');
//			});
//			ev.stopPropagation();
//		});
 }

//  related with content function by = owl.carousel.js ========================== //
	function blog_related_slider(){
	jQuery('.blog-related-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		rtl:true,	
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	}
	
// Fade slider for home function by = owl.carousel.js ========================== //
	function aboutus_carousel(){
	jQuery('.about-us-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		margin:30,
		nav:true,
		rtl:true,	
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		items:1,
		dots: false,
	});
	}
	
// > Home Carousel_1 Full Screen with no margin function by = owl.carousel.js ========================== //
	function home_carousel_1(){
	jQuery('.home-carousel-1').owlCarousel({
        loop:true,
		margin:0,
		autoplay:true,
		rtl:true,	
		autoplayTimeout:3000,
		//center: true,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	}	
	
// > Home Carousel_1 Full Screen with no margin function by = owl.carousel.js ========================== //
	function home_carousel_2(){
	jQuery('.home-carousel-2').owlCarousel({
        loop:true,
		autoplay:true,
		margin:0,
		nav:true,
		rtl:true,	
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	}
			
// > home_projects_filter Full Screen with no margin function by = owl.carousel.js ========================== //
	function home_projects_filter(){
		
		var owl = jQuery('.owl-carousel-filter').owlCarousel({
		loop:false,
		autoplay:true,
		margin:20,
		nav:true,
		rtl:true,	
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			580:{
				items:2
			},						
			767:{
				items:2
			},
			991:{
				items:3
			},			
			1152:{
				items:4
			},
			1360:{
				items:4
			},
			1366:{
				items:5
			}	
		    }
		})
		
		/* Filter Nav */

		jQuery('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
			var filter_data = jQuery(this).data('filter');

			/* return if current */
			if(jQuery(this).hasClass('btn-active')) return;

			/* active current */
			jQuery(this).addClass('btn-active').siblings().removeClass('btn-active');

			/* Filter */
			owl.owlFilter(filter_data, function(_owl) { 
				jQuery(_owl).find('.item').each(owlAnimateFilter); 
			});
		})
	
	
	
	}
	
	
	
// Home page testimonial function by = owl.carousel.js ========================== //
	function testimonial_home(){
	jQuery('.testimonial-home').owlCarousel({
		loop:true,
		autoplay:false,
		margin:80,
		nav:false,
		rtl:true,	
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			991:{
				items:2
			}
		}
	});
	}	
	
//  home_client_carouse function by = owl.carousel.js ========================== //
	function home_client_carousel(){
	jQuery('.home-client-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		rtl:true,	
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			480:{
				items:3
			},			
			767:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});
	}	


//  home_client_carouse function by = owl.carousel.js ========================== //
	function home_client_carousel_2(){
	jQuery('.home-client-carousel-2').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		nav:false,
		rtl:true,	
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			480:{
				items:3
			},			
			767:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});
	}		
// > work carousel  function by = owl.carousel.js ========================== //
	function work_carousel(){
	jQuery('.work-carousel').owlCarousel({
        loop:true,
		autoplay:false,
		center: true,
		items:3,
		margin:0,
		nav:true,
		rtl:true,	
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			854:{
				items:2
			}
			
		}
	});
	}	


//  Portfolio Carousel no margin function by = owl.carousel.js ========================== //
	function portfolio_nogap_carousel(){
	jQuery('.portfolio-carousel-nogap').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		rtl:true,	
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	}
	
// > Hover Tab  function ========================== //
	function hover_tab(){
	jQuery('.circle-block-outer[data-toggle="tab-hover"] div').on('mouseenter', function(){
		jQuery(this).tab('show');
	});
	}

/*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

// > equal each box function by  = custom.js =========================== //	 
	function equalheight(container) {
		var currentTallest = 0, 
			currentRowStart = 0, 
			rowDivs = new Array(), 
			$el, topPosition = 0,
			currentDiv = 0;

		jQuery(container).each(function() {
			$el = jQuery(this);
			jQuery($el).height('auto');
			var topPostion = $el.position().top;
			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {

				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}

			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}


	// text animation function
	
	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap {}";
        document.body.appendChild(css);
    };


// > On scroll content animated function by = Viewportchecker.js ============= //
	function animate_content(){
		jQuery('.animate').scrolla({
			mobile: false,
			once: true
		});
	}

// > masonry function function by = isotope.pkgd.min.js ========================= //	
	function masonryBox() {
        if ( jQuery().isotope ) {      
            var $container = jQuery('.portfolio-wrap');
                $container.isotope({
                    itemSelector: '.masonry-item',
                    transitionDuration: '1s',
					originLeft: true
                });

            jQuery('.masonry-filter li').on('click',function() {                           
                var selector = jQuery(this).find("a").attr('data-filter');
                jQuery('.masonry-filter li').removeClass('active');
                jQuery(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
    	};
	}	

// > background image parallax function by = stellar.js ==================== //	
	function bg_image_stellar(){
		jQuery(function(){
				jQuery.stellar({
					horizontalScrolling: false,
					verticalOffset:100
				});
			});			
	}	

// > page loader function by = custom.js ========================= //		
	function page_loader() {
		$('.loading-area').fadeOut(1000)
	};

/*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    };	

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
		// > Top Search bar Show Hide function by = custom.js  		
		site_search(),
		// > Video responsive function by = custom.js 
		video_responsive(),
		// > magnificPopup function	by = magnific-popup.js
		magnific_popup(),
		// > magnificPopup for video function	by = magnific-popup.js
		magnific_video(),
		// > Vertically center Bootstrap modal popup function by = custom.js
		popup_vertical_center();
		// > Main menu sticky on top  when scroll down function by = custom.js		
		sticky_header(),
		// > page scroll top on button click function by = custom.js	
		scroll_top(),
		// > input type file function by = custom.js	 	
		input_type_file_form(),
		// > input Placeholder in IE9 function by = custom.js		
		placeholderSupport(),
		// > footer fixed on bottom function by = custom.js	
		footer_fixed(),
		// > accordion active calss function by = custom.js ========================= //			
		accordion_active(),
		// > Nav submenu on off function by = custome.js ===================//
		mobile_nav(),
		// >Vertical Nav submenu show hide on mobile by = custom.js
	    vertical_nav(),
		//  related with content function by = owl.carousel.js ========================== //
		blog_related_slider(),
		// Fade slider for home function by = owl.carousel.js ========================== //   
		aboutus_carousel(),
		//  home_carousel_1 Full Screen with no margin function by = owl.carousel.js ==========================  //  
		home_carousel_1(),
		//  home_carousel_2 Full Screen with no margin function by = owl.carousel.js ==========================  //  
		home_carousel_2(),
		//  home_projects_filter() Full Screen with no margin function by = owl.carousel.js ==========================  //  
		home_projects_filter(),
		// Home page testimonial function by = owl.carousel.js ========================== //
		testimonial_home(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
		home_client_carousel(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
		home_client_carousel_2(),		
		// > Hover Tab  function ========================== //
		hover_tab(),
		//  Portfolio Carousel no margin function by = owl.carousel.js ========================== //
	        portfolio_nogap_carousel()
	}); 

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
	jQuery(window).on('load', function () {
		// > equal each box function by  = custom.js			
		equalheight(".equal-wraper .equal-col"),
		// > On scroll content animated function by = Viewportchecker.js	
		animate_content(),
		// > masonry function function by = isotope.pkgd.min.js		
		masonryBox(),
		// > background image parallax function by = stellar.js	
		bg_image_stellar(),
		// > page loader function by = custom.js		
		page_loader(),
		// > work carousel  function by = owl.carousel.js
		work_carousel()		 
});

 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

	jQuery(window).on('scroll', function () {
	// > Window on scroll header color fill 
		color_fill_header()
	});
	
/*===========================
	Window Resize ALL FUNCTION START
===========================*/

	jQuery(window).on('resize', function () {
	// > footer fixed on bottom function by = custom.js		 
	 	footer_fixed()
	});

/*===========================
	Document on  Submit FUNCTION START
===========================*/

	// > Contact form function by = custom.js	
	jQuery(document).on('submit', 'form.cons-contact-form', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		jQuery.ajax({
			url: '../form-handler.php',
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.loading-area').show();
			},

			success:function(data){
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
				}else{
				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');	
				}
			}
		});
		return false;
	});	

/*===========================
	Document on  Submit FUNCTION END
===========================*/	

//=== Switcher panal slide function	=====================//

	jQuery(window).load(function(){
		jQuery('.nav-sidebar').animate({'left': '-500px'});
		jQuery('.vnav-btn').addClass('closed');
	});
	
	jQuery(document).ready(function () {
				
		jQuery('.vnav-btn').on('click', function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery('.nav-sidebar').animate({'left': '-500px'});
			} 
			else {
				if (jQuery(this).hasClass('closed')) {
				jQuery('.nav-sidebar').animate({'left': '0'});
				}
			}
		});
	

//============== Transparent Part ===========//	
	    jQuery('.nav-transparent-area').fadeOut(500);	
		jQuery('.vnav-btn').on('click', function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery('.nav-transparent-area').animate({'left': '100%'});
			} 
			else {
				if (jQuery(this).hasClass('closed')) {
				jQuery('.nav-transparent-area').fadeIn(500);
				}
			}
		});
						
		jQuery('.nav-transparent-area').on('click', function () {	
				jQuery('.nav-sidebar').animate({'left': '-500px'});
				jQuery('.nav-transparent-area').fadeOut(500);
				jQuery('.vnav-btn').addClass('closed');
			});
			
//==============close btn ===========//		
		jQuery('.vnav-close ').on('click', function () {	
				jQuery('.nav-sidebar').animate({'left': '-500px'});
				jQuery('.nav-transparent-area').fadeOut(500);
				jQuery('.vnav-btn').addClass('closed');
			}); 				
	});
	
//=== Switcher panal slide function END	=====================//

})(window.jQuery);


//== slowscrolling ==//

$(function() {

	$(this).impulse();
	
	$('#container').impulse({effect: 'easeOutBack', fluid: false});
	});
	
	// ataredo.com/morphology/lucidscroll - documentation
	
	(function($, nib) {
	
	$.fn.impulse = function(options) {
	
	var set = $.extend({}, $.fn.impulse.default, options), gate = $(nib),
	vessel = this, object = $(set.target), area = {}, edge = [],
	fad = {}, entity, brink = [], outset = [], quit = [], morph,
	way, speed, destined = [], pour = 'requestAnimationFrame',
	use = $.extend({novel: pour in nib, turned: 0}, set);
	
	elementAnalysis();
	
	vessel.each(function(hit) {
	
		use = $.extend({}, use);
	
		$(this).data('impulse', use).on('wheel.excite', function(act, info) {
	
			if (!use.keen && !act.mien) return;
	
			if (act.mien) {
			fad = $.extend({}, use, info);
			use.annul = fad.delay == true;
			var loom = act.mien;
			fad.fluid = false;
			}
			else {
			if (use.annul) return;
			fad = use;
			loom = act.originalEvent.deltaY;
			}
	
			loom = loom/Math.abs(loom);
	
			if (use.crux) {
			entity = $(this);
			brink[0] = edge[hit];
			}
			else {
			entity = object;
			brink = edge;
			}
	
			$.each({range: 'orbit', tempo: 'pace'}, function(slot, mate) {
			if (typeof fad[slot] === 'function') fad[mate] = fad[slot]();
			else fad[mate] = fad[slot];
			});
	
			if (loom != use.zeal || act.mien) use.turned = 1;
			else use.turned = Math.min(use.curb, use.turned+1);
	
			if (!fad.delay && fad.fluid && use.turned == 1) morph = 'curve';
			else morph = fad.effect;
	
			way = loom*fad.orbit*Math.pow(use.leap, use.turned-1);
			speed = fad.pace*Math.pow(use.sloth, use.turned-1) || 1;
			use.zeal = loom;
	
			entity.each(function(part) {
			outset[part] = $(this).scrollTop();
			destined[part] = outset[part]+way;
			quit[part] = onFringe(this, part, outset[part]);
			});
	
			use.waive = ceaseOperation();
	
			if (!way) speed = 1;
			if (use.novel) {
			if (use.motion) {
			cancelAnimationFrame(use.motion);
			use.initial = use.present;
			}
			else use.initial = Date.now();
			use.motion = nib[pour](streamCore);
			}
			else inciteSource();
		});
	
		this.addEventListener('wheel', function(tick) {
	
			if (!use.keen) return;
			if (use.annul) return denyRise(tick);
			else if (fad.delay == true && !use.waive) use.annul = true;
			if (!(use.waive && use.occur)) denyRise(tick);
	
		}, hasQuiet() ? {passive: false} : false);
	});
	
	$.easing['curve'] = $.easing['easeInOutSine'];
	
	gate.resize(function() {
	clearTimeout(use.bound);
	use.bound = setTimeout(detectOverflow, 100);
	});
	
	return this;
	
	function streamCore() {
	use.present = Date.now();
	var advance = Math.min(use.present-use.initial, speed)/speed,
	increase = $.easing[morph](advance);
	entity.each(function(key) {
	if (!quit[key]) {
	$(this).scrollTop(outset[key]+increase*way);
	checkLimits(this, key, advance);
	}
	});
	if (advance < 1 && !use.waive) use.motion = nib[pour](streamCore);
	else hindStage();
	}
	
	function inciteSource() {
	entity.each(function(beat) {
	if (!quit[beat]) {
	$(this).stop().animate({scrollTop: destined[beat]}, {
	duration: speed,
	easing: morph,
	progress: function(current, sequence) {
	checkLimits(this, beat, sequence);
	},
	complete: hindStage
	});
	}
	});
	}
	
	function checkLimits(essence, rank, factor) {
	if (100*factor >= fad.reset) use.turned = 0;
	if (onFringe(essence, rank)) {
	quit[rank] = true;
	if (!use.novel) $(essence).stop(true, true);
	use.waive = ceaseOperation();
	}
	}
	
	function onFringe(matter, cue, genesis) {
	var put = Math.round(genesis || $(matter).scrollTop()),
	above = destined[cue] < 0 && !put,
	below = destined[cue] > brink[cue] && put == brink[cue] && fad.orbit > 0;
	return above || below;
	}
	
	function ceaseOperation() {
	return quit.every(function(flag) {return flag});
	}
	
	function hindStage() {
	use.turned = use.annul = use.motion = 0;
	}
	
	function denyRise(jab) {
	jab.preventDefault();
	jab.stopPropagation();
	}
	
	function elementAnalysis() {
	var item = $();
	if (!object.length) {
	use.crux = true;
	object = vessel;
	}
	object.each(function() {
	if ($.zenith(this)) {
	if (!use.main) {
	if (use.novel) use.main = nib;
	else use.main = baseTag();
	item = item.add(use.main);
	}
	}
	else item = item.add(this);
	});
	use.target = object = item;
	object.each(function(zest) {
	if ($.zenith(this)) area[zest] = 'hub';
	else area[zest] = 'sub';
	});
	if (use.crux && use.main) vessel = object;
	detectOverflow();
	}
	
	function baseTag() {
	var origin = gate.scrollTop();
	gate.scrollTop(1);
	if ($('html').scrollTop()) var root = 'html';
	else if ($('body').scrollTop()) root = 'body';
	else root = 'html, body';
	gate.scrollTop(origin);
	return root;
	}
	
	function detectOverflow() {
	object.each(function(peg) {
	if (area[peg] == 'hub') var teem = $(document).height()-gate.height();
	else teem = this.scrollHeight-$(this).height();
	edge[peg] = Math.round(teem);
	});
	}
	
	function hasQuiet() {
	var cold = false,
	hike = function() {};
	try {
	var aid = Object.defineProperty({}, 'passive', {
	get: function() {cold = true}
	});
	nib.addEventListener('test', hike, aid);
	nib.removeEventListener('test', hike, aid);
	} catch(e) {}
	return cold;
	}
	};
	
	$.zenith = function(sample) {
	
	var peak = [nib,document,'HTML','BODY'], facet;
	if (sample) return peak.indexOf(sample) > -1 || peak.indexOf(sample.tagName) > -1;
	$.each(peak, function(spot, detail) {
	facet = $(detail).data('impulse');
	if (facet) return false;
	});
	return facet;
	};
	
	$.fn.impulse.default = {
	
	target: '',
	range: 135,
	leap: 1.35,
	tempo: 500,
	sloth: 1.1,
	curb: 5,
	reset: 85,
	effect: 'easeOutSine',
	keen: true,
	delay: false,
	occur: true,
	fluid: true
	};
	
	$.fn.demit = function() {
	
	return this.each(function() {
	if ($.zenith(this)) var habit = $.zenith();
	else habit = $(this).data('impulse');
	if (habit) {
	if (habit.novel) cancelAnimationFrame(habit.motion);
	else habit.target.stop();
	habit.turned = habit.annul = habit.motion = 0;
	}
	});
	};
	
	$.fn.amend = function(gist) {
	
	return this.each(function() {
	if ($.zenith(this)) var quirk = $.zenith();
	else quirk = $(this).data('impulse');
	if (quirk) {
	$.each(gist, function(sign, rate) {
	if (sign in quirk) quirk[sign] = rate;
	});
	}
	});
	};
	
	$.fn.evoke = function(unit) {
	
	var lot = $.Event('wheel.excite', {mien: true}), bulk;
	return this.each(function() {
	if ($.zenith(this)) {
	if (!bulk) {
	bulk = $.zenith();
	if (bulk) $(bulk.main).trigger(lot, unit);
	}
	}
	else $(this).trigger(lot, unit);
	});
	};
	}(jQuery, window));
	
	(function($){var b={};$.each(['Quad','Cubic','Quart','Quint','Expo'],function(i,n){b[n]=function(p){return Math.pow(p,i+2)}});$.extend(b,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){var f,h=4;while(p<((f=Math.pow(2,--h))-1)/11){}return (1/Math.pow(4,3-h)-7.5625*Math.pow((f*3-2)/22-p,2))}});$.each(b,function(n,e){$.easing['easeIn'+n]=e;$.easing['easeOut'+n]=function(p){return 1-e(1-p)};$.easing['easeInOut'+n]=function(p){return p<0.5?e(p*2)/2:1-e(p*-2+2)/2}})})(jQuery);
	
	