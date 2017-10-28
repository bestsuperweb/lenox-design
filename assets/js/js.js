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
	
});