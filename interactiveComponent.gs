function doPost(e) {
   var parameter=e.parameter;
      var data = parameter.payload;
      var json = JSON.parse(decodeURIComponent(data));

      if (json.actions[0].name == "button"){
        var text = "You clicked " + json.actions[0].value;
      // select
      } else if (json.actions[0].name == "select") {
        var text = "You selected " +  json.actions[0].selected_options[0].value;
      }

      // modify message
      var replyMessage = {
        "replace_original": true,
        "response_type": "in_channel",
        "text": "I see you clicked the button.\n" + text
      };
      return ContentService.createTextOutput(JSON.stringify(replyMessage)).setMimeType(ContentService.MimeType.JSON);
}
