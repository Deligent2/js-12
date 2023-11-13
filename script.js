const balloons = document.querySelectorAll('.box');
const checkbox = document.querySelectorAll('.checkbox');
const selectAll = document.querySelector('#select');
console.log(balloons);

balloons.forEach((balloon, idx) => {
    balloon.addEventListener('click', () => {
        balloon.classList.toggle('bgRed');
        console.log(balloon.classList)
        checkbox[idx].checked = !checkbox[idx].checked
        const arrBalloons = Array.from(balloons);
        selectAll.checked = !!arrBalloons.every(el => el.classList.contains('bgRed'));
    });
});

checkbox.forEach(el => {
    el.addEventListener('click', () => {
        el.checked = !el.checked;
    })
})

balloons.forEach((balloon, idx) => {
    balloon.addEventListener('click', () => handleClick(balloon, idx))
})



selectAll.addEventListener('click', () => {
    if (selectAll.checked) {
        balloons.forEach(el => {
            el.classList.add('bgRed');
        });
        checkbox.forEach(el => (el.checked = true));
    } else {
        balloons.forEach(el => {
            el.classList.remove('bgRed');
        });
        checkbox.forEach(el => (el.checked = false));
    }
});