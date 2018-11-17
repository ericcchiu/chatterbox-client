var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    Parse.create(event.target[0].value);
    //console.log(event.target[0].username)
    let username = window.location.search.slice(10);
    //console.log(window.location.search.slice(10));
    let text = event.target[0].value;
    let roomname = 'Lobby(default)';
    const messageObj = {
      username: username,
      text: text,
      roomname: roomname
    };

    // MessagesView.renderMessage(message); //.bind(this);
    //console.log('FormView', message);
    MessagesView.initialize(messageObj);

    //console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};