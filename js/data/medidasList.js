

const liItems = (product) => {
    let medidas = ``
    if(product.medidas.length > 0) {
        for(let medida of product.medidas) {
            medidas += `<li class='medidas-item-list'><span class="medida-text">${medida}<span></li>`
        }
    } 
    return medidas
}

const hasMedidas = (product) => {
    if(product.medidas.length > 0) {
        return `<h6 class="detailView-text__medidas">MEDIDAS:</h6>` 
    } else {
        return ""
    }
}

export { liItems, hasMedidas }














