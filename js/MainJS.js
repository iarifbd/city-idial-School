document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('show');
    });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
};
