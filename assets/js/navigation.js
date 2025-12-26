// Navigation Blocking Script
(function() {
    function blockEvent(e) {
        if (!e) return false;
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (typeof e.stopPropagation === 'function') e.stopPropagation();
        if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
        return false;
    }

    // Block all anchor navigations (except mailto and external links)
    document.addEventListener('click', function(e) {
        var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
        if (!a) return;
        // Allow mailto links
        if (a.href && a.href.startsWith('mailto:')) return;
        // Allow external links with target="_blank"
        if (a.target === '_blank') return;
        // Allow links to external domains
        if (a.href && (a.href.startsWith('http://') || a.href.startsWith('https://'))) {
            var currentDomain = window.location.hostname;
            var linkDomain = new URL(a.href).hostname;
            if (linkDomain !== currentDomain) return;
        }
        return blockEvent(e);
    }, true);

    // Block form submissions
    document.addEventListener('submit', function(e) {
        return blockEvent(e);
    }, true);

    // Neutralize programmatic navigation attempts
    try { window.open = function() { return null }; } catch (_) {}
    try {
        var noop = function(){};
        history.pushState = noop;
        history.replaceState = noop;
    } catch (_) {}
    try {
        if (window.location) {
            window.location.assign = function(){};
            window.location.replace = function(){};
        }
    } catch (_) {}
})();
