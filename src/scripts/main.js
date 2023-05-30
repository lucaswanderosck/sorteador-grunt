document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let maxNumber = document.getElementById("max-number").value;
    maxNumber = parseInt(maxNumber);

    let ramdonNumber = Math.random() * maxNumber;
    ramdonNumber = Math.floor(ramdonNumber + 1);
    document.getElementById("result-value").innerText = ramdonNumber;
    document.querySelector(".result").style.display = "block";
  });
});
