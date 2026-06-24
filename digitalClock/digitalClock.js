// Digital Clock Program

function updateClock() {

    const now = new Date();

    // hours to not be in military time
    let hours = now.getHours();
    
    // for AM or PM
    const meridiem = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)

    // get minutes and seconds
    const min = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${min}:${sec} ${meridiem}`;
    

    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);