	$(document).ready(function () {		
		$('#bars').on('click', toggleNav);
		$('#cancel').on('click', toggleNav);
	});
	
	
	function toggleNav() {	
			if($('#links:visible').length){			
				$('#links').hide();
				$('#cancel').hide();
				$('#bars').show();
			}
			else {
				$('#links').show();			
				$('#cancel').show();
				$('#bars').hide();
			}
	}