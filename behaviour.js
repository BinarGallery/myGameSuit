//alert("hello")

//Merubah gambar setiap refresh
let acak1 = Math.floor(Math.random()*3)
let acak2 = Math.floor(Math.random()*3)
let gambarPlayer1 = ""
let gambarPlayer2 = ""

//gambarPlayer1
gambarPlayer1 = [
    "images/batu-kiri.png",
     "images/gunting-kiri.png",
    "images/kertas-kiri.png"
]

//gambarPlayer2
gambarPlayer2 = [
    "images/batu-kanan.png",
     "images/gunting-kanan.png",
    "images/kertas-kanan.png"
]
//terapkan
document.querySelector("#player1").setAttribute("src", gambarPlayer1[acak1])
document.querySelector("#player2").setAttribute("src", gambarPlayer2[acak2])

//definisi pemenang
//kode
let p1_batu = (acak1 == 0)
let p1_gunting = (acak1 == 1)
let p1_kertas = (acak1 == 2)

let p2_batu = (acak2 == 0)
let p2_gunting = (acak2 == 1)
let p2_kertas = (acak2 == 2)

//player 1 menang & player 2 kalah
if ((p1_batu && p2_gunting) || (p1_gunting && p2_kertas) || (p1_kertas && p2_batu)){
    document.querySelector("#pesan_p1").innerHTML = "Kamu Menang!"
    document.querySelector("#pesan_p2").innerHTML = "Kamu Kalah!"
    document.querySelector("#pesan_p1").classList.add("menang")
    document.querySelector("#pesan_p2").classList.add("kalah")
}

//player 2 menang & player 1 kalah
if ((p2_batu && p1_gunting) || (p2_gunting && p1_kertas) || (p2_kertas && p1_batu)){
    document.querySelector("#pesan_p2").innerHTML = "Kamu Menang!"
    document.querySelector("#pesan_p1").innerHTML = "Kamu Kalah!"
    document.querySelector("#pesan_p2").classList.add("menang")
    document.querySelector("#pesan_p1").classList.add("kalah")
    
}

//seri
if (acak1 == acak2 ){
    document.querySelector("#pesan_p2").innerHTML = "Seri!"
    document.querySelector("#pesan_p1").innerHTML = "Seri!"
    document.querySelector("#pesan_p2").classList.add("seri")
    document.querySelector("#pesan_p1").classList.add("seri")
}

