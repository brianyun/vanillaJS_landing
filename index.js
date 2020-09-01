const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

toggle.addEventListener("click", () => {
	document.body.classList.toggle("show-nav");
});

open.addEventListener("click", () => {
	modal.classList.add("show-modal");
});

close.addEventListener("click", () => {
	modal.classList.remove("show-modal");
});

window.addEventListener("click", (e) => {
	e.target == modal ? modal.classList.remove("show-modal") : false;
});

// open.addEventListener("click", showModal);
// function showModal() {
// 	modal.style.display = "block";
// }
// close.addEventListener("click", () => {
// 	modal.style.display = "none";
// });
//이렇게 해도 됨.

//CSS transform
//CSS @keyframes
//전반적인 HTML 클래스 언제 어떻게 나누는지, 구성하는 방법 보고 배우기.
//클릭시 CSS 변경: classList에 class 추가/제거하는 방법으로 구현.
