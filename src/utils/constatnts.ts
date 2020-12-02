export const Endpoints = ["animals", "human", "art", "internet", "sports"];

export const numberOfWords = 20;

type Player = {
  currentWord: number;
  errors: number;
  wpm: number;
};

export type FirestoreDataType = {
  id: string;
  settings: {
    text: string[];
    started: boolean;
  };
  players: {
    [key: string]: Player;
  };
};

export const dummyData = {
  XQR2A: {
    setting: {
      started: false,
      text: [
        "be",
        "will",
        "come",
        "ready",
        "many",
        "around",
        "well",
        "then",
        "give",
        "out",
        "while",
        "move",
        "the",
        "a",
        "should",
        "back",
        "she",
        "you",
        "no",
        "may",
      ],
    },
    players: [
      {
        name: "John",
        currentWord: 2,
        errors: 4,
        wpm: 22.32,
        ready: false,
      },
      {
        name: "Adam",
        currentWord: 6,
        errors: 2,
        wpm: 19.34,
        ready: true,
      },
    ],
  },
};

export const CommonWordSet = [
  "be",
  "will",
  "come",
  "ready",
  "many",
  "around",
  "well",
  "then",
  "give",
  "out",
  "while",
  "move",
  "the",
  "a",
  "should",
  "back",
  "she",
  "you",
  "no",
  "may",
  "plan",
  "real",
  "face",
  "little",
  "those",
  "from",
  "go",
  "during",
  "go",
  "without",
  "seem",
  "point",
  "get",
  "must",
  "only",
  "late",
  "line",
  "for",
  "public",
  "call",
  "run",
  "thing",
  "new",
  "also",
  "home",
  "number",
  "great",
  "problem",
  "keep",
  "also",
  "high",
  "off",
  "begin",
  "each",
  "can",
  "we",
  "write",
  "eye",
  "change",
  "feel",
  "very",
  "still",
];
