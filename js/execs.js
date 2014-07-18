var execsLoaded = false;

$(window).scroll(function(event) {
	if (!execsLoaded){
		if ($("#execs").offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			var team = [
			{
				fname: "MUNIRA",
				lname: "LILA",
				events: "Co-Chair",
				description: "Nickname: Muni, Munirz, Munz, Cash Money <br> Program: Anthropology & Global Health <br>Favourite Part of UC Orientation: Doing it the Dot is the best walking tour of Toronto that I have ever been on. <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? I would bring a cross bow - I would want something that could serve as protection, but wouldn't draw attention to myself if I used it. <br>If you could be any monster, which would you choose? I would be a sea monster because ruling the seas sounds pretty awesome.",
				image: "/images/team/Munira.png"
			},
			{
				fname: "NIROJA",
				lname: "THIRUGNANASAMPANTHAR",
				events: "Co-Chair",
				description: "Nickname: Big T, Niroro, T-Panthar<br>Program: Political Science, History, Cinema Studies<br>Favourite Part of UC Orientation: Doin' it in the Dot is undoubtedly the coolest, yet strangest tour of Toronto! Get your watermelons ready! <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? Hands down I would bring a camcorder so that I could bust out some Blair Witch Project moves up in this crib. Dat handheld night vision action doe. <br>If you could be any monster, which would you choose? If horror villains counted as monsters I would want to be Freddy Krueger, without a doubt. That being said, I think I'll settle being a deadite because I would have the beauty of a zombie and the cool factor of a demon.",
				image: "/images/team/Niroja.png"
			},
			{
				fname: "CANDI KIMBERLY",
				lname: "CHIN-SANG",
				events: "Be the Change, Sound, Design",
				description: "Program: Criminology Studies, Equity Studies, and Caribbean Studies <br>Favourite Part of UC Orientation: ERRTHANG <br>You are spending the night in a haunted house. What is the one thing you choose to take with you?  Bug spray. I can deal with monsters and ghosts, but not with creepy crawlies. <br>If you could be any monster, which would you choose? Cookie Monster! Nomnomnom https://www.youtube.com/watch?v=9PnbKL3wuH4",
				image: "/images/team/Candi.png"
			},
			{
				fname: "ROCHELLE",
				lname: "COELHO",
				events: "Be the Change, Club Night Alt.",
				description: "Program: English and International Relations<br>Favourite part of UC Orientation: Doin it in the Dot <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? A big blanket and hide under it all night <br>If you could be any monster, which would you choose?  Loch Ness monster (Nessie) because no one even knows if I'm real or not and I would just want to come out an be like haaaaaaaiiii y'all yes it is I, I am real, enjoy me and my realness.",
				image: "/images/team/Rochelle.png"
			},
			{
				fname: "EROS",
				lname: "GRINZATO",
				events: "Be the Change, Finance",
				description: "Program: Economics and Contemporary Asian Studies<br>Favourite Part of UC Orientation: Tradition! Is anyone allergic to latex? <br>You are spending the night in a haunted house. What is the one thing you choose to take with you?  A Diglet. If anything goes wrong it's just gonna dig a hole and get me out of there. <br>If you could be any monster, which would you choose? Some kind of creature designed by H.R. Giger. I've always loved his unique style.",
				image: "/images/team/Eros.png"
			},
			{
				fname: "HISHAM",
				lname: "IMTIAZ",
				events: "Bring it On, Registration, Design",
				description: "Program: Criminology and Sociology<br>Favourite part of UC Orientation: The bonds that you get to create with others. You are thrown into a pool of strangers, but once the week is done some of those people will become the closest friends you have during university. <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? A flashlight because the scariest s**t is the stuff you can't see coming. <br>If you could be any monster, which would you choose? I would have to go with a Clicker, a zombie that uses sonar to find its prey. As for why, HAVE YOU PLAYED \"THE LAST OF US\". These guys are just standing around doing whatever zombies do when they aren't chomping on humans, but once they hear you make a sound it is GAME OVER. Fast, ugly, and capable making some of the creepiest sounds imaginable. What could possibly make for a scarier monster?",
				image: "/images/team/Hisham.png"
			},
			{
				fname: "SUBOTHAN",
				lname: "INPANATHAN",
				events: "Beach, Midnight Madness",
				description: "Nickname: Subo<br>Program: Double major in Molecular Genetics & Microbiology and Health & Disease<br>Favourite Part of UC Orientation: Meeting new people and the chance to help people rediscover themselves! Oh and everything else about, cause UC is just that awesome! <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? A green lantern power ring, cause with the power of  imagination its all gonna be hakuna matata! <br>If you could be any monster, which would you choose? I would be a Lycan ( Underworld >> Twilight werewolves). Nuff said.",
				image: "/images/team/Subo.png"
			},
			{
				fname: "AMMAR",
				lname: "JAVED",
				events: "Registration, Open Mic, Tradition",
				description: "Program: Computer Science<br>Favourite Part of UC Orientation: The music. Definitely the music. <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? I'd take The Book of Abramelin to learn to control the monsters inside. You know..make 'em do my bidding and what not... <br>If you could be any monster, which would you choose? I'd love to be Typheous, the God/Monster from Greek mythology. He had a bunch of cool monster babies with the hottie Echidna; like who doesn't want to share the rest of their lives with her?!",
				image: "/images/team/Ammar.png"
			},
			{
				fname: "KIMIA",
				lname: "KARBASY",
				events: "Sponsorship, Meals",
				description: "Nickname: Kim-EYE-YA<br>Program: Double Major in Nutritional Sciences & Biochemistry <br>Favourite Part of UC Orientation: Taking over downtown Toronto, of course! <br>You are spending the night in a haunted house. What is the one thing you choose to take with you?  Ouija board so I can have a little chat with the deceased. <br>If you could be any monster, which would you choose? Vampire, (the Vampire Diaries version of one) since they seem to live for eternity being quite beautiful",
				image: "/images/team/Kimia.png"
			},
			{
				fname: "WILL",
				lname: "LU",
				events: "Get Active/Creative, Club Night Alt",
				description: "Nickname: Will, \"DAMMIT WILL\"<br>Program: Physics<br>Favourite part of UC Orientation: Becoming best friends with everyone after the first day, being totally ratchet (in the best way), and having an amazing time overall! <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? Can I bring a person? I would take Niroja with me cause she don't take shit from ghosts or zombies or whatnot. <br>If you could be any monster, which would you choose? STITCH.",
				image: "/images/team/Will.png"
			},
			{
				fname: "RACHEL",
				lname: "MATHESON",
				events: "Design, Beach",
				description: "Program: Psychology & Anthropology<br>Favourite Part of UC Orientation: Making new friends and seeing new students come to love UC just as much as I have. <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? A friend! Just having some company would be nice, but I would definitely choose someone who is into horror movies so that they would go exploring with me. <br>If you could be any monster, which would you choose? I was going to go with werewolf since I’m a bit of a night-owl, but then I would just have to spend way too much on shaving supplies. I would be a dragon. Flying and breathing fire sounds pretty awesome to me.",
				image: "/images/team/Rachel.png"
			},
			{
				fname: "DANIEL",
				lname: "NEIMAN",
				events: "Bring it On, Open Mic Night, Web",
				description: "Program: Neuroscience<br>Favourite part of UC Orientation: The incoming Frosh! <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? An invisibility cloak to hide from the ghosts and ghouls. <br>If you could be any monster, which would you choose? I’d be a Pocket Monster, or a PokéMon! Specifically a cute adorable Skitty because cats are the best thing in the world. ",
				image: "/images/team/Daniel.png"
			},
			{
				fname: "MICHELLE",
				lname: "NGUYEN",
				events: "Red and White, Meals",
				description: "Nickname: Squishymichyy<br>Program: double major in human bio: health & disease and pharmacology; minor in physiology<br>Favourite Part of UC Orientation: midnight madness<br>You are spending the night in a haunted house. What is the one thing you choose to take with you?  I would bring the ghost busters<br>If you could be any monster, which would you choose? I would be a vampire-werewolf hybrid (vampire diaries)",
				image: "/images/team/Michelle.png"
			},
			{
				fname: "SARAH",
				lname: "PETERS",
				events: "Design, FYI:Survival Guide",
				description: "Program: Neuroscience, Psychology, & French<br>Favourite Part of UC Orientation: I like getting to know everyone and seeing how quickly everyone becomes BFFz. I also can't say enough great things about Awkwardfest. <br>You are spending the night in a haunted house. What is the one thing you choose to take with you?  I would bring my bed so that I could hide under the covers the whole time... covers have a magical power to shield you from any monster! <br>If you could be any monster, which would you choose? I'd be a mermaid so that I wouldn't have to pay for flights when I go on vacation, I could just swim across da sea! Plus, swimming all the time would give me really toned arms.",
				image: "/images/team/Sarah.png"
			},
			{
				fname: "ASMA",
				lname: "RAFIQUDDIN",
				events: "Design, Club Night",
				description: "Program: Near and Middle Eastern Civilizations and Archaeology <br>Favourite Part of UC Orientation: Tradition. Definitely Tradition  <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? An emergency pack, fully equipped to deal with any supernatural being I may encounter. <br>If you could be any monster, which would you choose? I'd be a dragon so I could fly as far as I wanted and create fire out of nothing.",
				image: "/images/team/Asma.png"
			},
			{
				fname: "STEPHANIE",
				lname: "RIZZETTO",
				events: "Finance, Amazing Race",
				description: "Program: Neuroscience and Cognitive Science<br>Favourite part of UC Orientation: Everything! What’s not to love?! <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? Flash light, things are a little less terrifying when you can see them...sometimes not, but I’d rather see what I’m about to run away from! <br>If you could be any monster, which would you choose? I’d be a ghost, so I could scare people but also fly all over the world! Might as well spend eternity travelling! ",
				image: "/images/team/Steph.png"
			},
			{
				fname: "JORDANA",
				lname: "SCHIRALLI",
				events: "Registration, FYI:Survival Guide",
				description: "Program: Psychology<br>Favourite Part of UC Orientation: Tradition!  Don’t forget your goats and goldfish crackers. <br>You are spending the night in a haunted house. What is the one thing you choose to take with you?  Blankets so I can sleep until it’s over. <br>If you could be any monster, which would you choose? A basilisk. Why? Because Harry Potter (except I’ll be a cool basilisk that doesn’t get blinded and killed).",
				image: "/images/team/Jordanna.png"
			},
			{
				fname: "ERIC",
				lname: "SCHWENGER",
				events: "Monster Madness, PRE UofT",
				description: "Nickname: Schweng, Schwenger<br>Program: Ethics, Society & Law (Humanities?) <br> Favourite Part of UC Orientation: TRADITION!! :D<br>You are spending the night in a haunted house. What is the one thing you choose to take with you? A flashlight! <br>If you could be any monster, which would you choose? I would be a Vampire because they can live forever! (I would also be a Troll, because Taylor :P)",
				image: "/images/team/Eric.png"
			},
			{
				fname: "CHLOE",
				lname: "SPATOLA",
				events: "Amazing Race, Meals",
				description: "Program: Sociology <br>Favourite Part of UC Orientation: Everything! But especially the friendships made. <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? A pair of sensible shoes, of course. <br>If you could be any monster, which would you choose? Probably a ghost, only because I feel like they're the friendliest of monsters; like Casper!",
				image: "/images/team/Chloe.png"
			},
			{
				fname: "CYRUS",
				lname: "SILVERSTRIDER",
				events: "Meals, FYI:UofT",
				description: "Nickname: Cy<br>Program: English<br>Favourite Part of UC Orientation: Doin' It In The Dot - it's fun to explore Toronto! <br>You are spending the night in a haunted house. What is the one thing you choose to take with you?  Popcorn. <br>If you could be any monster, which would you choose? A vampire. Team Edward!",
				image: "/images/team/Cyrus.png"
			},
			{
				fname: "NIKKI",
				lname: "TAVASSOLI",
				events: "Club Night, Red and White, Social Media",
				description: "Program: Psychology, Biology, History and Philosophy of science<br>Favourite Part of UC Orientation: Tradition and Midnight madness <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? Casper the friendly ghost!! <br>If you could be any monster, which would you choose? Vampire! Duh. .. sparkle in the sun .. Damon Salvatore .. Edward Cullen .. Why not? Oh and you know, to live forever.",
				image: "/images/team/Nikki.png"
			},
			{
				fname: "ADOLF",
				lname: "TORAL",
				events: "Sponsorship, Sound, Get Active/Creative",
				description: "Nickname: Kerplunk Scholar<br>Program: Bioethics and Political Science<br>Favourite part of UC Orientation: Trick question; I can't just like one part of UC Orientation. I like everything about it. ;P <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? I would bring someone who runs slower than I do. <br>If you could be any monster, which would you choose? I'd be a vampire. Why not?",
				image: "/images/team/Adolf.png"
			},
			{
				fname: "SUNNY",
				lname: "WANG",
				events: "Sponsorship, Social Media, Doin' It in the Dot",
				description: "Nickname: Any and all weather-related phenomenons<br>Program: Pharma-UC<br>Favourite Part of UC Orientation: the tradition of it all, to be part of something that's so much bigger than you with so much history is truly amazing<br>You are spending the night in a haunted house. What is the one thing you choose to take with you?  a phone cuz...http://www.youtube.com/watch?v=r1-NvLJFDsw<br>If you could be any monster, which would you choose? Zombie, cuz they are the living dead and I love oxymorons.",
				image: "/images/team/Sunny.png"
			},
			{
				fname: "LEAH",
				lname: "WEST",
				events: "Meals, Doin' It in the Dot",
				description: "Program: Humanities<br>Favourite Part of UC Orientation: Bring it on! <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? Snacks. Can't fight monsters on an empty stomach! <br>If you could be any monster, which would you choose? Definitely a sea monster, like Loch Ness. Combining my love of stealth and swimming!",
				image: "/images/team/Leah.png"
			},
			{
				fname: "SOPHIE",
				lname: "WOLPERT",
				events: "Sponsorship, Beach",
				description: "Program: Women & Gender Studies <br>Favourite part of UC Orientation: Seeing a bunch of students go from strangers to best buds in one week!! <br>You are spending the night in a haunted house. What is the one thing you choose to take with you? My dog Chimo, so he could protect me from the monsters!! <br>If you could be any monster, which would you choose? A COOKIE MONSTER, no explanation needed…",
				image: "/images/team/Sophie.png"
			}
			]

			var length = team.length;
			for (var i = 0; i < length; i++)
			{
				$("#execs").append('<img class="exec-img" src=' + team[i].image + '/ >' );
			}
			execsLoaded = true;
		}
	}
});