const md = require("markdown-it")();
const defaultRender =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  var aIndex = tokens[idx].attrIndex("target");

  if (aIndex < 0) {
    tokens[idx].attrPush(["target", "_blank"]);
  } else {
    tokens[idx].attrs[aIndex][1] = "_blank"; 
  }

  return defaultRender(tokens, idx, options, env, self);
};

md.renderer.rules.bullet_list_open = function (
  tokens,
  idx,
  options,
  env,
  self
) {
  const classExists = tokens[idx].attrIndex("class") < 0 ? false : true;
   if (!classExists) {
     tokens[idx].attrPush(["class", "govuk-list govuk-list–bullet"]); // add new attribute
   }
  return defaultRender(tokens, idx, options, env, self);
};

md.renderer.rules.paragraph_open = function (
  tokens,
  idx,
  options,
  env,
  self
) {
  const classExists = tokens[idx].attrIndex("class") < 0 ? false : true;
   if (!classExists) {
     tokens[idx].attrPush(["class", "govuk-body"]); 
   }
  return defaultRender(tokens, idx, options, env, self);

}

const value = document.getElementById("writerView").value;
document.getElementById("readerHtml").innerText = md.render(value);
document.getElementById("readerView").innerHTML = md.render(value);

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
