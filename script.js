const dino = document.querySelector('.dino');
let isJumping =  false;

function handleKeyup(event){
    if(event.keyCode === 32){
        if (!isJumping) {
            jump()    
        }
        
    }
}

function jump(){
    let position = 0;

    isJumping = true;

    let upInterval = setInterval(() => {
       
        if(position >= 150){
            clearInterval(upInterval);
            isJumping = false;
            //faz o dino descer
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval)
                }else {
                    position -= 20;
                    dino.style.bottom = position + "px";
                }
            }, 20)
        }else {
            // faz o dino subir
            position += 20;

            dino.style.bottom = position + "px";
        }
    }, 20) 
}

document.addEventListener('keyup', handleKeyup)