window.addEventListener('load', () => {
  const loadingAreaGray = document.querySelector('#loading');
  const loadingAreaGreen = document.querySelector('#loading-screen');

  //Loadingグレー色
  loadingAreaGray.animate({
    opacity: [1,0],
    visibility: 'hidden',
  },
  {
    duration: 2000,
    delay: 1200,
    easing: 'ease',
    fill: 'forwards',
  });

  //Loadingグリーン色
  loadingAreaGreen.animate({
    translate: ['0 100vh', '0 0', '100vh 0'],
  },
  {
    duration: 2000,
    delay: 800,
    easing: 'ease',
    fill: 'forwards',
  });
});