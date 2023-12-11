// Semester 1
const tSemester1 = document.querySelector('#semester1 tbody')

fetch(`https://be-2-section-surabaya-group-26-production.up.railway.app/matkul/semester/1`)
.then(response => response.json())
.then(data => {
    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'matkulData1');
        tSemester1.appendChild(tableRow);
        const matkulData = document.getElementsByClassName('matkulData1');
        matkulData[i].innerHTML = `
            <td>${Data[i].kode}</td>
            <td>${Data[i].nama}</td>
            <td>${Data[i].sks}</td>
        `
    }
})
.catch(error => {
    console.log(error);
})



// Semester 2
const tSemester2 = document.querySelector('#semester2 tbody')

fetch(`https://be-2-section-surabaya-group-26-production.up.railway.app/matkul/semester/2`)
.then(response => response.json())
.then(data => {
    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'matkulData2');
        tSemester2.appendChild(tableRow);
        const matkulData = document.getElementsByClassName('matkulData2');
        matkulData[i].innerHTML = `
            <td>${Data[i].kode}</td>
            <td>${Data[i].nama}</td>
            <td>${Data[i].sks}</td>
        `
    }
})
.catch(error => {
    console.log(error);
})



// Semester 3
const tSemester3 = document.querySelector('#semester3 tbody')

fetch(`https://be-2-section-surabaya-group-26-production.up.railway.app/matkul/semester/3`)
.then(response => response.json())
.then(data => {
    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'matkulData3');
        tSemester3.appendChild(tableRow);
        const matkulData = document.getElementsByClassName('matkulData3');
        matkulData[i].innerHTML = `
            <td>${Data[i].kode}</td>
            <td>${Data[i].nama}</td>
            <td>${Data[i].sks}</td>
        `
    }
})
.catch(error => {
    console.log(error);
})



// Semester 4
const tSemester4 = document.querySelector('#semester4 tbody')

fetch(`https://be-2-section-surabaya-group-26-production.up.railway.app/matkul/semester/4`)
.then(response => response.json())
.then(data => {
    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'matkulData4');
        tSemester4.appendChild(tableRow);
        const matkulData = document.getElementsByClassName('matkulData4');
        matkulData[i].innerHTML = `
            <td>${Data[i].kode}</td>
            <td>${Data[i].nama}</td>
            <td>${Data[i].sks}</td>
        `
    }
})
.catch(error => {
    console.log(error);
})



// Semester 5
const tSemester5 = document.querySelector('#semester5 tbody')

fetch(`https://be-2-section-surabaya-group-26-production.up.railway.app/matkul/semester/5`)
.then(response => response.json())
.then(data => {
    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'matkulData5');
        tSemester5.appendChild(tableRow);
        const matkulData = document.getElementsByClassName('matkulData5');
        matkulData[i].innerHTML = `
            <td>${Data[i].kode}</td>
            <td>${Data[i].nama}</td>
            <td>${Data[i].sks}</td>
        `
    }
})
.catch(error => {
    console.log(error);
})



// Semester 6
const tSemester6 = document.querySelector('#semester6 tbody')

fetch(`https://be-2-section-surabaya-group-26-production.up.railway.app/matkul/semester/6`)
.then(response => response.json())
.then(data => {
    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'matkulData6');
        tSemester6.appendChild(tableRow);
        const matkulData = document.getElementsByClassName('matkulData6');
        matkulData[i].innerHTML = `
            <td>${Data[i].kode}</td>
            <td>${Data[i].nama}</td>
            <td>${Data[i].sks}</td>
        `
    }
})
.catch(error => {
    console.log(error);
})



// Semester 7
const tSemester7 = document.querySelector('#semester7 tbody')

fetch(`https://be-2-section-surabaya-group-26-production.up.railway.app/matkul/semester/7`)
.then(response => response.json())
.then(data => {
    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'matkulData7');
        tSemester7.appendChild(tableRow);
        const matkulData = document.getElementsByClassName('matkulData7');
        matkulData[i].innerHTML = `
            <td>${Data[i].kode}</td>
            <td>${Data[i].nama}</td>
            <td>${Data[i].sks}</td>
        `
    }
})
.catch(error => {
    console.log(error);
})



// Semester 8
const tSemester8 = document.querySelector('#semester8 tbody')

fetch(`https://be-2-section-surabaya-group-26-production.up.railway.app/matkul/semester/8`)
.then(response => response.json())
.then(data => {
    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'matkulData8');
        tSemester8.appendChild(tableRow);
        const matkulData = document.getElementsByClassName('matkulData8');
        matkulData[i].innerHTML = `
            <td>${Data[i].kode}</td>
            <td>${Data[i].nama}</td>
            <td>${Data[i].sks}</td>
        `
    }
})
.catch(error => {
    console.log(error);
})