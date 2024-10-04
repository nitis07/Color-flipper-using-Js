const btn = document.querySelector('#btn');
const body = document.querySelector('body');

const bgColor = function () {
  let ranNum = '0123456789abcdef';
  let sign = '#';
  for (let i = 0; i < 6; i++) {
    sign += ranNum[Math.floor(Math.random() * 16)];
  }
  return sign;
};
btn.addEventListener('click', (e) => {
  body.style.backgroundColor = bgColor();
});

//  })
