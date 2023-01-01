console.log("EXPENCE TRACKER APP");

let btn=document.getElementById('btn');

let name=document.getElementById('name');
let lastname=document.getElementById('lastname');
let email=document.getElementById('email');
let number=document.getElementById('number');


var container=document.getElementById('bookList');

btn.addEventListener('click',(e)=>{
    e.preventDefault();

    let obj={
        name:name.value,
        lastname:lastname.value,
        email:email.value,
        number:number.value
    }

        axios
        .post("https://crudcrud.com/api/34c4d30fb7874f21874efe21772d62b20/ritik",obj)
        .then((response)=>{
            showData();
            // console.log(response);
        })
        .catch((err)=>{
            console.error(error);
            container.innerHTML=" Somthing went wrong";
            
        });

});

let get=document.getElementById('get').addEventListener('click',showData);

showData();



function showData(){
    axios
    .get("https://crudcrud.com/api/34c4d30fb7874f21874efe21772d62b2/ritik")
    .then((response)=>{

        console.log(response.data.length);
        let str=""
        for(var i=0;i<response.data.length;i++){
            str+=`<li>${response.data[i].name} || ${response.data[i].email} ||  ${response.data[i].number} <button class="btn btn-primary my-3" id="get">DELETE</button> 
              <button class="btn btn-primary my-3" id="get">EdIT</button></li>`;
            container.innerHTML=str;

        } console.log(response);
    })
    .catch((err)=>{
        container.innerHTML=" Somthing went wrong";
        console.error(err);
        
    });

    


}



