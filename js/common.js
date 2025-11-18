// ===== common.js =====
document.addEventListener('DOMContentLoaded', () => {
    initDropdownMenu();
    // 其他公共逻辑...
});

/* 统一下拉菜单初始化 */
function initDropdownMenu() {
    document.querySelectorAll('.dropdown').forEach(drop => {
        const btn = drop.querySelector('.dropbtn');
        const menu = drop.querySelector('.dropdown-content');
        if (!btn || !menu) return;

        btn.addEventListener('click', e => {
            e.preventDefault();
            // 关闭其他下拉
            document.querySelectorAll('.dropdown-content').forEach(m => {
                if (m !== menu) m.style.display = 'none';
            });
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // 点外部关闭
    window.addEventListener('click', e => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(m => m.style.display = 'none');
        }
    });
}