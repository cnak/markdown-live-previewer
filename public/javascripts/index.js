var iterator = require("markdown-it-for-inline");
const md = require("markdown-it")({ linkify: true })
 .use(iterator, 'url_new_win', 'link_open', function (tokens, idx) {
              tokens[idx].attrPush([ 'target', '_blank' ]);
            });

document
  .getElementById("writerView")
  .addEventListener("keypress", function (e) {
    let value = document.getElementById("writerView").value;
    if (e.key === "Enter") {
      document.getElementById("readerView").innerText = md.render(value);
      console.log("enter was pressed");
    }
  });
