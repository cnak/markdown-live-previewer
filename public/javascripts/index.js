var iterator = require("markdown-it-for-inline");
const md = require("markdown-it")({ linkify: true })
  .use(iterator, "url_new_win", "link_open", function (tokens, idx) {
    tokens[idx].attrPush(["target", "_blank"]);
  })
  .use(iterator, "add_class_to_list", "link_open", function (tokens, idx) {
    tokens[idx].attrPush(["target", "_blank"]);
  });

document
  .getElementById("writerView")
  .addEventListener("keypress", function (e) {
    let value = document.getElementById("writerView").value;
    if (e.key === "Enter") {
      document.getElementById("readerHtml").innerText = md.render(value);
      document.getElementById("readerView").innerHTML = md.render(value);
      console.log("enter was pressed");
    }
  });
