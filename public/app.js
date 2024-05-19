//All this code is on FE side
var socket = io(); // io function is coming from heh script added in index.html
var userList = document.getElementById("active_users_list");
var roomList = document.getElementById("active_rooms_list");
var message = document.getElementById("messageInput");
var sendMessageBtn = document.getElementById("send_message_btn");
var roomInput = document.getElementById("roomInput");
var createRoomBtn = document.getElementById("room_add_icon_holder");
const chatDisplay = document.getElementById("chat");


var currentRoom = "globalChat";
var myUsername = "";

//whenever the socket gets connected, the BE will give a hit to 'connect'
socket.on("connect", function() {
    myUsername = prompt("Enter name");
    socket.emit("createUser", myUsername);
})

sendMessageBtn.addEventListener('click', function() {
    socket.emit("sendMessage", message.value);
    message.value= "";
})

//We can .emit multiple times with the same name, like updateChat, but there will be only one .on against it
socket.on("updateChat", function(username, data) {
    if(username === 'INFO'){
        chatDisplay.innerHTML = `<div class='announcement'><span>${data}</span></div>`;
    } else {

        chatDisplay.innerHTML += `<div class="message_holder ${
            username === myUsername ? "me" : ""
          }">
                <div class="pic"></div>
                    <div class="message_box">
                        <div id="message" class="message">
                            <span class="message_name">${username}</span>
                            <span class="message_text">${data}</span>
                        </div>
                    </div>
                </div>`;
    }
    chatDisplay.scrollTop = chatDisplay.scrollHeight; //So that the chat is always scrolled up and latest msg is displayed
})