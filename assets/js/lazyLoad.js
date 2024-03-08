/*
 * Numele fișierului: lazyLoad.js
 * Autor: Ionut Ojica
 * Data: 8 Martie 2024
 * Descriere: Acest script încarcă videoclipurile YouTube doar atunci când secțiunea 'details' este extinsă.
 */
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', function() {
      if (this.open) {
        this.querySelectorAll('.youtube').forEach((div) => {
          let iframe = document.createElement('iframe');
          iframe.src = 'https://www.youtube.com/embed/' + div.dataset.id;
          iframe.width = 560;
          iframe.height = 315;
          iframe.frameBorder = 0;
          div.appendChild(iframe);
        });
      }
    });
  });
});
