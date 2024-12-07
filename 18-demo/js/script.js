const showKirin = (entries) => {
  const keyframes = {
    opacity: [0,1],
    translate: ['200px 0', 0],
  };
  entries[0].target.animate(keyframes,2000);
}
// ↑交差したときの処理内容

const kirinObsever = new IntersectionObserver(showKirin);
// ↑監視設定 交差したときに、showKirin定数にある関数を行うこと。

kirinObsever.observe(document.querySelector('#kirin'));
// ↑監視を始めるために、observe()メゾットを定義。
//  IntersectionObserverにあるobserver()メゾット。()には、対象となるものを。
