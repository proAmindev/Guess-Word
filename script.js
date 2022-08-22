const box = document.querySelector(".box"),
    orangBox = document.querySelector('.orange_box'),
    textAlfabit = document.querySelector(".text_alfabit"),
    addForm = document.querySelector('form.add'),
    buton = document.querySelector('.button'),
    hidden = document.querySelector('.hidden'),
    typing = document.querySelector('.typ'),
    imkon = document.querySelector(".guess_chance span");
    let questions = [
        {
            text: "yellow",
            prompt:"what color are colors ?"
        },
        {
            text: "tesla",
            prompt: "What is the first electric car ?"
        },
        {
            text: "phone",
            prompt: "what is touchscreen means ?"
        }
    ];
    
    let text;
        function random(){
            let obj = questions[Math.floor(Math.random() * questions.length)];
            text = obj.text;
            console.log(text);
            
            hidden.innerText = obj.prompt;
            let shows = "";
            for(let i = 0; i < text.length; i++){
                shows += `<input type="text" disabled>`;
            }
            addForm.innerHTML = shows;
            max = 8;
            imkon.innerText = max;
        }
       random();
       function game (event){
        let key = event.target.value;
        if(text.includes(key)){
            for(let i = 0; i < text.length; i++){
                if(text[i] == key){
                    addForm[i].value = key; 
                }
            }
        }else{
           max--;
        }
        if(max < 1){
            alert("siz yutqazdiz!");
        }
        imkon.innerText = max;
        typing.value = "";    
    }
       typing.addEventListener("input", game);
       buton.addEventListener('click', random);
       document.addEventListener('keydown', () => typing.focus());