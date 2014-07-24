var execsLoaded = false;

$(window).scroll(function(event) {
	if (!execsLoaded){
		if ($("#execs").offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			var team = [
			{
				fname: "munira",
				lname: "lila",
				events: "<span id='text-imp'>Co-Chair</span>",
				description: "Nickname: <span id='text-imp'>Muni, Munirz, Munz, Cash Money</span><br><br> Program: <span id='text-imp'>Anthropology & Global Health </span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'>Doing it the Dot is the best walking tour of Toronto that I have ever been on. </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>I would bring a cross bow - I would want something that could serve as protection, but wouldn't draw attention to myself if I used it. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'>I would be a sea monster because ruling the seas sounds pretty awesome.</span>",
				image: "images/team/Munira.jpg"
			},
			{
				fname: "niroja",
				lname: "thirugnanasampanthar",
				events: "<span id='text-imp'>Co-Chair</span>",
				description: "Nickname: <span id='text-imp'> Big T, Niroro, T-Panthar</span><br><br>Program: <span id='text-imp'>Political Science, History, Cinema Studies</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'>Doin' it in the Dot is undoubtedly the coolest, yet strangest tour of Toronto! Get your watermelons ready! </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>Hands down I would bring a camcorder so that I could bust out some Blair Witch Project moves up in this crib. Dat handheld night vision action doe. </span><br><br>If you could be any monster, which would you choose? <span id='text-imp'><br>If horror villains counted as monsters I would want to be Freddy Krueger, without a doubt. That being said, I think I'll settle being a deadite because I would have the beauty of a zombie and the cool factor of a demon.</span>",
				image: "images/team/Niroja.jpg"
			},
			{
				fname: "candi kimberly",
				lname: "chin-sang",
				events: "Events: <span id='text-imp'>Be the Change, Sound, Design</span>",
				description: "Program: <span id='text-imp'>Criminology Studies, Equity Studies, and Caribbean Studies </span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'>ERRTHANG</span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you?  <br><span id='text-imp'>Bug spray. I can deal with monsters and ghosts, but not with creepy crawlies. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'>Cookie Monster! Nomnomnom https://www.youtube.com/watch?v=9PnbKL3wuH4 </span>",
				image: "images/team/Candi.jpg"
			},
			{
				fname: "rochelle",
				lname: "coelho",
				events: "Events: <span id='text-imp'>Be the Change, Club Night Alt.</span>",
				description: "Program: <span id='text-imp'>English and International Relations</span><br><br>Favourite part of UC Orientation: <br><span id='text-imp'>Doin it in the Dot </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>A big blanket and hide under it all night </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'>Loch Ness monster (Nessie) because no one even knows if I'm real or not and I would just want to come out an be like haaaaaaaiiii y'all yes it is I, I am real, enjoy me and my realness.</span>",
				image: "images/team/Rochelle.jpg"
			},
			{
				fname: "eros",
				lname: "grinzato",
				events: "Events: <span id='text-imp'>Be the Change, Finance</span>",
				description: "Program: <span id='text-imp'>Economics and Contemporary Asian Studies</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'>Tradition! Is anyone allergic to latex? </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you?  <br><span id='text-imp'>A Diglet. If anything goes wrong it's just gonna dig a hole and get me out of there. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'>Some kind of creature designed by H.R. Giger. I've always loved his unique style.</span>",
				image: "images/team/Eros.jpg"
			},
			{
				fname: "hisham",
				lname: "imtiaz",
				events: "Events: <span id='text-imp'>Bring it On, Registration, Design</span>",
				description: "Program: <span id='text-imp'>Criminology and Sociology</span><br><br>Favourite part of UC Orientation: <br><span id='text-imp'>The bonds that you get to create with others. You are thrown into a pool of strangers, but once the week is done some of those people will become the closest friends you have during university. </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>A flashlight because the scariest s**t is the stuff you can't see coming. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'>I would have to go with a Clicker, a zombie that uses sonar to find its prey. As for why, HAVE YOU PLAYED \"THE LAST OF US\". These guys are just standing around doing whatever zombies do when they aren't chomping on humans, but once they hear you make a sound it is GAME OVER. Fast, ugly, and capable making some of the creepiest sounds imaginable. What could possibly make for a scarier monster?</span>",
				image: "images/team/Hisham.jpg"
			},
			{
				fname: "subothan",
				lname: "inpanathan",
				events: "Events: <span id='text-imp'>Beach, Midnight Madness</span>",
				description: "Nickname: <span id='text-imp'>Subo</span><br><br>Program: <span id='text-imp'>Double major in Molecular Genetics & Microbiology and Health & Disease</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'>Meeting new people and the chance to help people rediscover themselves! Oh and everything else about, cause UC is just that awesome! </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>A green lantern power ring, cause with the power of imagination its all gonna be hakuna matata! </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'>I would be a Lycan ( Underworld >> Twilight werewolves). Nuff said.</span>",
				image: "images/team/Subo.jpg"
			},
			{
				fname: "ammar",
				lname: "javed",
				events: "Events: <span id='text-imp'>Registration, Open Mic, Tradition</span>",
				description: "Program: <span id='text-imp'>Computer Science</span><br><br>Favourite Part of UC Orientation: <span id='text-imp'><br>The music. Definitely the music. </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>I'd take The Book of Abramelin to learn to control the monsters inside. You know..make 'em do my bidding and what not... </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'>I'd love to be Typheous, the God/Monster from Greek mythology. He had a bunch of cool monster babies with the hottie Echidna; like who doesn't want to share the rest of their lives with her?!</span>",
				image: "images/team/Ammar.jpg"
			},
			{
				fname: "kimia",
				lname: "karbasy",
				events: "Events: <span id='text-imp'>Sponsorship, Meals</span>",
				description: "Nickname: <span id='text-imp'> Kim-EYE-YA</span><br><br>Program: <span id='text-imp'> Double Major in Nutritional Sciences & Biochemistry </span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> Taking over downtown Toronto, of course! </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>  Ouija board so I can have a little chat with the deceased. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> Vampire, (the Vampire Diaries version of one) since they seem to live for eternity being quite beautiful</span>",
				image: "images/team/Kimia.jpg"
			},
			{
				fname: "will",
				lname: "lu",
				events: "Events: Get Active/Creative, Club Night Alt</span>",
				description: "Nickname: <span id='text-imp'> Will, \"DAMMIT WILL\"</span><br><br>Program: <span id='text-imp'> Physics</span><br><br>Favourite part of UC Orientation: <br><span id='text-imp'> Becoming best friends with everyone after the first day, being totally ratchet (in the best way), and having an amazing time overall! </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> Can I bring a person? I would take Niroja with me cause she don't take shit from ghosts or zombies or whatnot. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> STITCH.</span>",
				image: "images/team/Will.jpg"
			},
			{
				fname: "rachel",
				lname: "matheson",
				events: "Events: <span id='text-imp'>Design, Beach</span>",
				description: "Program: <span id='text-imp'> Psychology & Anthropology</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> Making new friends and seeing new students come to love UC just as much as I have. </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> A friend! Just having some company would be nice, but I would definitely choose someone who is into horror movies so that they would go exploring with me. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> I was going to go with werewolf since I’m a bit of a night-owl, but then I would just have to spend way too much on shaving supplies. I would be a dragon. Flying and breathing fire sounds pretty awesome to me.</span>",
				image: "images/team/Rachel.jpg"
			},
			{
				fname: "daniel",
				lname: "neiman",
				events: "Events: <span id='text-imp'>Bring it On, Open Mic Night, Web</span>",
				description: "Program: <span id='text-imp'> Neuroscience</span><br><br>Favourite part of UC Orientation: <br><span id='text-imp'> The incoming Frosh! </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> An invisibility cloak to hide from the ghosts and ghouls. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> I’d be a Pocket Monster, or a PokéMon! Specifically a cute adorable Skitty because cats are the best thing in the world.</span>",
				image: "images/team/Daniel.jpg"
			},
			{
				fname: "michelle",
				lname: "nguyen",
				events: "Events: <span id='text-imp'>Red and White, Meals</span>",
				description: "Nickname: <span id='text-imp'> Squishymichyy</span><br><br>Program: <span id='text-imp'> double major in human bio: health & disease and pharmacology; minor in physiology</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> midnight madness</span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>  I would bring the ghost busters</span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> I would be a vampire-werewolf hybrid (vampire diaries)</span>",
				image: "images/team/Michelle.jpg"
			},
			{
				fname: "sarah",
				lname: "peters",
				events: "Events: <span id='text-imp'>Design, FYI:Survival Guide</span>",
				description: "Program: <span id='text-imp'> Neuroscience, Psychology, & French</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> I like getting to know everyone and seeing how quickly everyone becomes BFFz. I also can't say enough great things about Awkwardfest. </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>  I would bring my bed so that I could hide under the covers the whole time... covers have a magical power to shield you from any monster! </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> I'd be a mermaid so that I wouldn't have to pay for flights when I go on vacation, I could just swim across da sea! Plus, swimming all the time would give me really toned arms.</span>",
				image: "images/team/Sarah.jpg"
			},
			{
				fname: "asma",
				lname: "rafiquddin",
				events: "Events: <span id='text-imp'>Design, Club Night</span>",
				description: "Program: <span id='text-imp'> Near and Middle Eastern Civilizations and Archaeology </span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> Tradition. Definitely Tradition  </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> An emergency pack, fully equipped to deal with any supernatural being I may encounter. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> I'd be a dragon so I could fly as far as I wanted and create fire out of nothing.</span>",
				image: "images/team/Asma.jpg"
			},
			{
				fname: "stephanie",
				lname: "rizzetto",
				events: "Events: <span id='text-imp'>Finance, Amazing Race</span>",
				description: "Program: <span id='text-imp'> Neuroscience and Cognitive Science</span><br><br>Favourite part of UC Orientation: <br><span id='text-imp'> Everything! What’s not to love?! </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> Flash light, things are a little less terrifying when you can see them...sometimes not, but I’d rather see what I’m about to run away from! </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> I’d be a ghost, so I could scare people but also fly all over the world! Might as well spend eternity travelling!</span>",
				image: "images/team/Steph.jpg"
			},
			{
				fname: "jordana",
				lname: "schiralli",
				events: "Events: <span id='text-imp'>Registration, FYI:Survival Guide</span>",
				description: "Program: <span id='text-imp'> Psychology</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> Tradition!  Don’t forget your goats and goldfish crackers. </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>  Blankets so I can sleep until it’s over. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> A basilisk. Why? Because Harry Potter (except I’ll be a cool basilisk that doesn’t get blinded and killed).</span>",
				image: "images/team/Jordanna.jpg"
			},
			{
				fname: "eric",
				lname: "schwenger",
				events: "Events: <span id='text-imp'>Monster Madness, PRE UofT</span>",
				description: "Nickname: <span id='text-imp'> Schweng, Schwenger</span><br><br>Program: <span id='text-imp'> Ethics, Society & Law (Humanities?) </span><br><br> Favourite Part of UC Orientation: <br><span id='text-imp'> TRADITION!! :D</span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> A flashlight! </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> I would be a Vampire because they can live forever! (I would also be a Troll, because Taylor :P)</span>",
				image: "images/team/Eric.jpg"
			},
			{
				fname: "chloe",
				lname: "spatola",
				events: "Events: <span id='text-imp'>Amazing Race, Meals</span>",
				description: "Program: <span id='text-imp'> Sociology </span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> Everything! But especially the friendships made. </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> A pair of sensible shoes, of course. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> Probably a ghost, only because I feel like they're the friendliest of monsters; like Casper!</span>",
				image: "images/team/Chloe.jpg"
			},
			{
				fname: "cyrus",
				lname: "silverstrider",
				events: "Events: <span id='text-imp'>Meals, FYI:UofT</span>",
				description: "Nickname: <span id='text-imp'> Cy</span><br><br>Program: <span id='text-imp'> English</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> Doin' It In The Dot - it's fun to explore Toronto! </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>  Popcorn. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> A vampire. Team Edward!</span>",
				image: "images/team/Cyrus.jpg"
			},
			{
				fname: "nikki",
				lname: "tavassoli",
				events: "Events: <span id='text-imp'>Club Night, Red and White, Social Media</span>",
				description: "Program: <span id='text-imp'> Psychology, Biology, History and Philosophy of science</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> Tradition and Midnight madness </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> Casper the friendly ghost!! </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> Vampire! Duh. .. sparkle in the sun .. Damon Salvatore .. Edward Cullen .. Why not? Oh and you know, to live forever.</span>",
				image: "images/team/Nikki.jpg"
			},
			{
				fname: "adolf",
				lname: "toral",
				events: "Events: <span id='text-imp'>Sponsorship, Sound, Get Active/Creative</span>",
				description: "Nickname: <span id='text-imp'> Kerplunk Scholar</span><br><br>Program: <span id='text-imp'> Bioethics and Political Science</span><br><br>Favourite part of UC Orientation: <br><span id='text-imp'> Trick question; I can't just like one part of UC Orientation. I like everything about it. ;P </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> I would bring someone who runs slower than I do. </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> I'd be a vampire. Why not?</span>",
				image: "images/team/Adolf.jpg"
			},
			{
				fname: "sunny",
				lname: "wang",
				events: "Events: <span id='text-imp'>Sponsorship, Social Media, Doin' It in the Dot</span>",
				description: "Nickname: <span id='text-imp'> Any and all weather-related phenomenons</span><br><br>Program: <span id='text-imp'> Pharma-UC</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> the tradition of it all, to be part of something that's so much bigger than you with so much history is truly amazing</span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'>  a phone cuz...http://www.youtube.com/watch?v=r1-NvLJFDsw</span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> Zombie, cuz they are the living dead and I love oxymorons.</span>",
				image: "images/team/Sunny.jpg"
			},
			{
				fname: "leah",
				lname: "west",
				events: "Events: <span id='text-imp'>Meals, Doin' It in the Dot</span>",
				description: "Program: <span id='text-imp'> Humanities</span><br><br>Favourite Part of UC Orientation: <br><span id='text-imp'> Bring it on! </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> Snacks. Can't fight monsters on an empty stomach! </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> Definitely a sea monster, like Loch Ness. Combining my love of stealth and swimming!</span>",
				image: "images/team/Leah.jpg"
			},
			{
				fname: "sophie",
				lname: "wolpert",
				events: "Events: <span id='text-imp'>Sponsorship, Beach</span>",
				description: "Program: <span id='text-imp'> Women & Gender Studies </span><br><br>Favourite part of UC Orientation: <br><span id='text-imp'> Seeing a bunch of students go from strangers to best buds in one week!! </span><br><br>You are spending the night in a haunted house. What is the one thing you choose to take with you? <br><span id='text-imp'> My dog Chimo, so he could protect me from the monsters!! </span><br><br>If you could be any monster, which would you choose? <br><span id='text-imp'> A COOKIE MONSTER, no explanation needed…</span>",
				image: "images/team/Sophie.jpg"
			}
			]

			var length = team.length;
			for (var i = 0; i < length; i++)
			{
				if (i == 0 || i % 5 == 0){
					$("#execs-div").append('<div class="row">');
				}
				$("#execs-div").append('<img class="exec-img hasTooltip" src="' + team[i].image + '"/ >' );
				$("#execs-div").append('<div class="hidden">' + 
					'<h2>' + team[i].fname + ' ' + team[i].lname + '</h2><br>' + 
					'<p class="popup-text">' + team[i].events + '<br><br>' +
					team[i].description + '</p></div>');
				if (i == 0 || i % 5 == 0){
					$("#execs-div").append('</div>');
				}
			}
			execsLoaded = true;

			$('.hasTooltip').each(function() {
				$(this).qtip({
					content: {
        				text: $(this).next('div') // Use the "div" element next to this for the content
					},
		            style: {
		                classes: 'qtip-tipsy',
        		    },
        		    position: {
        		    	my: 'bottom center',
        		    	at: 'top center',
        		    	target: 'mouse',
        		    	viewport: $('#execs-div'),
        		    	adjust: {
        		    		mouse: true,
        		    		scroll: false
        		    	}
        		    }
				});
			});
		}
	}
});