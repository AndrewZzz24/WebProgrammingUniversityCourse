(function () {
    function pageIsActive() {
        let path = document.location.pathname.split('/').pop();
        document.getElementById(path.substring(0, path.length - 5)).style.color = '#daa512';
    }

    document.addEventListener('DOMContentLoaded', () => {
        pageIsActive();
    })
})();