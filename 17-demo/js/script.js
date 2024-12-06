const items = document.querySelectorAll('.img-item');

for (let i = 0; i < items.length; i++){
  const keyframes = {
    filter: ['blur(20px)', 'blur(0)'],
  };
  const opitions = {
    duration: 600,
    delay: i * 300,
    fill: 'forwards',
  };
  items[i].animate(keyframes,opitions);
}