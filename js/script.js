document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.querySelector('.openbtn');
    const menu = document.querySelector('.menu');

    openBtn.addEventListener('click', function() {
        menu.classList.toggle('active'); // メニューの表示・非表示を切り替える
        openBtn.classList.toggle('active'); // ボタンの状態も切り替える（例えばアニメーション用）
    });
});
