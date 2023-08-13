
const mainparent = document.querySelector('.main')

const btn = document.querySelector('.btn')
const parentDiv = document.querySelectorAll(".main i")
for (const item of parentDiv) {
    item.addEventListener("click",function(e){
      e.target.parentNode.removeChild(e.target)
    })
}

btn.addEventListener('click',function(){
   const inputValue =document.querySelector("input")
   if (inputValue.value=="" ) {
        alert("Plase Enter a Input value")
    }

    else{
        const newData= document.createElement('div');
        newData.innerText = inputValue.value
        newData.classList.add("m")
        mainparent.appendChild(newData)
       
        
    }
  
   
})


















































































































































































