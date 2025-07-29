/*各ページの切り替えたい画像類 */
/*ここはページごとにjsを作る予定 */
var SelectLanguage = "ja";

const translations = {
    /*日本語のローカライズ用データ */
    ja: {
        /*共通ヘッダー*/
        menu__top:"トップ",
        menu__event:"メニュー",
        menu__info:"お見積り・お問い合わせ",

        /*コンテンツ内容*/
        toppage__contents__headlineText:"<h1>イベント・キャンペーン</h1>",
        event__card1:"▷　最新メニュー公開中！<br>　　　最新メニューはこちらから！",
        event__card2:"▷　大盛り無料キャンペーン<br>　　　大人気メニューのアヒル餃子が今だけ無料！",
        event__card3:"▷　ランチ限定！特別メニュー！<br>　　　大人気！餃子定食がランチ限定で500円！",
        event__card4:"▷　爆速！宅配キャンペーン！<br>　　　インターネットで注文！<br>　３秒以内に自宅にお届け！",
        event__card5:"▷　団体予約の申し込みはこちら<br>　　　１０ ～ ５万人まで可能！<br>　団体予約の申し込みはこちらから！",
        event__card6:"▷　Webページ制作でお困りの方へ<br>　　　Webページ制作のお見積りはこちらから！",
        toppage__map:"<h1>マップ</h1>",
        toppage__info:"お見積り・お問い合わせはこちら",
    },
    /*英語のローカライズ用データ*/
    en: {
        /*共通ヘッダー*/
        menu__top:"enトップ",
        menu__event:"enメニュー",
        menu__info:"enお見積り・お問い合わせ",

        toppage__contents__headlineText:"<h1>enイベント・キャンペーン</h1>",
        event__card1:"▷　最新メニュー公開中！<br>　　　最新メニューはこちらから！",
        event__card2:"▷　大盛り無料キャンペーン<br>　　　大人気メニューのアヒル餃子が今だけ無料！",
        event__card3:"▷　ランチ限定！特別メニュー！<br>　　　大人気！餃子定食がランチ限定で500円！",
        event__card4:"▷　爆速！宅配キャンペーン！<br>　　　インターネットで注文！<br>　３秒以内に自宅にお届け！",
        event__card5:"▷　団体予約の申し込みはこちら<br>　　　１０ ～ ５万人まで可能！<br>　団体予約の申し込みはこちらから！",
        event__card6:"▷　Webページ制作でお困りの方へ<br>　　　Webページ制作のお見積りはこちらから！",
        toppage__map:"<h1>マップ</h1>",
        toppage__info:"お見積り・お問い合わせはこちら",
    },
    /*中国語のローカライズ用データ*/
    zh: {
        /*共通ヘッダー*/
        menu__top:"zhトップ",
        menu__event:"zhメニュー",
        menu__info:"zhお見積り・お問い合わせ",
        
        toppage__contents__headlineText:"<h1>zhイベント・キャンペーン</h1>",
        event__card1:"▷　最新メニュー公開中！<br>　　　最新メニューはこちらから！",
        event__card2:"▷　大盛り無料キャンペーン<br>　　　大人気メニューのアヒル餃子が今だけ無料！",
        event__card3:"▷　ランチ限定！特別メニュー！<br>　　　大人気！餃子定食がランチ限定で500円！",
        event__card4:"▷　爆速！宅配キャンペーン！<br>　　　インターネットで注文！<br>　３秒以内に自宅にお届け！",
        event__card5:"▷　団体予約の申し込みはこちら<br>　　　１０ ～ ５万人まで可能！<br>　団体予約の申し込みはこちらから！",
        event__card6:"▷　Webページ制作でお困りの方へ<br>　　　Webページ制作のお見積りはこちらから！",
        toppage__map:"<h1>マップ</h1>",
        toppage__info:"お見積り・お問い合わせはこちら",
    }
};

/*ボタンが押された時に動作*/
/*ここは共通動作なので1つのjsにして呼び出す */
function changeLanguage(lang) {
    const t = translations[lang];
    /*共通ヘッダー*/
    document.getElementById("menu__top").innerHTML = t.menu__top;
    document.getElementById("menu__event").innerHTML = t.menu__event;
    document.getElementById("menu__info").innerHTML = t.menu__info;

    /*引数で取得した言語に各ページの内容を切り替える*/
    document.getElementById("toppage__contents__headlineText").innerHTML = t.toppage__contents__headlineText;
    document.getElementById("event__card1").innerHTML = t.event__card1;
    document.getElementById("event__card2").innerHTML = t.event__card2;
    document.getElementById("event__card3").innerHTML = t.event__card3;
    document.getElementById("event__card4").innerHTML = t.event__card4;
    document.getElementById("event__card5").innerHTML = t.event__card5;
    document.getElementById("event__card6").innerHTML = t.event__card6;
    document.getElementById("toppage__map").innerHTML = t.toppage__map;
    document.getElementById("toppage__info").innerHTML = t.toppage__info;
    
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
