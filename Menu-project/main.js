//console.log('Bağlantı kuruldu')

import menu from "./database.js";
//console.log(menu)
const menuContainer=document.getElementById('menu-container')
//console.log(menuContainer)

const filterButton = document.querySelectorAll(".filter-btn");
//console.log(filterButton)


//sayfa yüklenirken

document.addEventListener("DOMContentLoaded", () => {
    displayMenu(menu);
  });

//sayfa yüklendiğinde menü gösterilir
function displayMenu(menuItems) {
    // console.log(menuItems);
    let dispMenu = menuItems.map(
      (menuItem) => `


      <div
      class="d-flex align-items-center gap-3 flex-column flex-md-row my-2"
      id="card"
     >
      <img
        src=${menuItem.img}
        alt=""
        id="image"
        class="rounded shadow"
      />
      <div>
        <div class="d-flex justify-content-between">
          <h5>${menuItem.title}</h5>
          <p>${menuItem.price} &#8378;</p>
        </div>
        <p class="lead">
          ${menuItem.desc}
        </p>
      </div>
     </div>
      `
       );
       dispMenu = dispMenu.join("");
       menuContainer.innerHTML = dispMenu;
     }
     filterButton.forEach((button) => {
        //console.log(button)

        button.addEventListener("click", (e) => {
            const category = e.target.dataset.id;
            //console.log(category);

searchCategory(category);
  });
});


//filitreleme fonksiyonu
function searchCategory(categoryInfo) {
    //console.log(categoryInfo);
    const filteredMenu = menu.filter(
        (menuItem) => menuItem.category === categoryInfo
        );
      
        //console.log(filteredMenu)

      //tıklanılan buton hepsi ise 
      if (categoryInfo === "all") {
        //tüm menüyü göster
        displayMenu(menu);
    
      }
      //tıklanılan button hepsi değilse
      else {
        displayMenu(filteredMenu);
    }
  }

