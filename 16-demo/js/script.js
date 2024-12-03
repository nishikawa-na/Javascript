// 動かす要素.animate({
//   キー(プロパティ名): ['開始の値','終了の値'],
// }, 再生時間);

// const keyframes = {
//   キー(プロパティ名): ['開始の値','終了の値'],
// };
// 動かす要素.animate(keyframes, 再生時間); と書くのもあり。

const heading = document.querySelector('#heading');
const keyframes = {
  color: ['transparent', '#fff'],
  backgroundPosition: ['100% 0', '0 0'],
};
const opitions = {
  duration: 1000,
  easing: 'ease',
}
heading.animate(keyframes, opitions);