// postという名前の関数の宣言
function post() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // ↑↑ここまでイベント発火
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    // ↑↑ここまでリクエスト
  });
};

window, addEventListener('turbo:load', post)