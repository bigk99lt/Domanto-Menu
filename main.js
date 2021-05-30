// Function to display Monday menu
function showMonday() {
    let a = document.getElementById('pirmadienis');

    if (a.style.display === 'block') {
        a.style.display = 'none';
    } else {
        a.style.display = 'block';
    }
}

//Function to show Tuesday menu
function showTuesday() {
    let a = document.getElementById('antradienis');

    if (a.style.display === 'none') {
        a.style.display = 'block';
    } else {
        a.style.display = 'none';
    }
}