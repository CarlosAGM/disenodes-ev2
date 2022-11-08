//Evaluación N_2 Diseño y desarrollo software
//Carlos Agüero Marquizani

let body = document.body

const titulo1 = document.createElement('h1')
const saltoLinea = () =>{
  let br = document.createElement('br')
  body.appendChild(br)
}

titulo1.innerHTML = 'Alumnos Matriculados Ciberseguridad 2023'
body.appendChild(titulo1)
saltoLinea()

//Input donde el usuario ingresa Nombre
const nombre = document.createElement("label")
nombre.innerHTML = "Nombre: "
body.appendChild(nombre)
const cajaNombre = document.createElement("input")
cajaNombre.setAttribute('placeholder', 'Ej. Carlos')
cajaNombre.setAttribute("name", "inNomAp")
body.appendChild(cajaNombre)
saltoLinea()

//Input donde el usuario ingresa Apellido
const apellido = document.createElement("label")
apellido.innerHTML = "Apellidos: "
body.appendChild(apellido)
const cajaApellido = document.createElement("input")
cajaApellido.setAttribute('placeholder', 'Ej. Agüero Marquizani')
cajaApellido.setAttribute("name", "inNomAp")
body.appendChild(cajaApellido)
saltoLinea()

//Input donde el usuario ingresa si es Sence o no
const senceSi = document.createElement("label")
senceSi.innerHTML = "Sence: Sí "
body.appendChild(senceSi)
const radioSenceSi = document.createElement("input")
radioSenceSi.setAttribute("type", "radio")
radioSenceSi.setAttribute("name", "Sence")
radioSenceSi.setAttribute("value", "Sí")
body.appendChild(radioSenceSi)

const senceNo = document.createElement("label")
senceNo.innerHTML = "No "
body.appendChild(senceNo)
const radioSenceNo = document.createElement("input")
radioSenceNo.setAttribute("type", "radio")
radioSenceNo.setAttribute("name", "Sence")
radioSenceNo.setAttribute("value", "No")
body.appendChild(radioSenceNo)
saltoLinea()

//Creación botón agregar
let button = document.createElement('button')
button.innerText = 'Ingresar'
button.onclick = () => botonAgregar()
body.appendChild(button)

//Creación botón eliminar
let button2 = document.createElement('button')
button2.innerText = 'Limpiar'
button2.onclick = () => limpiar()
body.appendChild(button2)

//Contenedor de tablas
let divContenedor = document.createElement('div')
body.appendChild(divContenedor)
saltoLinea()
//Estadisticas
let tituloSence = document.createElement('h3')
tituloSence.innerHTML = 'Estadísticas alumnos: '
body.appendChild(tituloSence)
let statSence = document.createElement('label')
statSence.innerHTML = 'Alumnos que ingresaron por sence: '
body.appendChild(statSence)
let statSenceDinamic = document.createElement('label')
statSenceDinamic.innerHTML = '0'
statSenceDinamic.setAttribute('id', 'contSenceDina')
body.appendChild(statSenceDinamic)

saltoLinea()

let statAlumnos = document.createElement('label')
statAlumnos.innerHTML = 'Matrículas Disponibles: '
body.appendChild(statAlumnos)
let statAlumnosDinamic = document.createElement('label')
statAlumnosDinamic.innerHTML = '15'
statAlumnosDinamic.setAttribute('id', 'contMatriculasDina')
body.appendChild(statAlumnosDinamic)
//Variables Iniciales
let total = 0
let contSence = 0
let ultimoAlumno = 15

//Función botón Agregar
botonAgregar = () =>{
  
  let radios = document.getElementsByName("Sence")
  let valorRadio="";

    for (let a=0 ; a < radios.length ; a++ ){
        if (radios[a].checked){
            valorRadio = radios[a].value;
            if (valorRadio == "Sí") {
              contSence = contSence + 1
              if (contSence <= 15){
                statSenceDinamic1 = document.getElementById("contSenceDina")
                statSenceDinamic1.innerHTML = `${contSence}`
                statSence.appendChild(statSenceDinamic1)

              }
            }
        }
    } 
    
 
  let div = document.createElement('div')
  div.setAttribute('class','cajadiv')
  
  
  if (total < 15){
    total = total + 1
    ultimoAlumno = ultimoAlumno - 1
    div.innerHTML = `<label>${total} </label><input type="text" value="${cajaNombre.value}"></input><input type="text" value="${cajaApellido.value}"></input><input type="text" value="${valorRadio}"></input> `
    divContenedor.appendChild(div)
    statAlumnosDinamic1 = document.getElementById("contMatriculasDina")
    statAlumnosDinamic1.innerHTML = `${ultimoAlumno}`
    statAlumnos.appendChild(statAlumnosDinamic1) 
  }else{
    alert("Excedió el número de Alumnos.")
  }
  if (contSence <= 15){
    console.log(contSence)
  }

}

//Función botón Limpiar
limpiar = () =>{
  inputs = document.getElementsByName("inNomAp")
  inputs.forEach(input =>{
  input.value = ""
})
  const eliminarDiv = document.querySelectorAll('.cajadiv')
  eliminarDiv.forEach(cajadiv =>{
    cajadiv.remove()
  })
  total = 0
  contSence = 0
  ultimoAlumno = 15

  statSenceDinamic1 = document.getElementById("contSenceDina")
  statSenceDinamic1.innerHTML = `${contSence}`
  statSence.appendChild(statSenceDinamic1)

  statAlumnosDinamic1 = document.getElementById("contMatriculasDina")
  statAlumnosDinamic1.innerHTML = `${ultimoAlumno}`
  statAlumnos.appendChild(statAlumnosDinamic1) 
  
}







