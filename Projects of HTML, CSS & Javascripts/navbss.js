function myFunction(){
    var element = document.getElementsByClassName("topnav")[0];
    element.classList.toggle(active)
}
function toggleActive(link) {
    var links = document.querySelectorAll('.topnav a');
    links.forEach(function(item) {
        item.classList.remove('active');
    });
    link.classList.add('active');
}

document.querySelectorAll('.topnav a').forEach(function(link) {
    link.addEventListener('click', function() {
        toggleActive(link);
    });
});
