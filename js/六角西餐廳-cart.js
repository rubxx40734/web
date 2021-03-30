$(document).ready(function () {

    $(".pct1[href$='.test']").addClass("fas fa-utensils");
    $(".pct2[href$='.test']").addClass("fas fa-search");

    $(".header-bar .mobile-menu").click(function (e) { 
        e.preventDefault();
        $(".header-bar .menu").toggleClass("add");
    });
});