// 遊戲劇本與問題數據庫
const storyData = [
  {
    type: "dialogue",
    speaker: "旁白",
    text: "藍色天竺葵 (The Blue Geranium) by Agatha Christie",
    portrait: null,
    filter: false
  },
  {
    type: "dialogue",
    speaker: "Miss Marple",
    text: "你是 Miss Marple，一位明察秋毫的老小姐，也是 Tuesday Night Club 的成員。Tuesday Night Club 的成員喜歡在星期二晚上聚會，每人會講一個其他人沒聽過的故事。",
    portrait: "👵 Miss Marple",
    filter: false
  },
  {
    type: "quiz",
    speaker: "Miss Marple",
    question: "【詞語理解】「明察秋毫」是甚麼意思？",
    options: [
      "感官敏銳，比其他人更快感受到秋意",
      "觀察力強，能看到細微之處",
      "視力出眾，能看到別人肉眼看不見的東西"
    ],
    answer: 1,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "checkbox",
    speaker: "Miss Marple",
    question: "【寫作手法】「你今天戴了一雙漂亮的露指手套，肩上披着一條老式的三角披肩，用一條飾帶繫上了雪白的頭髮。」這是甚麼描寫手法？（可選多項，每個正確選項 5 分）",
    options: [
      "肖像描寫",
      "語言描寫",
      "行動描寫",
      "直接描寫",
      "間接描寫"
    ],
    answer: [0, 3],
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "quiz",
    speaker: "Miss Marple",
    question: "【人物性格】「你今天戴了一雙漂亮的露指手套，肩上披着一條老式的三角披肩，用一條飾帶繫上了雪白的頭髮。」你是一個怎樣的人？",
    options: [
      "悉心打扮",
      "不修邊幅"
    ],
    answer: 0,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    speaker: "旁白",
    text: "今天分享故事的人是 Bantry 夫婦，即 Colonel Arthur 和他的妻子 Dolly。同場還有老警察 Henry、醫生 Dr Lloyd 和女演員 Jane。你和 Dr Lloyd 正在討論養老院及地區護理人員讓人生疑的毛病。",
    portrait: "👥 聚會現場",
    filter: false
  },
  {
    type: "dialogue",
    speaker: "Dolly",
    text: "Arthur，快點分享你朋友 George 家裡發生的奇怪故事，聽聽大家對這件事的看法。",
    portrait: "👩 Dolly",
    filter: false
  },
  // 現場書寫挑戰（改為 Checkbox 評分，沒勾選任何一項 -500 分）
  {
    type: "writing",
    speaker: "系統任務",
    words: [
      { term: "1", jyutping: "hing1 fan5" },
      { term: "2", jyutping: "jyu4 faai3" },
      { term: "3", jyutping: "hang6 fuk1" },
      { term: "4", jyutping: "sat1 mong6" }
    ],
    pointsPerWord: 150
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "你們應該都不認識 George，他是一位很好的人。他的妻子 Mary 身體不好，現在已經去世了，但她還在世的時候，沒少折騰 George。我不懷疑她確實有病，反正她反覆無常，待人苛刻，一天到晚怨天尤人，實在是難以理解。",
    portrait: "🧑 Arthur",
    filter: true,
    clue: "死者：脾氣古怪的 Mary"
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "Arthur：即使如此，George 還是一直守護着她，但無論 George 怎麼做，Mary 都覺得不對，只會臭罵 George。",
    portrait: "🧑 Arthur",
    filter: true,
    clue: "嫌疑人 1 號：品性善良而處處忍讓 Mary 的丈夫 George"
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "Mary 很喜歡算命，相信超自然力量。George 雖然不相信，但也沒有阻止妻子的迷信，覺得她高興就好，只是自己拒絕參與，但 Mary 還是不滿意。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "家裡的護士像走馬燈似的不停調換，一個護士來幾周，Mary 就開始不滿。年輕的 Nurse Carstairs 也相信算命，太太就特別喜歡她，但有一天她突然跟這小護士吵翻了，一定要這小護士滾。",
    portrait: "🧑 Arthur",
    filter: true,
    clue: "嫌疑人 2 號：曾與 Mary 親近，但最後不知為何被趕走的年輕護士 Nurse Carstairs"
  },
  {
    type: "quiz",
    speaker: "旁白",
    question: "《閒情記趣》記述了沈復童年時從觀察藐小微物中得到 XXXX 的生活片段。",
    options: [
      "明察秋毫",
      "物外之趣",
      "鶴唳雲端"
    ],
    answer: 1,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "checkbox",
    speaker: "旁白",
    question: "《閒情記趣》表現了作者的甚麼特點？（可選多項，每個正確 5 分）",
    options: [
      "觀察力",
      "同情心",
      "行動力",
      "想像力"
    ],
    answer: [0, 3],
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "Mary 把以前曾經照顧過她的一個老護士請了回來，Nurse Copling 在對付精神病患方面很有經驗。George 說 Nurse Copling 是位理性的人，能以一種獨特的方式容忍太太的暴躁和神經質。",
    portrait: "🧑 Arthur",
    filter: true,
    clue: "嫌疑人 3 號：經歷豐富而理性沉穩的老護士 Nurse Copling"
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "太太通常在樓上享用午餐，George 和 Nurse Copling 會在午餐時討論下午由誰照顧病人。護士平常在下午 2 點到 4 點之間不會當值，但如果 George 下午有事外出，Nurse Copling 也要被迫放棄休息時間。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "那天又碰到這種情況，但 Nurse Copling 說下午要去看望姐姐，可能要晚些回來。George 一聽，臉立即沉了下來，因為下午約了朋友去打高爾夫球。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Nurse Copling",
    text: "先生不用擔心，今天下午將有一個人與太太作伴，太太應該更高興。那個人叫 Zarida，一位能預知未來的女巫。",
    portrait: "👩‍⚕️ Nurse Copling",
    filter: true,
    clue: "嫌疑人 4 號：來歷不明的女巫 Zarida"
  },
  {
    type: "dialogue",
    speaker: "George",
    text: "Oh God! 😩",
    portrait: "👨 George",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Nurse Copling",
    text: "太太沒見過她，她讓我給 Zarida 寫了封信，約她今天下午來。",
    portrait: "👩‍⚕️ Nurse Copling",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "George",
    text: "好吧，不管怎樣安排，反正我要打高爾夫球，不能爽約。",
    portrait: "👨 George",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "George 便帶著對 Zarida 的感激之情離開了家。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "quiz",
    speaker: "旁白",
    question: "《閒情記趣》中童年的沈復將蚊想像成甚麼？",
    options: [
      "蝦蟆",
      "群鶴",
      "蜂鳥",
      "飛機"
    ],
    answer: 1,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "當天回家後，George 就發現太太格外躁動不安，像往常一樣躺在輪椅上，不時嗅著手裡拿著的嗅鹽（smelling salts）。",
    portrait: "🧑 Arthur",
    filter: true,
    clue: "物品：嗅鹽"
  },
  {
    type: "dialogue",
    speaker: "Mary",
    text: "我一早就說這間房子有問題！你都記不住與我有關的事，沒有一點同情心，真是個冷血的男人！",
    portrait: "👩 Mary",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "George",
    text: "不要再說了，Mary。這對我不公平。",
    portrait: "👨 George",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Mary",
    text: "女巫一進門就說她感覺到這家裡有凶兆，有危險。",
    portrait: "👩 Mary",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "George",
    text: "（冷笑）",
    portrait: "👨 George",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Mary",
    text: "你到底有多恨我？如果我死掉的話，你一定會喜滋滋地嘲笑我，對嗎？這房子確實危險，女巫是這麼說的。我要搬走！",
    portrait: "👩 Mary",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Mary",
    text: "你的花瓶裡有藍色的花！趕快把這些扔掉，這家裡不能有藍色的花，永遠也不要有，藍色的花會帶來惡運！我不止一次跟你說過，藍色是我的剋星，我天生反感藍色！",
    portrait: "👩 Mary",
    filter: true,
    clue: "物品：藍花"
  },
  {
    type: "dialogue",
    speaker: "George",
    text: "（心想：沒聽過你不喜歡藍色⋯⋯）Zarida 長得怎麼樣？",
    portrait: "👨 George",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Mary",
    text: "黑頭髮，在耳後盤成髻，眼睛半閉著，一塊黑色的面紗罩著她的嘴和下巴，說話像唱歌，帶著明顯的外國口音，我想是西班牙口音。",
    portrait: "👩 Mary",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "George",
    text: "這都是女巫們慣用的伎倆⋯⋯",
    portrait: "👨 George",
    filter: true
  },
  {
    type: "quiz",
    speaker: "旁白",
    question: "《閒情記趣》中童年的沈復將 XX 想像為樹林，將 YY 想像為野獸，將 ZZ 想像為山谷與山丘，XX、YY、ZZ 分別是甚麼？",
    options: [
      "草叢；蝦蟆；石頭",
      "花叢；蟲蟻；泥土",
      "草叢；蟲蟻；泥土",
      "草叢；蝦蟆；石頭"
    ],
    answer: 2,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "quiz",
    speaker: "旁白",
    question: "《閒情記趣》中童年的沈復最後將哪種動物驅趕去別的院子？",
    options: [
      "蝦蟆",
      "飛蛾",
      "蟲蟻",
      "青蛙"
    ],
    answer: 0,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "兩天之後，Nurse Copling 叫 George 找太太，說太太收到 Zarida 寄來的信。信封散發出很濃的香水味，字寫得很大，信紙上墨跡斑斑。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Zarida",
    text: "我看到了未來，在還來得及之前要小心防備——留神滿月，藍色的報春花預示警告，藍色的蜀葵表示危險，藍色的天竺葵代表死亡⋯⋯",
    portrait: "🔮 Zarida",
    filter: true,
    clue: "物品：Zarida 的信"
  },
  {
    type: "dialogue",
    speaker: "George",
    text: "Mary，那女巫可能是想嚇你。真是荒唐。",
    portrait: "👨 George",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Nurse Copling",
    text: "不知道，也許吧？",
    portrait: "👩‍⚕️ Nurse Copling",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "George",
    text: "不會連 Nurse Copling 你都開始相信女巫吧？",
    portrait: "👨 George",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Nurse Copling",
    text: "不，先生，我不信算命。但是 Zarida 讓我很困惑，我不明白她為何收了錢還要嚇唬太太，這對她有什麼好處呢？我不知道她圖的是什麼？而且⋯⋯總覺得 Zarida 有點眼熟。",
    portrait: "👩‍⚕️ Nurse Copling",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "五天之後，家裡便發生了怪事。我得先描述一下 Mary 的房間。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Dolly",
    text: "親愛的，讓我說吧，我去過她的房間。她的房間用的是一種新型牆紙，牆面四邊用各種各樣的花圍起來，讓人感覺置身於花園中。但這些花本身就不對頭，那麼多品種的花不可能在同一時期開放的。",
    portrait: "👩 Dolly",
    filter: false
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "親愛的，別離題，大家都知道你很喜歡園藝。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Dolly",
    text: "但把風鈴草、黃水仙、白羽扁豆、蜀葵、紫菀放在一起真的很荒謬⋯⋯裡面還有黃色的報春花、粉紅色的櫻草花⋯⋯",
    portrait: "👩 Dolly",
    filter: false
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "那天清晨，Mary 比平常更躁動不安，她指着牆紙，說那些花中間居然真的出現了一朵藍色的花。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "quiz",
    speaker: "旁白",
    question: "藍色花 XX 了 Mary 的死亡？（提示：《爸爸的花兒落了》中的「夾竹桃」）",
    options: [
      "比喻",
      "象徵",
      "襯托"
    ],
    answer: 1,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    speaker: "Miss Marple",
    text: "太可怕了！",
    portrait: "👵 Miss Marple",
    filter: false
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "那天清晨之前，Mary 從沒注意到那裡有藍花，況且第二天晚上就是滿月，這快讓她崩潰了。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "當時 George 告訴我這件事，我便去探望 Mary，但怎麼勸她都沒有結果。我那天還碰到了 George 的好友 Jeanie，我跟 Jeanie 說，Mary 太迷信，早晚會被嚇死。但 Jeanie 跟我說了很可怕的話⋯⋯",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "她非常冷靜地說「那樣的話，倒是最好的結局，對吧？」又笑着說：「Mary 的生活有甚麼意義呢？但 George 卻因為她生活在地獄裡，這樣的妻子被嚇死，不是很好的結局嗎？」",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "Jeanie 還說，那個年輕的 Nurse Carstairs 是一個很可愛的女孩，而 George 是一個很有吸引力的人，當時 George 和 Mary 曾為此事爭吵。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Miss Marple",
    text: "Jeanie 漂亮嗎？我猜她也打高爾夫球吧！",
    portrait: "👵 Miss Marple",
    filter: false
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "對，她擅長多種運動，有着健康的膚色和漂亮的藍眼睛，要不是因為 Mary ⋯⋯ 反正他們非常要好。",
    portrait: "🧑 Arthur",
    filter: true,
    clue: "嫌疑人 5 號：為 George 打抱不平的女性好友 Jeanie"
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "在之後的一個月，Mary 每天都很害怕。她在日曆上把日子一天一天地塗掉，直到又一個滿月的來臨。滿月那天晚上，她把 George 和 Nurse Copling 都叫到房間，讓他們仔細在牆紙上找藍花，結果只有粉紅色和黃色的蜀葵。George 一離開她的房間，她立即把門鎖上⋯⋯",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "結果第二天又出現了藍色的蜀葵。George 感到震驚，但不願把它當成一件嚴肅的事來看待，反而堅持整件事是惡作劇。但門是一直鎖著的，是太太自己發現這種變化，連護士都沒進過她的房間。但他還是不相信。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "Mary 開始自暴自棄，一遍又一遍地重複：「藍色的報春花——警告；藍色的蜀葵——危險；藍色的天竺葵——死亡。」最後連護士都開始害怕，想 George 帶走太太。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "但 George 很生氣，他說：「就算那該死的牆上的每一朵花都變成了藍色魔鬼，又會傷害誰呢？」Nurse Copling 只是焦急地說：「可能會被嚇死。」",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "次日清晨，Mary 到了 8 點半還沒有動靜，護士敲門卻沒人應聲，George 把門砸開，只看到直挺挺躺在床上的太太。George 去找醫生，醫生說 Mary 在 8 小時前就死了。她的嗅鹽瓶子躺在她身邊，牆上粉紅色的天竺葵變成了鮮亮的深藍色。",
    portrait: "🧑 Arthur",
    filter: true,
    clue: "物品：煤氣"
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "醫生和護士都說聞到了某種氣味，像是煤氣，但一點點不足以致死。George 說他聞不到。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "Mary 以前說過哪天她死了，她希望每個人都知道兇手是 George，然後 George 在前一天剛好配了些除草劑準備除草，還給太太端了杯牛奶。",
    portrait: "🧑 Arthur",
    filter: true,
    clue: "物品：除草劑、牛奶"
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "最後驗屍報告也沒有甚麼結果，這件事由始至終都很離奇。那個 Zarida 的地址好像是假的，當地人說沒有這個人。Nurse Carstairs 也說沒聽過這個人。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Miss Marple",
    text: "那 George 和 Jeanie 現在怎麼樣？結婚了嗎？",
    portrait: "👵 Miss Marple",
    filter: false
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "我們倒是希望他們喜結連理，可是現在已經 18 個月了，我相信他們連面都很少見了。",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "quiz",
    speaker: "旁白",
    question: "你覺得 Mary 是自殺、因迷信被嚇死還是被謀殺？",
    options: [
      "自殺",
      "因迷信被嚇死",
      "謀殺"
    ],
    answer: 2,
    points: 10,
    explanation: "正確！這是一宗精心策劃的謀殺案。"
  },
  {
    type: "quiz",
    speaker: "旁白",
    question: "你覺得謀殺 Mary 的兇手是一個人，還是一群人？",
    options: [
      "一個人",
      "一群人"
    ],
    answer: 0,
    points: 10,
    explanation: "正確！兇手是單獨一人。"
  },
  {
    type: "quiz",
    speaker: "旁白",
    question: "你覺得謀殺 Mary 的兇手是誰？（暫不揭曉，答對最後加分）",
    options: [
      "George",
      "Nurse Carstairs",
      "Nurse Copling",
      "Zarida",
      "Jeanie"
    ],
    answer: 2,
    points: 0,
    isInitialSuspect: true,
    explanation: "記錄完畢！"
  },
  {
    type: "dialogue",
    speaker: "Miss Marple",
    text: "我正在想關於地區護士的問題。我想知道，變成藍色的花，本來是甚麼顏色的？是粉紅色嗎？",
    portrait: "👵 Miss Marple",
    filter: false
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "是粉紅色，你怎麼知道？",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Miss Marple",
    text: "那我知道為甚麼會變色了⋯⋯護士也是人，要經常與她所服務的這家人發生糾紛，你能相信他們就不會弄出點兒什麼事來嗎？",
    portrait: "👵 Miss Marple",
    filter: false
  },
  {
    type: "suspectConfirm",
    speaker: "Miss Marple",
    question: "Arthur，你是指？\n你覺得謀殺 Mary 的兇手是誰？",
    options: [
      "Nurse Carstairs",
      "Nurse Copling"
    ],
    answer: 1,
    explanation: "太棒了！兇手正是 Nurse Copling。"
  },
  {
    type: "quiz",
    speaker: "Miss Marple",
    question: "Miss Marple：她曾在那房子裡呆過，又經常與 Mary 吵架。但最直接證明 Nurse Copling 是兇手的證據是：",
    options: [
      "嗅鹽",
      "藍色花",
      "Zarida 的信",
      "煤氣",
      "除草劑",
      "牛奶"
    ],
    answer: 2,
    points: 50,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    speaker: "Miss Marple",
    text: "Miss Marple：Mary 曾寫信給 Zarida，而 Zarida 能回信，但那個地址根本不屬於 Zarida 這個人。整件事上，除了 Mary 本人，唯一一個與 Zarida 有牽連的人就是 Nurse Copling。Nurse Copling 自己就是 Zarida。",
    portrait: "👵 Miss Marple",
    filter: false
  },
  {
    type: "quiz",
    speaker: "旁白",
    question: "你覺得 Mary 的死因與哪個物品最有關？",
    options: [
      "嗅鹽",
      "藍色花",
      "煤氣",
      "除草劑",
      "牛奶"
    ],
    answer: 0,
    points: 50,
    explanation: "答對了！嗅鹽瓶內的氰化物是致命關鍵。"
  },
  {
    type: "dialogue",
    speaker: "Miss Marple",
    text: "Miss Marple：當我看到花匠把氰化鉀（Potassium cyanide）加上水在瓶子裡上下搖動的時候，就覺得它太像嗅鹽了。Mary 有用嗅鹽的習慣，而死者手邊發現了嗅鹽的瓶子。George 找醫生的時候，Nurse Copling 可能偷偷換掉了有問題的瓶子，再把煤氣開一點點，令氰化鉀的氣味沒那麼容易辨認。",
    portrait: "👵 Miss Marple",
    filter: false
  },
  {
    type: "dialogue",
    speaker: "Arthur",
    text: "那花朵為甚麼會變成藍色？",
    portrait: "🧑 Arthur",
    filter: true
  },
  {
    type: "dialogue",
    speaker: "Miss Marple",
    text: "Miss Marple：護士們手邊都有些石蕊試紙（litmus paper），藍色的試紙遇酸就會變成紅色，紅色的遇鹼就會變成藍色。在紅花上粘些紅色試紙不是什麼難事，當然要在靠近床的地方。當 Mary 用她的嗅瓶時，氨氣遇水就會把它變成藍色，確實是機關算盡。出事前，根本就沒有人注意過那些花。護士在調換瓶子的時候，肯定花一兩分鐘的時間把嗅鹽瓶口對著牆，我是這樣想的。",
    portrait: "👵 Miss Marple",
    filter: false
  },
  {
    type: "complete",
    speaker: "系統",
    text: "🏆 案件完美偵破！恭喜你完成了《藍色天竺葵》的全套推理與中文課文挑戰！"
  }
];

let currentIndex = 0;
let score = 0;
let collectedClues = [];
let initialSuspectAnswer = null;
let currentQuestionFailed = false; // 追蹤當前題目是否曾經答錯

// DOM 元素
const scoreValEl = document.getElementById("score-val");
const speakerNameEl = document.getElementById("speaker-name");
const dialogueTextEl = document.getElementById("dialogue-text");
const characterPortraitEl = document.getElementById("character-portrait");
const charLabelEl = document.getElementById("char-label");
const nextBtn = document.getElementById("next-btn");

const quizModal = document.getElementById("quiz-modal");
const quizQuestionEl = document.getElementById("quiz-question");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");

const profileBtn = document.getElementById("profile-btn");
const profileModal = document.getElementById("profile-modal");
const closeProfileBtn = document.getElementById("close-profile-btn");
const clueListEl = document.getElementById("clue-list");

function updateScore(pts) {
  score += pts;
  scoreValEl.textContent = score;
}

// 渲染步驟
function renderStep() {
  const step = storyData[currentIndex];
  quizModal.classList.add("hidden");
  quizOptionsEl.style.display = "flex";
  nextBtn.style.display = "inline-block";
  currentQuestionFailed = false; // 切換新步驟時重置答錯狀態

  // 處理線索收集
  if (step.clue && !collectedClues.includes(step.clue)) {
    collectedClues.push(step.clue);
  }

  // 處理角色立繪與濾鏡
  if (step.portrait) {
    characterPortraitEl.classList.remove("hidden");
    charLabelEl.textContent = step.portrait;
    if (step.filter) {
      characterPortraitEl.classList.add("grayscale-mode");
    } else {
      characterPortraitEl.classList.remove("grayscale-mode");
    }
  } else {
    characterPortraitEl.classList.add("hidden");
  }

  speakerNameEl.textContent = step.speaker;

  if (step.type === "dialogue") {
    dialogueTextEl.textContent = step.text;
  } else if (step.type === "quiz") {
    dialogueTextEl.textContent = "【案情鑑識門檻】請解答以下問題：";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = step.question;
    quizFeedbackEl.textContent = "";
    quizOptionsEl.innerHTML = "";

    step.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.textContent = opt;
      btn.onclick = () => checkQuizAnswer(idx, step.answer, step.points, step.explanation, step.isInitialSuspect);
      quizOptionsEl.appendChild(btn);
    });
  } else if (step.type === "checkbox") {
    dialogueTextEl.textContent = "【多項選擇題】請選出所有正確答案：";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = step.question;
    quizFeedbackEl.textContent = "";
    quizOptionsEl.innerHTML = "";

    let selectedIndexes = [];
    step.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.textContent = opt;
      btn.onclick = () => {
        if (selectedIndexes.includes(idx)) {
          selectedIndexes = selectedIndexes.filter(i => i !== idx);
          btn.classList.remove("selected");
        } else {
          selectedIndexes.push(idx);
          btn.classList.add("selected");
        }
      };
      quizOptionsEl.appendChild(btn);
    });

    const submitBtn = document.createElement("button");
    submitBtn.className = "opt-btn";
    submitBtn.style.background = "#2ed573";
    submitBtn.style.color = "#000";
    submitBtn.style.fontWeight = "bold";
    submitBtn.textContent = "✅ 確認答案";
    submitBtn.onclick = () => {
      checkCheckboxAnswer(selectedIndexes, step.answer, step.points, step.explanation);
    };
    quizOptionsEl.appendChild(submitBtn);

  } else if (step.type === "writing") {
    // 現場書寫挑戰：Checkbox 逐個詞語剔選，若沒挑選任何一項則扣 500 分
    dialogueTextEl.textContent = "【現場書寫挑戰】";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = "請剔選學生正確書寫的詞語（若未挑選任何詞語將扣 500 分）：";
    quizOptionsEl.innerHTML = "";

    let checkedWritingIndexes = [];
    step.words.forEach((w, idx) => {
      const label = document.createElement("label");
      label.className = "opt-btn";
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.gap = "12px";
      label.style.cursor = "pointer";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.transform = "scale(1.3)";
      checkbox.onchange = () => {
        if (checkbox.checked) {
          if (!checkedWritingIndexes.includes(idx)) checkedWritingIndexes.push(idx);
        } else {
          checkedWritingIndexes = checkedWritingIndexes.filter(i => i !== idx);
        }
      };

      const span = document.createElement("span");
      span.innerHTML = `✍️ <b>${w.term}</b> <span style="font-size:0.9rem; color:#a4b0be;">(${w.jyutping})</span>`;

      label.appendChild(checkbox);
      label.appendChild(span);
      quizOptionsEl.appendChild(label);
    });

    const submitWritingBtn = document.createElement("button");
    submitWritingBtn.className = "opt-btn";
    submitWritingBtn.style.background = "#2ed573";
    submitWritingBtn.style.color = "#000";
    submitWritingBtn.style.fontWeight = "bold";
    submitWritingBtn.textContent = "✅ 確認書寫評分";
    submitWritingBtn.onclick = () => {
      if (checkedWritingIndexes.length === 0) {
        updateScore(-500);
        quizFeedbackEl.className = "feedback-text feedback-wrong";
        quizFeedbackEl.textContent = "⚠️ 沒有勾選任何正確詞語，扣 500 分！";
      } else {
        const earned = checkedWritingIndexes.length * step.pointsPerWord;
        updateScore(earned);
        quizFeedbackEl.className = "feedback-text feedback-correct";
        quizFeedbackEl.textContent = `🎉 評分完成！獲得 +${earned} 分！`;
      }
      quizOptionsEl.style.display = "none";
      nextBtn.style.display = "inline-block";
    };
    quizOptionsEl.appendChild(submitWritingBtn);

  } else if (step.type === "suspectConfirm") {
    dialogueTextEl.textContent = "【終極推理確認】";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = step.question;
    quizFeedbackEl.textContent = "";
    quizOptionsEl.innerHTML = "";

    step.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.textContent = opt;
      btn.onclick = () => {
        let bonus = 0;
        if (idx === step.answer) {
          if (initialSuspectAnswer === 2) {
            bonus = 60;
          } else if (initialSuspectAnswer === 3) {
            bonus = 20;
          } else {
            bonus = 10;
          }
          if (currentQuestionFailed) bonus = 0; // 若先前此步驟失敗過也不加額外獎勵
          updateScore(bonus);
          quizFeedbackEl.className = "feedback-text feedback-correct";
          quizFeedbackEl.textContent = `✅ ${step.explanation} 獲得附加獎勵 +${bonus} 分！`;
        } else {
          currentQuestionFailed = true;
          quizFeedbackEl.className = "feedback-text feedback-wrong";
          quizFeedbackEl.textContent = `❌ 推理有誤。兇手其實是 Nurse Copling。（注意：再次嘗試將不獲加分）`;
        }
        nextBtn.style.display = "inline-block";
      };
      quizOptionsEl.appendChild(btn);
    });

  } else if (step.type === "complete") {
    dialogueTextEl.textContent = step.text;
    nextBtn.style.display = "none";
  }
}

// 檢查單選答案（答錯再答不加分）
function checkQuizAnswer(selectedIndex, correctIndex, points, explanation, isInitial) {
  if (isInitial) {
    initialSuspectAnswer = selectedIndex;
  }

  if (selectedIndex === correctIndex) {
    let awarded = currentQuestionFailed ? 0 : points;
    updateScore(awarded);
    quizFeedbackEl.className = "feedback-text feedback-correct";
    if (currentQuestionFailed) {
      quizFeedbackEl.textContent = `✅ ${explanation}（因先前曾答錯，本次不加分 0 分）`;
    } else {
      quizFeedbackEl.textContent = `✅ ${explanation} (+${points} 分)`;
    }
    nextBtn.style.display = "inline-block";
  } else {
    currentQuestionFailed = true;
    quizFeedbackEl.className = "feedback-text feedback-wrong";
    quizFeedbackEl.textContent = "❌ 答案不正確，請再思索一下原著細節！（注意：再次答對將不獲加分）";
  }
}

// 檢查多選答案（答錯再答不加分）
function checkCheckboxAnswer(selected, correct, totalPoints, explanation) {
  const isMatch = selected.length === correct.length && selected.every(val => correct.includes(val));
  let earned = 0;
  if (isMatch) {
    earned = currentQuestionFailed ? 0 : totalPoints;
    updateScore(earned);
    quizFeedbackEl.className = "feedback-text feedback-correct";
    if (currentQuestionFailed) {
      quizFeedbackEl.textContent = `✅ 完全答對！${explanation}（因先前曾答錯，本次不加分 0 分）`;
    } else {
      quizFeedbackEl.textContent = `✅ 完全答對！${explanation} (+${totalPoints} 分)`;
    }
    nextBtn.style.display = "inline-block";
  } else {
    currentQuestionFailed = true;
    let correctCount = selected.filter(val => correct.includes(val)).length;
    let wrongCount = selected.filter(val => !correct.includes(val)).length;
    let partialEarned = currentQuestionFailed ? 0 : Math.max(0, (correctCount * 5) - (wrongCount * 5));
    updateScore(partialEarned);
    quizFeedbackEl.className = "feedback-text feedback-wrong";
    quizFeedbackEl.textContent = `⚠️ 部分正確或有誤。${explanation} (+${partialEarned} 分，注意：再次嘗試正確將不獲額外加分)`;
  }
}

// 點擊「繼續」按鈕
nextBtn.addEventListener("click", () => {
  if (currentIndex < storyData.length - 1) {
    currentIndex++;
    renderStep();
  }
});

// 人物檔案彈窗控制
profileBtn.onclick = () => {
  clueListEl.innerHTML = collectedClues.length > 0 
    ? collectedClues.map(c => `<li>🔹 ${c}</li>`).join('') 
    : '<li>尚未收集到任何線索。</li>';
  profileModal.classList.remove("hidden");
};

closeProfileBtn.onclick = () => {
  profileModal.classList.add("hidden");
};

// 初始化遊戲
renderStep();
