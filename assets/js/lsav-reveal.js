/* LSAV — scroll-reveal observer (shared across pages).
   Watches the sections named in this tag's data-targets attribute and adds
   .in-view when each scrolls into view (one-shot). The CSS does the rest.
   No-JS / no-IntersectionObserver: everything is shown immediately. */
(function () {
  var script = document.currentScript || document.querySelector('script[data-targets]');
  var sel = script && script.getAttribute('data-targets');
  if (!sel) return;
  var targets = document.querySelectorAll(sel);
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -2% 0px' });
  targets.forEach(function (el) { io.observe(el); });
})();
