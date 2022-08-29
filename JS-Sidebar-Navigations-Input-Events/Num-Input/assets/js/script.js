let input = document.querySelector(".number-input");
let removeinput = document.querySelector(".list-group");




input.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {

        e.target.nextElementSibling.innerHTML = "";

        for (let i = 1; i <= e.target.value; i++) {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.innerHTML = i;
            

            e.target.nextElementSibling.append(li);

            let icon = document.createElement("i");
            

            icon.classList.add("fa-solid");
            icon.classList.add("fa-circle-xmark");

            icon.style.float = "right";
            icon.style.cursor = "pointer";
            icon.style.color = "red";
            icon.style.marginTop = "5px";


            li.append(icon);

            icon.onclick = function () {
                li.remove();
            }
        }
        e.target.value = "";


    }


})




