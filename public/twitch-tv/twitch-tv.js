var channels = ["freecodecamp", "storbeck", "terakilobyte", 
                "habathcx","RobotCaleb","thomasballinger",
                "noobs2ninjas","beohoff","brunofin","comster404",
                "test_channel","cretetion","sheevergaming","TR7K",
                "OgamingSC2","ESL_SC2"];
  
  
                
function makeChannelURL(channel) {
  url = "https://api.twitch.tv/kraken/channels/" + channel;
  return url;
}  

function makeStreamURL(channel) {
  url = "https://api.twitch.tv/kraken/streams/" + channel;
  return url;
}   


function getChannelsInfo() {
  //var  url = makeURL(channel);
  var stream = {};
  channels.forEach(function(channel) {
    // Get logo from channel
    var stream_url = makeStreamURL(channel);
    // get stream data
    $.get({
      url: stream_url,
      success: function(data) {
        var channel_url = makeChannelURL(channel);
        $.getJSON(channel_url, function(stream_data) {
          var logo;
          stream_data.logo === null ?
            logo = "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F" :
            logo = stream_data.logo;
          var logo_tag = "<img src='" + logo + "'></img>" 
          if(data.stream === null) {
            $("#stream-list").append("<li class='offline'>"+logo_tag + "<h3>" + channel +"</h3></li>");
          } else {
            var game = data.stream.channel.game;
            var display_name = data.stream.channel.display_name;
            var url = data.stream.channel.url;
            var status_tag = "<p>" + data.stream.channel.status + "</p>";
            var name_tag = "<h3><a href='" + url + "' target='_blank'>" + display_name + "</a></h3>"
            $("#stream-list").append("<li class='online'>" + logo_tag + name_tag + status_tag + "</li>");
          }
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("Account closed");
      }
    });
  });
}

$(document).ready(function() {
  getChannelsInfo();
 
  $.fn.bootstrapSwitch.defaults.onText = 'All';
  $.fn.bootstrapSwitch.defaults.offText = 'Online';
  $("[name='my-checkbox']").bootstrapSwitch();
  $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state) {
      $(".offline").show();
    } else {
      $(".offline").hide();

    }
    console.log(state); // true | false
});
});