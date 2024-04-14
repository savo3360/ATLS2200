document.addEventListener("DOMContentLoaded", function () {
    const newQuoteButton = document.getElementById("js-new-quote");
    const quoteText = document.getElementById("js-quote-text");

    newQuoteButton.addEventListener("click", getQuote);

    function getQuote() {
        fetch("https://api.quotable.io/random")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch quote!");
                }
                return response.json();
            })
            .then(data => {
                displayQuote(data.content);
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
                alert("Failed to fetch quote. Please try again later.");
            });
    }

    function displayQuote(quote) {
        quoteText.textContent = quote;
    }

    

    getQuote();
});
