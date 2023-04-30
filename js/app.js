var form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    checkDay();
    checkMonth();
    checkYear();
    bDay();
})


function getCurDay(){
    const date = new Date(); 
        return date.getDate();
}
function getCurMnth(){
    const date = new Date(); 
        return date.getMonth()+1; //Adding 1 because the month index starts from 0
}
function getCurYr(){
    const date = new Date(); 
        return date.getFullYear();
}
function urDay(){
    return document.querySelector("#days").value;
}
function urMnth(){
    return document.querySelector("#months").value;
}
function urYr(){
    return document.querySelector("#years").value;
}

function checkDate()
{
    var y = document.querySelector(".ydigit");
    var m = document.querySelector(".mdigit");
    var d = document.querySelector(".ddigit");

    y.textContent=getCurYr()-urYr();
    m.textContent=getCurMnth()-urMnth();
    d.textContent=getCurDay()-urDay(); 
    if(m.textContent<0){
        m.textContent = 12-Math.abs(m.textContent);
        y.textContent-=1;
    }
}       

function checkDay(){
    var leapYear = (getCurYr() % 4 == 0 && getCurYr() % 100 != 0) || getCurYr() % 400 == 0;
    var a = [31, leapYear?29:28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(a[urMnth()-1] < urDay() || urDay() < 1) {
        document.querySelector('.checkDay').textContent="Must be a valid date";
        document.querySelector("#days").setAttribute("style","border-color:var(--lr)");
        document.querySelector(".d p").setAttribute("style","color:var(--lr)");
    }
  
    if(urDay()=="") {
    document.querySelector('.checkDay').textContent="This field is required";
    document.querySelector("#days").setAttribute("style","border-color:var(--lr)");
    document.querySelector(".d p").setAttribute("style","color:var(--lr)");
    }
    else if(urDay()<1 || urDay()>31){
    document.querySelector('.checkDay').textContent="Must be a valid day";
    document.querySelector("#days").setAttribute("style","border-color:var(--lr)");
    document.querySelector(".d p").setAttribute("style","color:var(--lr)");
    }
    else{
        checkDate();
    }
}
function checkMonth(){
    var leapYear = (getCurYr() % 4 == 0 && getCurYr() % 100 != 0) || getCurYr() % 400 == 0;
    var a=[31, leapYear?29:28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(a[urMnth()-1] < urDay() || urDay() < 1) {
        document.querySelector("#months").setAttribute("style","border-color:var(--lr)");
        document.querySelector(".m p").setAttribute("style","color:var(--lr)");
    }
    
    if(urMnth()=="") {
    document.querySelector('.checkMonth').textContent="This field is required";
    document.querySelector("#months").setAttribute("style","border-color:var(--lr)");
    document.querySelector(".m p").setAttribute("style","color:var(--lr)");
}
    
    else if(urMnth()<1 || urMnth()>12){
    document.querySelector('.checkMonth').textContent="Must be a valid month";
    document.querySelector("#months").setAttribute("style","border-color:var(--lr)");
    document.querySelector(".m p").setAttribute("style","color:var(--lr)");
    }
    else{
        checkDate();
    }
}
function checkYear(){
    var leapYear = (getCurYr() % 4 == 0 && getCurYr() % 100 != 0) || getCurYr() % 400 == 0;
    var a=[31, leapYear?29:28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(a[urMnth()-1] < urDay() || urDay() < 1) {
        document.querySelector("#years").setAttribute("style","border-color:var(--lr)");
        document.querySelector(".y p").setAttribute("style","color:var(--lr)");
    }
    if(urYr()==""){
    document.querySelector('.checkYear').textContent="This field is required";
    document.querySelector("#years").setAttribute("style","border-color:var(--lr)");
    document.querySelector(".y p").setAttribute("style","color:var(--lr)");
    }
    else if(urYr()<1970){
    document.querySelector('.checkYear').textContent="Must be a valid year";
    document.querySelector("#years").setAttribute("style","border-color:var(--lr)");
    document.querySelector(".y p").setAttribute("style","color:var(--lr)");
    }
    else if(urYr()>getCurYr()){
        document.querySelector('.checkYear').textContent="Must be in the past";
        document.querySelector("#years").setAttribute("style","border-color:var(--lr)");
        document.querySelector(".y p").setAttribute("style","color:var(--lr)");   
    }
    else{
        checkDate();
    }
}
function bDay(){
    if(urMnth()==getCurMnth() && urDay()==getCurDay())
        {
            document.querySelector(".container").setAttribute("style","display:none");
            document.querySelector(".bday-container").setAttribute("style","display:flex");
            
        }
}
