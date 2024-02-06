
const about=document.querySelector(".about");
const articles=document.querySelector(".articles");
const image_sec=document.querySelector(".cards");
const quiz=document.querySelector(".quiz_here");
const contact=document.querySelector(".footer");


const questions= [{
  'que':' What is the launch date for Chandrayaan 3 mission?',
  'a':'24 July 2023',
  'b': '14 July 2023',
   'c':'13 July 2023',
  'd':' 04 July 2023',
  'correct' :'b'
},
{
  'que':' The Chandrayaan 3 mission’s rover is known as?',
  'a':'Vikram',
  'b': 'Bheem',
   'c':'Pragyaan',
  'd':' Dhruv',
  'correct' :'c'
},
{
  'que':' The mission life of Lander and Rover are equal to?',
  'a':'14 Earth Days',
  'b': '24 Earth Days',
   'c':'16 Earth Days',
  'd':'12 Earth Days',
  'correct' :'a'
},
{
  'que':' Which launcher is used for Chandrayaan-3??',
  'a':'GSLV',
  'b': 'LVSM',
   'c':' GSLV-Mk3',
  'd':'PSLV',
  'correct' :'c'
},
{
  'que':' What is the mission objectives of Chandrayaan-3?',
  'a':'To demonstrate Rover roving on the moon and',
  'b': 'To demonstrate a Safe and Soft Landing on Lunar Surface',
   'c':' To conduct in-situ scientific experiments.',
  'd':' All of the above',
  'correct' :'d'
}
]
let index=0;
const total=questions.length;
let right=0,
wrong=0;
const quesBox=document.getElementById("quesBox")
const options=document.querySelectorAll('.option')
let loadQuestions = ()=>{
  if(index===total){
    return endQuiz();
  }
  else{reset();
  const data= questions[index]
  quesBox.innerText=`${index+1})${data.que}`;
  options[0].nextElementSibling.innerText=data.a;
  options[1].nextElementSibling.innerText=data.b;
  options[2].nextElementSibling.innerText=data.c;
  options[3].nextElementSibling.innerText=data.d;
  }
}

const submitQuiz=()=>{
  const data= questions[index]
  const ans=getAns()
  if(ans===data.correct){
 right++;
  }else{
    wrong++;
  }
  index++;
  loadQuestions();
  return;
}
const getAns=()=>{
  let answer;
  options.forEach(
    (input)=>{
      if(input.checked){
answer=input.value
      }
  
    }
  )
  return answer;
}

const reset = ()=>{
  options.forEach(
    (input)=>{
  input.checked= false;
    }
)}
const endQuiz =()=>{
document.getElementById("quiz").innerHTML=`
<div style="text-align:center">
<div style="justify-content:center">
<div style="align-item:center">
<div style="margin-top:-35px">
<div style="margin-right:25%">
<h1>Thanks for taking the Quiz!Hope you learned something</h1>
<h1>So your score is ${right} out ${total}</h1>
`
}
loadQuestions();
