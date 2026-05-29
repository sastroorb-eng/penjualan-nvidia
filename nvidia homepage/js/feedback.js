let totalFeedback = 0;

function kirimFeedback() {
    let nama = document.getElementById("nama").value;
    let vga = document.getElementById("pilihanVGA").value;
    let komentar = document.getElementById("komentar").value;
    let list = document.getElementById("listFeedback");

    if (!nama || !vga || !komentar) {
        alert("Isi semua 😑");
        return;
    }

    totalFeedback++;

    let item = `
        <div class="feedback-item ${vga === 'NVIDIA' ? 'nvidia' : 'amd'}">
            <b>#${totalFeedback} ${nama}</b> suka ${vga}
            <p>${komentar}</p>
        </div>
    `;

    list.innerHTML = item + list.innerHTML; // terbaru di atas

    // reset
    document.getElementById("nama").value = "";
    document.getElementById("pilihanVGA").value = "";
    document.getElementById("komentar").value = "";
}