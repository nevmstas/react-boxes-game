export const ruCommonRules = [
  "На поле имеется 9 квадратов",
  "В одном из которой находится бомба",
  "При нажатии на квадрат вам прибавляется 1 поинт и квадрат исчезает",
  "Комбо: при каждом успешном нажатии на квадрат у вас прибавляется комбо(2 подряд - 1 поинт, 3 подряд - 2 поинта)",
  "При попадении на бомбу, комбо и набранные поинты пропадают",
  "На игру отводится определенно количество времни",
];

export const engCommonRules = [
  "There are 9 blocks on the field",
  "One of this has a bomb",
  "When you press the block, your points will increace on 1 point and block and the block disappears",
  "Combo: every time you click on a square, you add a combo (2 in a row - 1 point, 3 in a row - 2 points)",
  "When hit on a bomb, combos and accumulated points disappear",
  "A certain amount of time is allotted to the game",
];

export const Elements = [
  {
    name: "Reset",
    description: "Данная кнопка возвращает все квадраты и сбрасывает комбо",
  },
  {
    name: "Start",
    description: "Начало игры, запускается таймер и сбрасывается текущий прогресс в игре",
  },
  {
    name: "Green square",
    description: "Основной элемент игры, который может содержать в себе бомбу",
  },
  {
    name: "Score",
    description: "Очки заработанные в текущей игровой сессии",
  },
  {
    name: "Last score",
    description: "В данную строку записываются поинты заработанные в последних попытках",
  },
];
