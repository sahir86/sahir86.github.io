var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Nrt_Gif_Final.gif') {
        myImage.setAttribute ('src','images/NRT_elephants.jpg');
    } else {
        myImage.setAttribute('src','images/Nrt_Gif_Final.gif');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'NRT is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'NRT is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
