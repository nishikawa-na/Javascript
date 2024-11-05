alert('welcome You\'are king');
console.log("初めてのコンソール");

const message = (name, weather) => {
  console.log(`${name}さん、元気してるか？ 今日の天気は${weather}です。`);
}
// ↑での引数を仮引数
// ↓での引数を実引数
message("ピットブル","雨");
message("ハナコ", "晴れ");