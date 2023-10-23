const clearBtn = document.querySelector(".clearBtn");
const addBtn = document.querySelector(".addBtn");
const input = document.querySelector(".inputText");
const addTodo = document.querySelector(".addTodo");

let todo = function () {

    addBtn.addEventListener("click", (e) => {

        let p = document.createElement("p");
        let i = document.createElement("i");

        //! i değişkeni için yapılan işlemler 
        i.className = "fas fa-trash";
        i.style.marginLeft = "400px";
        i.style.cursor = "pointer";

        //* p değişkeni için yapılan işlemler
        p.style.padding = "5px";
        p.textContent = "⤷ " + input.value;
        p.append(i); // p'ye i'yi ekledik

        addTodo.appendChild(p); //! div'e p'yi ekledim
        input.value = " "; //* tıklamadan sonra inputu temizlesin


        //! p üstüne tıklarsa üstünü çizsin
        p.addEventListener("click", function () {
            p.style.textDecoration = "line-through"
        })

        // Çöp kutusuna tıklandıgında silme işlemi yapıyor.
        i.addEventListener("click", () => {
            p.remove();
        })


        //? Clear işlemleri
        clearBtn.addEventListener("click", () => {
            addTodo.removeChild(p);
        })

        e.preventDefault();
    })
}
todo();