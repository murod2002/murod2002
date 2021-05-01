import data from './data.js'

let container = document.querySelector('.row');
let search = document.getElementById('search');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const dropdownMenu = document.getElementById('dropdown');

dropdownMenu.addEventListener('click', (e) =>{
   e.preventDefault()
   console.log(e.target.innerHTML);
   const filteredData = data.filter(el =>{
      return el.name.toLowerCase().includes(e.target.innerHTML.toLowerCase())
   })
   loadData(filteredData, container)
})



search.addEventListener('keyup', (e) => {
   e.preventDefault();

   console.log(search.value);
   const filteredData = data.filter(el => {
      return el.name.toLowerCase().includes(search.value.toLowerCase())
   });
   loadData(filteredData, container)
})

nextBtn.addEventListener('click', () => {
   current_page++
   loadData(data, container);
})
prevBtn.addEventListener('click', () => {
   current_page--
   loadData(data, container);
})
let current_page = 0;
let rows = 8;

function loadData(array, wrapper) {
   let html = ``

   let start = current_page * rows;
   let end = start + rows;
   let paginate = array.slice(start, end)
   paginate.forEach(el => {
      html += `
      <div class="col-lg-3 col-md-6 col-sm-12 my-2 text-center align-item-center">
         <div class="card">
          <img  class="img img-fluid w-50 card-img-top mx-auto" src="${el.image}" alt="">
            <div class="card-body">
              <h5 class="card-title">${el.name}</h5>
              <p class="card-text">${el.description}</p>
              <div class="mb-4 text-warning">
                  <i class="${el.rating >= 1 ? "fas fa-star" : el.rating >= 0.5 &&  el.rating < 1 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
                  <i class="${el.rating >= 2 ? "fas fa-star" : el.rating >= 1.5 &&  el.rating < 2 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
                  <i class="${el.rating >= 3 ? "fas fa-star" : el.rating >= 2.5 &&  el.rating < 3 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
                  <i class="${el.rating >= 4 ? "fas fa-star" : el.rating >= 3.5 &&  el.rating < 4 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
                  <i class="${el.rating >= 5 ? "fas fa-star" : el.rating >= 4.5 &&  el.rating < 5 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
              </div>
              <a href="#" class="btn btn-outline-primary ${el. countInStock === 0 ? 'disabled' : ""}">Learn More</a>
            </div>
         </div>
      </div>
      `
      wrapper.innerHTML = html
   });
}

loadData(data, container);







// function myFunction() {
//    var str = "";
//    var res = str.split(" ");
//    document.getElementById("dropdown").innerHTML = res[0];
//  }