const domAdd = () => {
    //함수를 호출하는것과 동일한효과
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML="버튼을 눌러주세요";
    btn1.id="bt1";
    btn1.className="btc";
    document.getElementById("s1").append(btn1);

    const btn2 = document.createElement("button");
    btn2.innerHTML="버튼을 눌러주세요";
    btn2.id="bt2";
    btn2.className="btc";
    document.getElementById("s3").append(btn2);
}




//dom 요소 접근
const domRead = () =>{
    const btc = document.querySelectorAll(".btc");
    console.log(btc);
    //for 순회
    console.log("** for **");
    for(let i=0; i<btc.length; i++){
        console.log(btc[i]);
    }
    //for...in 순회
    console.log("**for in**")
    for(let k in btc){
        console.log(btc[k]);
    }
    //foreach
    console.log("**foreach**");
    btc.forEach((item,k) => console.log(item, k))
    //for ...of
    console.log("**for of"**"");
    for(let[k,item] of btc.entries()){
        //item은 변수명으로 다른 변수명으로 사용해도된다.
        console.log(k, item.innerHTML );
        if(k == 1 ) break;
        //키값을 찾을때 많이 사용한다.(in 보다 of를 권장)        
    }
}

//DOM 요소 수정
 //click 함수

 const show=(dpsS1, dspS2, dspS3, dspBt1, dspBt2) =>{
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");

    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = "dpsS1";
    s2.style.display = "dspS2";
    s3.style.display = "dspS3";

    bt1.style.display = "dspBt1";
    bt2.style.display = "dspBt2";
 
 };

document.addEventListener("DOMContentLoaded", () => {
    show("none", "none", "block", "none")
    
})


 const domupdate = () => {
    const div1 = document.querySelector("#div1");
    const btc=document.querySelectorAll(".btc");   
    bt1.addEventListener("click", ()=>{        
        div1.innerHTML=`<img src='./img/${domRandom()}.png'>`
    });    
}


    
const domRandom=()=>{
    const random = Math.floor(Math.random ()*6)+1;
    console.log(random);
    
    if(random == 1){}
    return random;
}







//자바스크립트 렌더링 제어
document.addEventListener("DOMContentLoaded", () =>{
    //DOM 요소 생성
    domAdd();

    //dom 요소 접근
    domRead();

    domupdate();
});

    




