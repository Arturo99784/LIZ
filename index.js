const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function(){
    alert('sabias que dirias que si uwwu')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomx = parrseInt(Math.random()+100);
    const randomy = parrseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomy+'%');
    noBtn.style.setProperty('left',randomy+'%');
    noBtn.style.setProperty('transform',`translate(-${randomx}%,-${randomy}%)`);
})