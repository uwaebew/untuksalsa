let message = "hari ini spesial banget… semoga kamu selalu bahagia 💖";
let i = 0;

// teks cinematic
function typeText(){
  if(i < message.length){
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeText,40);
  }
}

// buka gerbang
function openGate(){
  typeText();

  setTimeout(()=>document.getElementById("bouquet").classList.add("show"),2000);
  setTimeout(()=>document.getElementById("cake").classList.add("show"),4000);
  setTimeout(()=>document.getElementById("balloon").classList.add("show"),6000);
}

// tiup lilin
function blowCandle(){
  document.getElementById("candle").style.opacity="0";
  alert("semoga semua keinginan kamu tercapai ✨");
}

// balon naik
function releaseBalloons(){
  document.querySelector(".balloons").style.transform="translateY(-300px)";
}

// bunga + sparkle
setInterval(()=>{
  let e=document.createElement("div");
  e.className="effect";
  e.innerHTML=Math.random()>0.5?"🌸":"✨";
  e.style.left=Math.random()*100+"vw";
  e.style.top="-20px";
  document.body.appendChild(e);

  let fall=setInterval(()=>{
    e.style.top=(parseInt(e.style.top)+2)+"px";
    if(parseInt(e.style.top)>window.innerHeight){
      e.remove();
      clearInterval(fall);
    }
  },30);
},300);

// kupu-kupu
setInterval(()=>{
  let b=document.createElement("div");
  b.className="butterfly";
  b.innerHTML="🦋";
  b.style.top=Math.random()*80+"vh";
  document.body.appendChild(b);
  setTimeout(()=>b.remove(),10000);
},3000);
