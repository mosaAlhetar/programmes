document.addEventListener("DOMContentLoaded", function () {
    const menuTrigger = document.getElementById("menuTrigger");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const closeBtn = document.getElementById("closeBtn");
    const menuContainer = document.getElementById("menuContainer");

    menuTrigger.addEventListener("click", function () {
        dropdownMenu.classList.toggle("active");
        dropdownMenu.classList.toggle("inactive");
    });

    closeBtn.addEventListener("click", function () {
        dropdownMenu.classList.remove("active");
        dropdownMenu.classList.add("inactive");
    });

    document.addEventListener("mousedown", function (e) {
        if (!menuContainer.contains(e.target)) {
            dropdownMenu.classList.remove("active");
            dropdownMenu.classList.add("inactive");
        }
    });
});
