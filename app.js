const trigger = document.getElementById('trigger');
const body = document.body;

function toggleAll() {
    const nowOn = body.classList.toggle('alt');
}

trigger.addEventListener('click', toggleAll);