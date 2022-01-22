// creating the responsive navbar 
let sideBarBtn = document.querySelector('.nav-toggler-btn');
let sideBar = document.querySelector('.dashboard-grid .sidebar');
let main = document.querySelector('.dashboard-grid .main');
let header = document.querySelector('.dashboard-grid .main header');
let footer = document.querySelector('.dashboard-grid .main footer');

// sideBarBtn.addEventListener('click', () => {
//     sideBar.classList.toggle('show');
//     main.classList.toggle('expand');
//     header.classList.toggle('expand');
//     footer.classList.toggle('expand');
// });


//BUILDING THE USER CARD NAME SHORTENER
// let userCardName = document.querySelector('.profile-btn .name');
// let userCardNameArray = userCardName.innerText.split(" ");
// // checking for mobile screen sizes
// if (window.innerWidth < 768) {
//     userCardName.innerText = '';
//     for (let i = 0; i < userCardNameArray.length; i++) {
//         let userCardSubName = userCardNameArray[i].split('');
//         let userCardSubNameInitial = userCardSubName[0];
//         userCardName.append(userCardSubName[0]);
//     }
// };



// creating the mobile search form 
// let searchBtn = document.querySelector('.search-btn');
// let searchForm = document.querySelector('form.search');

// searchBtn.addEventListener('click', () => {
//     searchForm.classList.toggle('show');
// });