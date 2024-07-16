let screen = document.querySelector(".screen");
let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        screen.innerText = "";
        break;
      case "DEL":
        screen.innerText = screen.innerText.slice(0, -1);
        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          swal({
            title: "This calculation is wrong",
            text: " ",
            icon: "warning",
            buttons: false,
          });
        }
        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});
