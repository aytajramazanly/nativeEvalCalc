let calc=document.getElementById("display");

let btns=document.querySelectorAll(".button");

btns.forEach((btn)=>{
    btn.addEventListener("click",function(){
        switch (btn.innerText) {
            case "C":
                calc.innerText="";
                break;
            case "=":
                try {
                    let symbols=Symbols(calc.innerText);
                    let numbers=Nums(calc.innerText);
                    console.log(symbols);
                    console.log(numbers);
                    let result = numbers[0];
                    for (let i = 0; i < numbers.length; i++) {
                        
                        for (let j = 0; j < symbols.length; j++) 
                        {
                            switch (symbols[j])
                            {
                                case '-':
                                    result = Difference(result, numbers[i+1]);
                                    i++;
                                    break;
                                case '+':
                                    result = sum(result, numbers[i + 1]);
                                    i++;
                                    break;
                                case '*':
                                    result = Multiply(result, numbers[i + 1]);
                                    i++;
                                    break;
                                case '/':
                                    result = Divide(result, numbers[i + 1]);
                                    i++;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                calc.innerText=result;
                   } catch  {
                    calc.innerText=0;
                   }
                break;
            case "←":
               if (calc.innerText) {
                calc.innerText=calc.innerText.slice(0,-1);
               }
                break;
            default:
                calc.innerText+=this.innerText;
        }
    })
})

    // Functions

function Nums(text) {
    let nums=[];
    let j=0;
    for (let i = 0; i < text.length; i=j+1) {
        if (Number.isInteger(+text[i])) {
            let num=text[i];
            
            j=i+1;
            while (Number.isInteger(+text[j])) {
                num+=text[j];
                j++;
            }
            nums.push(Number(num));
        }
    }
    return nums;
}

    function Symbols(text) {
        let symbols=[];
        for (let i = 0; i < text.length; i++) {
            if (text[i] == '-' || text[i] == '+' || text[i] == '*' || text[i] == '/') {
                symbols.push(text[i]);
            }
        }
        return symbols;
    }
    function sum(takenNum,num) {
        takenNum+=+num;
         return takenNum;
    }
    function Difference(takenNum,num) {
        takenNum-=+num;
         return takenNum;
    }
     function Divide(takenNum,num) {
        takenNum/=+num;
        return takenNum;
    }
    function Multiply(takenNum,num) {
        takenNum*=+num;
        return takenNum;
    }


// function Sum(nums) {
//     let result=+nums[0];
//     for(let i=1; i<nums.length; i++){
//         result=result+(+nums[i]);
//     }
//     return result;
// }
// function Difference(nums) {
//     let result=+nums[0];
//     for(let i=1; i<nums.length; i++){
//         result=result-(+nums[i]);
//     }
//     return result;
// }
// function Divide(nums) {
//     let result=+nums[0];
//     for(let i=1; i<nums.length; i++){
//         result=result/(+nums[i]);
//     }
//     return result;
// }
// function Multiply(nums) {
//     let result=+nums[0];
//     for(let i=1; i<nums.length; i++){
//         result=result*(+nums[i]);
//     }
//     return result;
// }


// let nums=[];
// let sprt;
//     for (let index = 0; index < text.length; index++) {
        
//        switch (text[index]) {
//            case '+':
//                nums=text.split(text[index]);
//                sprt=text[index];
//                break;
//             case '-':
//                 nums=text.split(text[index]);
//                 sprt=text[index];
//                 break;
//             case '*':
//                nums=text.split(text[index]);
//                sprt=text[index];
//                break;
//             case '/':
//                nums=text.split(text[index]);
//                sprt=text[index];
//                break;
//            default:
//                break;
//        }
//     }

//     switch (sprt) {
//         case '+':
//             console.log(Sum(nums));
//             break;
//         case '-':
//             console.log(Difference(nums));
//             break;        
//          case '*':
//             console.log(Multiply(nums));
//             break;
//         case '/':
//             console.log(Divide(nums));
//             break;
                                
//         default:
//             break;
//     }
