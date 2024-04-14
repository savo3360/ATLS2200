document.addEventListener("DOMContentLoaded", function () {
    const newQuoteButton = document.getElementById("js-new-quote");
    const quoteText = document.getElementById("js-quote-text");
    const authorText = document.getElementById("js-author-text");
    const authorButton = document.getElementById("js-tweet");

    newQuoteButton.addEventListener("click", getQuote);
    authorButton.addEventListener("click", showAuthor);

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
                displayAuthor(data.author);
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
                alert("Failed to fetch quote. Please try again later.");
            });
            
        // Reset author text and hide it
        authorText.textContent = "";
        authorText.style.display = "none";
    }

    function displayQuote(quote) {
        quoteText.textContent = quote;
    }

    function displayAuthor(author) {
        authorText.textContent = author;
    }

    function showAuthor() {
        authorText.style.display = "block";
    }

    getQuote();
});
