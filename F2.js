 // 移动端菜单切换
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      const mobileNav = document.getElementById('mobile-nav');
      mobileNav.classList.toggle('hidden');
    });

    // 返回顶部按钮
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
      }
    });
    
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // 数字增长动画 - 优化版
    function animateCounter(element) {
      const target = +element.getAttribute('data-target');
      const speed = +element.getAttribute('data-speed') || 2000; // 默认2秒
      const increment = target / (speed / 16); // 每16ms的增量，约等于60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target;
          clearInterval(timer);
        } else {
          // 格式化显示
          if (target >= 1000) {
            element.textContent = Math.floor(current).toLocaleString();
          } else {
            element.textContent = Math.floor(current);
          }
        }
      }, 16);
    }

    // 监听元素是否进入视口
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 对每个计数器启动动画
          const counters = entry.target.querySelectorAll('.count-up');
          counters.forEach(counter => {
            animateCounter(counter);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // 观察计数器容器
    const counterContainer = document.getElementById('stats-container');
    if (counterContainer) {
      observer.observe(counterContainer);
    }

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('py-0');
        header.classList.remove('py-1');
      } else {
        header.classList.add('py-1');
        header.classList.remove('py-0');
      }
    });