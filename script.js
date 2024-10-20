// Di sinilah kamu akan menulis logika JavaScript untuk membuat chatbot berfungsi.
// Contoh sederhana:
const userInput = document.getElementById('user-input');
const chatlogs = document.querySelector('.chatlogs');

userInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    // Kirim pesan ke server dan tampilkan respons
    const message = userInput.value;
    chatlogs.innerHTML += `<div>Kamu: ${message}</div>`;
    userInput.value = '';

    // Simulasikan respons chatbot (ganti dengan logika sebenarnya)
    setTimeout(() => {
      chatlogs.innerHTML += `<div>Chatbot: Halo! Apa kabar?</div>`;
    }, 1000);
  }
});