// var fbData = new Firebase("https://decodaquote.firebaseio.com/");
var tabletArray = [];


$(function(){

	var fbData = new Firebase("https://decodaquote.firebaseio.com/");
	

	tablets = function (imgSrc, title, description, tag){
		this.img = imgSrc;
		this.title = title;
		this.description = description;
		this.tag = tag
		this.pushArray = function(){
			tabletArray.push(this);
			console.log("added to array");
			console.log(tabletArray);
		}
		this.pushArray();
	};

	var quoteables = new tablets("../img/tablets/Quotables160.jpg", 'Quotables', '100 hundred pithy and thoughtful sayings you are glad somebody said because they feel good to quote . . . and to solve.', 'tag');
	var decodeMe = new tablets("../img/tablets/DecodeMe_Cover160.jpg", 'Decode Me', '100 excellent thoughts awaiting your sleuthing scrutiny.');
	var sitASpell = new tablets("../img/tablets/SitASpellCover160.jpg", 'Sit A Spell', '100 quotations worth chatting about over a cup of tea')

	function applyTemplate(){
		console.log("apply template called...");
		$.get('TableTemplate/tabletTemplate.html', function(data){
			for (i = 0; i < tabletArray.length; i ++){
				console.log('looping...');
				var compileTemplate = Handlebars.compile(data);
	      var push = compileTemplate(tabletArray[i]);
	      $('.templateAnchor').append(push);
	      console.log('ran.');
    	};	
		});
	}
	
applyTemplate();
	

});