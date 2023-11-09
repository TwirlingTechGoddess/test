const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
/* Declaring the alternative text for each image file */
const altText = {
    "pic1": "Closeup of a human eye",
    "pic2": "Closeup of marble wall",
    "pic3": "Purple and white flowers",
    "pic4": "Egyptian hyroglyphics",
    "pic5": "A large Brown Butterfy on a green leaf",
}
/* Looping through images */
picArray.forEach( pic => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../wa/img/wa11/${pic}`);
    newImage.setAttribute('alt', altText[pic]);
    thumbBar.appendChild(newImage);
});

// displayedImage.addEventListener('click')
thumbBar.addEventListener('click', function(event){
    displayedImage.setAttribute('src', (event.target.getAttribute("src")));
    displayedImage.setAttribute('alt', (event.target.getAttribute("alt")));

});

/* Wiring up the Darken/Lighten button */
