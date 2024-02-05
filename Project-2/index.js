var navlinks = document.getElementById("navlinks")
function showmenu(){
    navlinks.style.right="0";
}
function hidemenu(){
    navlinks.style.right="-200px";
}

// -------feedback---------

function submitFeedback(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Mock API endpoint (replace with your actual endpoint)
    const apiEndpoint = 'https://api.example.com/submit-feedback';

    // Send the data to the server using Fetch API
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Feedback submitted successfully!');
        // You can perform additional actions here
    })
    .catch(error => console.error('Error:', error));
}