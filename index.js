const input1 = document.querySelectorAll(".row1>input");
const card = document.getElementById("card");
const cvv2 = document.getElementById('cvv2')
input1.forEach((val, i) => {
    val.addEventListener('keyup',()=>{
        if (val.value.length >3) {
            val.value= val.value.slice(0,4)
            if(i<3){
                val.nextElementSibling.focus()
             }else{
                cvv2.focus()

             }
        }else if(val.value.length==0 && i!=0){
            val.previousElementSibling.focus()
        }

        ////writtte to card//////
      let temp= '';
        input1.forEach((item) => {
            // temp += item.value;
            if(item.value.length>3){
            temp+= item.value + ' - '
            }else{
                temp += item.value
            }
        })
        card.innerHTML =temp.length<25 ? temp: temp.slice(0,25) 
    })
    
});



