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
	
});