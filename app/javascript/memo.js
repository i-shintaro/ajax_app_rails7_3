const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
  <div class="post">
    <div class="post-date">
      投稿日時：${item.created_at}
    </div>
    <div class="post-content">
      ${item.content}
    </div>
  </div>`;
  return html;
}
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
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Eroor ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");   // XHR.response.postと記述することで、レスポンスの中から投稿されたメモの情報を抽出し、変数itemに格納
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";  // フォームの中身をリセット
      // ↑↑ここまでリクエストに成功した場合
    };
  });
};

window, addEventListener('turbo:load', post)