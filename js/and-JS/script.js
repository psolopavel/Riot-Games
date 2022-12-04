const items = document.querySelectorAll('[data-cursor-mouse]')
const item_white = document.querySelectorAll('.main-item__white')
if (items) {
   window.addEventListener('mousemove', function (event) {
      items.forEach(item => {
         item_sped = Number(item.getAttribute('data-cursor-mouse'))

         item.style.cssText = `
               right: ${event.clientX / item.offsetWidth / item_sped}%;
               
            `

         if (item.getAttribute('data-cursor-mouse-revers') == 2) {
            item.style.cssText = `
               left: -${event.clientX / item.offsetWidth / item_sped}%;
            `
         }
      });
   })

}

document.addEventListener('DOMContentLoaded', function () {
   item_white.forEach(element => {
      element.querySelector('.item-individual').classList.add('white')
      element.querySelector('.main-item__name').classList.add('black')
   });
})