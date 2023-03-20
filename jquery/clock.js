$(function()  {
    const clock1 = document.querySelectorAll(".clock")[0];
    const clock2 = document.querySelectorAll(".clock")[1];
    const clock3 = document.querySelectorAll(".clock")[2];
    
    
    function getClock () {
        const date = new Date ();
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
        clock1.innerText =`${hours}:${minutes}`;
        clock2.innerText =`${hours}:${minutes}`;
        clock3.innerText =`${hours}:${minutes}`;
    }

    getClock();
    setInterval(getClock, 1000)
})