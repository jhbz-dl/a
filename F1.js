const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// 设备轮播
const equipmentSlider = document.getElementById('equipment-slider');
const prevEquipment = document.getElementById('prev-equipment');
const nextEquipment = document.getElementById('next-equipment');
let equipmentIndex = 0;
let equipmentSlideWidth = 100;
let equipmentSlidesToShow = 1;

function updateEquipmentSliderSettings() {
  if (window.innerWidth >= 1024) {
    equipmentSlidesToShow = 3;
  } else if (window.innerWidth >= 768) {
    equipmentSlidesToShow = 2;
  } else {
    equipmentSlidesToShow = 1;
  }
  
  equipmentSlideWidth = 100 / equipmentSlidesToShow;
  updateEquipmentSlider();
}

function updateEquipmentSlider() {
  equipmentSlider.style.transform = `translateX(-${equipmentIndex * equipmentSlideWidth}%)`;
}

prevEquipment.addEventListener('click', () => {
  if (equipmentIndex > 0) {
    equipmentIndex--;
    updateEquipmentSlider();
  }
});

nextEquipment.addEventListener('click', () => {
  const maxIndex = equipmentSlider.children.length - equipmentSlidesToShow;
  if (equipmentIndex < maxIndex) {
    equipmentIndex++;
    updateEquipmentSlider();
  }
});

// 初始化轮播设置
updateEquipmentSliderSettings();
window.addEventListener('resize', updateEquipmentSliderSettings);

// 返回顶部按钮
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove('opacity-0', 'invisible');
    backToTopButton.classList.add('opacity-100', 'visible');
  } else {
    backToTopButton.classList.add('opacity-0', 'invisible');
    backToTopButton.classList.remove('opacity-100', 'visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// 导航栏滚动效果
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('py-2');
    header.classList.remove('py-4');
  } else {
    header.classList.add('py-4');
    header.classList.remove('py-2');
  }
});

// 自动触发数字计数动画
document.addEventListener('DOMContentLoaded', () => {
  const countElements = document.querySelectorAll('.count-up');
  countElements.forEach(element => {
    const target = parseInt(element.getAttribute('data-target'));
    let count = 0;
    const updateCount = () => {
      const increment = target / 50;
      if (count < target) {
        count += increment;
        element.innerText = Math.ceil(count);
        setTimeout(updateCount, 30);
      } else {
        element.innerText = target;
      }
    };
    if (!element.classList.contains('counted')) {
      element.classList.add('counted');
      updateCount();
    }
  });
});