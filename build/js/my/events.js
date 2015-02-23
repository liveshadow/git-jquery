function myEvents(){
    
    // display a list of events belonging to me in #list
    // e.g., https://api.github.com/users/doubleshow/events

    $.get("https://api.github.com/users/liveshadow/events", github, function(data) {
    	
    	var events = data
       
        $.get("/git-jquery/templates/eventList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: events})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)


        })

    })
}