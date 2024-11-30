const menu = document.querySelector('#menu')
const content = `<div><img src="images/strawberry.jpg" alt=""></div>`;
//menu.textContent = content; これだと画像ではなくHTMLの文字列が表示されるぞ！
menu.insertAdjacentHTML('beforeend', content);