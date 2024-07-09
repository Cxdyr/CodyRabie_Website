function sendMessage() {
    var userInput = document.getElementById('user_input').value;
    var sendButton = document.getElementById('send_button');

    if (userInput.trim() === "") return;

    sendButton.disabled = true;  // Disable the send button

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/get_response', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText).response;
            document.getElementById('messages').innerHTML += '<div class="message user">' + userInput + '</div>';
            document.getElementById('messages').innerHTML += '<div class="message bot">' + response + '</div>';
            document.getElementById('user_input').value = '';
            document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
            sendButton.disabled = false;  // Re-enable the send button
        }
    };
    xhr.send('user_input=' + encodeURIComponent(userInput));
}
