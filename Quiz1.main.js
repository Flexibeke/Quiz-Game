function test(buttons, correct) {
  //se analisar, no html possui true, false... esse "correto" da um nome a esses booleang
  document.getElementById("navegation").removeAttribute("disabled");
  let score = Number(0);

  if (correct) {
    buttons.style.background = "#1bff02ff";
    score = 25;
    document.getElementById("score").innerText = `Score: ${score}`;
  } else {
    buttons.style.background = "#ff0000ff";
    document.getElementById("opn").style.background = "#1bff02ff";
  }

  const button = document.querySelectorAll(".tests");

  button.forEach(function (disableds) {
    disableds.disabled = true;
  });

  localStorage.setItem("score", score);
}
