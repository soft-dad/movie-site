/* =========================================================
 *  为“正在热映 / 即将上映 / 经典影片”三套容器分别生成独立分页
 *  每套容器对应自己的数据集与分页栏，互不影响
 * =========================================================*/
(function(){
    /* 三套数据池：key 与容器 id 对应 -------------------- */
    const movieData = {
        tab1:[
            [],
            [   // 第 1 页（原 HTML 写死那 12 条）
                {img:'mov1.jpg',  name:'野孩子', score:'8.0'},
                {img:'mov2.jpg',  name:'孤注一掷', score:'8.8'},
                {img:'mov3.jpg',  name:'默杀', score:'9.5'},
                {img:'mov4.jpg',  name:'朝云暮雨', score:'7.5'},
                {img:'mov5.jpg',  name:'门锁', score:'6.6'},
                {img:'mov6.jpg',  name:'你的名字', score:'9.0'},
                {img:'mov7.jpg',  name:'冰雪奇缘2', score:'9.4'},
                {img:'mov8.jpg',  name:'战狼', score:'9.2'},
                {img:'mov9.jpg',  name:'西游记之大圣归来', score:'8.4'},
                {img:'mov10.jpg', name:'中国机长', score:'9.4'},
                {img:'mov11.jpg', name:'少年的你', score:'8.7'},
                {img:'mov12.jpg', name:'一生有你2019', score:'8.6'}
            ],
            /* 第 2 页 */
            [
                {img:'mov1_2.jpg', name:'白日梦想家', score:'8.6'},
                {img:'mov2_2.jpg', name:'731', score:'5.8'},
                {img:'mov3_2.jpg', name:'万里归途', score:'7.2'},
                {img:'mov4_2.jpg', name:'绿皮书', score:'8.9'},
                {img:'mov5_2.jpg', name:'小小的我', score:'7.1'},
                {img:'mov6_2.jpg', name:'白蛇：缘起', score:'7.8'},
                {img:'mov7_2.jpg', name:'姥姥的外孙', score:'8.9'},
                {img:'mov8_2.jpg', name:'送你一朵小红花', score:'7.2'},
                {img:'mov9_2.jpg', name:'怪物', score:'8.6'},
                {img:'mov10_2.jpg', name:'戏台', score:'8.0'},
                {img:'mov11_2.jpg', name:'南京照相馆', score:'8.7'},
                {img:'mov12_2.jpg', name:'少年的你', score:'8.2'}
            ],
            /* 第 3 页 */
            [
                {img:'mov1_3.jpg', name:'青蛇劫起', score:'6.8'},
                {img:'mov2_3.jpg', name:'八佰', score:'7.5'},
                {img:'mov3_3.jpg', name:'我不是药神', score:'9.0'},
                {img:'mov4_3.jpg', name:'深海', score:'7.2'},
                {img:'mov5_3.jpg', name:'哈尔的移动城堡', score:'9.1'},
                {img:'mov6_3.jpg', name:'白蛇：浮生', score:'7.0'},
                {img:'mov7_3.jpg', name:'溺水小刀', score:'7.4'},
                {img:'mov8_3.jpg', name:'海绵宝宝历险记', score:'8.5'},
                {img:'mov9_3.jpg', name:'大鱼海棠', score:'6.9'},
                {img:'mov10_3.jpg', name:'我和我的祖国', score:'7.6'},
                {img:'mov11_3.jpg', name:'长津湖', score:'7.4'},
                {img:'mov12_3.jpg', name:'烈火英雄', score:'6.4'}
            ]
        ],
        /* 即将上映 ----------------------------- */
        tab2:[
            [],
            [   // 第 1 页
                {img:'soon1.jpg', name:'蜘蛛侠：纵横宇宙', score:'8.5'},
                {img:'soon2.jpg', name:'流浪地球2', score:'8.3'},
                {img:'soon3.jpg', name:'哪吒 2', score:'8.5'},
                {img:'soon4.jpg', name:'疯狂动物城 2', score:'9.2'},
                {img:'soon5.jpg', name:'狮子王', score:'7.4'},
                {img:'soon6.jpg', name:'玩具总动员', score:'8.6'},
                {img:'soon7.jpg', name:'黑豹', score:'6.5'},
                {img:'soon8.jpg', name:'浪浪山小妖怪', score:'8.6'},
                {img:'soon9.jpg', name:'闪电侠', score:'8.6'},
                {img:'soon10.jpg', name:'蚁人与黄蜂女：量子狂潮', score:'8.8'},
                {img:'soon11.jpg', name:'银河护卫队3', score:'9.1'},
                {img:'soon12.jpg', name:'速度与激情10', score:'9.6'}],
            [     // 第 2 页
                {img:'soon1_1.jpg', name:'雷神', score:'8.9'},
                {img:'soon2_1.jpg', name:'蜘蛛侠', score:'9.2'},
                {img:'soon3_1.jpg', name:'阿凡达', score:'9.5'},
                {img:'soon4_1.jpg', name:'阿凡达：火与烬', score:'8.6'},
                {img:'soon5_1.jpg', name:'侏罗纪世界：重生', score:'6.5'},
                {img:'soon6_1.jpg', name:'神偷奶爸4', score:'6.1'},
                {img:'soon7_1.jpg', name:'人生大事', score:'7.3'},
                {img:'soon8_1.jpg', name:'你的婚礼', score:'8.8'},
                {img:'soon9_1.jpg', name:'战狼2', score:'7.1'},
                {img:'soon10_1.jpg', name:'默杀', score:'6.1'},
                {img:'soon11_1.jpg', name:'被我弄丢的你', score:'9.0'},
                {img:'soon12_1.jpg', name:'沙丘2', score:'8.2'}
            ],
            [     // 第 3 页
                {img:'soon1_2.jpg', name:'骗骗喜欢你', score:'9.3'},
                {img:'soon2_2.jpg', name:'向阳花', score:'6.6'},
                {img:'soon3_2.jpg', name:'云边有个小卖部', score:'4.9'},
                {img:'soon4_2.jpg', name:'奇迹', score:'7.4'},
                {img:'soon5_2.jpg', name:'热烈', score:'9.4'},
                {img:'soon6_2.jpg', name:'十二公民', score:'8.4'},
                {img:'soon7_2.jpg', name:'唐人街探案3', score:'8.8'},
                {img:'soon8_2.jpg', name:'念念相忘', score:'8.9'},
                {img:'soon9_2.jpg', name:'长安的荔枝', score:'8.0'},
                {img:'soon10_2.jpg', name:'这么多年', score:'9.1'},
                {img:'soon11_2.jpg', name:'心灵奇旅', score:'8.7'},
                {img:'soon12_2.jpg', name:'芳华', score:'9.0'}
            ]
        ],
        /* 经典影片 ----------------------------- */
        tab3:[
            [],
            [   {img:'cla1.jpg', name:'天空之城', score:'9.2'},
                {img:'cla2.jpg', name:'阿甘正传', score:'9.5'},
                {img:'cla3.jpg', name:'千与千寻', score:'9.4'},
                {img:'cla4.jpg', name:'盗梦空间', score:'9.4'},
                {img:'cla5.jpg', name:'星际穿越', score:'9.3'},
                {img:'cla6.jpg', name:'楚门的世界', score:'9.4'},
                {img:'cla7.jpg', name:'垫底辣妹', score:'8.3'},
                {img:'cla8.jpg', name:'三傻大闹宝莱坞', score:'9.2'},
                {img:'cla9.jpg', name:'机器人总动员', score:'9.3'},
                {img:'cla10.jpg', name:'放牛班的春天', score:'9.3'},
                {img:'cla11.jpg', name:'大话西游', score:'9.0'},
                {img:'cla12.jpg', name:'功夫熊猫', score:'8.1'}],
            [     // 第 2 页
                {img:'cla1_2.jpg', name:'霸王别姬', score:'9.3'},
                {img:'cla2_2.jpg', name:'泰坦尼克号', score:'9.4'},
                {img:'cla3_2.jpg', name:'肖申克的救赎', score:'9.4'},
                {img:'cla4_2.jpg', name:'变形金刚', score:'9.3'},
                {img:'cla5_2.jpg', name:'断魂蓝桥', score:'9.3'},
                {img:'cla6_2.jpg', name:'夺宝奇兵5', score:'9.2'},
                {img:'cla7_2.jpg', name:'疯狂元素城', score:'8.9'},
                {img:'cla8_2.jpg', name:'哥斯拉1', score:'9.1'},
                {img:'cla9_2.jpg', name:'黑豹2', score:'9.2'},
                {img:'cla10_2.jpg', name:'教父', score:'9.2'},
                {img:'cla11_2.jpg', name:'卡萨布兰卡', score:'9.2'},
                {img:'cla12_2.jpg', name:'乱世佳人', score:'9.1'}
            ],
            [     // 第 3 页
                {img:'cla1_3.jpg', name:'美丽人生', score:'9.5'},
                {img:'cla2_3.jpg', name:'辛德勒名单', score:'9.5'},
                {img:'cla3_3.jpg', name:'钢琴家', score:'9.1'},
                {img:'cla4_3.jpg', name:'当幸福来敲门', score:'9.1'},
                {img:'cla5_3.jpg', name:'龙猫', score:'9.2'},
                {img:'cla6_3.jpg', name:'这个杀手不太冷', score:'9.1'},
                {img:'cla7_3.jpg', name:'风之谷', score:'9.1'},
                {img:'cla8_3.jpg', name:'天空之城', score:'9.1'},
                {img:'cla9_3.jpg', name:'幽灵公主', score:'9.0'},
                {img:'cla10_3.jpg', name:'侧耳倾听', score:'8.9'},
                {img:'cla11_3.jpg', name:'唐伯虎点秋香', score:'8.9'},
                {img:'cla12_3.jpg', name:'罗马假日', score:'8.8'}
            ]
        ]
    };

    /* 基础函数 ------------------------------------ */
    function getUrlPage(tabId){
        return Math.max(1, parseInt(new URLSearchParams(location.search).get(tabId+'Page') || '1'));
    }
    function setUrlPage(tabId, p){
        const u = new URL(location.href);
        u.searchParams.set(tabId+'Page', p);
        history.replaceState(null, '', u);
    }

    /* 把 12 条数据渲染到容器 ------------------------ */
    function fillMovies(tabId, page){
        const pool = movieData[tabId][page];
        if(!pool || !pool.length) return;

        const box = document.querySelector(`#${tabId} .movies`);
        /* 第一次：容器为空，一次性生成 12 个骨架 */
        if(box.querySelectorAll('.movie-item').length === 0){
            let html = '';
            pool.forEach(d=>{
                html += `
                    <div class="movie-item">
                        <div class="poster"><a href=""><img src="img/${d.img}" alt=""></a></div>
                        <div class="name"><a href="">${d.name}</a></div>
                        <div class="buy-ticket">购票</div>
                        <div class="score">${d.score}</div>
                    </div>`;
            });
            box.innerHTML = html;
            return;
        }
        /* 非第一次：只替换图片、片名、分数 */
        const items = box.querySelectorAll('.movie-item');
        pool.forEach((d,i)=>{
            const item = items[i]; if(!item) return;
            item.querySelector('img').src = 'img/' + d.img;
            item.querySelector('.name a').textContent = d.name;
            const scoreBox = item.querySelector('.score');
            if(scoreBox) scoreBox.textContent = d.score;
        });
    }

    /* 生成分页栏 ---------------------------------- */
    function renderPager(tabId, totalPages){
        const pager = document.querySelector(`#${tabId} .pager`);
        if(!pager) return;
        const current = getUrlPage(tabId);
        pager.innerHTML = '';
        const create = (text, p, disable) =>{
            const a = document.createElement('a');
            a.textContent = text;
            a.href = disable ? '#' : `?${tabId}Page=${p}`;
            if(disable) a.style.pointerEvents = 'none';
            else a.addEventListener('click', e=>{
                e.preventDefault();
                setUrlPage(tabId, p);
                fillMovies(tabId, p);
                renderPager(tabId, totalPages);
            });
            return a;
        };
        pager.appendChild(create('上一页', current-1, current===1));
        for(let i=1;i<=totalPages;i++){
            const a = create(i, i);
            if(i===current) a.classList.add('select');
            pager.appendChild(a);
        }
        pager.appendChild(create('下一页', current+1, current===totalPages));
    }

    /* 初始化：每个标签读取自己的页码并渲染 ---------- */
    document.addEventListener('DOMContentLoaded', ()=>{
        ['tab1','tab2','tab3'].forEach(id => {
            const totalPages = movieData[id].length - 1;   // 第 0 页留空
            const page = getUrlPage(id);
            fillMovies(id, page);
            renderPager(id, totalPages);
        });
    });
})();