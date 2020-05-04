	$(document).ready(function () {		
		$('.nav-icon').on('click', toggleNav);
		$('#cancel').on('click', toggleNav);
	});
	
	
	function toggleNav() {	
			if($('#links:visible').length){			
				$('#links').hide();
				$('#cancel').hide();
				$('#bars').show();
				$('.hamburger-line-1').css('transform', 'translateY(0px) rotate(0deg)');
				$('.hamburger-line-2').css('transform', 'scale(1)');
				$('.hamburger-line-3').css('transform', 'translateY(0px) rotate(0deg)');
			}
			else {
				$('#links').show();			
				$('#cancel').show();
				$('#bars').hide();
				$('.hamburger-line-1').css('transform', 'translateY(8px) rotate(135deg)');
				$('.hamburger-line-2').css('transform', 'scale(0)');
				$('.hamburger-line-3').css('transform', 'translateY(-8px) rotate(-135deg)');
				
			}
	}
	
	