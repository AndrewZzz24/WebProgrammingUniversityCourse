(function () {
    let pages = {
        'index.html': 'index',
        'about_us.html': 'about-us',
        'metrics.html': 'metrics',
    };

    function pageIsActive() {
        let itemId = pages[document.location.pathname.split('/').pop()];
        document.getElementById(itemId).style.color = '#d79742';
    }

    document.addEventListener('layoutIsLoad', () => {
        pageIsActive();
    })
})();