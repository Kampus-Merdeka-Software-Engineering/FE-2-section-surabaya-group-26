// Show Popup Add Data
document.querySelector("#add-matkul").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
})
// // Show Popup Edit Data
// document.querySelector('.table-btn .edit').addEventListener('click', function(){
//     document.querySelector(".edit-popup").classList.add("active");
// })

// Close Popup Add Data
document.querySelector(".popup .close-btn").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
});
// Close Popup Edit Data
document.querySelector(".edit-popup .close-btn").addEventListener("click", function(){
    document.querySelector(".edit-popup").classList.remove("active");
});



// CREATE Method
const kode = document.getElementById('kode');
const matkul = document.getElementById('matkul');
const sks = document.getElementById('sks');
const semester = document.getElementById('semester');
const submitForm = document.querySelector('.send');

submitForm.addEventListener('click', function(){
  document.querySelector(".popup").classList.remove("active");
});

submitForm.addEventListener('click', () => {
  if (!kode.checkValidity() || !matkul.checkValidity() || !sks.checkValidity() || !semester.checkValidity()) {
    alert('Silahkan isi semua field dengan benar!');
    return;
  }

  const data = {
    kode: kode.value,
    nama: matkul.value,
    sks: parseInt(sks.value),
    semester: semester.value
  }
  // console.log(data);

  fetch('https://be-2-section-surabaya-group-26-production.up.railway.app/matkul', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log(result);
    location.reload();
  })
  .catch(error => {
    console.log(error);
  })
})



// READ Method
const tBody = document.querySelector('.matkulTable');

fetch('https://be-2-section-surabaya-group-26-production.up.railway.app/matkul')
.then(response => response.json())
.then(data => {

  const Data = data.data;
  console.log(Data);
  for (let i = 0; i < Data.length; i++) {
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('class', 'matkulData');
    tBody.append(tableRow);
    const matkulData = document.getElementsByClassName('matkulData');
    matkulData[i].innerHTML = `
      <td>${i + 1}</td>
      <td>${Data[i].kode}</td>
      <td>${Data[i].nama}</td>
      <td>${Data[i].sks}</td>
      <td>${Data[i].semester.semester}</td>
      <td>
          <div class="table-btn">
              <button data-id="${Data[i].id}" class="fa fa-pen edit"></button>
              <button data-id="${Data[i].id}" class="fa fa-trash delete"></button>
          </div>
      </td>
    `
  }
  // Delete
  deleteButton()
  updateButton()
})
.catch(error => {
  console.log(error);
})



// UPDATE Method
function updateButton() {
  const updateData = document.querySelectorAll('.edit');
  updateData.forEach((e) => {
    e.addEventListener('click', function() {
      document.querySelector(".edit-popup").classList.add("active");

      const dataId = this.getAttribute('data-id');

      const kode = document.getElementById('editKode');
      const matkul = document.getElementById('editMatkul');
      const sks = document.getElementById('editSks');
      const semester = document.getElementById('editSemester');
      const submitForm = document.querySelector('.sendEdit');

      submitForm.addEventListener('click', function() {
        document.querySelector(".edit-popup").classList.remove("active");

        const data = {
          kode: kode.value,
          nama: matkul.value,
          sks: parseInt(sks.value),
          semester: semester.value
        }

        if (!kode.checkValidity() || !matkul.checkValidity() || !sks.checkValidity() || !semester.checkValidity()) {
          alert('Silahkan isi semua field dengan benar!');
          return;
        }

        fetch (`https://be-2-section-surabaya-group-26-production.up.railway.app/matkul/${dataId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          location.reload();
        })
        .catch(error => {
          console.log(error);
        })
      })
    })
  })
}



// DELETE Method
function deleteButton() {
  const deleteData = document.querySelectorAll('.delete');
  deleteData.forEach((e) => {
    e.addEventListener('click', function() {
      const dataId = this.getAttribute('data-id');

      fetch(`https://be-2-section-surabaya-group-26-production.up.railway.app/matkul/${dataId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        location.reload();
      })
      .catch(error => {
        console.log(error);
      })
    })
  })
}


