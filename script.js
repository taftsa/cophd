var comics = [
	{number:'000', title:'A Terrible Idea', date:'8/4/2017', hover:'So... Colorado is a character?'}, 
	{number:'001', title:'Boulder "Food"', date:'8/6/2017', hover:'Yep. Colorado is a character.'},
	{number:'002', title:'Things to Do in Colorado', date:'8/14/2017', hover:'Did you know they have Netflix here?!'},
	{number:'003', title:'What\'s in a name?', date:'8/20/2017', hover:'If she gets the job, he will have to learn my name. Or I\'ll have to change it...'}
];

$(document).on("click", "#prev", function(){
	var currentComic = $('#number').html() / 1;
		
	if (currentComic != 0) {
		$('#comicImg').attr('src', 'comics/' + comics[currentComic - 1].number + '.jpg');
		$('#comicImg').attr('title', comics[currentComic - 1].hover);		
		$('#number').html(comics[currentComic - 1].number);
		$('#title').html(comics[currentComic - 1].title);
		$('#date').html(comics[currentComic - 1].date);		
	};
});

$(document).on("click", "#next", function(){
	var currentComic = $('#number').html() / 1;
		
	if ((currentComic + 1) < comics.length) {
		$('#comicImg').attr('src', 'comics/' + comics[currentComic + 1].number + '.jpg');
		$('#comicImg').attr('title', comics[currentComic + 1].hover);		
		$('#number').html(comics[currentComic + 1].number);
		$('#title').html(comics[currentComic + 1].title);
		$('#date').html(comics[currentComic + 1].date);
	};
});

$(document).ready(function() {
	var newestComic = comics[(comics.length - 1)];	

    	$('#comicImg').attr('src', 'comics/' + newestComic.number + '.jpg');
	$('#comicImg').attr('title', newestComic.hover);	
	$('#number').html(newestComic.number);
	$('#title').html(newestComic.title);
	$('#date').html(newestComic.date);
});
