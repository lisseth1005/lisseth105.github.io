import { adduser,readuser, servicegoogle }from "./global.js"

const caja = document.getElementById('freg')
const btn = document.getElementById('btnsearch')
const mostrar = document.getElementById('container1')

const googlebtn= document.getElementById('btngoogle')

async function buscar(){
    const ced = document.getElementById('inputcodigo').value

    const docRef = readuser(ced)
    const docSnap = await docRef

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        let html=""
        html=`
        <div class="card" style="width: 18rem;">
            <img src="${docSnap.data().imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${docSnap.data().nombre}</h5>
                <p class="card-text">${docSnap.data().codigo}</p>
                <p class="card-text">${docSnap.data().direction}</p>
                <p class="card-text">${docSnap.data().stock}</p>
                <h7>${docSnap.data().cel}</h7>
            </div>
        </div>
        `
        mostrar.innerHTML=html
      }if (docSnap.noexists()) {

        alert('no se encuentra registro con el codigo: '+codigo.value)
       
    } else {

        alert('no se encuentra registro con el codigo: '+codigo.value)
        // docSnap.data() will be undefined in this case
        console.log("No such document!");

      }
}

async function google(){
    window.location.href= "../Templates/index.html"
}

window.addEventListener('DOMContentLoaded',async()=>{
    btn.addEventListener('click',buscar)
    googlebtn.addEventListener('click',google)
} )

caja.addEventListener('submit',(e)=>{
    e.preventDefault()

    const codigo = caja['txtcodigo']
    const name = caja['txtinst']
    const dir = caja['txtdir']
    const phone = caja['txtphone']
    const stock = caja['txtstock']
    const img = caja['response']

    adduser(
        codigo.value,
        name.value,
        dir.value,
        phone.value,
        stock.value,
        img.value)

    alert('El usuario '+codigo.value+' ha sido registrado')

})
