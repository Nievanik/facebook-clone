let storyContainer = document.querySelector('.connections');
let backBtn = document.querySelector('.backward')
let nextBtn = document.querySelector('.forward')

storyContainer.addEventListener('wheel',(e)=>{
    e.preventDefault();
    storyContainer.scrollLeft += e.deltaY;
})


nextBtn.addEventListener('click',()=>{
    console.log("a");
    storyContainer.scrollLeft += 500;
})
backBtn.addEventListener('click',()=>{
    console.log("a");
    storyContainer.scrollLeft -= 500;
})