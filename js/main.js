$(document).ready(function(event){
   $('#submit').click(function(event){
      getData();
      
   });
   $('#formThing').submit(function(event){
      event.preventDefault();
      getData();
   });
});
function getData(){
      $.ajax({
    url: 'http://player.me/api/v1/users/' + $('#inputText').val() + "?username=true",
 
    // The name of the callback parameter, as specified by the YQL service
    jsonp: "callback",
 
    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",
 
    // Work with the response
    success: function( response ) {
        var data = response.results
         var avatar = data['avatar']['original'];
         var username = data['username'];
         var followers = data['followers_count'];
         var joined = data['created_at'];
         var html = '<center><img src="' + avatar + '"width="100px" height="100px" style="border:3px solid white">';
         html += '<h1>' + username + '</h1>';
         html += '<br><b>Followers: </b>' + followers;

         html += '<br><b>Joined on: </b>' + joined.replace('T', ' at ');
         $('.profile').html(html);
    }
    });
}
