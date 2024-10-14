document.getElementById('loveButton').addEventListener('click', function() {
    const response = prompt("Do you love me? (yes/no)").toLowerCase();
    const responseText = document.getElementById('response');

    if (response === 'yes') {
        responseText.textContent = "You're my girlfriend!";
    } else if (response === 'no') {
        responseText.textContent = "Sad.";
    } else {
        responseText.textContent = "Please answer with 'yes' or 'no'.";
    }
});
