function sendSlack() {
  
  var url = "Incoming Webhook URL"
  var payload = createPayload()
   var options =
   {
     "method" : "post",
     "contentType" : "application/json",
     "payload" : JSON.stringify(payload)
   };
  return UrlFetchApp.fetch(url, options);
}

function createPayload() {
  var attachments = [{
            "text": "どっち食べたい?",
            "fallback": "Sorry, no support for buttons.",
            "callback_id": "ButtonResponse",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
              {
                    "name": "button",
                "text": "お寿司:sushi:",
                    "style": "primary",
                    "type": "button",
                    "value": "お寿司"
              },
              {
                    "name": "button",
                "text": "しゃぶしゃぶ:cut_of_meat:",
                    "style": "danger",
                    "type": "button",
                    "value": "しゃぶしゃぶ"
              }
            ]
          }];      
  
  return {
     "attachments": attachments,
     "username" : "InteractiveNotification",
    　　"text": "todays dinner"
   };
}
