function updateClock(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // console.log(hours, minutes, seconds);
   

   


 const hourDeg = (hours %12) * 30 + minutes*0.5;
 const minutesDeg = minutes * 6 + seconds *0.1;
 const SecondsDeg = seconds * 6;

 document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
 document.getElementById('minute').style.transform = `rotate(${minutesDeg}deg)`;
 document.getElementById('second').style.transform = `rotate(${SecondsDeg}deg)`;

 const digitalTime = hours.toString().padStart('2',0)+':'+minutes.toString().padStart('2',0) +':'+ seconds.toString()
.padStart('2',0);

//  document.getElementById('digital').textContent = digitalTime;
    }
setInterval(updateClock, 1000);