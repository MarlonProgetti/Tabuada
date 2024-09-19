function Gerar() {
  var num = window.document.getElementById("num");
  var tab = window.document.getElementById("tab");
  var list = window.document.getElementById("list");
  if (num.value.length == 0) {
    window.alert("[ERRO] Campo Número não preenchido... Tente novamente!");
  } else {
    var n = Number(num.value);
    list.innerHTML = `${n}: </br>`;
    tab.innerHTML = "";
    for (var c = 0; c <= 10; c += 1) {
      var item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      tab.appendChild(item);
    }
  }
}

var footer = window.document.getElementById("footer");
footer.innerHTML += `\u{1F9D9}`;
