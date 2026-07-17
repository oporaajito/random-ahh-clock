// ===== REAL TIME CLOCK =====
function updateClock() {
    const now = new Date();
    
   
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    
    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = ((minutes * 60 + seconds) / 3600) * 360;
    const hourDeg = ((hours % 12) * 30 + (minutes / 60) * 30);
    
    
    const secHand = document.getElementById('secHand');
    const minHand = document.getElementById('minHand');
    const hourHand = document.getElementById('hourHand');
    
    if (secHand) secHand.style.transform = `rotate(${secondDeg}deg)`;
    if (minHand) minHand.style.transform = `rotate(${minuteDeg}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    
    const digitalTime = document.getElementById('digitalTime');
    if (digitalTime) {
        const timeStr = now.toLocaleTimeString('en-US', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        digitalTime.textContent = timeStr;
    }
}


const trigger = document.getElementById('trigger');
const body = document.body;
const toggleIcon = document.querySelector('.toggle-icon');

function toggleTheme() {
    const nowOn = body.classList.toggle('alt');
    trigger.setAttribute('aria-pressed', nowOn ? 'true' : 'false');
    
    if (toggleIcon) {
        toggleIcon.textContent = nowOn ? '☀️' : '🌙';
    }
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
}

trigger.addEventListener('click', toggleTheme);
trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
    }
});


function updateTimezone() {
    const tzDisplay = document.getElementById('timezoneDisplay');
    if (tzDisplay) {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const city = timezone.split('/').pop().replace('_', ' ');
        tzDisplay.textContent = `🌍 ${city}`;
    }
}



function initDoodles() {
    const doodles = document.querySelectorAll('.doodle');
    doodles.forEach((doodle, index) => {
        const delay = index * 0.5;
        const duration = 15 + Math.random() * 10;
        const xOffset = (Math.random() - 0.5) * 200;
        const yOffset = (Math.random() - 0.5) * 200;
        
        doodle.style.setProperty('--delay', `${delay}s`);
        doodle.style.setProperty('--duration', `${duration}s`);
        doodle.style.setProperty('--x-offset', `${xOffset}px`);
        doodle.style.setProperty('--y-offset', `${yOffset}px`);
    });
}


updateClock();
updateTimezone();
initDoodles();

setInterval(updateClock, 1000);

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        updateTimezone();
    }
});

console.log('🌸 Hello Kitty Dream Clock · Time is now:', new Date().toLocaleTimeString());
