let form =  document.querySelector("#item");
let ul = document.querySelector("#to-do-box");
    form.addEventListener("keyup" , function(e){
        if(e.key == "Enter" && this.value !=""){
            let getItem = JSON.parse(localStorage.getItem("todolist"))??[];
            getItem.push({
                'list':this.value
            })
        localStorage.setItem("todolist",JSON.stringify(getItem));
       console.log(getItem)
        this.value = ""
        display();   
        }
    })
        function display(){
        let li = '';
        let getItem = JSON.parse(localStorage.getItem("todolist"))??[];
        getItem.forEach((element,i) => {
            li+=`
            <li>${element.list}
                <ion-icon name="close-outline" class="mobile-nav-icon" onclick='remove(${i})'></ion-icon>
            </li>   
            `
           
            console.log(element.list);
        }); 
        ul.innerHTML=li;
        }
        function remove(i){
            console.log(i)
            let getItem = JSON.parse(localStorage.getItem("todolist"))??[];
            getItem.splice(i,1);
            localStorage.setItem("todolist",JSON.stringify(getItem));
               display()
        }
        function removeall(){
            // let getItem = JSON.parse(localStorage.getItem("todolist"))??[];
            localStorage.clear("todolist");
            display()
        }

display()
      