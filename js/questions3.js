// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "रिवर्स लाइट का कलर कैसा होता है ?",
    answer: "सफेद",
    options: ["लाल", "केसरिया", "सफेद"],
  },
  {
    numb: 2,
    question: "कम दूरी होने पर रिक्शाचालक जाने के लिए मना करे तब ",
    answer: "दोनों हो सकते है",
    options: [
      "दोनों हो सकते है",
      "केवल दण्ड किया जायेगा",
      "ड्राइविंग लाइसेंस निलम्बित या रद्ध हो सकता है",
    ],
  },
  {
    numb: 3,
    question: "गति सीमा से ज्यादा गति पर वाहन चलाना",
    answer: "दोनों भी हो सकते हैं",
    options: [
      "यह गैर कानूनी है और ड्राइविंग लाइसेंस निलम्बित या रद्ध हो सकता है",
      "यह गुनाह है और इसके लिए दंड दिया जा सकता है",
      "दोनों भी हो सकते हैं",
    ],
  },
  {
    numb: 4,
    question:
      "ड्राइविंग लाइसेंस की अवधि पूरी होने के बाद कितने समय तक वाहन चला जा सकते है?",
    answer: "३० दिवस",
    options: ["६० दिवस", "३० दिवस", "एक भी दिवस"],
  },
  {
    numb: 5,
    question: "वाहन का ड्राइवर ओवरटेक कर सकता है?",
    answer: "जब रोड पर्याप्त चौडी ना हो",
    options: [
      "जब चढाई से नीचे उतर रहे तब",
      "जब रोड पर्याप्त चौडी ना हो",
      "आगे जा रहे वाहन का ड्राइवार जब ओवरटेक करने का निशान बताये तब",
    ],
  },

  {
    numb: 6,
    question: "ढलान वाले रास्ते में आप नीचे उतरते समय आप क्या करेगें?",
    answer: "दोनों ही नहीं करेगें",
    options: [
      "तेल बचाने कें लिए वाहन का इंजन बन्द करके नीचे उतारेगें",
      "दोनों ही नहीं करेगें",
      "क्लच पेडल दबाकर वाहन को नाचे जावे देगें",
    ],
  },

  {
    numb: 7,
    question: "बाईं और मुडते समय मोटर साइकील सवार को क्या करना चाहिए ",
    answer: "खुद के दायें हाथ से बाईं ओर जाने का सिग्नल दिखायेगा",
    options: [
      "खुद के दायें हाथ से बाईं ओर जाने का सिग्नल दिखायेगा",
      "बायां हाथ निकाल कर बाईं और दिखायेगा ",
      "हाथ से सिग्नल नहीं दिखायेगा",
    ],
  },

  {
    numb: 8,
    question:
      "अगर वाहन को पब्लिक प्लेस पर रखने से किसी अन्य व्यक्ति को परेशानी हो रही हो तब?",
    answer: "दोनों हो सकते है",
    options: [
      "ड्राइविंग लाइसेंस निलम्बित या रद्ध हो सकता है",
      "केवल दण्ड किया जायेगा",
      "दोनों हो सकते है",
    ],
  },

  {
    numb: 9,
    question: "निजी वाहन की नंबर प्लेट का रंग",
    answer: "सफेद रंग कें प्लेट और काला अक्षर",
    options: [
      "पीले रंग की प्लेट और काले अक्षर",
      "काले रंग की नंबर प्लेट और पीला अक्षर ",
      "सफेद रंग कें प्लेट और काला अक्षर",
    ],
  },

  {
    numb: 10,
    question:
      "अगर वाहन को पब्लिक प्लेस पर रखने से किसी अन्य व्यक्ति को परेशानी हो रही हो तब?",
    answer: "दोनों हो सकते है",
    options: [
      "ड्राइविंग लाइसेंस निलम्बित या रद्ध हो सकता है",
      "केवल दण्ड किया जायेगा",
      "दोनों हो सकते है",
    ],
  },

  {
    numb: 11,
    question:
      "अगर वाहन को पब्लिक प्लेस पर रखने से किसी अन्य व्यक्ति को परेशानी हो रही हो तब?",
    answer: "दोनों हो सकते है",
    options: [
      "ड्राइविंग लाइसेंस निलम्बित या रद्ध हो सकता है",
      "केवल दण्ड किया जायेगा",
      "दोनों हो सकते है",
    ],
  },

  {
    numb: 12,
    question: "कम दूरी होने पर रिक्शाचालक जाने के लिए मना करे तब ",
    answer: "दोनों हो सकते है",
    options: [
      "दोनों हो सकते है",
      "केवल दण्ड किया जायेगा",
      "ड्राइविंग लाइसेंस निलम्बित या रद्ध हो सकता है",
    ],
  },

  {
    numb: 13,
    question: "गति सीमा से ज्यादा गति पर वाहन चलाना",
    answer: "दोनों भी हो सकते हैं",
    options: [
      "यह गैर कानूनी है और ड्राइविंग लाइसेंस निलम्बित या रद्ध हो सकता है",
      "यह गुनाह है और इसके लिए दंड दिया जा सकता है",
      "दोनों भी हो सकते हैं",
    ],
  },

  {
    numb: 14,
    question: "लंबे वाहन के पीछे चलते समय आप",
    answer: "ज्यादा अंतर रखे ताकि आगे के ट्राफिक को अच्छे से देख सके",
    options: [
      "उसेक खूब नजदीक चला सकते है क्योकी वो रुकेगा नहीं",
      "ज्यादा अंतर रखे ताकि आगे के ट्राफिक को अच्छे से देख सके",
      "उस वाहन से कम अंतर रखेगें",
    ],
  },

  {
    numb: 15,
    question: "निजी वाहन की नंबर प्लेट का रंग",
    answer: "सफेद रंग कें प्लेट और काला अक्षर",
    options: [
      "पीले रंग की प्लेट और काले अक्षर",
      "काले रंग की नंबर प्लेट और पीला अक्षर ",
      "सफेद रंग कें प्लेट और काला अक्षर",
    ],
  },
];
