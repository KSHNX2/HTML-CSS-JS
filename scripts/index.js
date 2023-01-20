//전역변수
let n;

const domAdd = () => {
    
    //함수를 호출하는것과 동일한효과
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML="주사위를 굴러주세요";
    btn1.id="bt1";
    btn1.className="btc";
    document.getElementById("s4").append(btn1);

    const btn2 = document.createElement("button");
    btn2.innerHTML="확인";
    btn2.id="bt2";
    btn2.className="btc";
    document.getElementById("s4").append(btn2);
    
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
    //요소 보이기 함수
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");

    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = dpsS1;
    s2.style.display = dspS2;
    s3.style.display = dspS3;
    bt1.style.display = dspBt1;
    bt2.style.display = dspBt2;
 
 };

//주사위 번호 선택
const domRandom = () =>{
     n = Math.floor(Math.random() * 6 )+1;
    console.log(n)
    show("none", "block", "none", "none","block");
}

//주사위 번호 결과 확인
const showOK=()=>{
    const radios = document.querySelectorAll("input[type=radio]")
    
    let usern;
    for(let r of radios){
        if (r.checked){
            //정수형 변환 parseint
            usern = parseInt(r.value);
            break;
        }
    }    
    console.log(n, usern)
    let tag;
    if(n === usern)tag = "o";
    //비교연산자'==='은 데이터 타입까지 검사한다(js전용) 
    else tag = "x"

    document.querySelector("form").reset();

    document.querySelector("#s1").innerHTML=`<img src="./img/${n}.png">`
    document.querySelector("#s3").innerHTML=`<img src="./img/${tag}.png">`
    show("block","none","block","block","none")
}

 const domupdate = () => {
    /*
    const section1 = document.querySelector("#s1");
    
    bt1.addEventListener("click", ()=>{        
        s1.innerHTML=`<img src='./img/${domRandom()}.png'>`
    });    
    */
    bt1.addEventListener("click", domRandom) ;
    bt2.addEventListener("click", showOK) ;

}


//자바스크립트 렌더링 제어
//dom 로드 이후

document.addEventListener("DOMContentLoaded", () =>{
    //DOM 요소 생성

    domAdd();

    domupdate();

    show("none", "none", "none", "block","none")
    //dom 요소 접근
    
});

    




