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

//Adds Services To NavBar.
let servicesNav = document.getElementsByTagName("a").item(0);
servicesNav.textContent = (siteContent["nav"]["nav-item-1"])

//Adds Product To NavBar.
let productNav = document.getElementsByTagName("a").item(1);
productNav.textContent = (siteContent["nav"]["nav-item-2"])

//Adds Vision To NavBar.
let visionNav = document.getElementsByTagName("a").item(2);
visionNav.textContent = (siteContent["nav"]["nav-item-3"])

//Adds Features To NavBar.
let featuresNav = document.getElementsByTagName("a").item(3);
featuresNav.textContent = (siteContent["nav"]["nav-item-4"])

//Adds About To NavBar.
let aboutNav = document.getElementsByTagName("a").item(4);
aboutNav.textContent = (siteContent["nav"]["nav-item-5"])

//Adds Contact To NavBar.
let contactNav = document.getElementsByTagName("a").item(5);
contactNav.textContent = (siteContent["nav"]["nav-item-6"])

//Adds the top image.
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

//Adds Title.
let awesome = document.getElementsByTagName("h1").item(0);
awesome.textContent = (siteContent["cta"]["h1"])

//Adds Get Started Button.
let button = document.getElementsByTagName("button").item(0);
button.textContent = (siteContent["cta"]["button"])

//Adds Features Title.
let features = document.getElementsByTagName("h4").item(0);
features.textContent = (siteContent["main-content"]["features-h4"])

//Adds Features Paragraph.
let featuresP = document.getElementsByTagName("p").item(0);
featuresP.textContent = (siteContent["main-content"]["features-content"])

//Adds About Title.
let about = document.getElementsByTagName("h4").item(1);
about.textContent = (siteContent["main-content"]["about-h4"])

//Adds About Paragraph.
let aboutP = document.getElementsByTagName("p").item(1);
aboutP.textContent = (siteContent["main-content"]["about-content"])

//Adds middle image.
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Adds Services Title.
let services = document.getElementsByTagName("h4").item(2);
services.textContent = (siteContent["main-content"]["services-h4"])

//Adds Services Paragraph.
let servicesP = document.getElementsByTagName("p").item(2);
servicesP.textContent = (siteContent["main-content"]["services-content"])

//Adds Product Title.
let product = document.getElementsByTagName("h4").item(3);
product.textContent = (siteContent["main-content"]["product-h4"])

//Adds Product Paragraph.
let productP = document.getElementsByTagName("p").item(3);
productP.textContent = (siteContent["main-content"]["product-content"])

//Adds Vision Title.
let vision = document.getElementsByTagName("h4").item(4);
vision.textContent = (siteContent["main-content"]["vision-h4"])

//Adds Vision Paragraph.
let visionP = document.getElementsByTagName("p").item(4);
visionP.textContent = (siteContent["main-content"]["vision-content"])

//Adds Contact Title.
let contact = document.getElementsByTagName("h4").item(5);
contact.textContent = (siteContent["contact"]["contact-h4"])

//Adds Address to Contact.
let contactP = document.getElementsByTagName("p").item(5);
contactP.textContent = (siteContent["contact"]["address"])

//Adds Phone to Contact.
let contactP2 = document.getElementsByTagName("p").item(6);
contactP2.textContent = (siteContent["contact"]["phone"])

//Adds Email to Contact.
let contactP3 = document.getElementsByTagName("p").item(7);
contactP3.textContent = (siteContent["contact"]["email"])

//Adds Footer to the page.
let footer = document.getElementsByTagName("p").item(8);
footer.textContent = (siteContent["footer"]["copyright"])

//Changes each item on the NavBar to the color green.
let navStyle = document.getElementsByTagName("a").item(0);
navStyle.style.color = "green"

let navStyle2 = document.getElementsByTagName("a").item(1);
navStyle2.style.color = "green"

let navStyle3 = document.getElementsByTagName("a").item(2);
navStyle3.style.color = "green"

let navStyle4 = document.getElementsByTagName("a").item(3);
navStyle4.style.color = "green"

let navStyle5 = document.getElementsByTagName("a").item(4);
navStyle5.style.color = "green"

let navStyle6 = document.getElementsByTagName("a").item(5);
navStyle6.style.color = "green"

//Adds Home to the beginning of the NavBar.
let firstLink = document.getElementsByTagName("nav").item(0);
let a = document.createElement("a");
firstLink.prepend("Home")

//Adds Store to the end of the NavBar.
let lastLink = document.getElementsByTagName("nav").item(0);
let a2 = document.createElement("a");
lastLink.append("Store")







