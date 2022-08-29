
let showsidebar = document.querySelector(".show-sidebar");
let hidesidebar = document.querySelector(".close-sidebar");
let sidebar = document.querySelector(".sidebar");



showsidebar.addEventListener("click",function(){
    this.classList.add("d-none");
    if(sidebar.classList.contains("hide")){
        sidebar.classList.remove("hide");
    }
})



hidesidebar.addEventListener("click",function(){
    
    if(!sidebar.classList.contains("hide")){
        sidebar.classList.add("hide");
    }

    showsidebar.classList.remove("d-none")
})