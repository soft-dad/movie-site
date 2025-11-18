document.addEventListener('DOMContentLoaded', function () {
    const largeImage = document.getElementById('largeImage');
    const thumbs = document.querySelectorAll('.thumb');
    const dots = document.querySelectorAll('.dot');
    const leftArr = document.querySelector('.left-arr');
    const rightArr = document.querySelector('.right-arr');
    let currentIndex = 0;
    const totalImages = thumbs.length;
    let autoPlayInterval;

    // 显示图片并更新小圆点状态
    function showImage(index) {
        if (index >= 0 && index < totalImages) {
            largeImage.src = thumbs[index].getAttribute('data-full');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        } else {
            console.error('Invalid image index:', index);
        }
    }

    // 设置缩略图点击事件
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            stopAutoPlay();
            showImage(index);
            startAutoPlay();
        });
    });

    // 设置小圆点点击事件
    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            showImage(dotIndex);
            startAutoPlay();
        });
    });

    // 设置左箭头点击事件
    leftArr.addEventListener('click', () => {
        stopAutoPlay();
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
        startAutoPlay();
    });

    // 设置右箭头点击事件
    rightArr.addEventListener('click', () => {
        stopAutoPlay();
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
        startAutoPlay();
    });

    // 开始自动播放
    function startAutoPlay() {
        if (!autoPlayInterval) {
            autoPlayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalImages;
                showImage(currentIndex);
            }, 3000);
        }
    }

    // 停止自动播放
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }

    // 初始化显示第一张图片并开始自动播放
    showImage(currentIndex);  // 这一步需要放在页面加载后立即执行
    startAutoPlay();  // 启动自动播放
});

// 切换背景
function changeBg() {
    var body = document.body;
    if (body.classList.contains('day')) {
        body.classList.remove('day');
        body.classList.add('night');
    } else {
        body.classList.remove('night');
        body.classList.add('day');
    }
}


// 放大镜
