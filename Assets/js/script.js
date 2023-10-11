var buttons = document.querySelectorAll('.banner-btn a');

buttons.forEach(function(button) {
    button.addEventListener('mousedown', function() {
        button.classList.add('clicked');
    });

    button.addEventListener('mouseup', function() {
        button.classList.remove('clicked');
    });

    button.addEventListener('mouseleave', function() {
        button.classList.remove('clicked');
    });
});
