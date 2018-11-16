var MessagesView = {

  $chats: $('#chats'),

  initialize: function(text) {
    MessagesView.renderMessage(text); 
    //MessageView.render(); 
  },

  renderMessage: function(message) {
    MessagesView.render(message);
    //console.log(message); 
    //console.log()
  },

  render: function(text) {
    //MessageView.render();
    //console.log($('.text').text(text));
    $('#chats').append(MessageView.render());
    

  }

};