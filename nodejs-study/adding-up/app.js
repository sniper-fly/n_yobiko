"use strict";

// ファイルを読み込む
// それぞれのフィールドをキーバリューで格納して配列にする
// 同じ地域で15~19歳の人口を2015から2010を引く。
// そのデータを新たに 地域（キー）、増減差分（バリュー） のオブジェクトにし、配列にする
// 配列をバリューでソートして並べる

// fsを読み込む
const fs = require("fs");

// readlineを読み込む
const readline = require("readline");

// csvからstreamを作成
const rs = fs.createReadStream("./popu-pref.csv");

// interfaceの作成
const rl = readline.createInterface({ input: rs });

const prefectureData = new Map();

// イベントと動作の設定
rl.on("line", (lineString) => {
  const line = lineString.split(",");
  const year = parseInt(line[0]);
  const area = line[1];
  const popu = parseInt(line[3]);

  let value = {
    popu10: null,
    popu15: null,
    changeRate: null,
  };
  if (prefectureData.has(area)) {
    value = prefectureData.get(area);
  }
  if (year === 2010) {
    value.popu10 = popu;
  } else if (year === 2015) {
    value.popu15 = popu;
  } else {
    return;
  }
  prefectureData.set(area, value);
});

rl.on("close", () => {
  for (const [key, value] of prefectureData) {
    value.changeRate = value.popu15 / value.popu10;
  }
  const rankingArray = Array.from(prefectureData).sort((a, b) => {
    return b[1].changeRate - a[1].changeRate;
  });
  const rankingString = rankingArray.map(([key, value], idx) => {
    return `${idx + 1}位 ${key}: 変化率 ${value.changeRate}`;
  });
  console.log(rankingString);
});
