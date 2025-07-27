document.getElementById("absensiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const now = new Date();
  const jam = now.getHours();

  if (jam < 7 || jam >= 10) {
    document.getElementById("status").innerText = "Absen hanya dibuka antara jam 07.00 - 10.00.";
    return;
  }

  const nama = document.getElementById("nama").value;

  fetch("Uhttps://script.google.com/macros/s/AKfycbyUvTPLl2PCjCFZOmEnlZbDGY1QBlJlDKwlrYO_t5tOJtME1AfPJzep60vp6myua5uY/exec", {
    method: "POST",
    body: JSON.stringify({ nama }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("status").innerText = "Absen berhasil dikirim.";
      document.getElementById("absensiForm").reset();
    })
    .catch((err) => {
      document.getElementById("status").innerText = "Terjadi kesalahan.";
    });
});
