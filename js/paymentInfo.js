// VARIABLES:
let container = document.querySelector(".payment-shipment-container")
let box1 = document.querySelector(".shipment-box1")
let box2 = document.querySelector(".shipment-box2")
let box3 = document.querySelector(".shipment-box3")


let bulletsContainer = document.createElement('div')
bulletsContainer.className = "bullets-container"
container.appendChild(bulletsContainer)
bulletsContainer.style.display = 'none'

let bullet1 = document.createElement('button')
bullet1.className = "bullet1"
bulletsContainer.appendChild(bullet1)

let bullet2 = document.createElement('button')
bullet2.className = "bullet2"
bulletsContainer.appendChild(bullet2)

let bullet3 = document.createElement('button')
bullet3.className = "bullet3"
bulletsContainer.appendChild(bullet3)

if (window.innerWidth < 960) {
    bulletsContainer.style.display = 'flex'
        box1.style.display = 'flex';
        box2.style.display = 'none';
        box3.style.display = 'none';
        
        bullet1.style.backgroundColor = "#6e2828";
        bullet2.style.backgroundColor = "#ffffff";
        bullet3.style.backgroundColor = "#ffffff";
} else {
    bulletsContainer.style.display = 'none';
    box1.style.display = 'flex';
    box2.style.display = 'flex';
    box3.style.display = 'flex';
}

window.addEventListener('resize', (e) => {
    let docWidth = window.innerWidth
    
    if (docWidth < 960) {
        bulletsContainer.style.display = 'flex'
        box1.style.display = 'flex';
        box2.style.display = 'none';
        box3.style.display = 'none';

        bullet1.style.backgroundColor = "#6e2828";
        bullet2.style.backgroundColor = "#ffffff";
        bullet3.style.backgroundColor = "#ffffff";
    } else {
        bulletsContainer.style.display = 'none';
        box1.style.display = 'flex';
        box2.style.display = 'flex';
        box3.style.display = 'flex';
    }
    
})



container.addEventListener('click', (e) => {
    boxTarget = e.target
    
    if(boxTarget.classList.contains('bullet1')){
        box1.style.display = 'flex';
        box2.style.display = 'none';
        box3.style.display = 'none';

        bullet1.style.backgroundColor = "#6e2828";
        bullet2.style.backgroundColor = "#ffffff";
        bullet3.style.backgroundColor = "#ffffff";
    } else if(boxTarget.classList.contains('bullet2')){
        box1.style.display = 'none';
        box2.style.display = 'flex';
        box3.style.display = 'none';
        
        bullet1.style.backgroundColor = "#ffffff";
        bullet2.style.backgroundColor = "#6e2828";
        bullet3.style.backgroundColor = "#ffffff";
    } else if(boxTarget.classList.contains('bullet3')){
        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'flex';

        bullet1.style.backgroundColor = "#ffffff";
        bullet2.style.backgroundColor = "#ffffff";
        bullet3.style.backgroundColor = "#6e2828";
    }
    
})

container.addEventListener('touchstart', swipe)
container.addEventListener('touchend', swipe)
container.addEventListener('touchmove', swipe)

let touchListX = [];
let lastElement
function swipe(e) {
    
    if(e.type !== 'touchend') { 
        if(e.type === 'touchstart') {
            touchListX = [];
        }
        let pos = parseInt(e.touches[0].clientX)
        
        touchListX.push(pos)
        
    } else {
        swiped()
    }
    let lastPos = touchListX.length -1
    lastElement = touchListX[lastPos]
    
}


function swiped() {
    if(lastElement < touchListX[0]){
        
        if(box1.style.display == 'flex') {
            box1.style.display = 'none';
            box2.style.display = 'flex';
            box3.style.display = 'none';
    
            bullet1.style.backgroundColor = "#ffffff";
            bullet2.style.backgroundColor = "#6e2828";
            bullet3.style.backgroundColor = "#ffffff";
        } else if(box2.style.display == 'flex') {
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'flex';
            
            bullet1.style.backgroundColor = "#ffffff";
            bullet2.style.backgroundColor = "#ffffff";
            bullet3.style.backgroundColor = "#6e2828";
        } else if(box3.style.display == 'flex') {
            box1.style.display = 'flex';
            box2.style.display = 'none';
            box3.style.display = 'none';
            
            bullet1.style.backgroundColor = "#6e2828";
            bullet2.style.backgroundColor = "#ffffff";
            bullet3.style.backgroundColor = "#ffffff";
        }    
    } else if(lastElement > touchListX[0]){
        if(box1.style.display == 'flex') {
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'flex';
    
            bullet1.style.backgroundColor = "#ffffff";
            bullet2.style.backgroundColor = "#ffffff";
            bullet3.style.backgroundColor = "#6e2828";
        } else if(box2.style.display == 'flex') {
            box1.style.display = 'flex';
            box2.style.display = 'none';
            box3.style.display = 'none';
            
            bullet1.style.backgroundColor = "#6e2828";
            bullet2.style.backgroundColor = "#ffffff";
            bullet3.style.backgroundColor = "#ffffff";
        } else if(box3.style.display == 'flex') {
            box1.style.display = 'none';
            box2.style.display = 'flex';
            box3.style.display = 'none';
            
            bullet1.style.backgroundColor = "#ffffff";
            bullet2.style.backgroundColor = "#6e2828";
            bullet3.style.backgroundColor = "#ffffff";
        }    
    }
}


    
   
   


























