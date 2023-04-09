// let btn = document.querySelector('#btn');
// let span = document.querySelector('.span');
let qa__wrapper = document.querySelectorAll('.qa__wrapper');

qa__wrapper.forEach(el => {
  el.addEventListener('click', () => {
    let span = el.childNodes[5]
    let btn = el.childNodes[3]
    let qa__wrapper = el

      if (span.style.maxHeight === `0px`) {
    span.style.maxHeight = span.scrollHeight + "px";
    qa__wrapper.style.background = "#fff";
    btn.style.transform = "rotate(180deg)"
  } else {
    span.style.maxHeight = 0;
    qa__wrapper.style.background = "#fcfaff";
    btn.style.transform = "rotate(0deg)";
  }

  })
})


// qa__wrapper.addEventListener('click', () => {
//   if (span.style.maxHeight === `0px`) {
//     span.style.maxHeight = span.scrollHeight + "px";
//     qa__wrapper.style.background = "#fff";
//     btn.style.transform = "rotate(180deg)"
//   } else {
//     span.style.maxHeight = 0;
//     qa__wrapper.style.background = "#fcfaff";
//     btn.style.transform = "rotate(0deg)";
//   }
// })