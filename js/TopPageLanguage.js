/*各ページの切り替えたい画像類 */
/*ここはページごとにjsを作る予定 */
var SelectLanguage = "ja";

const translations = {
    /*日本語のローカライズ用データ */
    ja: {
        /*コンテンツ内容*/
        toppage__contents__headline: "<h1>イベント・キャンペーン</h1>",
        event__card1: "▷　最新メニュー公開中！<br>　　　最新メニューはこちらから！",
        event__card2: "▷　大盛り無料キャンペーン<br>　　　大人気メニューのアヒル餃子が今だけ無料！",
        event__card3: "▷　ランチ限定！特別メニュー！<br>　　　大人気！餃子定食がランチ限定で500円！",
        event__card4: "▷　爆速！宅配キャンペーン！<br>　　　インターネットで注文！<br>　３秒以内に自宅にお届け！",
        event__card5: "▷　団体予約の申し込みはこちら<br>　　　１０ ～ ５万人まで可能！<br>　団体予約の申し込みはこちらから！",
        event__card6: "▷　Webページ制作でお困りの方へ<br>　　　Webページ制作のお見積りはこちらから！",
        toppage__map: "<h1>マップ</h1>",
        toppage__info: "お見積り・お問い合わせはこちら",
    },
    /*英語のローカライズ用データ*/
    en: {
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
    },
    /*中国語のローカライズ用データ*/
    zh: {
        /*トップページのコンテンツ内容 */
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
    }
};

/*ボタンが押された時に動作*/
/*ここは共通動作なので1つのjsにして呼び出す */
function changeLanguageIndex(lang) {
    const t = translations[lang];

    /*引数で取得した言語に各ページの内容を切り替える*/
    document.getElementById("toppage__contents__headline").innerHTML = t.toppage__contents__headline;
    document.getElementById("event__card1").innerHTML = t.event__card1;
    document.getElementById("event__card2").innerHTML = t.event__card2;
    document.getElementById("event__card3").innerHTML = t.event__card3;
    document.getElementById("event__card4").innerHTML = t.event__card4;
    document.getElementById("event__card5").innerHTML = t.event__card5;
    document.getElementById("event__card6").innerHTML = t.event__card6;
    document.getElementById("toppage__map").innerHTML = t.toppage__map;
    document.getElementById("toppage__info").innerHTML = t.toppage__info;

    /*
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
    */

    /*同じセッション中は言語を統一させたいのでセッションストレージにデータを保存 */
    value = String(lang);
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
