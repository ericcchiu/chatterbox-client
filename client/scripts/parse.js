var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      url: Parse.server, 
      type: 'POST', 
      data: JSON.stringify(message), 
      contentType: 'application/json', 
      success: function (data) { 
        console.log('Data sent to server with resposne', data);
        console.log('Message sent!!!(parse.js)');
      }, 
      error: function(data) {
        console.log('Failed to send message in (parsejs)', data);
      }
      

    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB || function(data) {
        MessagesView.renderMessage(data);
        console.log('this is our success data', data, 'this is our success callback', successCB);
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};