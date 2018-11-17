var FormView = {

  $form: $('#send'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.addRoom();
    // FormView.chooseRoom();
    this.results = FormView.chooseRoom();

    console.log('INITIALIZE', this.results);

  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();


    let username = window.location.search.slice(10);
    let text = event.target[0].value;
    let roomname = 'Lobby(default)';

    const messageObj = {
      username: username,
      text: text,
      roomname: roomname
    };
    Parse.create(messageObj);


    MessagesView.initialize(messageObj);

    //console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  addRoom: function () {
    $('#create-room').on('submit', function (e) {
      e.preventDefault();
      $('select').append(`<option value="${e.target[0].value}">${e.target[0].value}</option>`);
      if (!Rooms.roomList.includes(e.target[0].value)) {
        Rooms.roomList.push(e.target[0].value);
      }
      console.log(Rooms.roomList);
      // console.log(e.target[0].value);
      //alert('submitted');
    });
  },
  chooseRoom: function () {
    let result = '';
    $('select').on('change', function (event) {
      result = event.target.value;
      // Room that is selected
      console.log(event.target.value);
      // return event.target.value;

    });
    return result;
  }

};

