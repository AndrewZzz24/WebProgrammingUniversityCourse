(function () {
    let pages = {
        'index.html': 'index',
        'experience.html': 'experience',
        'projects.html': 'projects',
    };

    function pageIsActive() {
        let itemId = pages[document.location.pathname.split('/').pop()];
        document.getElementById(itemId).style.color = '#daa512';
    }

    document.addEventListener('DOMContentLoaded', () => {
        pageIsActive();
    })
})();