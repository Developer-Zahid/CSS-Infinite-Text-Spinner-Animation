function splitTextIntoSpans(selector, className) {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element, elementIndex, elementsArray) => {        
        element.style.setProperty("--_total-slides", elementsArray.length )
        let characterIndex = 0;
        let text = element.innerText;
        let splitText = text
        .trim()
        .split("")
        .map(char => {
            if(char.match(/\S/)){
                let newReturn = `<span class="${className}" style="--i: ${characterIndex}">${char}</span>`;
                characterIndex++
                return newReturn
            }else{
                return `<span>&nbsp;</span>`
            }
        })
        .join("");
        element.innerHTML = splitText;
    });
}

splitTextIntoSpans('.slider__slide', 'slider__slide__character')