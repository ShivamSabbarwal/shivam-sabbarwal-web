(function () {
  try {
    var t = localStorage.getItem('shivam-sabbarwal-theme');
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = t === 'dark' ? '/icon-dark.svg' : '/icon-light.svg';
    link.setAttribute('data-theme-managed', 'true');
    document.head.appendChild(link);
  } catch (e) {}
})();
