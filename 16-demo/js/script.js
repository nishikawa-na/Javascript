// 動かす要素.animate({
//   キー(プロパティ名): ['開始の値','終了の値'],
// }, 再生時間);

// const keyframes = {
//   キー(プロパティ名): ['開始の値','終了の値'],
// };
// 動かす要素.animate(keyframes, 再生時間); と書くのもあり。

const heading = document.querySelector('#heading');
const keyframes = {
  borderRadius: [
    '20% 50% 50% 70%/50% 50% 70% 50%',
    '50% 20% 50% 50%/40% 40% 60% 60%',
    '50% 40% 20% 40%/40% 50% 50% 80%',
    '50% 50% 50% 20%/40% 40% 60% 60%',
  ],
};
const opitions = {
  duration: 8000,
  direction: 'alternate',
  iterations: Infinity,
};
heading.animate(keyframes, opitions);
