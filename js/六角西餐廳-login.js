$(document).ready(function () {
    $(".header-bar .mobile-menu").click(function (e) { 
        e.preventDefault();
        $(".header-bar .menu").toggleClass("add");
    });
});