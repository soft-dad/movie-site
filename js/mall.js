/****************************************************
 *  商城放大镜 – 最右图自动左侧弹出
 *  不改变排版、不新增类名
 ***************************************************/
document.addEventListener('DOMContentLoaded', () => {
    /* 一行排几个，由 CSS 决定：这里 3 个（1200px 宽 / 单格 380px 左右） */
    const ROW_SIZE = 3;

    document.querySelectorAll('.magnifier-container').forEach((box, idx) => {
        const img   = box.querySelector('.product-img');
        const glass = box.querySelector('.magnifier-glass');
        const panel = box.querySelector('.magnified-img-container');

        /* 高分辨率图规则：thumb → highres，失败回落原图 */
        const hiSrc = img.src.replace('thumb', 'highres');
        const testImg = new Image();
        testImg.onload  = () => panel.dataset.bg = hiSrc;
        testImg.onerror = () => panel.dataset.bg = img.src;
        testImg.src = hiSrc;

        /* 事件 */
        box.addEventListener('mouseenter', () => show(panel, glass));
        box.addEventListener('mouseleave', () => hide(panel, glass));
        box.addEventListener('mousemove', (e) => move(e, img, glass, panel, idx, ROW_SIZE));
    });

    function show(panel, glass) {
        glass.style.display = 'block';
        panel.style.display = 'block';
    }
    function hide(panel, glass) {
        glass.style.display = 'none';
        panel.style.display = 'none';
    }
    function move(e, img, glass, panel, idx, rowSize) {
        const r = img.getBoundingClientRect();
        let x = e.clientX - r.left - glass.offsetWidth  / 2;
        let y = e.clientY - r.top  - glass.offsetHeight / 2;

        /* 限制玻璃片不出原图 */
        x = Math.max(0, Math.min(x, r.width - glass.offsetWidth));
        y = Math.max(0, Math.min(y, r.height - glass.offsetHeight));
        glass.style.left = x + 'px';
        glass.style.top  = y + 'px';

        /* 放大背景 */
        const scale = 3;
        panel.style.backgroundImage = `url(${panel.dataset.bg})`;
        panel.style.backgroundSize =
            `${img.naturalWidth * scale}px ${img.naturalHeight * scale}px`;
        panel.style.backgroundPosition = `-${x * scale}px -${y * scale}px`;

        /* 关键：是否当前行最后一个 */
        const isLastInRow = (idx + 1) % rowSize === 0;
        const gap = 20;
        const panelW = 300;
        panel.style.left = isLastInRow
            ? -(panelW + gap) + 'px'   // 最右图 → 左侧
            : (r.width + gap) + 'px';  // 其余   → 右侧
    }
});