function searchAdvice() {
    const searchInput = document.getElementById('searchInput').value;
    const adviceContainer = document.getElementById('adviceContainer');

    // Clear previous advice
    adviceContainer.innerHTML = '';

    // Make API call
    fetch(`https://api.adviceslip.com/advice/search/${searchInput}`)
        .then(response => response.json())
        .then(data => {
            if (data.total_results > 0) {
                // Display advice
                data.slips.forEach(slip => {
                    const adviceDiv = document.createElement('div');
                    adviceDiv.innerText = slip.advice;
                    adviceContainer.appendChild(adviceDiv);
                });
            } else {
                adviceContainer.innerText = 'No advice found for the given search term.';
            }
        })
        .catch(error => console.error('Error fetching advice:', error));
}

function resetApp() {
    // Clear input
    document.getElementById('searchInput').value = '';

    // Clear previous advice
    document.getElementById('adviceContainer').innerHTML = '';
}
