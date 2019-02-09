function doPost(e) {
  var params = JSON.parse(e.postData.getDataAsString());
  var response = {};
  if(params.type === 'url_verification') {
    response = {'challenge':params.challenge}
  } else if(params.type === 'event_callback'){
    if(params.event.type == 'message') {
      response = eventHandler(params.event);
    }
  }
  
  return ContentService.createTextOutput(response).setMimeType(ContentService.MimeType.JSON);
}

function eventHandler(event){
  if(event.text == 'dinner') {
     return sendSlack();
  }
  return {};
}
