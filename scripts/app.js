// Stripe.setPublishableKey('pk_test_aaUJw70XxCIC9XWuvdM6hpC3'); <-- KEY FOR TESTING -->
Stripe.setPublishableKey('pk_live_JkNrYabdgIqNoa6mCTufa4q8');

App = Ember.Application.create();

App.Router.map(function() {
    this.resource('history');
    this.resource('residences');
    this.resource('commuter-life');
    this.resource('schedule');
    this.resource('execs');
    this.resource('registration');
    this.resource('gallery');
    this.resource('contact');
    this.resource('success');
    this.resource('regError');
});

App.ExecsRoute = Ember.Route.extend({
    model: function() {
        return team;
    }
});

App.ScheduleView = Ember.View.extend({
  didInsertElement : function(){
    this._super();
    Ember.run.schedule('afterRender', this.afterRenderEvent);
  },
  afterRenderEvent : function(){
$('#calendar').fullCalendar({
        // put your options and callbacks here
        defaultView: 'agendaWeek',
        theme: true,
        height: 500,
        header: false,
        hiddenDays: [ 0 ],
        minTime: '08:00:00',
        maxTime: '25:00:00',

        events: [
        {
            title: 'Registration/Breakfast',
            start: '2014-09-01T08:00:00',
            end: '2014-09-01T10:00:00'
        },
        {
            title: 'Opening Ceremonies',
            start: '2014-09-01T10:00:00',
            end: '2014-09-01T11:30:00'
        },
        {
            title: 'Icebreakers',
            start: '2014-09-01T11:30:00',
            end: '2014-09-01T12:30:00'
        },
        {
            title: 'BBQ With The Dons',
            start: '2014-09-01T12:30:00',
            end: '2014-09-01T14:00:00'
        },
        {
            title: 'FYI: Survival Guide',
            start: '2014-09-01T14:00:00',
            end: '2014-09-01T17:00:00'
        },
        {
            title: 'Dinner',
            start: '2014-09-01T17:30:00',
            end: '2014-09-01T19:30:00'
        },
        {
            title: 'Commuter Meet-Up',
            start: '2014-09-01T19:30:00',
            end: '2014-09-01T21:00:00'
        },
        {
            title: 'Monster Madness',
            start: '2014-09-01T21:00:00',
            end: '2014-09-01T23:00:00'
        },
        {
            title: 'Breakfast',
            start: '2014-09-02T08:30:00',
            end: '2014-09-02T10:00:00'
        },
        {
            title: 'UC Day',
            start: '2014-09-02T10:00:00',
            end: '2014-09-02T14:30:00'
        },
        {
            title: "Doin' It In The Dot",
            start: '2014-09-02T14:30:00',
            end: '2014-09-02T16:30:00'
        },
        {
            title: 'Pizza Dinner/Bring It On Prep',
            start: '2014-09-02T17:00:00',
            end: '2014-09-02T19:00:00'
        },
        {
            title: 'Bring It On',
            start: '2014-09-02T19:00:00',
            end: '2014-09-02T21:00:00'
        },
        {
            title: 'Club Night',
            start: '2014-09-02T22:00:00',
            end: '2014-09-03T01:00:00'
        },
        {
            title: 'Zombie Games',
            start: '2014-09-02T22:00:00',
            end: '2014-09-03T01:00:00'
        },
        {
            title: 'Breakfast',
            start: '2014-09-03T09:00:00',
            end: '2014-09-03T10:00:00'
        },
        {
            title: 'UTSU Clubs Fair',
            start: '2014-09-03T10:00:00',
            end: '2014-09-03T11:00:00'
        },
        {
            title: 'International Students Lunch/Coffee With The Profs',
            start: '2014-09-03T11:00:00',
            end: '2014-09-03T13:00:00'
        },
        {
            title: 'Beach',
            start: '2014-09-03T13:00:00',
            end: '2014-09-03T18:30:00'
        },
        {
            title: 'Dinner',
            start: '2014-09-03T18:30:00',
            end: '2014-09-03T20:00:00'
        },
        {
            title: 'Open Mic Night',
            start: '2014-09-03T20:00:00',
            end: '2014-09-04T00:00:00'
        },
        {
            title: 'Breakfast',
            start: '2014-09-04T09:00:00',
            end: '2014-09-04T10:00:00'
        },
        {
            title: 'Tradition',
            start: '2014-09-04T10:00:00',
            end: '2014-09-04T12:00:00'
        },
        {
            title: 'PRE UofT',
            start: '2014-09-04T12:00:00',
            end: '2014-09-04T16:30:00'
        },
        {
            title: 'Amazing Race',
            start: '2014-09-04T17:00:00',
            end: '2014-09-04T19:00:00'
        },
        {
            title: 'Order in Dinner/Bring It On Prep',
            start: '2014-09-04T19:00:00',
            end: '2014-09-04T21:00:00'
        },
        {
            title: 'Haunted Carnival',
            start: '2014-09-04T21:00:00',
            end: '2014-09-05T00:00:00'
        },
        {
            title: 'Breakfast',
            start: '2014-09-05T10:00:00',
            end: '2014-09-05T11:00:00'
        },
        {
            title: 'Parade Prep Rally',
            start: '2014-09-05T11:00:00',
            end: '2014-09-05T12:00:00'
        },
        {
            title: 'UTSU Parade/Concert',
            start: '2014-09-05T12:00:00',
            end: '2014-09-05T17:00:00'
        },
        {
            title: 'Dinner',
            start: '2014-09-05T17:00:00',
            end: '2014-09-05T19:00:00'
        },
        {
            title: 'Bring It On Round 2',
            start: '2014-09-05T19:00:00',
            end: '2014-09-05T21:00:00'
        },
        {
            title: 'Spooky Scavenger Hunt',
            start: '2014-09-05T22:00:00',
            end: '2014-09-06T01:00:00'
        },
        {
            title: 'UTSU Club Night',
            start: '2014-09-05T22:00:00',
            end: '2014-09-06T01:00:00'
        },
        {
            title: 'Breakfast in Common Rooms',
            start: '2014-09-06T09:00:00',
            end: '2014-09-06T10:00:00'
        },
        {
            title: 'Be The Change Presentation',
            start: '2014-09-06T10:00:00',
            end: '2014-09-06T11:00:00'
        },
        {
            title: 'Lunch',
            start: '2014-09-06T11:00:00',
            end: '2014-09-06T12:00:00'
        },
        {
            title: 'Be The Change',
            start: '2014-09-06T12:00:00',
            end: '2014-09-06T14:30:00'
        },
        {
            title: 'Get Active and Creative',
            start: '2014-09-06T14:30:00',
            end: '2014-09-06T16:30:00'
        },
        {
            title: 'Closing Ceremonies',
            start: '2014-09-06T16:30:00',
            end: '2014-09-06T17:30:00'
        },
        {
            title: 'Red and White: Monster Ball',
            start: '2014-09-06T20:00:00',
            end: '2014-09-07T01:00:00'
        }
        ]
    })

$('#calendar').fullCalendar('gotoDate', '2014-09-01');
  }
});

App.RegistrationView = Ember.View.extend({
    didInsertElement: function() {
        var handler = StripeCheckout.configure({
            key: 'pk_test_aaUJw70XxCIC9XWuvdM6hpC3',
            //key: 'pk_live_JkNrYabdgIqNoa6mCTufa4q8',
            image: 'images/zombiehand.png',
            currency: 'CAD',
            token: function(token) {
                $("#registration-form").append("<input type='hidden' name='stripeToken' value='" + token.id + "' />");
                $("#registration-form").hide();
                $("#dvloader").show();

                var stripeToken = {stripeToken: token.id, firstName: $("input[name='firstName']").val(), lastName: $("input[name='lastName']").val(), email: $("input[name='email']").val()};

                $.ajax({
                    url : "scripts/charge.php",
                    type: "POST",
                    data : stripeToken,
                    success: function(data, textStatus, jqXHR)
                    {
                        console.log(data);
                        if(data == 'success'){
                            // Send info to google spreadsheet
                            var serializedData = $("#registration-form").serialize();
                            var request;
                            // abort any pending request
                            if (request) {
                                request.abort();
                            }

                            console.log('Sending data to database...');

                            request = $.ajax({
                                url: "https://script.google.com/macros/s/AKfycbyLkMiNYtd5cuO4FpxvoJqY6HOYGzgi2VIHTDzruAcKGIbodF4/exec",
                                type: "post",
                                data: serializedData,
                                async: false
                            });
                            window.location.replace("http://www.ucorientation.com/#/success");
                        } else {
                            window.location.replace("http://www.ucorientation.com/#/regError");
                        }
                     },
                     error: function(jqXHR, textStatus, errorThrown)
                     {
                            window.location.replace("http://www.ucorientation.com/#/regError");
                            console.log(errorThrown);
                     }
                });
            }
        });

        // For documentation read http://bootstrapvalidator.com/
        $("#registration-form").bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            submitHandler: function(validator, form, submitButton) {
                handler.open({
                  name: 'UC Orientation 2014',
                  description: 'Orientation Week ($105.00)',
                  currency: 'CAD',
                  amount: 10500
                });

                // prevent default submission of form
                event.preventDefault();
            },
            fields: {
                firstName: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                },
                homePhone: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                },
                cellPhone: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                        emailAddress: {
                            message: 'Please enter a valid email address'
                        }
                    },
                },
                birthDate: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                        date: {
                            message: 'Please enter a valid date'
                        },
                        stringLength: {
                            min: 10,
                            max: 10,
                            message: 'Please follow the format mm/dd/yyyy'
                        }
                    },
                },
                gender: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                },
                emergencyFirstName: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                },
                emergencyLastName: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                },
                emergencyPhone: {
                   validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                },
                emergencyRelation: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                }
            }
        });
    }
});

App.ContactView = Ember.View.extend({
    didInsertElement: function() {
        // For documentation read http://bootstrapvalidator.com/
        $("#contact-form").bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                        emailAddress: {
                            message: 'Please enter a valid email address'
                        }
                    },
                },
                message: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required'
                        },
                    },
                },
            }
        });
    }
});

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