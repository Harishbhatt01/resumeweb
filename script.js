// nav bar 
const barBtn = document.getElementById('bar-btn');
const navBar = document.querySelector('ul');
const xBar = document.querySelector('#xbar');

barBtn.addEventListener('click', () => {
    barBtn.style.display = 'none';
    xBar.style.display = 'block'
    navBar.style.display = 'block';
})

xBar.addEventListener('click', () => {
    barBtn.style.display = 'block';
    xBar.style.display = 'none'
    navBar.style.display = 'none';
})

// fixed icon 
const fixed = document.querySelector('.fixed-icon');
const fixedItems = document.querySelector('.fixed-items');


fixed.addEventListener('click',()=>{
    if(fixedItems.classList.contains('visible')){
        fixedItems.classList.remove('visible')
    }else{
        fixedItems.classList.add('visible')
    }
})


// compnayes logo section 
const Logos = document.querySelector('.compnays-logos');
const companyLogo = [
    {
        image: 'assests/images/brand1.webp',
        hight: '30px',
        width: '150',
    },
    {
        image: 'assests/images/brand2.webp',
        hight: '30px',
        width: '150',
    },
    {
        image: 'assests/images/brand3.webp',
        hight: '30px',
        width: '150',
    },
    {
        image: 'assests/images/brand4.webp',
        hight: '30px',
        width: '150',
    },
    {
        image: 'assests/images/brand5.webp',
        hight: '30px',
        width: '150',
    },
    {
        image: 'assests/images/brand6.webp',
        hight: '30px',
        width: '70',
    },
    {
        image: 'assests/images/brand7.webp',
        hight: '30px',
        width: '100',
    },
    {
        image: 'assests/images/brand8.webp',
        hight: '30px',
        width: '90',
    },
    {
        image: 'assests/images/brand9.webp',
        hight: '20px',
        width: '130',
    },
    {
        image: 'assests/images/brand10.webp',
        hight: '20px',
        width: '130',
    },
    {
        image: 'assests/images/brand11.webp',
        hight: '20px',
        width: '130',
    },
    {
        image: 'assests/images/brand12.webp',
        hight: '30px',
        width: '120',
    },
    {
        image: 'assests/images/brand13.webp',
        hight: '50px',
        width: '80',
    },
    {
        image: 'assests/images/brand14.webp',
        hight: '30px',
        width: '120',
    },
    {
        image: 'assests/images/brand15.webp',
        hight: '50px',
        width: '80',
    },
    {
        image: 'assests/images/brand16.webp',
        hight: '50px',
        width: '100',
    },
    {
        image: 'assests/images/brand17.webp',
        hight: '50px',
        width: '100',
    },
    {
        image: 'assests/images/brand18.webp',
        hight: '40px',
        width: '90',
    },
    {
        image: 'assests/images/brand19.webp',
        hight: '50px',
        width: '120',
    },
    {
        image: 'assests/images/brand20.webp',
        hight: '40px',
        width: '90',
    },
    // {
    //     image: 'assests/images/brand21.webp',
    //     hight: '50px',
    //     width: '100',
    // },
    {
        image: 'assests/images/brand22.webp',
        hight: '30px',
        width: '140',
    },
    {
        image: 'assests/images/brand23.webp',
        hight: '20px',
        width: '100',
    },
    {
        image: 'assests/images/brand24.webp',
        hight: '30px',
        width: '100',
    },
    {
        image: 'assests/images/brand25.webp',
        hight: '20px',
        width: '100',
    },
    {
        image: 'assests/images/brand26.webp',
        hight: '20px',
        width: '100',
    },
    {
        image: 'assests/images/brand27.webp',
        hight: '20px',
        width: '100',
    },
]

let images = companyLogo.map(function (e) {
    return `<img src=${e.image} height=${e.hight} width=${e.width}px>`
})
images = images.join("");
Logos.innerHTML = images;

// Testiomonials
const contentimg = document.querySelector('.img');
const content = document.querySelector('.content');
const contentname = document.querySelector('.name');
const contentnjob = document.querySelector('.job');


const testimonials = [
    {
        content: 'luch bhi man le bhai tu mera bhai hua tujhe mai pehlunga dab ke',
        name: 'kevin Booth',
        job: 'hero',
    },
    {
        content: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum corporis error ipsa magni vero enim accusantium est fuga tenetur id.',
        name: 'harish bhatt',
        job: 'Web Developer',
    },
    {
        content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id explicabo consequatur reiciendis eius commodi soluta. Ex autem est doloremque accusamus.',
        name: 'mohit pawar',
        job: 'bca student',
    },
    {
        content: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati laboriosam magni assumenda iusto sequi ullam amet, incidunt quasi!',
        name: 'kamal rana',
        job: 'pta kya',
    },
    {
        content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione laudantium aperiam cupiditate libero eveniet in natus, dicta dolores culpa a. Quae, ut.',
        name: 'komal bisht',
        job: 'press',
    },
];

let count = 1;

function leftArrow(){
    console.log(count)
    function call(){
        count--;
        console.log(count)
        content.innerHTML = testimonials[count].content;
        contentname.innerHTML = testimonials[count].name;
        contentnjob.innerHTML = testimonials[count].job;
    }
    if(count<=0){
        count=testimonials.length;
    }
    call();
}

function rightArrow(){
    content.innerHTML = testimonials[count].content;
    contentname.innerHTML = testimonials[count].name;
    contentnjob.innerHTML = testimonials[count].job;
    count++;
    if(count>=testimonials.length){
        count=0;
    }
}

setInterval(()=>{
    rightArrow()
},7000)

// some addition fitures 
const body = document.querySelector('body');
const fontsize = 16;
function scalpage(){
    body.style.fontSize = '1.5rem';
}

function notscalpage(){
    body.style.fontSize = '16px';
}