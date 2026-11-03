const stars1 = document.querySelectorAll("#star1");
const stars2 = document.querySelectorAll("#star2");
const stars3 = document.querySelectorAll("#star3");
const stars4 = document.querySelectorAll("#star4");

let result1 = 0;
let result2 = 0;
let result3 = 0;
let result4 = 0;

stars1.forEach((item, index) => {
    item.addEventListener("click",() => {
        console.log("you have clicked on star: ", index+1);
        result1 = index + 1;
        UpdateDiv();
    });
});
stars2.forEach((item, index) => {
    item.addEventListener("click",() => {
        console.log("you have clicked on star: ", index+1);
        result2 = index + 1;
        UpdateDiv();
    });
});
stars3.forEach((item, index) => {
    item.addEventListener("click",() => {
        console.log("you have clicked on star: ", index+1);
        result3 = index + 1;
        UpdateDiv();
    });
});
stars4.forEach((item, index) => {
    item.addEventListener("click",() => {
        console.log("you have clicked on star: ", index+1);
        result4 = index + 1;
        UpdateDiv();
    });
});



const UpdateDiv = ()=>{
    stars1.forEach((item, index) => {
        if (index < result1) item.classList.add('active');
        else item.classList.remove('active');
    });
    document.querySelector("#result1").textContent = `${result1}/5`;
    stars2.forEach((item, index) => {
        if (index < result2) item.classList.add('active');
        else item.classList.remove('active');
    });
    document.querySelector("#result2").textContent = `${result2}/5`;
    stars3.forEach((item, index) => {
        if (index < result3) item.classList.add('active');
        else item.classList.remove('active');
    });
    document.querySelector("#result3").textContent = `${result3}/5`;
    stars.forEach((item, index) => {
        if (index < result) item.classList.add('active');
        else item.classList.remove('active');
    });
    document.querySelector("#result4").textContent = `${result4}/5`;
}
