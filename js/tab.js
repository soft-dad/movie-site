document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tab');
    var tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的链接行为

            // 移除所有选项卡的激活状态
            tabs.forEach(function(t) {
                t.classList.remove('active');
            });
            // 隐藏所有内容区域
            tabContents.forEach(function(tc) {
                tc.classList.remove('active');
            });
            // 激活当前选项卡并显示对应的内容区域
            var targetId = tab.getAttribute('data-target');
            var targetContent = document.getElementById(targetId);
            tab.classList.add('active');
            targetContent.classList.add('active');
        });
    });
});