function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert('Sign Up Successful!');
    } else {
        alert('Please fill in all fields.');
    }
}