// Connect to Socket.IO server
const socket = io();

// Get DOM elements
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');

// Add event listener to message form
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const message = messageInput.value;
  if (message) {
    // Emit message event to server
    socket.emit('chat message', message);
    // Clear message input
    messageInput.value = '';
  }
});

// Add event listener for incoming messages
socket.on('chat message', function(message) {
  // Create new list item for message
  const li = document.createElement('li');
  li.innerText = message;
  // Append new list item to message list
  messageList.appendChild(li);
});
