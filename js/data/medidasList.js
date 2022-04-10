

const liItems = (product) => {
    for(let medida of product.medidas) {
        return `<li class='medidas-item-list'>${medida}</li>`
    }
}

export { liItems }














