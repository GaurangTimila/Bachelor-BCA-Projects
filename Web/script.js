Array.from(document.gotElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup',(el)=>{
        if(e.value.length > 0){
            document.getElementsByClassName('bi-caret-down-square-fill')[i].style.transform="yellow";
        }
        else{
            document.getElementsByClassName('bi-caret-down-square-fill')[i].style.transform="rotate(0deg)";
        }
    })
})