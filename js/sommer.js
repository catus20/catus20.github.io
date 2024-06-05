function updateCountdown() {

    const currentDate = new Date();

    const targetDate = new Date('June 21, 2024');

    const timeDifference = targetDate.getTime() - currentDate.getTime();

    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = `Det vart ${daysRemaining} dagar, ${hoursRemaining} timar, ${minutesRemaining} minuttar, og ${secondsRemaining} sekunder igjen til sommerferien.`;
}

updateCountdown();

setInterval(updateCountdown, 1);