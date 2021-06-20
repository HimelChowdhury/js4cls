var inch = 80;
var feet = inch/12; // 12 inch = 1 feet
console.log(feet);

function GetFeet(inch){
    var feet = inch/12;
    console.log(feet);
}
GetFeet(15);
GetFeet (18);
function GetFeet(inch){
    feet = inch/12;
    return  feet; // feet return korele next sob funtion a feet output dibe
}
var result = GetFeet(85);
console.log(result);

var TamimHight = GetFeet(50);
console.log(TamimHight, "is tamim hight");
