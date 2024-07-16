const apiUrl = 'http://localhost:5000';

function connectInstagram() {
    const userId = 'userIdPlaceholder'; // Replace with actual user ID
    const instagramId = prompt('Enter your Instagram ID:');
    fetch(`${apiUrl}/instagram/connect`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, instagramId })
    })
        .then(response => response.json())
        .then(data => alert('Instagram connected!'))
        .catch(error => console.error('Error:', error));
}

function viewInstagramPosts() {
    const userId = 'userIdPlaceholder'; // Replace with actual user ID
    fetch(`${apiUrl}/instagram/posts/${userId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Display posts in the UI
        })
        .catch(error => console.error('Error:', error));
}

function addAffiliateLink() {
    const userId = 'userIdPlaceholder'; // Replace with actual user ID
    const postId = prompt('Enter Post ID:');
    const affiliateUrl = prompt('Enter Affiliate URL:');
    fetch(`${apiUrl}/links`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, postId, affiliateUrl })
    })
        .then(response => response.json())
        .then(data => alert('Affiliate link added!'))
        .catch(error => console.error('Error:', error));
}
