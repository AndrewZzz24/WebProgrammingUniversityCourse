(function () {
    function pageIsActive() {
        let path = document.location.pathname.split('/').pop();
        let end =  path.substring(path.length - 5, path.length);
        let page = end !== ".html" ? "index" : path.substring(0, path.length - 5);
        document.getElementById(page).style.color = '#daa512';
    }

    document.addEventListener('DOMContentLoaded', () => {
        pageIsActive();
    })
})();