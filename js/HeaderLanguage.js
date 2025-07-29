var SelectLanguage = "ja";

const translations = {
    /*日本語のローカライズ用データ */
    ja: {
        /*共通ヘッダー*/
        menu__top:"トップ",
        menu__event:"メニュー",
        menu__info:"お見積り・お問い合わせ",
    },
    /*英語のローカライズ用データ*/
    en: {
        /*共通ヘッダー*/
        menu__top:"enトップ",
        menu__event:"enメニュー",
        menu__info:"enお見積り・お問い合わせ",
    },
    /*中国語のローカライズ用データ*/
    zh: {
        /*共通ヘッダー*/
        menu__top:"zhトップ",
        menu__event:"zhメニュー",
        menu__info:"zhお見積り・お問い合わせ",
    }
};

/*ボタンが押された時に動作*/
/*ここは共通動作なので1つのjsにして呼び出す */
function changeLanguage(lang) {
    const t = translations[lang];

    /*もし言語が日本語以外なら注意書きの画像をトップに追加する*/


    /*引数で取得した言語に各ページの内容を切り替える*/
    /*共通ヘッダー*/
    document.getElementById("menu__top").innerHTML = t.menu__top;
    document.getElementById("menu__event").innerHTML = t.menu__event;
    document.getElementById("menu__info").innerHTML = t.menu__info;

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
