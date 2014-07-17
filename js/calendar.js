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
            var content = '<h4>'+data.title+'</h4>' + 
                '<p>'+ data.description + '</p>' || '');

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
            description: "Energy Level: Low<br>Complete the registration process and pick up your frosh kits! Please note that registration will finish at 10am, so don’t be late!"
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
    });

calendar.fullCalendar('gotoDate', '2014-09-01');
});