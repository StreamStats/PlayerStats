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
    $.get('https://player.me/api/v1/users/' + $('#inputText').val(), "?username=true", function(outer){
         var data = outer.results
         var avatar = "https://player.me/api/v1/users/" + data['id'] + "/avatars";
         var username = data['id']['username'];
         var followers = data['followers_count'];
         var joined = data['created_at'];
         var html = '<center><img src="' + avatar + '"width="100px" height="100px" style="border:3px solid white">';
         html += '<h1>' + username + '</h1>';
         html += '<br><b>Followers: </b>' + followers;

         html += '<br><b>Joined on: </b>' + joined.replace('T', ' at ');
         $('.profile').html(html);
      });
}
