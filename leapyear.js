// const year = 2028;
// const result = year/4; //leapyera ber korar niyom
// console.log(result);

// var year1 = 2028;
// var result1 = year1 % 4;
// console.log(result1);
function getleapyear (year){
if(year % 4==0){
    console.log("is leapyear");
}
else{
    console.log("is not leapyear")
}

}


getleapyear(2024)




////
function getleapyear (year){
    if(year % 4==0){
     return "is leapyear"
    }
    else{
   return "is not leapyear"
    }
    
    }
    console.log(getleapyear(5000))
    //
    function getleapyear (year){
        if(year % 4==0){
         return "is leapyear"
        }
        else{
       return "is not leapyear"
        }
        
        }
        console.log(getleapyear(5019))
    