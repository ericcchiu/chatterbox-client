var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  renderRoom: function () {
  },

  render: function () {

  }



};

