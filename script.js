// select DOM elements
const messageList = document.getElementById("message-list");
const messageInput = document.getElementById("message-input");
const form = document.querySelector("form");

// add event listener to form submit
form.addEventListener("submit", (event) => {
	// prevent default form submission behavior
	event.preventDefault();
	
	// get current date and time
	const now = new Date();
	const timestamp = now.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true
	});
	
	// create new message element and add to message list
	const li = document.createElement("li");
	const usernameSpan = document.createElement("span");
	const timestampSpan = document.createElement("span");
	const messageSpan = document.createElement("span");
	
	usernameSpan.classList.add("message-username");
	timestampSpan.classList.add("message-timestamp");
	
	usernameSpan.innerText = "You";
	timestampSpan.innerText = timestamp;
	messageSpan.innerText = messageInput.value;
	
	li.appendChild(usernameSpan);
	li.appendChild(timestampSpan);
	li.appendChild(messageSpan);
	
	messageList.appendChild(li);
	
	// clear input field
	messageInput.value = "";
	
	// scroll to bottom of message list
	messageList.scrollTop = messageList.scrollHeight;
});

// add initial message to message list
const li = document.createElement("li");
const usernameSpan = document.createElement("span");
const timestampSpan = document.createElement("span");
const messageSpan = document.createElement("span");

usernameSpan.classList.add("message-username");
timestampSpan.classList.add("message-timestamp");

usernameSpan.innerText = "Chat Bot";
timestampSpan.innerText = "10:00 AM";
messageSpan.innerText = "Welcome to the chat!";

li.appendChild(usernameSpan);
li.appendChild(timestampSpan);
li.appendChild(messageSpan);

messageList.appendChild(li);
