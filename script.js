// 原著《藍色草》劇情 + 三篇中文課文鑑識題目
const storyData = [
  {
    type: "dialogue",
    speaker: "瑪波小姐",
    icon: "👵",
    text: "一位身患重病且脾氣暴躁的富家太太——普林格夫人，在一間封閉的房間裡暴斃了！在她死前，曾有一位算命師給了她警告……"
  },
  {
    type: "dialogue",
    speaker: "亨利警官",
    icon: "👮‍♂️",
    text: "算命師告訴她：『當牆紙上的藍色老鸛草花朵變成粉紅色時，就是你的死期！』結果案發當晚，牆上的藍花真的變色了！"
  },
  {
    type: "quiz",
    question: "【課文鑑識 1：象徵手法與死亡預言】在《爸爸的花兒落了》中，作者以『夾竹桃落了』象徵父親離世與成長。而在本案中，算命師以『藍色草變色』作為死亡的象徵與伏筆。請問下列關於《爸爸的花兒落了》中『花朵象徵』的理解，何者正確？",
    options: [
      "A. 夾竹桃凋落僅代表季節轉換，與父親無關",
      "B. 『花兒落了』雙關了夾竹桃謝了與父親的離世，象徵主角告別童年",
      "C. 爸爸特別喜歡花，所以花落代表爸爸生病痊癒",
      "D. 主角畢業典禮上的花代表她考試失敗"
    ],
    answer: 1, // B
    explanation: "答對了！《爸爸的花兒落了》標題與文中的花落，均借物抒情，象徵父親離世及主角英子的成長。"
  },
  {
    type: "dialogue",
    speaker: "瑪波小姐",
    icon: "👵",
    text: "死者房間的窗戶與門當時都從內部鎖上，形成了一個密室！但案發當晚，護士曾透過窗外照射進來的月光，看見了桌上裝著不明液體的藥瓶……"
  },
  {
    type: "quiz",
    question: "【課文鑑識 2：密室環境與月光描寫】護士聲稱當晚月色皎潔，能看清房內景象。這讓人聯想到《記承天寺夜游》中對月光的經典寫景：『庭下如積水空明，水中藻、荇交橫，蓋竹柏影也。』請問這句話運用了什麼修辭手法與寫景技巧？",
    options: [
      "A. 運用借代手法，將月光比喻成竹子",
      "B. 運用比喻（暗喻/明喻）與動靜結合，將澄澈月光比作積水，竹柏影子比作水中水草",
      "C. 運用誇張手法，形容承天寺夜晚積水成災",
      "D. 運用擬人手法，賦予月亮與竹柏人的情感"
    ],
    answer: 1, // B
    explanation: "鑑識精準！蘇軾以『積水空明』喻月光之澄澈，以『藻荇交橫』喻竹柏交錯之影，虛實相生。"
  },
  {
    type: "dialogue",
    speaker: "瑪波小姐",
    icon: "👵",
    text: "等一下！壁紙上的花朵不可能憑空自己改變顏色。這一定是某人利用了化學藥劑（如酸鹼指示劑）噴灑在牆上！"
  },
  {
    type: "dialogue",
    speaker: "亨利警官",
    icon: "👮‍♂️",
    text: "難道是護士？或者是每天來遞送氣喘噴霧的醫生？我們需要仔細觀察房間裡看似不起眼的微小細節！"
  },
  {
    type: "quiz",
    question: "【課文鑑識 3：微觀觀察與想像破案】偵探需要從極微小的痕跡中發現真相。這正符合《閒情記趣》中所強調的觀察力：『見藐小之物必細察其紋理，故時有物外之趣。』請問文中『物外之趣』產生的關鍵要素是什麼？",
    options: [
      "A. 必須擁有昂貴的顯微鏡等觀察工具",
      "B. 豐富的想像力配合專注仔細的觀察",
      "C. 到戶外大自然中尋找罕見的珍禽異獸",
      "D. 熟讀古代文言文典籍"
    ],
    answer: 1, // B
    explanation: "極佳的推理！沈復在《閒情記趣》中透過將蚊子想像成鶴、叢草想像成樹林，靠的就是『觀察力 + 想像力』來獲得超脫物外的樂趣。"
  },
  {
    type: "dialogue",
    speaker: "瑪波小姐",
    icon: "👵",
    text: "真相大白了！兇手就是那位經常來遞送『氣喘噴霧』的護士！她在噴霧瓶裡偷偷混入了氨水（鹼性氣體）。"
  },
  {
    type: "dialogue",
    speaker: "瑪波小姐",
    icon: "👵",
    text: "牆上的藍色花朵早已被預先塗上了石蕊試劑（或植物色素）。當氨水氣體揮發接觸到壁紙時，藍色的花朵就會立刻變成紫色/粉紅色！"
  },
  {
    type: "dialogue",
    speaker: "亨利警官",
    icon: "👮‍♂️",
    text: "普林格夫人原本就有嚴重的心臟病，看到預言中的『藍花變色』後極度恐懼，導致心臟病發猝死！這是一宗完美的心理謀殺案！"
  },
  {
    type: "dialogue",
    speaker: "系統",
    icon: "🎉",
    text: "恭喜你！成功協助瑪波小姐破獲《藍色草》命案，並完美通過了《爸爸的花兒落了》、《記承天寺夜游》及《閒情記趣》三篇課文的鑑識挑戰！"
  }
];

let currentIndex = 0;

// DOM 元素
const speakerNameEl = document.getElementById("speaker-name");
const speakerIconEl = document.getElementById("speaker-icon");
const dialogueTextEl = document.getElementById("dialogue-text");
const nextBtn = document.getElementById("next-btn");
const quizModal = document.getElementById("quiz-modal");
const quizQuestionEl = document.getElementById("quiz-question");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");
const stepNumberEl = document.getElementById("step-number");

// 渲染步驟
function renderStep() {
  const currentStep = storyData[currentIndex];
  stepNumberEl.textContent = currentIndex + 1;

  if (currentStep.type === "dialogue") {
    quizModal.classList.add("hidden");
    speakerNameEl.textContent = currentStep.speaker;
    speakerIconEl.textContent = currentStep.icon || "💬";
    dialogueTextEl.textContent = currentStep.text;
    nextBtn.style.display = "inline-block";
  } else if (currentStep.type === "quiz") {
    nextBtn.style.display = "none"; // 答對前鎖定「推進」
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = currentStep.question;
    quizFeedbackEl.textContent = "";
    quizOptionsEl.innerHTML = "";

    currentStep.options.forEach((optText, index) => {
      const button = document.createElement("button");
      button.className = "opt-btn";
      button.textContent = optText;
      button.onclick = () => checkAnswer(index, currentStep.answer, currentStep.explanation);
      quizOptionsEl.appendChild(button);
    });
  }
}

// 檢查答案
function checkAnswer(selectedIndex, correctIndex, explanation) {
  if (selectedIndex === correctIndex) {
    quizFeedbackEl.className = "feedback-text feedback-correct";
    quizFeedbackEl.textContent = "✅ " + explanation + "（破案線索已解鎖，請點擊下方按鈕）";
    nextBtn.style.display = "inline-block";
  } else {
    quizFeedbackEl.className = "feedback-text feedback-wrong";
    quizFeedbackEl.textContent = "❌ 鑑識失敗！線索邏輯不符，請重新檢視課文文意！";
  }
}

// 繼續推進
nextBtn.addEventListener("click", () => {
  if (currentIndex < storyData.length - 1) {
    currentIndex++;
    renderStep();
  } else {
    alert("🏆 案件順利偵破！你已掌握了三篇課文的核心考點！");
  }
});

// 初始化
renderStep();
