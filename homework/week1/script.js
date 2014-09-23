console.log("javascript working!"); // Just to test. 
$(document).ready(function() {
  $.get("http://www.reddit.com/hot.json", function(response) {
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet. 
    var stories = response.data.children;
    for(var i in stories) {
      story = stories[i].data;
      var elem = $("<li></li>");
      var tit = story.title;
      var permalink = story.permalink;
      var upvote = story.ups;
      // Your code here:
      // In the data in the Javascript object 'story',
      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element. 
      $("#list").append(elem);
      $("#list").append(tit);
      $("#list").append(permalink);
      $("#list").append(upvote);
      // Look at the JS console in Chrome to see what story looks like
      console.log(story);
    }
  })
  $("#refresh-button").click(function() {
    location.reload(true);
  });
     $.get("https://petitions.whitehouse.gov/v1/petitions", function(response) {
      var petitions= response.data.children;
      for (var i in petitions) {
        petition = petitions[i];
        var elem = $("<li></li>");
      var tit = petition.title;
      var issues = petitions.issues.name;
      var signature = petions.signatureCount;
      // Your code here:
      // In the data in the Javascript object 'story',
      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element. 
      $("#list").append(elem);
      $("#list").append(tit);
      $("#list").append(issues);
      $("#list").append(signature);

      }
     })
});