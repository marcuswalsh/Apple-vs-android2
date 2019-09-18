// Checks for button clicks
document.getElementById('android-button').addEventListener('click', androidSelected);
document.getElementById('apple-button').addEventListener('click', appleSelected);

// Result of clicks
function androidSelected() {
    document.getElementById('main-logo').src = 'images/Android-Logo.jpg';
    document.getElementById('debate-button').innerHTML = 'Android Home';
    document.getElementById('debate-button').style.background = "#a4c93b";
    document.getElementById('debate-link').href = 'https://www.android.com/';
    document.getElementById('background').style.background = '#a4c93b'
}

function appleSelected() {
    document.getElementById('main-logo').src = 'images/Apple-Logo.jpg';
    document.getElementById('debate-button').innerHTML = 'Apple Home';
    document.getElementById('debate-button').style.background = "#b6bcca";
    document.getElementById('debate-link').href = 'https://www.apple.com/';
    document.getElementById('background').style.background = '#b6bcca'
}