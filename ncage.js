(function() {
	//nCage 
	var main = function($) { 
		
		var self = $.nCage = new function(){};
		
		$.extend(self, {
			nCageImgs : [
			'http://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/220px-Nicolas_Cage_2011_CC.jpg',
			'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg/220px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg',
			'http://content8.flixster.com/rtactor/40/33/40334_pro.jpg',
			'http://images.fandango.com/r88.0/ImageRenderer/200/295/images/performer_no_image_large.jpg/0/images/masterrepository/performer%20images/p10155/kickass-pm-4.jpg',
			'http://topnews.in/files/Nicolas-Cage_0.jpg',
			'http://i0.kym-cdn.com/entries/icons/original/000/006/993/1817.jpg',
			'http://images.trulia.com/blogimg/9/d/7/d/1775659_1302741896636_o.jpg',
			'http://cache2.artprintimages.com/LRG/10/1062/Y4UL000Z.jpg',
			'http://fitnessgurunyc.com/wp/wp-content/uploads/2011/03/5c4fc_nicolas_cage_01.jpeg',
			'http://www3.pictures.fp.zimbio.com/Nicholas+Cage+David+Letterman+-EtX2RCI91al.jpg',
			'http://www.topnewmovieslist.com/wp-content/uploads/2012/05/Nicolas-Cage-Movies.jpg',
			'http://resources2.news.com.au/images/2009/11/04/1225794/400950-nicolas-cage.jpg',
			'http://www.topnews.in/uploads/Nicolas-Cage1.jpg',
			'http://d2tq98mqfjyz2l.cloudfront.net/image_cache/1335739369248357_animate.gif',
			'http://thetrustadvisor.com/wp-content/uploads/2013/03/nicolas-cage.jpg',
			'http://starsmedia.ign.com/stars/image/article/908/908074/nicolas-cage-20080905025038648-000.jpg',
			'http://images.latinospost.com/data/images/full/10956/nicolas-cage.jpg?w=600',
			'http://wpc.556e.edgecastcdn.net/80556E/img.news/NEPYPT3WQzBeUP_1_1.jpg',
			'http://www.iwatchstuff.com/2012/11/30/nic-cage-in-things.jpg',
			'http://images.contactmusic.com/newsimages/nicolas_cage_552048.jpg',
			'http://www.apnatimepass.com/nicolas-cage-in-stolen-movie-10.jpg',
			'http://24.media.tumblr.com/e68455822f14c29d43bacbc19f15ed36/tumblr_mr1kquuOvD1rimb2bo1_400.jpg',
			'http://doubleaardvarkmedia.com/wp-content/uploads/2013/07/nicolas_cage_1193538-450-x-450.jpg',
			'http://static2.businessinsider.com/image/4adcd99800000000009ed0dd/how-nicolas-cage-spent-his-way-to-the-poorhouse.jpg',
			'http://www1.pictures.zimbio.com/pc/Nicolas+Cage+Nicolas+Cage+Emma+Stone+Croods+AbN87pQpWsjl.jpg',
			'http://signaltower.co/wp-content/uploads/2013/03/crazy-nicholas-cage-placeholder-image.jpg',
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
			self.handleImages(self.nCageImgs, 3000);
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
 
 