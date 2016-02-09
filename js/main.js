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
    $.get('https://player.me/api/v1/users/id' + $('#inputText').val(), "", function(data){
         var avatar = "https://player.me/api/v1/users/" + data['username']['avatars'] + "avatars";
         var username = data['id']['username'];
         var followers = data['followers_count'];
         if(data['type'] != null){
            var lastPlayed = data['type']['name'];
         }else{
            var lastPlayed = "None";
         }
         var joined = data['created_at'];
         var html = '<center><img src="' + avatar + '"width="100px" height="100px" style="border:3px solid white">';
         html += '<h1>' + username + '</h1>';
         html += '<br><b>Followers: </b>' + followers;
         html += '<br><b>Following: </b>' + totalViews;
         html += "<br>";
         if(online){
             html += '<br><b><font color="green"><a href="https://beam.pro/' + username + '">Online</a></font></b>';
         }else{
             html += '<br><b><font color="red">Offline</font></b>';
         }
         html+= '<br><b>Last Played: </b>' + lastPlayed;
         html += '<br><b>Joined on: </b>' + joined.replace('T', ' at ');
         $('.profile').html(html);
      });
}
