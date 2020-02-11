const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const anchor = document.querySelectorAll('a');
console.log(anchor);

const anchors = Object.values(siteContent['nav']);
console.log(anchors);

for (let i = 0; i < anchors.length - 1; i++){
  anchor[i].textContent = anchors[i];
}

anchor.forEach(elem => elem.style.color = 'green');

const nav = document.querySelector('nav');
const newA = document.createElement('a');
const newAA = document.createElement('a');
newA.textContent = 'Appended Child';
newAA.textContent = "Prepended Child";
nav.append(newA);
nav.prepend(newAA);
newA.style.color = 'green';
newAA.style.color = 'green';


const header = document.querySelector('.cta-text h1')
header.textContent = siteContent['cta']['h1'];
header.style.color = 'limeGreen';

const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];
button.style.color = 'limegreen';
button.style.backgroundColor = 'yellow';
button.setAttribute.href = 'https://learn.lambdaschool.com/web2/module/recJWv3RIfa4NFXbn/';
button.addEventListener('click', function(){
  location = "https://learn.lambdaschool.com/web2/module/recJWv3RIfa4NFXbn/";
});

const img1 = document.querySelector('#cta-img');
img1.src = siteContent['cta']['img-src'];

const h4 = document.querySelectorAll('.text-content h4');
console.log(h4);

h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

const p = document.querySelectorAll('.text-content p');

p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];
p[2].textContent = siteContent['main-content']['services-content'];
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];

const img2 = document.querySelector('.middle-img');
img2.src = siteContent['main-content']['middle-img-src'];

const contact = Array.from(document.querySelector('.contact').children)
console.log(contact);

const contactValues = Object.values(siteContent['contact']);
console.log(contactValues); 

for (let i=0; i < contact.length; i++){
  contact[i].textContent = contactValues[i];
}

const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];








