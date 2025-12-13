console.log("JavaScript aktif!");
function sapa() {
    document.getElementById("hasil").innerText =
    "Halo, terima kasih sudah klik!";
}
function ubahwarna() {
    document.body.style.backgroundColor ="#e0f7fa";
}
function kirim() {
    let nama =
    document.getElementById("nama").value;
    document.getElementById("output").innerText =
   "halo " + nama + ", senang sekali!";
}
function tambah() {
    let text =
    document.getElementById("todo").value;
    let li = document.createElement("li");
    li.innerText = text;

    document.getElementById("list").appendChild(li);
}
// Fungsi untuk menambah todo 
function tambah() {
    ...
}