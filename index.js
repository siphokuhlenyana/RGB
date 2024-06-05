let inputR=document.querySelector('input')
let inputG=document.querySelectorAll('input')[1]
let inputB=document.querySelectorAll('input')[2]
let btn=document.querySelector('button')
var answer=document.querySelector('p')

function convertAll(){
    
 answer.textContent=eval(`${convertR()} +${convertG()} +${convertB()}`)
}


function  convertR(){
    let  answer1=JSON.parse(inputR.value /16)
    // return answer1
    if(answer1 <10 && answer>15){
        return answer1
    }else if (answer1 ==10){
    return ('A');
    }else if(answer1==11){
        return('B');
    }else if(answer1 ==12){
        return('C');
    }else if(answer1 ==13){
        return('D');
    }else if(answer1 ==14){
        return('E');
    }else if (answer1==15){
        return('F');
    }
}

function convertG(){
    
   let answer2 =JSON.parse(inputG.value /16)
   if(answer2 <10 && answer2>15){
    console.log(answer2);
}else if (answer2 ==10){
    console.log('A');
}else if(answer2 ==11){
    console.log('B');
}else if(answer2 ==12){
    console.log('C');
}else if(answer2 ==13){
    console.log('D');
}else if(answer2 ==14){
    console.log('E');
}else if (answer2==15){
    console.log('F');
}
}

function convertB(){
   let answer3=JSON.parse(inputB.value /16)
   if(answer3 <10 && answer3>15){
    console.log(answer3);
}else if (answer3==10){
    console.log('A');
}else if(answer3==11){
    console.log('B');
}else if(answer3 ==12){
    console.log('C');
}else if(answer3 ==13){
    console.log('D');
}else if(answer3 ==14){
    console.log('E');
}else if (answer3==15){
    console.log('F');
}
}





btn.addEventListener('click',()=>convertAll())

