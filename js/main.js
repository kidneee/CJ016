// ハンバーガーメニュー
const hamburgerButton = document.querySelector('#js-buttonHamburger');
hamburgerButton.addEventListener('click', (e) => {
  const isExpanded = e.currentTarget.getAttribute('aria-expanded') !== 'false';
  e.currentTarget.setAttribute('aria-expanded', !isExpanded);
  document.documentElement.classList.toggle('is-drawerActive');
});

document.getElementById('js-buttonHamburger').addEventListener('click', function () {
  const drawer = document.getElementById('drawerMenu');
  if (drawer.classList.contains('open')) {
    drawer.classList.remove('open');
  } else {
    drawer.classList.add('open');
  }
});

//TOPに戻る
window.addEventListener("DOMContentLoaded", function () {
  var pageTopBtn = document.querySelector(".page-top");
  pageTopBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    // window.pageYOffset 現在の位置を取得
    if (window.pageYOffset > 700) {
      pageTopBtn.classList.add("is-visible");
    } else {
      pageTopBtn.classList.remove("is-visible");
    }
  });
});
