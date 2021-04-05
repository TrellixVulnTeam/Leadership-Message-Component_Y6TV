// Switch Layout Buttons 
const firstLayoutBtn = document.querySelector("#btnFirstLayout");
const secondLayoutBtn = document.querySelector("#btnSecondLayout");
const thirdLayoutBtn = document.querySelector("#btnThirdLayout");

// elements for re-ordering
const leftColumn = document.querySelector("#leftColumn");
const rightColumn = document.querySelector("#rightColumn");
const leaderImage = document.querySelector("#leaderImage");

//elemnts for re-styling 
const messageDiv = document.querySelector("#messageDiv");
const titleDiv = document.querySelector("#titleDiv");
const titleText = document.querySelector("#titleText")

// elements for showing and hiding 
const seeMoreButton = document.querySelector("#see-more-btn");
const seeLessButton = document.querySelector("#see-less-btn");
const longParag = document.querySelector("#collapseOne");

/////// expaand and collapse text 

seeLessButton.style.display = "none"

seeMoreButton.addEventListener('click',event => {
    seeMoreButton.style.display = "none"
    seeLessButton.style.display = "inline"
    longParag.classList.toggle("invisible");
    longParag.classList.toggle("d-none");
});

seeLessButton.addEventListener('click',event => {
    seeMoreButton.style.display = "inline"
    seeLessButton.style.display = "none"
    longParag.classList.toggle("invisible");
    longParag.classList.toggle("d-none");
});

//////////////////////////////////////////////////////////////// Layout  Stylings ////////////////////////////////////////////////////////////////

function setLayoutButtonActive(activeLayout){
    switch (activeLayout) {
         case 2 : { 
            firstLayoutBtn.classList.remove("active");
            secondLayoutBtn.classList.add("active");
            thirdLayoutBtn.classList.remove("active");
            break;
         }
         case 3 : {
            firstLayoutBtn.classList.remove("active");
            secondLayoutBtn.classList.remove("active");
            thirdLayoutBtn.classList.add("active");
            break;
         }
         default: {
            firstLayoutBtn.classList.add("active");
            secondLayoutBtn.classList.remove("active");
            thirdLayoutBtn.classList.remove("active");
            break;
         }
    }
}

function styleTextButtons(buttonTextColor, decorationColor){
    if (buttonTextColor  == "white" ){

        seeMoreButton.classList.toggle("text-white", true);
        seeMoreButton.style.textDecoration = "underline";
        seeMoreButton.style.textDecorationColor = decorationColor;
    
        seeLessButton.classList.toggle("text-white", true);
        seeLessButton.style.textDecoration = "underline";
        seeLessButton.style.textDecorationColor = decorationColor;

    } else {

        seeMoreButton.classList.toggle("text-white", false);
        seeMoreButton.style.color = buttonTextColor;
        seeMoreButton.style.textDecoration = "underline";
        seeMoreButton.style.textDecorationColor = decorationColor;

        seeLessButton.classList.toggle("text-white", false);
        seeLessButton.style.color = buttonTextColor;
        seeLessButton.style.textDecoration = "underline";
        seeLessButton.style.textDecorationColor = decorationColor;

    }
}

////////////////////////////////////////////////////////////////First Layout ////////////////////////////////////////////////////////////////

// styles
const backgroundDarkerBlue = "#0c6396";
const backgroundLighterBlue = "#008dc4";

function styleHorizontalLayout(){
    if(rightColumn.classList.contains("col-12")){
        rightColumn.classList.add("col-8")
        rightColumn.classList.remove("col-12")
        rightColumn.classList.remove("col-md-8")
    }
    if(leftColumn.classList.contains("col-12")){
        leftColumn.classList.add("col-4");
        leftColumn.classList.remove("col-12");
        leftColumn.classList.remove("col-md-4");
        leftColumn.classList.remove("m-0");
    }
}

function setBackgroundBlue(){
    messageDiv.style.background = backgroundLighterBlue;
    titleDiv.style.background = backgroundDarkerBlue;
    titleDiv.style.opacity = "1";
}

function removeTitleFromTopOfImage(){
    leftColumn.classList.remove("position-relative");
    titleDiv.classList.remove("position-absolute");
}

function styleFirstLayout(){
    messageDiv.classList.toggle("text-white",true);
    seeMoreButton.classList.remove("my-4")
    seeLessButton.classList.remove("my-4")
    setBackgroundBlue()
    styleHorizontalLayout()
    removeTitleFromTopOfImage()
    styleTextButtons("white", "white");
}

setLayoutButtonActive(1);
styleFirstLayout();

firstLayoutBtn.addEventListener('click',event => {
   rightColumn.appendChild(titleDiv);
   setLayoutButtonActive(1);
   styleFirstLayout();
});

//////////////////////////////////////////////////////////////// second Layout ////////////////////////////////////////////////////////////////

const backgroundLessOpaqueDarkeBlue = "#0A2554";
const textDarkBlue = "#0A2554";
const textDecoartionGreen = "#42C3AF";

function styleVerticalLayout(){
    if(rightColumn.classList.contains("col-8")){
        rightColumn.classList.remove("col-8")
        rightColumn.classList.add("col-12")
        rightColumn.classList.add("col-md-8")
    }
    if(leftColumn.classList.contains("col-4")){
        leftColumn.classList.remove("col-4")
        leftColumn.classList.add("col-12")
        leftColumn.classList.add("col-md-4")
        leftColumn.classList.add("m-0");
    }
}

function addTitleOnTopOfImage(){
    leftColumn.classList.add("position-relative");
    titleDiv.classList.add("position-absolute");
    titleDiv.style.bottom = "26px";
    titleDiv.style.left = "1px;"
}

function setBackgroundWhite(){
    messageDiv.style.background = "white";
    titleDiv.style.background = backgroundLessOpaqueDarkeBlue;
    titleDiv.style.opacity = "0.7";
}

function setTextDark(){
    messageDiv.classList.toggle("text-white", false);
    messageDiv.style.color = textDarkBlue;
}

function styleSecondLayout(){     
    seeMoreButton.classList.add("my-4")
    seeLessButton.classList.add("my-4")
    styleVerticalLayout()
    setBackgroundWhite()
    addTitleOnTopOfImage()
    setTextDark();
    styleTextButtons(textDarkBlue, textDecoartionGreen);
}

function repositionTitleDiv(){
    titleDiv.remove();
    leftColumn.appendChild(titleDiv);
}

secondLayoutBtn.addEventListener('click',event => {
    repositionTitleDiv(); 
    setLayoutButtonActive(2);
    styleSecondLayout();
    
    
 });

 //////////////////////////////////////////////////////////////// third Layout ////////////////////////////////////////////////////////////////

function placeImageinTitleDiv(){
    leftColumn.remove();
    titleDiv.appendChild(leaderImage)
    titleDiv.insertBefore(leaderImage, titleText)
    leaderImage.classList.add("m-2")
    leaderImage.classList.remove("col-12")
    leaderImage.style.width = "73px"
}

 thirdLayoutBtn.addEventListener('click',event => {
    setLayoutButtonActive(3);
    // placeImageinTitleDiv();
 });

