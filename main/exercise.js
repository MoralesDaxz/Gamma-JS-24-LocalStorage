 let colecInput = document.querySelectorAll('input')
let form = document.querySelector('form')
let btn = document.querySelector('button')
btn.style=`margin-top:2%` 
//Ejercicio ---> 1
let nameA='Alfredo'
last='Morales'
age=31
city='Madrid'
country='España' 
courses=['Mat','Fis','Quim']; 
//Ejercicio ---> 2
 localStorage.setItem('nombre',name)
localStorage.setItem('edad',age)
localStorage.setItem('ciudad',city) 
//Ejercicio ---> 3


const crearObjeto =()=> {
    return  {   
        firstname:colecInput[0].value,
        lastname:colecInput[1].value,
        age:colecInput[2].value*1,
        courses:[colecInput[3].value],
        country:colecInput[4].value,
        city:colecInput[5].value
    }

}
let students=[] 
btn.addEventListener('click',()=>{
    students.unshift(crearObjeto()) //unshift informacion al array students
    event.preventDefault(); //detenemos para visualizar informacion
  return localStorage.setItem('student',JSON.stringify(students))
     
}) 
//Ejercicio ---> 4