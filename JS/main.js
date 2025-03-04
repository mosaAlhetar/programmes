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



// hhhhhhhhh
// تفعيل الـ Swiper للمحتوى
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  // تفعيل العد التنازلي (Counter)
  document.querySelectorAll('.counter-number').forEach(function (counter) {
    let countTo = parseInt(counter.getAttribute('data-to-value'));
    let count = 0;
  
    const interval = setInterval(function () {
      counter.innerText = count;
      if (count >= countTo) {
        clearInterval(interval);
      }
      count += Math.ceil(countTo / 100);
    }, 10);
  });
  
// lllllll
// تفعيل الـ Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // عرض شريحة واحدة في المرة
    spaceBetween: 10, // المسافة بين الشرائح
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true, // التكرار بين الشرائح
  });
  

