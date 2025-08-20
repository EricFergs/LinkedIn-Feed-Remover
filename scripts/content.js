function removeFeed(feed) {
    if (!feed) return;
    feed.remove(); // or feed.style.display = 'none';
}

function removeNews(news) {
    if (!news) return;
    news.style.display = 'none';
}

function removeFooter(footer) {
    if (!footer) return;
    footer.style.display = 'none';
}

function hideElements() {
    const feed = document.querySelector('main[aria-label="Main Feed"]');
    const news = document.querySelector('aside[aria-label*="News"]'); // more stable than ID
    const footer = document.querySelector('footer[aria-label="LinkedIn Footer Content"]');

    removeFeed(feed);
    removeNews(news);
    removeFooter(footer);
}


hideElements();


const observer = new MutationObserver(hideElements);
observer.observe(document.body, { childList: true, subtree: true });