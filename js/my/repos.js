function myRepos(){

    // display my repos in #list
    // e.g., https://api.github.com/users/doubleshow/repos
    console.log('listing repos')    
    
    $.get("https://api.github.com/users/liveshadow/repos", github, function(data) {

        var repos = data
        
        $.get("/git-jquery/templates/repoList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: repos})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            repoView(repos[0].full_name)

        })

    })
}