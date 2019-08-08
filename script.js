document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Dialog script

var dialog = document.querySelector('dialog');
var showModalButton = document.querySelector('.show-modal');
if (! dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}
showModalButton.addEventListener('click', function() {
  dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function() {
  dialog.close();
});

//Progress script

document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(44);
  });

//Snackbar script

(function() {
    'use strict';
    window['counter'] = 0;
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var showToastButton = document.querySelector('#demo-show-toast');
    showToastButton.addEventListener('click', function() {
      'use strict';
      var data = {message: 'Example Message # ' + ++counter};
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
    });
  }());

  (function() {
    'use strict';
    var snackbarContainer = document.querySelector('#demo-snackbar-example');
    var showSnackbarButton = document.querySelector('#demo-show-snackbar');
    var handler = function(event) {
      showSnackbarButton.style.backgroundColor = '';
    };
    showSnackbarButton.addEventListener('click', function() {
      'use strict';
      showSnackbarButton.style.backgroundColor = '#' +
          Math.floor(Math.random() * 0xFFFFFF).toString(16);
      var data = {
        message: 'Button color changed.',
        timeout: 2000,
        actionHandler: handler,
        actionText: 'Undo'
      };
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
    });
  }());