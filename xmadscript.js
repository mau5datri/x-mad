

$(document).ready(function(){
	$("#progressbar").hide();
	$("#field").keyup(function() {
		$("#x").fadeIn();
		if ($.trim($("#field").val()) == "") {
			$("#x").fadeOut();
			$("#progressbar").progressbar("value",0)
			$("#progressbar").hide(2000);
		}
	});
	// on click of "X", delete input field value and hide "X"
	$("#x").click(function() {
		$("#field").val("");
		$(this).hide();
		$("#progressbar").progressbar("value",0)
		$("#progressbar").hide(2000);
	});
	
	$( "#progressbar" ).progressbar({

		});
	
		
	$('#target').submit(function() {
	 var old = $("#progressbar").progressbar("value");
	 $("#progressbar").show(2000);
    $("#progressbar").progressbar("value", old+20)
			$.post( 
             "searchstuff.php",
             { searchq: $('#field').val() },
			 			 
             function(data) {
                $('#message').html(data);
				  var old = $("#progressbar").progressbar("value");
    $("#progressbar").progressbar("value", old+80)
	$("#progressbar").hide(2000);
             }
			 ) 
			  return false;
});	


    $('.recents').live('click', function() {
        $("#field").val($(this).html());
		$('#submit').trigger('click');
		 $('html, body').animate({scrollTop:0}, 'slow');

    });
	
	
	    $('.musiccovers').live('click', function() {
        $('.helper').empty();
		$('#message').empty();
		 $(".helper").load("getmusiccovers.php");

    });
	
	
		    $('.videocovers').live('click', function() {
        $('.helper').empty();
		$('#message').empty();
		 $(".helper").load("getmoviecovers.php");

    });
	
	
var seen = {}; $('a').each(function() {var txt = $(this).text(); if (seen[txt])$(this).remove(); else seen[txt] = true;});



 //		var count = 0;
// 		setInterval(function() {
 //		 count = count + 0.5;
// 		 $('#progressbar').progressbar({
//  		 value : count         
// 		 });
// 		}, 10);

});

$(function(){
   $("ul.dropdown li").hover(function(){
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    
    }, function(){
   $(this).removeClass("hover");
   $('ul:first',this).css('visibility', 'hidden');
});
$("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");
});