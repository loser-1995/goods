(function() {
    var offcanvasEl = document.querySelector('.main-offcanvas');

    function isActive() {
        return offcanvasEl && offcanvasEl.classList.contains('main-offcanvas-active');
    }

    function showOffcanvas() {
        offcanvasEl.classList.add('main-offcanvas-active');
    }

    function hideOffcanvas() {
        offcanvasEl.classList.remove('main-offcanvas-active');
    }

    function hideEvent(e) {
        if (!e.target.closest('.main-offcanvas')) {
            hideOffcanvas();
            document.body.removeEventListener('click', hideEvent);
        }
    }

    document.querySelectorAll('[data-offcanvas]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.stopImmediatePropagation();

            if (offcanvasEl) {
                if (isActive()) {
                    hideEvent();
                } else {
                    showOffcanvas();
                    document.body.addEventListener('click', hideEvent);
                }
            }

            return false;
        });
    });
})();