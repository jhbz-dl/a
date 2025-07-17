
    // 移动端菜单切换
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    
    mobileMenuButton.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
    
    // 产品标签切换
    const productTabs = document.querySelectorAll('.product-tab');
    const productTabContents = document.querySelectorAll('.product-tab-content');
    
    productTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // 移除所有活动状态
        productTabs.forEach(t => {
          t.classList.remove('active', 'bg-primary', 'text-white');
          t.classList.add('bg-gray-200', 'text-gray-700');
        });
        
        // 添加当前活动状态
        tab.classList.add('active', 'bg-primary', 'text-white');
        tab.classList.remove('bg-gray-200', 'text-gray-700');
        
        // 隐藏所有内容
        productTabContents.forEach(content => {
          content.classList.add('hidden');
          content.classList.remove('active');
        });
        
        // 显示当前内容
        const tabId = tab.getAttribute('data-tab');
        const currentContent = document.getElementById(tabId);
        currentContent.classList.remove('hidden');
        currentContent.classList.add('active');
      });
    });
    
    // 公司实力轮播
    const slider = document.getElementById('company-slider');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentIndex = 0;
    let slideWidth = 100; // 默认宽度
    let slidesToShow = 1; // 默认显示数量
    
    // 根据屏幕尺寸调整轮播
    function updateSliderSettings() {
      if (window.innerWidth >= 1024) {
        slidesToShow = 3;
      } else if (window.innerWidth >= 768) {
        slidesToShow = 2;
      } else {
        slidesToShow = 1;
      }
      
      slideWidth = 100 / slidesToShow;
      updateSlider();
    }
    
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
    
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
    
    nextBtn.addEventListener('click', () => {
      const maxIndex = slider.children.length - slidesToShow;
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
      }
    });
    
    // 初始化轮播设置
    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);
    
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