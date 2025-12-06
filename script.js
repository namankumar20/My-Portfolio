const typedText = ["Web Developer","UI/UX Designer","Frontend Developer"];
let i = 0;
let j = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if(i >= typedText.length) i = 0;
    let fullText = typedText[i];

    if(isDeleting){
        currentText = fullText.substring(0,j--);
    } else {
        currentText = fullText.substring(0,j++);
    }

    document.getElementById("typed").innerText = currentText;

    if(!isDeleting && j === fullText.length+1){
        isDeleting = true;
        setTimeout(type, 1500);
    } else if(isDeleting && j === 0){
        isDeleting = false;
        i++;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

type();
