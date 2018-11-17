var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function (callback) {
    Parse.readAll((data) => {
      // console.log(data.results);
      //console.log(data.results.length)
      for (let i = 0; i < data.results.length; i++) {
        MessagesView.initialize(data.results[i]);
        // console.log('These are our results:', data.results[1].username);
      }
      // examine the response from the server request:
      //console.log(data.results[36].text, typeof data);

      callback(data);
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
