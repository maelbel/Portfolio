"use strict";

/**
 * Navmenu Scrollspy
 */

export default function scrollSpy() {
  const navmenulinks = document.querySelectorAll('.navmenu a');
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    const section = document.querySelector(navmenulink.hash);
    if (!section) return;
    const position = window.scrollY;
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      navmenulink.classList.add('active', 'text-white');
    } else {
      navmenulink.classList.remove('active', 'text-white');
    }
  });
}