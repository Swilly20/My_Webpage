const typedtextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Wake up, visitor...", "The Matrix has you...", "Follow my webpage.", "Knock, knock, friend."];
const typingDelay = 100; //How Fast it will type
const erasingDelay = 30; //How fast it will erase
const newTextDelay = 1000; //delay between the current and next string

let textArrayIndex = 0; //the elements in the array
let charIndex = 0; //each character for the given element

//want to type a character then wait for typing delay before calling itself again
function typing(){
    if(charIndex < textArray[textArrayIndex].length)
    {
        typedtextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, typingDelay);
        if(!cursorSpan.classList.contains("typing")) 
        {
            cursorSpan.classList.add("typing");
        }
    }
    else
    {
        setTimeout(erase, newTextDelay);
        cursorSpan.classList.remove("typing");
    }
}

function erase(){
    if(charIndex > 0)
    {
        typedtextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
        if(!cursorSpan.classList.contains("typing")) 
        {
            cursorSpan.classList.add("typing");
        }
    }
    else
    {
        textArrayIndex++;
        setTimeout(typing, typingDelay + 1100);
        cursorSpan.classList.remove("typing");
    }
}
 
document.addEventListener("DOMContentLoaded", function(){
    setTimeout(typing, typingDelay + 500);
});
/*******************************************************************/
