window.addEventListener('load', () => {
  const loadingAreaGray = document.querySelector('#loading');
  const loadingAreaGreen = document.querySelector('#loading-screen');
  const loadingText = document.querySelector('#loading p') 

  //Loadingグレー色
  loadingAreaGray.animate(
    {
      opacity: [1,0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  //Loadingグリーン色
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '100vh 0'],
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  //Loading表示アニメーション
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8,
      },
      {
        opacity: 0,
        offset: 1,
      },
    ],
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});

/*画像ギャラリー*/
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');
thumbImages.forEach((thumbImage) =>{
  thumbImage.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({
      opacity: [0,1]},500)
  });
});

//メニュー//
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li')
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};
// Open
menuOpen.addEventListener('click', () => {
  menuPanel.animate({
    translate: ['100vw','0vw']}, menuOptions
  );
  // リンクを一つずつ表示
  menuItems.forEach((menuItem,index) => {
    menuItem.animate(
      {
        opacity: [0,1],
        translate: ['2rem',0],
      },
      {
        duration: 2400,
        easing: 'ease',
        fill: 'forwards',
        delay: index * 300,
      }
    );
  });
});
// Close
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: ['0vw','100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1,0]},menuOptions);
  });
});
