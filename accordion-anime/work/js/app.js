document.querySelectorAll('.list-tit').forEach(title => {
  title.addEventListener('click', event => {
    console.log(event);
    const content = event.target.nextElementSibling;

    if (content.style.height) {
      content.style.height = null;
      content.style.padding = '0';
    } else {
      content.style.height = `${content.scrollHeight}px`;
    }
  });
});
