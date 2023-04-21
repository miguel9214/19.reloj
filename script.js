const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"];


toggle.addEventListener('click',(e) =>{
    const html = document.querySelector('html')

    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML='Modo noche'
    }else{
        html.classList.add('dark')
        e.target.innerHTML='Modo dia'
    }
});

function setTime(){
    const time = new Date();
    const month= time.getMonth();
    const day= time.getDay();
    const date=time.getDate();
    const hours=time.getHours();
    const hoursForClock=hours>=13?hours % 12:hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >=12?'PM':'AM';


    hourEl.style.transform=`translate(-50%, -100%) rotate(${scale(hoursForClock,0,12,0,360)}deg)`
    
    minuteEl.style.transform=`translate(-50%, -100%) rotate(${scale(minutes,0,60,0,360)}deg)`

    
    secondEl.style.transform=`translate(-50%, -100%) rotate(${scale(seconds,0,60,0,360)}deg)`

    timeEl.innerHTML=`${hoursForClock}:${minutes<10?`0 ${minutes}`:minutes}${ampm}`
    dateEl.innerHTML=`${days[day]},${months[month]} <span class="circle">${
    date}</span>`
}

const scale=(num,in_nim,in_max,out_min,out_max)=>{
    return(num-in_nim)*(out_max-out_min)/(in_max-in_nim)+out_min
}

setTime();

setInterval(setTime,1000)