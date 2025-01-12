(function saveData() {
  if ('connection' in navigator) {
    if (navigator.connection.saveData == true) {
      // Add class to document
      document.documentElement.classList.add('save-data');
      // use default img src
      [...document.querySelectorAll('[srcset]')].forEach(img => {
        // eslint-disable-next-line require-unicode-regexp
        img.srcset = img.srcset
          .replace(/q_auto/g, 'q_0')
          .replace(/\/fetch\//g, '/fetch/e_grayscale/');
      });
    }
  }
})();
