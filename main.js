//Criar as galerias de imagens
document.querySelectorAll("[data-folder]").forEach(el => {
  const total = el.dataset.total
  const folder = el.dataset.folder
  let html = ''
  for (let i = 1; i <= total; i++) {
    html += `
      <div>
        <img src="assets/${folder}/${folder}(${i}).jpg">
      </div>    
    `
  }
  el.innerHTML = html
}) 

//Constantes gerais do modal
const imgModalGaleria = document.querySelector('.modal-fotos')
const btClose = imgModalGaleria.querySelector('.bt-close')
const conteudoGaleria = imgModalGaleria.querySelector('.conteudo')
const imgs = document.querySelectorAll('.galeria img')

//Botão pra fechar o modal
btClose.addEventListener('click', () => {
  imgModalGaleria.close()
})

imgs.forEach((img) => {
  img.addEventListener('click', () => {
    conteudoGaleria.innerHTML = `<img src="${img.src}">`
    imgModalGaleria.showModal()
  })
})

//Botão próxima imagem
const btProx = imgModalGaleria.querySelector('.bt-next')
 let imgProx = null

 btProx.addEventListener('click', () => {
   imgModalGaleria.close()
   imgProx.click()
 })

 //Botão imagem anterior
 const btAnt = imgModalGaleria.querySelector('.bt-prev')
 let imgAnt = null

 btAnt.addEventListener('click', () => {
  imgModalGaleria.close()
  imgAnt.click()
})

//Lógica do funcionamento dos botões (next e prev)
 imgs.forEach(img => {
  img.addEventListener('click', () => {
    imgProx = irProxImg(img);
    imgAnt = irImgAnt(img);
    conteudoGaleria.innerHTML = `<img src="${img.src}">`
    imgModalGaleria.showModal()
  })
})

//Solução do problema da última imagem
function irProxImg(img) {
  return img.parentNode.nextElementSibling
      ? img.parentNode.nextElementSibling.querySelector('img')
      : imgs[0];
}

function irImgAnt(img) {
  return img.parentNode.previousElementSibling
      ? img.parentNode.previousElementSibling.querySelector('img')
      : imgs[imgs.length - 1];
}