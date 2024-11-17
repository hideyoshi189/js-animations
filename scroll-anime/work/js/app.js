const elm = document.querySelector(".boxes-wrapper");
const boxes = document.getElementsByClassName('box');

const callback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.add('displayed');
      }
    } else {
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].classList.contains('displayed')) {
          boxes[i].classList.remove('displayed');
        }
      }
    }
  });
};

const io = new IntersectionObserver(callback);
io.observe(elm);
