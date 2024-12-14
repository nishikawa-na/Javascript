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