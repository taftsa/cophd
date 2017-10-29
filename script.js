var comics = [
	{number:'000', title:'A Terrible Idea', date:'8/4/2017', hover:'So... Colorado is a character?'}, 
	{number:'001', title:'Boulder "Food"', date:'8/6/2017', hover:'Yep. Colorado is a character.'},
	{number:'002', title:'Things to Do in Colorado', date:'8/14/2017', hover:'Did you know they have Netflix here?!'},
	{number:'003', title:'What\'s in a name?', date:'8/20/2017', hover:'If she gets the job, he will have to learn my name. Or I\'ll have to change it...'},
	{number:'004', title:'A Total Eclipse of the Played-Out 80\'s Music Joke', date:'8/27/2017',  hover:'We were able to see one star, but...'},
	{number:'005', title:'Grammatical Efficiency', date:'9/4/2017', hover:'We seriously need to do something interesting.'},
	{number:'006', title:'We Are What You Would Call "Indoorsy"', date:'9/10/2017', hover:'In our defense, we didn\'t plan well and barely paid attention to the path.'},
	{number:'007', title:'Free Money!', date:'9/17/2017', hover:'She actually couldn\'t tell the difference between me and the video. It was pretty not-the-same.'},
	{number:'008', title:'Needing Ingredients is Fake News', date:'9/24/2017', hover:'There\'s two different styles of "y" in "Anyway." Huh.'},
	{number:'009', title:'Win Some, Lose Some', date:'10/1/2017', hover:'Amy is Mrs. Taft\'s favorite.'},
	{number:'010', title:'An Arm and a Leg', date:'10/8/2017', hover:'The sun has the BSATS accent pattern around it.'},
	{number:'011', title:'Very Car. Much Problems.', date:'10/15/2017', hover:'I guess Car Talk can\'t solve ALL of my problems...'},
	{number:'012', title:'The Secret Ingredient', date:'10/22/2017', hover:'This anecdote used with permission.'},
	{number:'013', title:'Déjà Vu', date:'10/29/2017', hover:'Hey, I LIKE drawing the kitchen!'},
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
