// 遊戲腳本數據：將原著推理小說劇情與課文題目交替排列
const storyData = [
  {
    type: "dialogue",
    speaker: "名偵探",
    text: "一位名為吉爾伯特的年輕人在家中遭到襲擊！現場沒有財物損失，但桌上卻留下一張神秘的撲克牌——『紅心七』。"
  },
  {
    type: "dialogue",
    speaker: "助手",
    text: "長官，這張『紅心七』上面用墨水寫了幾行古怪的文字，似乎是犯人留下的暗號！"
  },
  {
    type: "quiz",
    question: "【課文鑑識：解密紅心七暗號】犯人在紙條上寫著：『夏夜入寺，竹柏影交橫，蓋積水空明也。』這段描述運用了《記承天寺夜游》中比喻『月光與竹柏影子』的手法。請問文中以『積水空明』比喻什麼？",
    options: [
      "A. 澄清積水的池塘",
      "B. 皎潔明亮的月光",
      "C. 夜晚稀疏的雲霧",
      "D. 庭院中茂密的竹林"
    ],
    answer: 1, // B
    explanation: "答對了！《記承天寺夜游》中以『積水空明』比喻澄澈的月光，『藻、荇交橫』比喻月光投射下的竹柏影子。"
  },
  {
    type: "dialogue",
    speaker: "名偵探",
    text: "破解了！犯人指的是『澄澈月光下被隱藏的秘密』！我們檢查一下房間窗外照射進來月光的位置！"
  },
  {
    type: "dialogue",
    speaker: "助手",
    text: "找到了！月光照耀的牆角地板下有一個暗格，裡面藏有一本沈默已久的日記，裡面記載著吉爾伯特小時候的事情……"
  },
  {
    type: "quiz",
    question: "【課文鑑識：審視童年日記】日記中寫道：『余憶童稚時，能張目對日，明察秋毫，見藐小之物必細察其紋理，故時有物外之趣。』請問《閒情記趣》中『物外之趣』的意思是？",
    options: [
      "A. 購買昂貴海外物品的樂趣",
      "B. 超越事物本身、透過想像力獲得的特殊情趣",
      "C. 在戶外觀察大自然各種植物的樂趣",
      "D. 擺脫物質欲望後的輕鬆感"
    ],
    answer: 1, // B
    explanation: "分析正確！『物外之趣』指觀察微小事物時，經由超脫字面或事物表象的想像力所產生的樂趣。"
  },
  {
    type: "dialogue",
    speaker: "名偵探",
    text: "日記最後一頁被扯掉了，只留下桌上一盆枯萎的夾竹桃。這暗示著吉爾伯特與父親之間隱藏的感情變故！"
  },
  {
    type: "quiz",
    question: "【課文鑑識：分析現場夾竹桃線索】在《爸爸的花兒落了》一文中，作者以『夾竹桃落了』以及『爸爸的花兒落了』來象徵什麼？",
    options: [
      "A. 象徵家中的花園缺乏照顧而荒廢",
      "B. 象徵父親生病住院，即將痊癒歸來",
      "C. 象徵父親離世，自己必須告別童年、走向成熟成長",
      "D. 象徵小學畢業典禮的圓滿結束"
    ],
    answer: 2, // C
    explanation: "極佳的推理！『花兒落了』既是寫實（夾竹桃謝了），也是象徵父親的去世，代表主角英子從此要承擔家庭責任，真正長大。"
  },
  {
    type: "dialogue",
    speaker: "名偵探",
    text: "太棒了！結合三條線索：月光下的隱密暗格、童年想像力的日記、以及象徵父親離世的夾竹桃……我知道誰是幕後真凶了！"
  },
  {
    type: "dialogue",
    speaker: "系統",
    text: "🎉 第一章解密成功！你成功完成了案件分析與三篇課文的鑑識！"
  }
];

let currentIndex = 0;

// DOM 元素
const speakerEl = document.getElementById("speaker-name");
const dialogueEl = document.getElementById("dialogue-text");
const nextBtn = document.getElementById("next-btn");
const quizModal = document.getElementById("quiz-modal");
const quizQuestionEl = document.getElementById("quiz-question");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");
const stepNumberEl = document.getElementById("step-number");

// 初始化遊戲
function renderStep() {
  const currentStep = storyData[currentIndex];
  stepNumberEl.textContent = currentIndex + 1;

  if (currentStep.type === "dialogue") {
    quizModal.classList.add("hidden");
    speakerEl.textContent = currentStep.speaker;
    dialogueEl.textContent = currentStep.text;
    nextBtn.style.display = "inline-block";
  } else if (currentStep.type === "quiz") {
    nextBtn.style.display = "none"; // 答對前隱藏「下一頁」按鈕
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
    quizFeedbackEl.textContent = "✅ " + explanation + "（點擊下方按鈕繼續推進案情）";
    nextBtn.style.display = "inline-block"; // 解鎖下一頁
  } else {
    quizFeedbackEl.className = "feedback-text feedback-wrong";
    quizFeedbackEl.textContent = "❌ 鑑識失敗！線索不吻合，請重新檢視課文文意再試一次。";
  }
}

// 點擊「繼續」按鈕
nextBtn.addEventListener("click", () => {
  if (currentIndex < storyData.length - 1) {
    currentIndex++;
    renderStep();
  } else {
    alert("本案已結案！感謝你的偵探推理與中文解密！");
  }
});

// 開始遊戲
renderStep();
