const socket = io();

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');

messageForm.addEventListener('submit', e => {
	e.preventDefault();
	const message = messageInput.value;
	socket.emit('message', message);
	messageInput.value = '';
});

socket.on('response', message => {
	const messageElement = document.createElement('p');
	messageElement.innerText = message;
	messageContainer.append(messageElement);
	messageContainer.scrollTop = messageContainer.scrollHeight;
});
