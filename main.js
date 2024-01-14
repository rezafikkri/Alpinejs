document.addEventListener('alpine:init', () => {
  Alpine.store('mahasiswa', {
    tahun: 2019,
    nama: ['Reza', 'Adel', 'Dian']
  });
});

function ubahWarna(e) {
  e.target.classList.add("bg-red-600")
}
