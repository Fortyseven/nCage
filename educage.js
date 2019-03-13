(function() {
	//eduCage
	var main = function($) { 
		
		var self = $.eduCage = new function(){};
		
		$.extend(self, {
			eduCageImgs : [
                'https://i.ibb.co/rb5WR3X/IMG-20181214-WA0010.jpg',
                'https://i.ibb.co/S6qTCzv/IMG-20181214-WA0012.jpg',
                'https://i.ibb.co/2KB07ft/IMG-20181214-WA0030.jpg',
                'https://i.ibb.co/rm4zHDN/IMG-20181218-WA0042.jpg',
                'https://i.ibb.co/RSJ7GPM/IMG-20181219-WA0019.jpg',
                'https://i.ibb.co/HpxsbQF/IMG-20190124-WA0002.jpg',
                'https://i.ibb.co/fqndKzJ/IMG-20190208-WA0025.jpg',
                'https://i.ibb.co/0M2N6YN/IMG-20190210-WA0008.jpg',
                'https://i.ibb.co/02LQb6b/IMG-20190216-WA0013.jpg',
                'https://i.ibb.co/pwszBQ5/IMG-20190217-WA0003.jpg',
                'https://i.ibb.co/3F7djpn/IMG-20190220-WA0004.jpg',
                'https://i.ibb.co/qkJ31S9/IMG-20190221-WA0006.jpg',
                'https://i.ibb.co/0F5bnDZ/IMG-20190228-WA0044.jpg',
                'https://i.ibb.co/HVXGW4b/IMG-20190228-WA0045.jpg',
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.eduCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 