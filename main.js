document.addEventListener('alpine:init', () => {
  Alpine.store('mahasiswa', {
    tahun: 2019,
    nama: ['Reza', 'Adel', 'Dian']
  });
});
