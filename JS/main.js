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
// document.addEventListener("DOMContentLoaded", function () {
//     emailjs.init("g6Iv19twE6sc8t1ZC"); // إدخال معرف المستخدم من EmailJS

//     const form = document.getElementById("quoteForm");
//     const successMessage = document.getElementById("successMessage");

//     form.addEventListener("submit", function (e) {
//         e.preventDefault();

//         emailjs.sendForm("service_m3o322r", "template_80kc4sm", form)
//             .then(
//                 function (response) {
//                     console.log("تم الإرسال بنجاح:", response.status, response.text);
//                     form.reset();
//                     successMessage.style.display = "block";
//                 },
//                 function (error) {
//                     console.log("حدث خطأ في الإرسال:", error);
//                 }
//             );
//     });
// });

