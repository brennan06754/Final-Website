const newsFilter = document.querySelector("#news-filter");
const categorySelect = document.querySelector("#category");
const newsCards = document.querySelectorAll(".news-card");
const storyCount = document.querySelector("#story-count");

newsFilter.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const selectedCategory = categorySelect.value;
    let visibleCount = 0;

    for (const card of newsCards) {
        const matches =
            selectedCategory === "all" ||
            card.dataset.category === selectedCategory;

        card.hidden = !matches;

        if (matches) {
            visibleCount++;
        }
    }

    const storyWord = visibleCount === 1 ? "story" : "stories";
    const categoryLabel = categorySelect.selectedOptions[0].textContent;

    storyCount.textContent =
        `Showing ${visibleCount} ${storyWord} · ${categoryLabel}.`;
});