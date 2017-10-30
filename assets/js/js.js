$( document ).ready(function() {

	new WOW().init();

    w3.includeHTML();

    $(document).on('click', '.navbar-toggle', function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	
    	if ($(this).hasClass('collapsed')) {
    		$(this).children('span').eq(0).css({'transform': 'none', 'margin': '0'});
    		$(this).children('span').eq(2).css({'transform': 'none', 'margin-top': '4px'});
    		$(this).children('span').eq(1).css('background-color', '#fff');
    	}else{
    		$(this).css({
    			'width': '60px',
    			'height': '60px'
    		});
    		$(this).children('span').eq(0).css({'transform': 'rotate(45deg)', 'margin-bottom': '-3px'});
    		$(this).children('span').eq(2).css({'transform': 'rotate(-45deg)', 'margin-top': '-5px'});
    		$(this).children('span').eq(1).css('background-color', 'transparent');
    		
    	}
    });

    $(".mat-input").focus(function(){
	  $(this).parent().addClass("is-active is-completed");
	});

	$(".mat-input").focusout(function(){
	  if($(this).val() === "")
	    $(this).parent().removeClass("is-completed");
	  $(this).parent().removeClass("is-active");
	})

	 $('.mat-button').mousedown(function (e) {
	    var target = e.target;
	    var rect = target.getBoundingClientRect();
	    var ripple = target.querySelector('.ripple');
	    $(ripple).remove();
	    ripple = document.createElement('span');
	    ripple.className = 'ripple';
	    ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
	    target.appendChild(ripple);
	    var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
	    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
	    ripple.style.top = top + 'px';
	    ripple.style.left = left + 'px';
	    return false;
	});

	$('.tagline-item').eq(0).show();
	setInterval(function() {
			    var index  = $('.tagline-item').index($('.tagline-item:visible'));
			    index = ( index == 2 ) ? 0 : ( index + 1 );
			    $('.tagline-item').hide();
			    $('.tagline-item').eq(index).show();
	}, 3000);

	$('section#home-items .container-fluid .row > div img').on('mouseover', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).parent().css('transform', 'scaleX(1.2)');
		$(this).parent().children('.item').fadeOut(200);
	});
	$('section#home-items .container-fluid .row > div img').on('mouseout', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).parent().css('transform', 'none');
		$(this).parent().children('.item').fadeIn(200);
	});

	$('section#availability .rect-input[name="bedroom"]').val('Number of Bedrooms');
	$('section#availability .rect-input[name="bathroom"]').val('Number of Bathrooms');
	$('section#availability .rect-input[name="rent"]').val('Rent Range');
	$('section#availability .rect-input[name="move_in"]').val('Move-In Date');

	$('section#availability .rect-input').on('focus', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('span.rect-dropmenu:visible').slideUp();
		$(this).parent().children('span.rect-dropmenu').slideDown();
	});

	// $('section#availability .rect-input').on('blur', function(event) {
	// 	// event.preventDefault();
	// 	/* Act on the event */
	// 	console.log($(this).parent().data("hover"));
	// 	if ( !($(this).parent().children(":focus").length == 0) ){
	// 		$('span.rect-dropmenu:visible').slideUp();
	// 	}		
	// });

	$('section#availability input[type="radio"][name="bedroom"]').on('click', function(event) {
		var value = 'Number of Bedrooms: ' + $(this).val();
		$('section#availability .rect-input[name="bedroom"]').val(value);
	});

	$('section#availability input[type="radio"][name="bathroom"]').on('click', function(event) {
		var value = 'Number of Bathrooms: ' + $(this).val();
		$('section#availability .rect-input[name="bathroom"]').val(value);
	});

	if ($('input.slider').length){

		$("input.slider").bootstrapSlider({
			tooltip_split: true,
			formatter: function(value) {
				return '$' + value;
			}
		}).on('slideStop', function(event) {
			event.preventDefault();
			/* Act on the event */
			var value = $("input.slider").val();
			value = 'Rent Range: $' + value.split(',')[0] + ' - $' + value.split(',')[1];
			$('.rect-input[name="rent"]').val(value);
		});
	}

	if ($('.rect-input.input-date').length){

		$('.rect-input.input-date').datepicker({
			orientation: 'bottom',
			format: {
					    toDisplay: function (date, format, language) {				    	
					        var d = "Move-In Date: " + formatDate(date);
					        return d;
					    },
					    toValue: function (date, format, language) {				        
					        return date;
					    }
					}
		});
	
	}
	
	$('section#availability #search-button').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('section#availability').hide();
		$('section#availability-list').addClass('wow slideInLeft').show(500);		
		new WOW().init();
	});

	$('section#availability-list .close-icon').on('click', function(event){
		event.preventDefault();
		$('section#availability-list').hide();
		$('section#availability').addClass('wow slideInRight').show();
		new WOW().init();
	});

	$('section#availability-list .view-detail').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('section#availability-list').hide();
		$('section#availability-detail').addClass('wow slideInLeft').show(500);		
		new WOW().init();
	});

	$('section#availability-detail .close-icon').on('click', function(event){
		event.preventDefault();
		$('section#availability-detail').hide();
		$('section#availability-list').show(500);
	});

	$('#neighborhood-menu-toggle button').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		if($('#neighborhood-menu').is(':visible')){
			$(this).children('span').eq(0).css({'transform': 'none', 'margin': '0'});
    		$(this).children('span').eq(2).css({'transform': 'none', 'margin-top': '5px'});
    		$(this).children('span').eq(1).css('background-color', '#666');
			$('#neighborhood-menu').slideUp();
		}else{
			$('#neighborhood-menu').show();
			$(this).children('span').eq(0).css({'transform': 'rotate(45deg)', 'margin-bottom': '-4px'});
    		$(this).children('span').eq(2).css({'transform': 'rotate(-45deg)', 'margin-top': '-10px'});
    		$(this).children('span').eq(1).css('background-color', 'transparent');
		}
		
	});

	$('#mobile-toggle').on('click', function(event) {
		// event.preventDefault();
		/* Act on the event */
		if( $(this).attr('aria-expanded') == 'true' ){
			$(this).html('MENU');
		}else{
			$(this).html('CLOSE');
		}
		$('html, body').animate({scrollTop: $('#mobile-menu').parent().offset().top - 100 }, 1000);
	});

	$('#mobile-menu a[data-toggle="collapse"]').on('click', function(event) {
		/* Act on the event */
		$('html, body').animate({scrollTop: $(this).offset().top - 150 }, 1000);
	});

});

function formatDate(date) {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
}
