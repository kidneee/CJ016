// ハンバーガーメニュー
const hamburgerButton = document.querySelector('#js-buttonHamburger');
const drawerMenu = document.getElementById('drawerMenu');
const mask = document.querySelector('.mask');
const header = document.querySelector('.header');

hamburgerButton.addEventListener('click', () => {
  const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';

  // aria-expanded属性の更新
  hamburgerButton.setAttribute('aria-expanded', !isExpanded);

  // drawerMenuとheaderの開閉状態の切り替え
  drawerMenu.classList.toggle('open');
  header.classList.toggle('open'); // headerにopenクラスを追加/削除

  // メニューが開いたときに背景マスクを表示
  mask.classList.toggle('open', !isExpanded);
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
