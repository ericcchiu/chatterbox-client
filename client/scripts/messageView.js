var MessageView = {

  render: _.template(`
      
     <div class="chat">
        <div class="username">${messageObj.username}</div>
        <div class="text">${messageObj.text}</div>
        <div class="roomname">${messageObj.roomname}</div>
     </div>
    
    `)

};