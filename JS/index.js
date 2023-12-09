let currentIndex = 0;
let itemsToShow = 3;
let data = [
  { imgSrc: "./assets/berita1.svg", title: "426 Mahasiswa Institut Teknologi Del resmi dikukuhkan", text: "Kegiatan ini Mahasiswa Baru IT Del dikukuhkan dengan mengucapkan “Janji Mahasiswa”. Dalam kegiatan ini pula Bapak Luhut Binsar Pandjaitan berpesan kepada Mahasiswa Baru untuk giat belajar dan tetap berbuat baik." },
  { imgSrc: "./assets/berita2.svg", title: "Webinar: How To Get Hired In Your First Intership", text: "Bincang bincang bersama Alumni Informatika tentang How to get hired in your first internship dengan Narasumber Albert.P Simanjuntak (Informatika 2017) dan Felix Aditya (Informatika 2016)." },
  { imgSrc: "./assets/berita3.svg", title: "Mahasiswa prodi Informatika lolos Penerima  P2MW 2022", text: "Mahasiswa IT Del Prodi Informatika yang lolos sebagai Penerima Bantuan Program Pembinaan Mahasiswa Wirausaha (P2MW) 2022: Samuel Sibuea, Guntur Sinaga, Lamboy Sirait, Michael Napitupulu" },
  { imgSrc: "./assets/berita2.svg", title: "Webinar: How To Get Hired In Your First Intership", text: "Bincang bincang bersama Alumni Informatika tentang How to get hired in your first internship dengan Narasumber Albert.P Simanjuntak (Informatika 2017) dan Felix Aditya (Informatika 2016)." },
];

function updateCarousel() {
  let carouselItem = document.querySelector('.carousel-item');
  carouselItem.innerHTML = ''; // Clear current contents

  // Calculate the index of the first and last item to show
  let startIdx = currentIndex;
  let endIdx = startIdx + itemsToShow;

  // Loop over data and append only the items that should be shown
  for (let i = startIdx; i < endIdx; i++) {
    let dataIndex = i % data.length; // Wrap around if index exceeds data length
    let item = data[dataIndex];
    
    // Create card element
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item.imgSrc}" alt="News Item">
        <div class="card-body">
        <h5 class="card-title">426 Mahasiswa Institut Teknologi Del resmi dikukuhkan</h5>
        <p class="card-text">Kegiatan ini Mahasiswa Baru IT Del dikukuhkan dengan mengucapkan “Janji Mahasiswa”. Dalam kegiatan ini pula Bapak Luhut Binsar Pandjaitan berpesan kepada Mahasiswa Baru untuk giat belajar dan tetap berbuat baik. </p>
        </div>
    `;
    
    // Append card to the carousel item
    carouselItem.appendChild(card);
  }
}

function moveCarousel(direction) {
  if(direction === 'next') {
    currentIndex = (currentIndex + 1) % data.length;
  } else {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
  }
  updateCarousel();
}


// POPUP
document.querySelector("#show-login").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
});

// Initialize the carousel with the first set of items
document.addEventListener("DOMContentLoaded", updateCarousel);

// Login
const submit = document.querySelector('.sign-in');
const username = document.getElementById('username');
const password = document.getElementById('password');

submit.addEventListener('click', () => {
  const data = {
    username: username.value,
    password: password.value
  }

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.message === 'Login success') {
      window.location.href = 'admin.html'
    } else {
      alert('Username/Password Salah')
    }
  })
  .catch((error) => {
    console.log(error);
  })
})