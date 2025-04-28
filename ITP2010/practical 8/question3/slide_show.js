const $ = selector => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", () => {
const caption = $("#caption"); // the h2 elementconst mainImage = $("#main_image"); // the img element// get all the <a> tags in the ul element
const links = $("#image_list").querySelectorAll("a");
// process image links
const imageCache = [];
let image = null;
for ( let link of links ) {
// preload image and copy title properties
image = new Image();
image.src = link.href;
image.alt = link.title;
// add image to array
imageCache[imageCache.length] = image;
}
// start slide show
let imageCounter = 0;
setInterval( () => {
// calculate the index for the current image
imageCounter = (imageCounter + 1) % imageCache.length;// get image object from array
image = imageCache[imageCounter];
// set HTML img and h2 elements
// with values from image object
mainImage.src = image.src;
mainImage.alt = image.alt;
caption.textContent = image.alt;
},
2000); // 2 second interval
});