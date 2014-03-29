$(function() {
/*!
 * Pagination.js v1.0.0 
 * Copyright 2014 D R Aditya
 * Licensed under MIT (https://github.com/aditya91/)
 */
	var current_num = 1;
	var pages = 4; //no of pages
	var limit = 4; //no of items on page
	var onloadShow = limit-1; 
	
	$('.list-group-item:gt('+ onloadShow +')').hide();
		
	function toggleItems(current_num)
	{
		var new_num = current_num;
		var start = (new_num*limit)-limit;
		var end = (new_num*limit);
			
		$('.list-group-item').hide();			
		$('.page_num').removeClass('active');
		$("#page-"+new_num).addClass('active');
				
		for(var i=start+1;i<=end;i++)
		$('#list_item-'+i).fadeIn();		
	}
	
	$('.page_num').on('click', function(){
		var num = $(this).text();
		current_num = parseInt(num);
			
		var start = (num*limit)-limit;
		var end = (num*limit);
			
		if(current_num==1)
		$('#previous_page').addClass('disabled');
		else
		$('#previous_page').removeClass('disabled');
			
		if(current_num > pages)
		{
			$('#next_page').addClass('disabled');
			return false;
		}
		else
		$('#next_page').removeClass('disabled');
			
		toggleItems(current_num);						
	});
	$('#previous_page').on('click', function(){
		if(current_num<=1) return false;
			
		if(current_num>1)
		current_num = current_num-1;
			
		//prev check
		if(current_num<=1)
		$('#previous_page').addClass('disabled');
		else
		$('#previous_page').removeClass('disabled');
			
		//next check
		if(current_num>pages)
		{
			$('#next_page').addClass('disabled');
			return false;
		}
		else
		$('#next_page').removeClass('disabled');
		
		toggleItems(current_num);
	});
	$('#next_page').on('click', function(){
		if(current_num<=pages)
		current_num = current_num+1;
			
		var new_num = current_num;
		var start = (new_num*limit)-limit;
		var end = (new_num*limit);
			
		//next check
		if(current_num>pages)
		{
			$('#next_page').addClass('disabled');
			current_num = pages;
			return false;
		}
		else
		$('#next_page').removeClass('disabled');
			
		//prev check
		if(current_num<=1)
		$('#previous_page').addClass('disabled');
		else
		$('#previous_page').removeClass('disabled');
		
		toggleItems(current_num);
	});
});
