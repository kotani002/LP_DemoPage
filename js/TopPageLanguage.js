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
    },
    /*英語のローカライズ用データ*/
    en: {
        toppage__contents__headline: "<h1>enイベント・キャンペーン</h1>",
        event__card1: "▷　最新メニュー公開中！<br>　　　最新メニューはこちらから！",
        event__card2: "▷　大盛り無料キャンペーン<br>　　　大人気メニューのアヒル餃子が今だけ無料！",
        event__card3: "▷　ランチ限定！特別メニュー！<br>　　　大人気！餃子定食がランチ限定で500円！",
        event__card4: "▷　爆速！宅配キャンペーン！<br>　　　インターネットで注文！<br>　３秒以内に自宅にお届け！",
        event__card5: "▷　団体予約の申し込みはこちら<br>　　　１０ ～ ５万人まで可能！<br>　団体予約の申し込みはこちらから！",
        event__card6: "▷　Webページ制作でお困りの方へ<br>　　　Webページ制作のお見積りはこちらから！",
        toppage__map: "<h1>マップ</h1>",
        toppage__info: "お見積り・お問い合わせはこちら",

        /*イベントページのコンテンツ内容*/
        event__contents__headline: "<h1>enメニュー</h1>",
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
    },
    /*中国語のローカライズ用データ*/
    zh: {
        /*トップページのコンテンツ内容 */
        toppage__contents__headline: "<h1>zhイベント・キャンペーン</h1>",
        event__card1: "▷　最新メニュー公開中！<br>　　　最新メニューはこちらから！",
        event__card2: "▷　大盛り無料キャンペーン<br>　　　大人気メニューのアヒル餃子が今だけ無料！",
        event__card3: "▷　ランチ限定！特別メニュー！<br>　　　大人気！餃子定食がランチ限定で500円！",
        event__card4: "▷　爆速！宅配キャンペーン！<br>　　　インターネットで注文！<br>　３秒以内に自宅にお届け！",
        event__card5: "▷　団体予約の申し込みはこちら<br>　　　１０ ～ ５万人まで可能！<br>　団体予約の申し込みはこちらから！",
        event__card6: "▷　Webページ制作でお困りの方へ<br>　　　Webページ制作のお見積りはこちらから！",
        toppage__map: "<h1>マップ</h1>",
        toppage__info: "お見積り・お問い合わせはこちら",

        /*イベントページのコンテンツ内容*/
        event__contents__headline: "<h1>zhメニュー</h1>",
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
