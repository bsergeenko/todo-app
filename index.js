let image = document.querySelector(".moon");
let background = document.querySelector(".background");
let darkElement = document.querySelectorAll(".dark");
let mainText = document.querySelectorAll(".main-text");
let checkboxItem = document.querySelectorAll(".checkbox-item");
let ulTag = document.querySelector(".ul-tag");
let input = document.querySelector(".input-text");
let cross = document.querySelectorAll(".cross");

let num = 0;
image.addEventListener("click", () => {
    if(num==0){
        document.body.style.backgroundColor = '#171823';
        background.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
        image.src="./images/icon-sun.svg";
    
        for(let i=0; i<darkElement.length;i++){
            darkElement[i].classList.add("darkElement");
        }

        for(let z=0; z<mainText.length; z++){
            mainText[z].style.color="#C8CBE7"
        }

        for(let t=0; t<checkboxItem.length; t++){
            checkboxItem[t].style.background="#25273D"
        }
        num = 1;
    } else{
        document.body.style.backgroundColor = '#FAFAFA';
        background.style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
        image.src="./images/icon-moon.svg";
    
        for(let i=0; i<darkElement.length;i++){
            darkElement[i].classList.remove("darkElement");
        }

        for(let z=0; z<mainText.length; z++){
            mainText[z].style.color="#494C6B"
        }

        for(let t=0; t<checkboxItem.length; t++){
            checkboxItem[t].style.background="white"
        }
        num = 0;
    }

})

let arr = [
    {
        text: "Jog around the park 3x",
        checked: false
    },
    {
        text: "10 minutes meditation",
        checked: false
    },
    {
        text: "Read for 1 hoer",
        checked: false
    },
    {
        text: "Pick up groceries",
        checked: false
    },
    {
        text: "Complete Todo App on Frontend Mentor",
        checked: false
    },
]

function todos(){
    for(let u=0; u<arr.length; u++){
        ulTag.innerHTML += `<li>
        <div class="flex-cross">
          <div class="checkbox-item">
            <input class="chackbox1" type="checkbox">
            <div class="input-div"></div>
          </div>
          <h3 class="main-text">${arr[u].text}</h3>
        </div>
        <img class="cross" src="./images/icon-cross.svg" alt="icon-cross"/>
      </li>`
    }
}
todos();

function addTodo(){
    ulTag.innerHTML += `<li>
    <div class="flex-cross">
      <div class="checkbox-item">
        <input class="chackbox1" type="checkbox">
        <div class="input-div"></div>
      </div>
      <h3 class="main-text">${arr[arr.length-1].text}</h3>
    </div>
    <img class="cross" src="./images/icon-cross.svg" alt="icon-cross"/>
  </li>`
}

input.addEventListener("keyup", (e) => {
    if(e.key=="Enter" & e.target.value!==""){
        arr.push({
            text:e.target.value,
            checked:false
        })
        addTodo();
        e.target.value="";
        cross=document.querySelectorAll(".cross");
    }
})
