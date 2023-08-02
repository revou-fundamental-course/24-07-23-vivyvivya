let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function pesanPaket(paket) {
    alert(Anda memilih paket: ${paket}. Silakan lanjutkan ke formulir pemesanan.);
    }
    
    function kirimPesan() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
        const paket = document.getElementById('paket').value;
        const pesan = document.getElementById('pesan').value;
    
        alert(Terima kasih atas pemesanan Anda!\n\nNama: ${nama}\nEmail: ${email}\nPaket: ${paket}\nPesan: ${pesan});
        return false;
    }

   