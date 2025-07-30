var SelectLanguage = "ja";

const translations = {
    /*日本語のローカライズ用データ */
    ja: {
        /*共通ヘッダー*/
        menu__top: "トップ",
        menu__event: "メニュー",
        menu__info: "お見積り・お問い合わせ",

        //トップページのコンテンツ内容
        toppage__contents__headline: "<h1>イベント・キャンペーン</h1>",
        event__card1: "▷　最新メニュー公開中！<br>　　　最新メニューはこちらから！",
        event__card2: "▷　大盛り無料キャンペーン<br>　　　大人気メニューのアヒル餃子が今だけ無料！",
        event__card3: "▷　ランチ限定！特別メニュー！<br>　　　大人気！餃子定食がランチ限定で500円！",
        event__card4: "▷　爆速！宅配キャンペーン！<br>　　　インターネットで注文！<br>　３秒以内に自宅にお届け！",
        event__card5: "▷　団体予約の申し込みはこちら<br>　　　１０ ～ ５万人まで可能！<br>　団体予約の申し込みはこちらから！",
        event__card6: "▷　Webページ制作でお困りの方へ<br>　　　Webページ制作のお見積りはこちらから！",
        toppage__map: "<h1>マップ</h1>",
        toppage__info: "お見積り・お問い合わせはこちら",

        /*イベントページのコンテンツ内容*/
        event__contents__headline: "<h1>メニュー</h1>",
        event__card1__name: "大きなアヒル型の北京ダック",
        event__card1__description: "¥4,200 (税込 ¥4,620)<br>　見た目はなんと巨大なアヒル型！じっくり焼き上げた本格北京ダックをアヒルの形に仕上げました。遊び心満点の見た目と本格派の味わいが同居する、一度は試したい特別な一皿。",
        event__card2__name: "ガブッとアヒル餃子 大皿盛り",
        event__card2__description: "¥1,580 (税込 ¥1,738)<br>　ジューシーな餃子を山盛りに、大きめのアヒルおもちゃが何羽も仲良く乗った豪快な大皿。みんなでシェアして楽しいひとときを。",
        event__card3__name: "スーラーダック・スープ",
        event__card3__description: "¥980 (税込 ¥1,078)<br>　ピリッと辛い酸辣湯に浮かぶアヒルの冒険。クセになる酸味とアヒルの無表情がクセになる。",
        event__card4__name: "ふわとろダックまん",
        event__card4__description: "¥420 (税込 ¥462)<br>　ほかほかの肉まんの中には、アヒル肉をブレンドした特製フィリング入り。外見はシンプルでも、食べたらアヒルの旨みが広がる隠れた逸品。",
        event__card5__name: "スイミー魚の甘酢仕立て",
        event__card5__description: "¥1,580 (税込 ¥1,738)<br>　淡白な白身魚に甘酢のアクセント。アヒルがまるで池の魚たちを見守るように添えられます。",
        event__card6__name: "クワック酢豚",
        event__card6__description: "¥1,280 (税込 ¥1,408)<br>　甘酸っぱい酢豚の中に、こっそりと複数のアヒルおもちゃが混ざり込んだユニークな一皿。驚きと笑顔を呼ぶ遊び心満点の炒め物です。",

        /*お見積りページの作成*/
        info__contents__headline: "<h1>お見積り・お問い合わせ</h1>",
        info__contents__table__horizontal__top__1: "職種",
        info__contents__table__horizontal__top__2: "摘要",
        info__contents__table__horizontal__top__3: "費用",

        info__contents__table__horizontal1__top__1: "【デザイン費用】",
        info__contents__table__horizontal1__top__2: "トップページデザイン",
        info__contents__table__horizontal1__top__3: "55,500円～",

        info__contents__table__horizontal2__top__1: "",
        info__contents__table__horizontal2__top__2: "下層ページデザイン",
        info__contents__table__horizontal2__top__3: "40,000円～",

        info__contents__table__horizontal3__top__1: "【システム構築費用】",
        info__contents__table__horizontal3__top__2: "トップページのコーディング",
        info__contents__table__horizontal3__top__3: "25,500円～",

        info__contents__table__horizontal4__top__1: "",
        info__contents__table__horizontal4__top__2: "下層ページのコーディング",
        info__contents__table__horizontal4__top__3: "5,000円～",

        info__contents__table__horizontal5__top__1: "",
        info__contents__table__horizontal5__top__2: "サイトのお問い合わせ機能<br>(メール機能)",
        info__contents__table__horizontal5__top__3: "10,000円～",
        info__contents__tell: "TEL : 080-8407-0897<br>MAIL : assgod848(a)little-emperor.com<br>↑スパム対策のため、(a)を＠に変えてください",
    },
    /*英語のローカライズ用データ*/
    en: {
        /*共通ヘッダー*/
        menu__top: "Top",
        menu__event: "Menu",
        menu__info: "Quote & Contact Us",

        //トップページのコンテンツ内容
        toppage__contents__headline: "<h1>Events & Campaigns</h1>",
        event__card1: "▷　Our Latest Menu is Now Available!<br>Click here to view the latest menu!",
        event__card2: "▷　Free Large Portion Campaign!<br>Our popular Duck Dumplings are free for a limited time!",
        event__card3: "▷　Lunch Only!Special Menu!<br>Gyoza Set Meal Only ¥500 at Lunch Time!",
        event__card4: "▷　Super Fast! Delivery Campaign!<br>Delivered to Your Home Within 3 Seconds!",
        event__card5: "▷　Group Reservation Application Here<br>Apply for Group Reservations Here!",
        event__card6: "▷　For Those Having Trouble with Website Creation.Request a Website Creation Quote Here!",
        toppage__map: "<h1>MAP</h1>",
        toppage__info: "Quote & Contact Us Here",

        /*イベントページのコンテンツ内容*/
        event__contents__headline: "<h1>Menu</h1>",
        event__card1__name: "Large Duck-Shaped Peking Duck",
        event__card1__description: "¥4,200 (Tax Included ¥4,620)<br>Amazingly, it looks like a giant duck! This authentic Peking duck is carefully roasted and crafted into the shape of a duck. A special dish that combines playful presentation with genuine flavor — a must-try experience.",
        event__card2__name: "Hearty Duck Dumplings, Large Platter",
        event__card2__description: "¥1,580 (Tax Included  ¥1,738)<br>A generous plate piled high with juicy dumplings, topped with several large duck toys happily gathered together. Share it with everyone for a fun and memorable time.",
        event__card3__name: "Sour Duck Soup",
        event__card3__description: "¥980 (Tax Included   ¥1,078)<br>An adventurous duck floating in spicy and tangy hot and sour soup. The addictive sour flavor and the duck’s expressionless face are simply irresistible.",
        event__card4__name: "Fluffy and Melty Duck Bun",
        event__card4__description: "¥420 (Tax Included   ¥462)<br>Inside these warm steamed buns is a special filling blended with duck meat. Though simple in appearance, each bite reveals the rich umami flavor of duck — a hidden delicacy.",
        event__card5__name: "Sweet and Sour “Swimmy” Fish",
        event__card5__description: "¥1,580 (Tax Included   ¥1,738)<br>Delicate white fish accented with a sweet and sour sauce. The duck is presented as if watching over the fish in a pond.",
        event__card6__name: "Quack Sweet and Sour Pork",
        event__card6__description: "¥1,280 (Tax Included   ¥1,408)<br>A unique sweet and sour pork dish secretly mixed with several duck toys. A playful stir-fry that brings surprise and smiles.",

        /*お見積りページの作成*/
        info__contents__headline: "Quote & Contact",
        info__contents__table__horizontal__top__1: "Job Type",
        info__contents__table__horizontal__top__2: "Summary",
        info__contents__table__horizontal__top__3: "Cost/Fee",

        info__contents__table__horizontal1__top__1: "【Design Cost】",
        info__contents__table__horizontal1__top__2: "Top Page Design",
        info__contents__table__horizontal1__top__3: "From ¥55,500 (JPY)",

        info__contents__table__horizontal2__top__1: "",
        info__contents__table__horizontal2__top__2: "Inner Page Design",
        info__contents__table__horizontal2__top__3: "From ¥40,000 (JPY)",

        info__contents__table__horizontal3__top__1: "【System Development Cost】",
        info__contents__table__horizontal3__top__2: "Top Page Coding",
        info__contents__table__horizontal3__top__3: "From ¥25,500 (JPY)",

        info__contents__table__horizontal4__top__1: "",
        info__contents__table__horizontal4__top__2: "Inner Page Coding",
        info__contents__table__horizontal4__top__3: "From ¥5,000 (JPY)",

        info__contents__table__horizontal5__top__1: "",
        info__contents__table__horizontal5__top__2: "Contact Feature on the Website",
        info__contents__table__horizontal5__top__3: "From ¥10,000 (JPY)",
        info__contents__tell: "TEL : 080-8407-0897<br>MAIL : assgod848(a)little-emperor.com<br>↑To prevent spam, please replace (a) with @",
    },
    /*中国語のローカライズ用データ*/
    zh: {
        /*共通ヘッダー*/
        menu__top: "首页",
        menu__event: "菜单",
        menu__info: "报价与咨询",

        //トップページコンテンツ内容
        toppage__contents__headline: "<h1>活动与促销</h1>",
        event__card1: "▷　最新菜单已发布！<br>点击此处查看最新菜单！",
        event__card2: "▷　免费加大份量活动<br>人气菜单中的鸭肉饺子限时免费！",
        event__card3: "▷　午餐限定！特别菜单！<br>人气推荐！午餐限定饺子套餐仅售500日元！",
        event__card4: "▷　极速！外卖优惠活动！<br>３秒内送达您家！",
        event__card5: "▷　团体预订申请请点击这里<br>请从这里申请团体预订！",
        event__card6: "▷　对于网页制作遇到困难的您<br>请从这里申请网页制作报价！",
        toppage__map: "<h1>地图</h1>",
        toppage__info: "报价与咨询请点击这里",

        /*イベントページのコンテンツ内容*/
        event__contents__headline: "<h1>菜单</h1>",
        event__card1__name: "大型鸭形烤鸭",
        event__card1__description: "¥4,200 (含税 ¥4,620)<br>　外观竟然是巨大的鸭子造型！这道正宗的北京烤鸭经过精心烤制，打造出鸭子形状。外观充满趣味，同时味道地道，是一道值得一试的特别美食。",
        event__card2__name: "大份鸭肉饺子拼盘",
        event__card2__description: "¥1,580 (含税 ¥1,738)<br>　一大盘堆满多汁的饺子，上面放着几只可爱的鸭子玩具，亲密地聚在一起。大家一起分享，共度欢乐时光。",
        event__card3__name: "酸辣鸭汤",
        event__card3__description: "¥980 (含税 ¥1,078)<br>　一只鸭子漂浮在酸辣爽口的汤中，展开冒险。让人上瘾的酸味和鸭子那无表情的模样令人难忘。",
        event__card4__name: "松软嫩滑鸭肉包",
        event__card4__description: "¥420 (含税 ¥462)<br>　热腾腾的肉包内含有特别调制的鸭肉馅料。外表虽朴素，但咬下一口，鸭肉的鲜美滋味便会在口中绽放，是一道隐藏的美味佳肴。",
        event__card5__name: "酸甜口味的“小鱼游游”料理",
        event__card5__description: "¥1,580 (含税 ¥1,738)<br>　清淡的白肉鱼配以甜酸酱点缀。鸭子如同守护池中鱼儿般被摆放其旁。",
        event__card6__name: "呱呱咕噜肉",
        event__card6__description: "¥1,280 (含税 ¥1,408)<br>　这道酸甜咕噜肉中悄悄混入了几只鸭子玩具，是一道充满趣味、带来惊喜和欢笑的独特炒菜。",

        /*お見積りページの作成*/
        info__contents__headline: "报价与咨询",
        info__contents__table__horizontal__top__1: "职位类型",
        info__contents__table__horizontal__top__2: "摘要",
        info__contents__table__horizontal__top__3: "费用",

        info__contents__table__horizontal1__top__1: "【设计费用】",
        info__contents__table__horizontal1__top__2: "首页设计",
        info__contents__table__horizontal1__top__3: "¥55,500 起（日元）",

        info__contents__table__horizontal2__top__1: "",
        info__contents__table__horizontal2__top__2: "内页设计",
        info__contents__table__horizontal2__top__3: "¥40,000 起（日元）",

        info__contents__table__horizontal3__top__1: "【系统构建费用】",
        info__contents__table__horizontal3__top__2: "首页编码",
        info__contents__table__horizontal3__top__3: "¥25,500 起（日元）",

        info__contents__table__horizontal4__top__1: "",
        info__contents__table__horizontal4__top__2: "内页编码",
        info__contents__table__horizontal4__top__3: "¥5,000 起（日元）",

        info__contents__table__horizontal5__top__1: "",
        info__contents__table__horizontal5__top__2: "网站联系功能",
        info__contents__table__horizontal5__top__3: "¥10,000 起（日元）",

        info__contents__tell: "电话 : 080-8407-0897<br>电子邮件 : assgod848(a)little-emperor.com<br>↑为防止垃圾邮件，请将 (a) 替换为 @",
    }
};

/*ボタンが押された時に動作*/
/*ここは共通動作なので1つのjsにして呼び出す */
function changeLanguage(lang) {
    const t = translations[lang];
    /*引数で取得した言語に各ページの内容を切り替える*/
    /*クリックされた時に指定のパスだった場合はページの言語を変更する*/
    switch (location.pathname) {
        case "LP_DemoPage/":
        case "/LP_DemoPage/index.html":
        case "/index.html":
            document.getElementById("toppage__contents__headline").innerHTML = t.toppage__contents__headline;
            document.getElementById("event__card1").innerHTML = t.event__card1;
            document.getElementById("event__card2").innerHTML = t.event__card2;
            document.getElementById("event__card3").innerHTML = t.event__card3;
            document.getElementById("event__card4").innerHTML = t.event__card4;
            document.getElementById("event__card5").innerHTML = t.event__card5;
            document.getElementById("event__card6").innerHTML = t.event__card6;
            document.getElementById("toppage__map").innerHTML = t.toppage__map;
            document.getElementById("toppage__info").innerHTML = t.toppage__info;
            console.log(location.pathname);
            break;

        case "/LP_DemoPage/event.html":
        case "/event.html":
            document.getElementById("event__contents__headline").innerHTML = t.event__contents__headline;
            document.getElementById("event__card1__name").innerHTML = t.event__card1__name;
            document.getElementById("event__card1__description").innerHTML = t.event__card1__description;
            document.getElementById("event__card2__name").innerHTML = t.event__card2__name;
            document.getElementById("event__card2__description").innerHTML = t.event__card2__description;
            document.getElementById("event__card3__name").innerHTML = t.event__card3__name;
            document.getElementById("event__card3__description").innerHTML = t.event__card3__description;
            document.getElementById("event__card4__name").innerHTML = t.event__card4__name;
            document.getElementById("event__card4__description").innerHTML = t.event__card4__description;
            document.getElementById("event__card5__name").innerHTML = t.event__card5__name;
            document.getElementById("event__card5__description").innerHTML = t.event__card5__description;
            document.getElementById("event__card6__name").innerHTML = t.event__card6__name;
            document.getElementById("event__card6__description").innerHTML = t.event__card6__description;
            break;

        case "/LP_DemoPage/info.html":
        case "/info.html":
            document.getElementById("info__contents__headline").innerHTML = t.info__contents__headline;
            document.getElementById("info__contents__table__horizontal__top__1").innerHTML = t.info__contents__table__horizontal__top__1;
            document.getElementById("info__contents__table__horizontal__top__2").innerText = t.info__contents__table__horizontal__top__2;
            document.getElementById("info__contents__table__horizontal__top__3").innerText = t.info__contents__table__horizontal__top__3;
            document.getElementById("info__contents__table__horizontal1__1").innerText = t.info__contents__table__horizontal1__top__1;
            document.getElementById("info__contents__table__horizontal1__2").innerText = t.info__contents__table__horizontal1__top__2;
            document.getElementById("info__contents__table__horizontal1__3").innerText = t.info__contents__table__horizontal1__top__3;

            document.getElementById("info__contents__table__horizontal2__1").innerText = t.info__contents__table__horizontal2__top__1;
            document.getElementById("info__contents__table__horizontal2__2").innerText = t.info__contents__table__horizontal2__top__2;
            document.getElementById("info__contents__table__horizontal2__3").innerText = t.info__contents__table__horizontal2__top__3;

            document.getElementById("info__contents__table__horizontal3__1").innerText = t.info__contents__table__horizontal3__top__1;
            document.getElementById("info__contents__table__horizontal3__2").innerText = t.info__contents__table__horizontal3__top__2;
            document.getElementById("info__contents__table__horizontal3__3").innerText = t.info__contents__table__horizontal3__top__3;

            document.getElementById("info__contents__table__horizontal4__1").innerText = t.info__contents__table__horizontal4__top__1;
            document.getElementById("info__contents__table__horizontal4__2").innerText = t.info__contents__table__horizontal4__top__2;
            document.getElementById("info__contents__table__horizontal4__3").innerText = t.info__contents__table__horizontal4__top__3;

            document.getElementById("info__contents__table__horizontal5__1").innerText = t.info__contents__table__horizontal5__top__1;
            document.getElementById("info__contents__table__horizontal5__2").innerText = t.info__contents__table__horizontal5__top__2;
            document.getElementById("info__contents__table__horizontal5__3").innerText = t.info__contents__table__horizontal5__top__3;

            document.getElementById("info__contents__tell").innerHTML = t.info__contents__tell;
            break;
    }

    //現在選択した言語をセッションストレージに保管
    value = String(lang);
    /*同じセッション中は言語を統一させたいのでセッションストレージにデータを保存 */
    sessionStorage.setItem('SelectLanguage', value);
    /*言語毎に使用フォントの切り替えのフォントに変換する */
    switch (lang) {
        //日本語、英語用フォントに変更
        case "en":
        case "ja":
            document.getElementById("top_main_box").style.fontFamily = 'sans-serif';
            return;
        //中文用にfontを変更
        case "zh":
            document.getElementById("top_main_box").style.fontFamily = 'Noto Sans SC';
            return;
    }
}

/*ページを変更した時は一度この処理を呼び言語変更を有効化する*/
function LanguageCheck() {
    /*もしsessionStorageにSelectLanguageが入っていた場合、それを取得して言語を変える */
    var storageItem = sessionStorage.getItem('SelectLanguage');
    if (storageItem != null) {
        SelectLanguage = storageItem;
    }
    changeLanguage(SelectLanguage);
}
