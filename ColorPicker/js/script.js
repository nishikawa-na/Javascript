const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// アロー関数
const colorBg = () =>{
  document.body.style.backgroundColor = color.value;
  if (color.value === '#ffffff'){
    text.textContent = `カラーコード: ${color.value} (white)`;
  } else if (color.value === '#000000'){
    text.textContent = `カラーコード: ${color.value} (black)`;
  } else {
    text.textContent = `カラーコード: ${color.value}`;
  }
}

color.addEventListener('input', colorBg);

/*
 上記では、関数を定義しているが、無名関数を使うことで、定義する必要がなくなる
 ただし、関数処理が複雑になる場合は読みづらくなるため、やめておくこと。
 color.addEventListener('input', () =>{
  text.textContent= `カラーコード: ${color.value}`;
  })
*/


// function関数
function 関数名() {

}
// komentout

/*
komentout
*/