let score = Number(localStorage.getItem("score"));

document.getElementById("score").innerText = `Score: ${score}`;

function test(buttons, correct) {
  document.getElementById("navegation").removeAttribute("disabled");

  if (correct) {
    buttons.style.background = "#1bff02ff";
    score += 25;

    document.getElementById("score").innerText = `Score: ${score}`;
    localStorage.setItem("score", score);
  } else {
    buttons.style.background = "#ff0000ff";
    document.getElementById("opn").style.background = "#1bff02ff";
  }
  const button = document.querySelectorAll(".tests");
  button.forEach(function (disableds) {
    disableds.disabled = true;
  });
}
