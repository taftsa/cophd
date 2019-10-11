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
	{number:'014', title:'Episode 4', date:'11/5/2017', hover:'How is the trash can open?'},
	{number:'015', title:'A Mysterious Message', date:'11/12/2017', hover:'Vague hover text is vague.'},
	{number:'016', title:'Do All of the Things', date:'11/19/2017', hover:'The taillights weren\'t actually out, I just don\'t know how cars work.'},
	{number:'017', title:'Countdown to Christmas', date:'11/26/2017', hover:'Apparently, our TV is, like, 8 feet tall.'},
	{number:'018', title:'Washington, We Have a Problem', date:'12/3/2017', hover:'This is \'Murica, we don\'t care what time it is anywhere else.'},
	{number:'019', title:'Priorities', date:'12/10/2017', hover:'Actually, yeah, that\'s fair.'},
	{number:'020', title:'Montage', date:'12/17/2017', hover:'Two more days, two more days, two more...'},
	{number:'021', title:'Guest Artist - Hannah Roldan', date:'1/14/2018', hover:'Hannah has ALL of the talent.'},
	{number:'022', title:'Back to "Normal"', date:'1/21/2018', hover:'That\'s orange juice in the second frame, by the way.'},
	{number:'023', title:'Less Free Parking than Monopoly', date:'1/28/2018', hover:'Sometimes you feel like you\'re just moving around in circles.'},
	{number:'024', title:'The Happiest of Birthdays', date:'2/4/2018', hover:'Until this comic was uploaded, all of this year\'s comics were dated 2017.'},
	{number:'025', title:'Graduate-Level Performance', date:'2/11/2018', hover:'I think they spent more time talking about it than we spent playing.'},
	{number:'026', title:'CPR, Sort Of', date:'2/20/2018', hover:'There\'s a LOT I could have made fun of, but I didn\'t have space.'},
	{number:'027', title:'Christmas Money', date:'2/27/2018', hover:'Wait, "Scrubs" had a season 9? I don\'t think that\'s right.'},
	{number:'028', title:'Manuscript Submission', date:'3/6/2018', hover:'One of the most daunting submit buttons ever.'},
	{number:'029', title:'Vignettes', date:'3/13/2018', hover:'You can\'t NOT buy beef for $1.99/lb.!'},
	{number:'030', title:'Substitute Teacher', date:'3/20/2018', hover:'The original idea for the last frame was the building on fire.'},
	{number:'031', title:'We Live Here', date:'4/3/2018', hover:'Roz would be proud.'},
	{number:'032', title:'TTODBDILBRCE', date:'4/10/2018', hover:'Weirdest study session ever.'},
	{number:'033', title:'Word Definitions', date:'4/17/2018', hover:'Moral of the story: Don\'t define words.'},
	{number:'034', title:'Ghost Phone', date:'4/24/2018', hover:'There\'s not a clock there. I don\'t know why I drew a clock there.'},
	{number:'035', title:'Grey\'s Anatomy', date:'5/1/2018', hover:'Caveat: Grey is still alive (for now).'},
	{number:'036', title:'Season Finale', date:'5/8/2018', hover:'Getting bumped to Tuesday was a hard blow, but I think we can recover.'},
	{number:'037', title:'Ready Go', date:'8/21/2018', hover:'It was pretty good for a surprise statistics class.'},
	{number:'038', title:'Dinosaur Hunt', date:'8/28/2018', hover:'The place we were looking for had fossils. That\'s why it\'s called "Dinosaur Hunt." I know that\'s not clear from the comic.'},
	{number:'039', title:'Actually Doin\' Stuff', date:'9/4/2018', hover:'Dante WAS a Dragonair...'},
	{number:'040', title:'Reading for Class', date:'9/11/2018', hover:'For context, class is on Wednesday'},
	{number:'041', title:'Scrimping and Saving', date:'9/18/2018', hover:'We actually got two. I prefer the Southwest to the Sweet Kale.'},
	{number:'042', title:'Life, the Universe, and Everything', date:'9/25/2018', hover:'And definitely don\'t write a comic advertising it.'},
	{number:'043', title:'Rocky Mountain National Highway', date:'10/02/2018', hover:'To see paradise / I just need a parking spot'},
	{number:'044', title:'We Interrupt This "Comic"', date:'10/9/2018', hover:'It\'s REALLY important, guys.'},
	{number:'045', title:'Fantasy Football', date:'10/16/2018', hover:'Actually not the worst team; 7th out of 10 at the moment!'},
	{number:'046', title:'Three Things in One Week', date:'10/23/2018', hover:'I really like drawing stick saxophone players.'},
	{number:'047', title:'p = .051', date:'10/30/2018', hover:'Three guesses how many I got through before I got tired.'},
	{number:'048', title:'A Slight Exaggeration', date:'11/6/2018', hover:'Not exact numbers, but equally insane.'},
	{number:'049', title:'A Rather Blustery Day', date:'11/13/2018', hover:'Oh the wind is lashing lustily / And the trees are thrashing thrustily / And the leaves are rustling gustily'},
	{number:'050', title:'Only 50?', date:'11/27/2018', hover:'Becca is holding a third dog, FYI.'},
	{number:'051', title:'Christmas Tree Cakes', date:'12/4/2018', hover:'King Soopers is Kroger, in case Easterners don\'t know.'},
	{number:'052', title:'What We Have Here...', date:'12/11/2018', hover:'...is me being dumb.'},
	{number:'053', title:'Perspective', date:'12/18/2018', hover:'Moon not to scale (probably).'},
	{number:'054', title:'Next Week, Probably', date:'1/29/2019', hover:'Fun procedural note: I\'ve been scanning these as .pdf files and converting to .jpg, but it turns out that my scanner can just create .jpg files! I\'m smart.'},
	{number:'055', title:'To-Do Lists', date:'2/5/2019', hover:'[muffled shouting]'},
	{number:'056', title:'No Statistically Significant Predictors', date:'2/12/2019', hover:'Also no significant indicators of "Focus."'},
	{number:'057', title:'Customer Service', date:'2/19/2019', hover:'"Have you tried deleting your return and starting over again?"'},
	{number:'058', title:'Work.', date:'2/26/2019', hover:'Work.'},
	{number:'059', title:'A Few Extra Steps', date:'3/5/2019', hover:'I\'m pretty sure Tom and Ray said negative to negative was okay, but...'},
	{number:'060', title:'Colorado Weather', date:'3/12/2019', hover:'We\'ll see.'},
	{number:'061', title:'Bar Gig', date:'3/19/2019', hover:'SCARAMOUCHE! SCARAMOUCHE! WILL YOU DO THE FANDANGO?'},
	{number:'062', title:'Pandemic', date:'3/26/2019', hover:'That went... poorly.'},
	{number:'063', title:'Spring Break', date:'4/2/2019', hover:'Our office has carpeted walls. That\'s not related, but...'},
	{number:'064', title:'Toronto, ON', date:'4/9/2019', hover:'Norfolk, VA has a Tim Hortons, and I\'m excited about it.'},
	{number:'065', title:'Thanks, Statistics!', date:'4/16/2019', hover:'Statistics are fun. No, seriously!'},
	{number:'066', title:'Easter Lunch', date:'4/23/2019', hover:'Good poutine, though.'},
	{number:'067', title:'Colorado Weather', date:'4/30/2019', hover:'And I thought Virginia weather was inconsistent.'},
	{number:'068', title:'Locker Renewal', date:'4/7/2019', hover:'The pay is good, though.'},
	{number:'069', title:'The Epic Conclusion', date:'8/26/2019', hover:'THE FIIINAAAL PAAAPERRR!!'},
	{number:'070', title:'600/1100', date:'9/2/2019', hover:'In my defense, he said there was only one classroom on the 11th floor.'},
	{number:'071', title:'Artistic License', date:'9/9/2019', hover:'This show has really gone downhill. Can we please change the channel?'},
	{number:'072', title:'Miniature Golf', date:'9/16/2019', hover:'We paid, but none of us are sure whether we really had to pay.'},
	{number:'073', title:'Overconfidence', date:'9/23/2019', hover:'We did not win.'},
	{number:'074', title:'Toccata and Fugue', date:'9/30/2019', hover:'Yes, I drew the stems wrong in the first panel.'},
	{number:'075', title:'Thing Explained', date:'10/10/2019', hover:'Using only the 1000 most commonly used words according to Randall Munroe.'},
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
