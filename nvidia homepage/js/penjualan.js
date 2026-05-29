function kirimPesanan() {
  let nama = document.getElementById("nama").value;
  let kebutuhan = document.getElementById("kebutuhan").value;
  let pesan = document.getElementById("pesan").value;
  let output = document.getElementById("output");

  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  if (nama === "" || kebutuhan === "") {
    output.innerHTML = "Isi nama dan pilih kebutuhan dulu.";
    return;
  }

  let pilihanManual = [];
  checkboxes.forEach(cb => {
    pilihanManual.push(cb.value);
  });

  let rekomendasi = [];

  // LOGIKA LAMA (tetap ada)
  if (kebutuhan === "gaming") {
    rekomendasi = [
      "AMD RX 6600",
      "AMD RX 6700 XT",
      "RTX 4060",
      "RTX 4070 Super",
      "RX 7800 XT"
    ];
  } 
  else if (kebutuhan === "office") {
    rekomendasi = [
      "Intel Arc A380",
      "Intel Arc A580",
      "GTX 1650",
      "RTX 3050"
    ];
  } 
  else if (kebutuhan === "workstation") {
    rekomendasi = [
      "RTX 4070 Ti",
      "RTX 4080 Super",
      "RTX 4090",
      "RX 7900 XTX",
      "Intel Arc A770"
    ];
  }

  let randomRekomendasi = rekomendasi[Math.floor(Math.random() * rekomendasi.length)];

  // PRIORITAS: kalau user pilih manual → pakai itu
  let hasilVGA = pilihanManual.length > 0 
    ? pilihanManual.join(", ") 
    : randomRekomendasi;

  output.innerHTML = `
    <h3>Pesanan Berhasil ✅</h3>
    <p>Nama: <b>${nama}</b></p>
    <p>Kebutuhan: <b>${kebutuhan}</b></p>
    <p>VGA Dipilih: <b>${hasilVGA}</b></p>
    <p>Pesan: ${pesan ? pesan : "Tidak ada pesan tambahan"}</p>
  `;
}