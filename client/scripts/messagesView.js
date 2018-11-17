var MessagesView = {

  $chats: $('#chats'),

  initialize: function (messageObj) {
    //console.log('MessagesView: Data passed into initialize:', messageObj);

    MessagesView.renderMessage(messageObj);
    //MessageView.render(); 
  },

  renderMessage: function (messageObj) {
    //console.log('MessagesView.renderMessage (IN): ', messageObj);
    MessagesView.render(messageObj);
  },

  render: function (messageObj) {
    //console.log('MessagesView.render (IN): ', messageObj);
    if (messageObj) {
      $('#chats').prepend(_.template(`

       <div class="chat">
          <div class="username">${messageObj.username}</div>
          <div class="text">${messageObj.text}</div>
          <div class="roomname">${messageObj.roomname}</div>
       </div>

      `));
      //     `<div class="chat">
      //    <div class="username"><%-${messageObj.username}%></div>
      //    <div class="text"><%-${messageObj.text}%></div>
      //    <div class="roomname">${messageObj.roomname}</div>
      //  </div>`

    }

  }

};