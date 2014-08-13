// Keeping this incase - load on scroll to schedule
// $(window).scroll(function(event) {
//     if ($("#schedule-title").offset().top < $(window).scrollTop() + $(window).outerHeight()){
//    }
//});
$(document).ready(function() {

    var tooltip = $('<div/>').qtip({
        id: 'fullcalendar',
        prerender: true,
        content: {
            text: ' ',
            title: {
                button: true
            }
        },
        position: {
            my: 'bottom center',
            at: 'top center',
            target: 'mouse',
            viewport: $('#calendar'),
            adjust: {
                mouse: false,
                scroll: false
            }
        },
        show: false,
        hide: false,
        style: {
            classes: 'qtip-youtube'
        }
    }).qtip('api');

    var calendar = $('#calendar').fullCalendar({
        // put your options and callbacks here
        defaultView: 'agendaWeek',
        theme: true,
        height: 750,
        header: false,
        hiddenDays: [ 0 ],
        minTime: '08:00:00',
        maxTime: '25:00:00',
        allDaySlot: false,
        eventColor: '#222222',
        eventClick: function(data, event, view) {
            var content = '<h4 class="popup-title">'+data.title+'</h4>' + 
            '<p class="popup-text">'+ data.description + '</p>' || '';

            tooltip.set({
                'content.text': content
            })
            .reposition(event).show(event);
        },
        dayClick: function() { tooltip.hide() },
        eventResizeStart: function() { tooltip.hide() },
        eventDragStart: function() { tooltip.hide() },
        viewDisplay: function() { tooltip.hide() },

        events: [
        {
            title: 'Registration/Breakfast',
            start: '2014-09-01T08:00:00',
            end: '2014-09-01T10:00:00',
            description: "Energy Level: <span id='text-imp'>Low<br><br>Complete the registration process and pick up your frosh kits! Please note that registration will finish at 10am, so don’t be late!</span><br><br>Meal: <span id='text-imp'>Continental</span>"
        },
        {
            title: 'Opening Ceremonies',
            start: '2014-09-01T10:00:00',
            end: '2014-09-01T11:30:00',
            description: "Energy Level: <span id='text-imp'>Low<br><br>A welcome to UC Orientation! Meet the Orientation team, Office of Student Life and the Principal of UC!</span>"
        },
        {
            title: 'Icebreakers',
            start: '2014-09-01T11:30:00',
            end: '2014-09-01T12:30:00',
            description: "Energy level: <span id='text-imp'>Medium<br><br>Get to know your frosh leaders and the other first years in your house! Play some silly games to break the ice.</span>"
        },
        {
            title: 'BBQ With The Dons',
            start: '2014-09-01T12:30:00',
            end: '2014-09-01T14:00:00',
            description: "Energy Level: <span id='text-imp'>Low<br><br>The Dons are the community coordinators for your residence. They will tell you everything you need to know about living in residence and the resources that they can offer you.<br><br> Enjoy a BBQ while they tell you everything you need to know about UC residence house life!</span>"
        },
        {
            title: 'FYI: Survival Guide',
            start: '2014-09-01T14:00:00',
            end: '2014-09-01T17:00:00',
            description: "Energy Level: <span id='text-imp'>Low<br><br>Nervous about your first year? We’ve got you covered!<br><br>Learn about the UC community, chat with upper years about first year tips & tricks, and get some useful academic advice.</span>"
        },
        {
            title: 'Dinner and Leader Tours',
            start: '2014-09-01T17:00:00',
            end: '2014-09-01T20:00:00',
            description: "Energy Level: <span id='text-imp'>Mmmm dinner</span><br><br>Meal: <span id='text-imp'>Lasagna</span>"
        },
        {
            title: 'Commuter Meet-Up',
            start: '2014-09-01T20:00:00',
            end: '2014-09-01T21:00:00',
            description: "Energy Level: <span id='text-imp'>Medium<br><br>Does the university commuting experience seem scary and obscure? Don’t be frightened by the endless subway tunnels that lie in your future! Embrace the off-campus life! <br><br>Join the University College Off-Campus Commission and meet other first year and upper year commuters at this commuter social event.</span>"
        },
        {
            title: 'Monster Madness',
            start: '2014-09-01T21:00:00',
            end: '2014-09-01T23:00:00',
            description: "Energy Level: <span id='text-imp'>High<br>Monster Madness is an epic game of glow-in-the-dark Capture the Flag on Front Campus. <br><br>Teams are divided by residence buildings and work to steal glowsticks from each other while preventing other teams from stealing their own! Work together with your housemates in a crazy game to end off the first day of Orientation! <br><br>Be sure to bring running shoes and comfortable clothing!</span>"
        },
        {
            title: 'Breakfast',
            start: '2014-09-02T08:30:00',
            end: '2014-09-02T10:00:00',
            description: "Energy Level: <span id='text-imp'>Mmmm breakfast</span><br><br>Meal: <span id='text-imp'>Fung breakfast</span>"
        },
        {
            title: 'UC Day',
            start: '2014-09-02T10:00:00',
            end: '2014-09-02T14:30:00',
            description: "Energy Level: <span id='text-imp'>Low<br><br>Let the Registrar tell you everything that UC has to offer. Sessions include: workshops by the Writing Centre, “Meet the Lit”, and a special re-enactment of UC History.</span><br><br>Meal: <span id='text-imp'>Subs</span>"
        },
        {
            title: "Doin' It In The Dot",
            start: '2014-09-02T14:30:00',
            end: '2014-09-02T16:30:00',
            description: "Energy Level: <span id='text-imp'>High<br><br>Get ready to explore the vibrant downtown core of Toronto! <br><br>The UC Monsters are going to take over the streets, showing off our spirit to the city.<br><br> This walking tour of downtown Toronto will get you acquainted with landmarks like Kensington Market, Nathan Phillips Square, and the Toronto Eaton Centre. <br><br>Don’t forget comfortable shoes, a water bottle and your cheering voice!</span>"
        },
        {
            title: 'Pizza Dinner/Bring It On Prep',
            start: '2014-09-02T17:00:00',
            end: '2014-09-02T18:30:00',
            description: "Energy Level: <span id='text-imp'>Mmmm pizza</span><br><br>Meal: <span id='text-imp'>Might be pizza...not sure..</span>"
        },
        {
            title: 'Bring It On',
            start: '2014-09-02T18:30:00',
            end: '2014-09-02T20:30:00',
            description: "Energy Level: <span id='text-imp'>Medium<br><br>Show your UC spirit in a cheer-off to determine which UC house has what it takes to be on top! Dance, scream, and shout your way to first place.<br><br> This is a competition between UC houses for the spot of Bring it On champ!</span>"
        },
        {
            title: 'Club Night',
            start: '2014-09-02T22:00:00',
            end: '2014-09-03T01:00:00',
            description: "Energy Level: <span id='text-imp'>High <br><br>Let loose at one of Toronto’s hottest night clubs, and spend the night dancing away with friends and leaders.</span>"
        },
        {
            title: 'Zombie Games',
            start: '2014-09-02T22:00:00',
            end: '2014-09-03T01:00:00',
            description: "Energy Level: <span id='text-imp'>Medium<br><br>If clubbing ain’t yo’ scene, play some sardines, our backwards version of hide and seek! <br><br>Spend your night running through a zombie maze followed by a few rounds of sardines in the UC building.<br><br> Make sure to bring your running shoes and a water bottle!</span>"
        },
        {
            title: 'Breakfast',
            start: '2014-09-03T09:00:00',
            end: '2014-09-03T10:00:00',
            description: "Energy Level: <span id='text-imp'>Mmmm breakfast</span><br><br>Meal: <span id='text-imp'>Fung breakfast</span>"
        },
        {
            title: 'UTSU Clubs Fair',
            start: '2014-09-03T10:00:00',
            end: '2014-09-03T11:00:00',
            description: "nergy Level: <span id='text-imp'>Low <br><br>There is a club for EVERYTHING at U of T. Come to clubs fair to see if there’s a club that’s just right for you!</span>"
        },
        {
            title: 'International Students Lunch/Coffee With The Profs',
            start: '2014-09-03T11:00:00',
            end: '2014-09-03T13:00:00',
            description: "Energy Level: <span id='text-imp'>Low <br><br>If you’re an international student, learn what is available to you! You will be treated to a wonderful lunch and have an opportunity to ask professors all those questions you’ve been dying to ask!</span> <br><h4 class='popup-title'>Domestic Students</h4><br>Energy Level: <span id='text-imp'>Low <br>Enjoy a nice cup of coffee and have an up-close, and personal chat with a U of T professor! They will be there to tell you about the professor-student relationship, and answer any questions that you may have.</span>"
        },
        {
            title: 'Beach',
            start: '2014-09-03T13:00:00',
            end: '2014-09-03T18:30:00',
            description: "Energy Level: <span id='text-imp'>Medium<br><br>Frosh and leaders can enjoy a day of fun and relaxation at Woodbine Beach! We have inflatables, sports, music and the perfect opportunity for relaxation. <br><br>Make sure to bring comfy beach clothes, sunscreen and a water bottle!</span><br><br>Meal: <span id='text-imp'>Ali Baba's Shwaramas</span>"
        },
        {
            title: 'Dinner',
            start: '2014-09-03T18:30:00',
            end: '2014-09-03T20:00:00',
            description: "Energy Level: <span id='text-imp'>Mmmm dinner</span><br><br>Meal: <span id='text-imp'>Lick's BBQ</span>"
        },
        {
            title: 'Open Mic Night',
            start: '2014-09-03T20:00:00',
            end: '2014-09-04T00:00:00',
            description: "Energy Level: <span id='text-imp'>Low <br><br>Got talent UC? <br>We want everyone, from musicians to nose-whistlers to comedians to come show off their amazing talents. <br><br>If you’d prefer to watch the show, there will be tasty baked goods and freshly brewed coffee from UC’s own Diabolos Coffee.</span>"
        },
        {
            title: 'Breakfast',
            start: '2014-09-04T09:00:00',
            end: '2014-09-04T10:00:00',
            description: "Energy Level: <span id='text-imp'>Mmmm breakfast</span><br><br>Meal: <span id='text-imp'>Fung breakfast</span>"
        },
        {
            title: 'Tradition',
            start: '2014-09-04T10:00:00',
            end: '2014-09-04T12:00:00',
            description: "Energy Level: <span id='text-imp'>High<br><br>Classified.</span>"
        },
        {
            title: 'Lunch With Your Program',
            start: '2014-09-04T12:00:00',
            end: '2014-09-04T13:00:00',
            description: "Energy Level: <span id='text-imp'>Mmm breakfast</span><br><br>Meal: <span id='text-imp'>Burritos</span>"
        },
        {
            title: 'PRE UofT',
            start: '2014-09-04T13:00:00',
            end: '2014-09-04T16:00:00',
            description: "Energy Level: <span id='text-imp'>Low<br><br>It is a widely accepted truth that UC is home to the greatest and best looking people at U of T. <br><br>However, this event will give you the opportunity to make friends in your program from other colleges! Students will be divided into their programs and participate in a faculty panel, icebreakers, and a course union resource fair within this inter-collegiate event. <br><br>Join us for our first Program Exposure event at U of T!</span>"
        },
        {
            title: 'Amazing Race',
            start: '2014-09-04T17:00:00',
            end: '2014-09-04T19:00:00',
            description: "Energy Level: <span id='text-imp'>Medium <br><br>Are you ready to be wrapped like a mummy or hunted like a vampire? Don’t miss the amazing race but be sure to wear comfortable clothes and sensible footwear for this thrilling adventure on your new campus.</span>"
        },
        {
            title: 'Order in Dinner/Bring It On Prep',
            start: '2014-09-04T19:00:00',
            end: '2014-09-04T21:00:00',
            description: "Energy Level: <span id='text-imp'>Mmmm dinner</span><br><br>Meal: <span id='text-imp'>What ever you decide with the house!</span>"
        },
        {
            title: 'Haunted Carnival',
            start: '2014-09-04T21:00:00',
            end: '2014-09-05T00:00:00',
            description: "Energy Level: <span id='text-imp'>Medium <br><br>The UC grounds will come alive with a spooky carnival. Get ready for a festive night full of music, games and food in a classical carnival style.</span>"
        },
        {
            title: 'Breakfast',
            start: '2014-09-05T10:00:00',
            end: '2014-09-05T11:00:00',
            description: "Energy Level: <span id='text-imp'>Mmmm breakfast</span><br><br>Meal: <span id='text-imp'>Fung brunch</span>"
        },
        {
            title: 'Parade Prep Rally',
            start: '2014-09-05T11:00:00',
            end: '2014-09-05T12:00:00',
            description: "Energy Level: <span id='text-imp'>High <br><br>March around Toronto with the rest of U of T! Get ready for an epic cheer-off in varsity stadium, followed by one of the largest parades in Toronto!</span>"
        },
        {
            title: 'UTSU Parade/Concert',
            start: '2014-09-05T12:00:00',
            end: '2014-09-05T17:00:00',
            description: "Energy Level: <span id='text-imp'>High <br>Join the rest of U of T for a concert on front campus. Enjoy the music, games and food trucks! Artist to be announced soon.</span>"
        },
        {
            title: 'Dinner',
            start: '2014-09-05T17:00:00',
            end: '2014-09-05T19:00:00',
            description: "Energy Level: <span id='text-imp'>Mmmm dinner</span><br><br>Meal: <span id='text-imp'>Mr. Greek</span>"
        },
        {
            title: 'Bring It On Round 2',
            start: '2014-09-05T19:00:00',
            end: '2014-09-05T21:00:00',
            description: "Energy Level: <span id='text-imp'>Medium<br><br>Show your UC spirit in a cheer-off to determine which UC house has what it takes to be on top! Dance, scream, and shout your way to first place.<br><br> This is a competition between UC houses for the spot of Bring it On champ!</span>"
        },
        {
            title: 'Spooky Scavenger Hunt',
            start: '2014-09-05T22:00:00',
            end: '2014-09-06T01:00:00',
            description: "Energy Level: <span id='text-imp'>Medium <br><br>Explore U of T in a different light. There will be a series of unexpected challenges which you will have to capture with cameras or phones. Come prepared with your creative minds!</span>"
        },
        {
            title: 'UTSU Club Night',
            start: '2014-09-05T22:00:00',
            end: '2014-09-06T01:00:00',
            description: "Energy Level: <span id='text-imp'>High <br><br>Let loose at one of Toronto’s hottest night clubs, and spend the night dancing away with friends and leaders.</span>"
        },
        {
            title: 'Breakfast in Common Rooms',
            start: '2014-09-06T09:00:00',
            end: '2014-09-06T10:00:00',
            description: "Energy Level: <span id='text-imp'>Mmmm breakfast</span><br><br>Meal: <span id='text-imp'>Continental</span>"
        },
        {
            title: 'Be The Change Presentation',
            start: '2014-09-06T10:00:00',
            end: '2014-09-06T11:00:00',
            description: "Energy Level: <span id='text-imp'>Medium <br><br>Here at UC, we encourage a meaningful engagement with the community. We want to provide incoming students with the information and experience of working with local organizations from various fields.</span>"
        },
        {
            title: 'Lunch',
            start: '2014-09-06T11:00:00',
            end: '2014-09-06T12:00:00',
            description: "Energy Level: <span id='text-imp'>Mmmm lunch</span><br><br>Meal: <span id='text-imp'>Pizza</span>"
        },
        {
            title: 'Be The Change',
            start: '2014-09-06T12:00:00',
            end: '2014-09-06T14:30:00',
            description: "Energy Level: <span id='text-imp'>Medium <br><br>Here at UC, we encourage a meaningful engagement with the community. We want to provide incoming students with the information and experience of working with local organizations from various fields.</span>"
        },
        {
            title: 'Get Active and Creative',
            start: '2014-09-06T14:30:00',
            end: '2014-09-06T16:30:00',
            description: "Energy Level: <span id='text-imp'>Low-High<br><br>Do you like getting hot, sweaty, and/or creative? Join a pick-up game of ultimate frisbee, relax with some yoga/dance, discover your creative mind with music and art, and much more. There’s something for everyone!</span>"
        },
        {
            title: 'Closing Ceremonies',
            start: '2014-09-06T16:30:00',
            end: '2014-09-06T17:30:00',
            description: "Energy Level: <span id='text-imp'> Sad! ):</span>"
        },
        {
            title: 'Red and White: Monster Ball',
            start: '2014-09-06T20:00:00',
            end: '2014-09-07T00:00:00',
            description: "Energy Level: <span id='text-imp'>High<br><br>Ditch your frosh tees and get dolled up for our semi-formal where the monsters come out to play, the food is delicious and the dancing never stops!</span><br><br>Meal: <span id='text-imp'>Buffet</span>"
        }
        ]
    });

    calendar.fullCalendar('gotoDate', '2014-09-01');
});