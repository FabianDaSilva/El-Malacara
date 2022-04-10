

const liItems = (product) => {
    if(product.medidas.length > 0) {
        for(let medida of product.medidas) {
            return `<li class='medidas-item-list'>${medida}</li>`
        }
    } else {
        return ""
    }
}

const hasMedidas = (product) => {
    if(product.medidas.length > 0) {
        return `<h6 class="detailView-text__medidas">MEDIDAS</h6>` 
    } else {
        return ""
    }
}

export { liItems, hasMedidas }














