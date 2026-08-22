/* ============================================================
   MOBILE NAVIGATION
   Shared hamburger-menu behavior for index.html and media.html.
   Expects this markup (present in both pages' <nav>):

     <button id="nav-toggle" aria-controls="mobile-nav"
             aria-expanded="false" aria-label="Open menu">...</button>
     <div class="nav-links" id="mobile-nav" aria-label="Mobile navigation">
       <a href="...">...</a> (repeated)
     </div>

   The panel is a small dropdown, not a full-screen overlay, so this
   does not lock body scroll. Desktop layout/behavior (>768px) is
   untouched — this script only toggles state that the mobile media
   query in each page's <style> block reacts to.
   ============================================================ */
(function () {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-nav');
  if (!toggle || !menu) return;

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.classList.add('open');
    const firstLink = menu.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu(returnFocus) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('open');
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    if (isOpen()) {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  // Close after a link is chosen.
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu(false);
  });

  // Escape closes and returns focus to the toggle button.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) closeMenu(true);
  });

  // Click outside the open menu (and off the toggle) closes it.
  document.addEventListener('click', function (e) {
    if (!isOpen()) return;
    if (menu.contains(e.target) || toggle.contains(e.target)) return;
    closeMenu(false);
  });

  // Resizing back above the mobile breakpoint closes the menu.
  const mql = window.matchMedia('(max-width: 768px)');
  function handleBreakpointChange(e) {
    if (!e.matches && isOpen()) closeMenu(false);
  }
  if (mql.addEventListener) {
    mql.addEventListener('change', handleBreakpointChange);
  } else if (mql.addListener) {
    mql.addListener(handleBreakpointChange);
  }
})();
