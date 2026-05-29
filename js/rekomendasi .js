let vgaDatabase = [
    // ===== NVIDIA GTX (Gaming Murah) =====
    { nama: "GTX 1050 Ti", harga: 2000000, tipe: "gaming" },
    { nama: "GTX 1650", harga: 3000000, tipe: "gaming" },
    { nama: "GTX 1660 Super", harga: 4000000, tipe: "gaming" },

    // ===== NVIDIA RTX (Gaming & Creator) =====
    { nama: "RTX 2060", harga: 6000000, tipe: "gaming" },
    { nama: "RTX 3060", harga: 8000000, tipe: "gaming" },
    { nama: "RTX 4060", harga: 12000000, tipe: "gaming" },
    { nama: "RTX 4070", harga: 18000000, tipe: "gaming" },
    { nama: "RTX 4080", harga: 30000000, tipe: "gaming" },
    { nama: "RTX 4090", harga: 45000000, tipe: "gaming" },

    // ===== AMD =====
    { nama: "RX 580", harga: 2500000, tipe: "gaming" },
    { nama: "RX 6600", harga: 6000000, tipe: "gaming" },
    { nama: "RX 6700 XT", harga: 9000000, tipe: "gaming" },
    { nama: "RX 7800 XT", harga: 15000000, tipe: "gaming" },

    // ===== KERJA / EDITING =====
    { nama: "RTX 3060 (Creator)", harga: 9000000, tipe: "kerja" },
    { nama: "RTX 4070 (Editing)", harga: 20000000, tipe: "kerja" },

    // ===== INTEL ARC (Produktivitas Laptop) =====
    { nama: "Intel Arc A350M", harga: 5000000, tipe: "kerja" },
    { nama: "Intel Arc A370M", harga: 7000000, tipe: "kerja" },
    { nama: "Intel Arc A530M", harga: 9000000, tipe: "kerja" },
    { nama: "Intel Arc A730M", harga: 12000000, tipe: "kerja" },
    { nama: "Intel Arc A770", harga: 8000000, tipe: "kerja" },

    // ===== WORKSTATION =====
    { nama: "Quadro P1000", harga: 7000000, tipe: "workstation" },
    { nama: "Quadro RTX 4000", harga: 20000000, tipe: "workstation" },
    { nama: "RTX A4000", harga: 30000000, tipe: "workstation" },
    { nama: "RTX A6000", harga: 80000000, tipe: "workstation" }
];

function hitungVGA() {
    let budget = parseInt(document.getElementById("budget").value);
    let tujuan = document.getElementById("tujuan").value;
    let hasil = document.getElementById("hasil");

    if (!budget || budget <= 0) {
        hasil.innerHTML = "Masukin budget yang bener 😑";
        return;
    }

    // 🔍 filter utama
    let filtered = vgaDatabase.filter(vga => {
        return vga.harga <= budget;
    });

    // 🔥 kalau kosong
    if (filtered.length === 0) {
        hasil.innerHTML = "Budget terlalu rendah 😢";
        return;
    }

    // 🧠 PRIORITAS SESUAI TUJUAN
    filtered.sort((a, b) => {
        if (a.tipe === tujuan && b.tipe !== tujuan) return -1;
        if (a.tipe !== tujuan && b.tipe === tujuan) return 1;
        return b.harga - a.harga;
    });

    // ambil lebih banyak biar variatif
    let top = filtered.slice(0, 7);

    let output = "<h3>Rekomendasi VGA 🔥</h3>";

    top.forEach(vga => {
        let brand = "";

        if (vga.nama.includes("RTX") || vga.nama.includes("GTX")) brand = "NVIDIA";
        else if (vga.nama.includes("RX")) brand = "AMD";
        else if (vga.nama.includes("Arc")) brand = "INTEL";
        else if (vga.nama.includes("Quadro") || vga.nama.includes("A")) brand = "WORKSTATION";

        output += `
            <div class="card">
                <h4>${vga.nama}</h4>
                <p>Rp ${vga.harga.toLocaleString()}</p>
                <small>${brand} • ${vga.tipe}</small>
            </div>
        `;
    });

    hasil.innerHTML = output;
}