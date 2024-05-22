// Function to update the countdown
function updateCountdown() {
    // Get the current date
    const currentDate = new Date();

    // Set the target date to June 21, 2024
    const targetDate = new Date('June 21, 2024');

    // Calculate the difference in milliseconds between the current date and the target date
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    // Convert the time difference to days, hours, minutes, and seconds
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the remaining time
    document.getElementById('countdown').textContent = `Det vart ${daysRemaining} dagar, ${hoursRemaining} timar, ${minutesRemaining} minuttar, og ${secondsRemaining} sekunder igjen til sommerferien.`;
}

// Update the countdown immediately
updateCountdown();

// Refresh the countdown every second
setInterval(updateCountdown, 1);