// Filter the cards on the Menu and History & News pages.
function addFilter(formId, selectId, cardClass, outputId, oneResult, manyResults) {
    const form = document.getElementById(formId);

    // Skip this filter if its form is on a different page.
    if (form === null) {
        return;
    }

    const select = document.getElementById(selectId);
    const cards = document.getElementsByClassName(cardClass);
    const output = document.getElementById(outputId);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const category = select.value;
        let count = 0;

        for (const card of cards) {
            if (category === "all" || card.dataset.category === category) {
                card.hidden = false;
                count = count + 1;
            } else {
                card.hidden = true;
            }
        }

        let resultWord = manyResults;

        if (count === 1) {
            resultWord = oneResult;
        }

        output.textContent = "Showing " + count + " " + resultWord + ".";
    });
}

addFilter("news-filter", "news-category", "news-card", "story-count", "story", "stories");
addFilter("menu-filter", "dish-category", "dish-card", "dish-count", "dish", "dishes");