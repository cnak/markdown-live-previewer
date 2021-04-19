const MarkdownIt = require("markdown-it"),
md = new MarkdownIt();

document.getElementById("writerView").addEventListener("keypress", function(e) {
    let value = document.getElementById("writerView").value;
    if(e.key === 'Enter') {
        document.getElementById("readerView").innerText = md.render(value);
        console.log('enter was pressed');
    }
});

