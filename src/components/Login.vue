<template>
   <div class="container-fluid col-md-6" style="background:rgb(248,249,250); border-radius: 10px; box-shadow: 5px 5px 5px 5px #999999;" id="contenedor">
            <div class="d-flex justify-content-center">
							<div class="row">
								<div class="col">
								<br>
								<img src="https://seguimiento.cmimbral.cl/assets/logo_tienda.png"  width="200" class="img-fluid" alt="Responsive image"><br>
								</div>
							</div>
							
                        </div><br>
            <h3 class="text-center"><b>CAPACITACIONES MIMBRAL</b></h3>
            <div class="d-flex justify-content-center">
							<div class="row">
								<div class="col">
                                    <img src="../assets/3784896.png"  width="400" class="img-fluid" alt="Responsive image">
								
							<br>
							
							</div></div>
                        </div>
            <form enctype="multipart/form-data" @submit.prevent="onFormSubmit">
            <div class="d-flex justify-content-center">
                <div class="row">
                    <div class="col-sm"><br>
                         <h4 style="color:rgb(0,58,140)">Ingresa tu RUT para acceder</h4>
                        <div class="input-group mb-6">
                        <input type="text" class="form-control form-control-lg" placeholder="Ingrese RUT" style="border-color:rgb(237,126,37)" id="rut" @keyup="leer()" >
                        <div class="input-group-append">
                           <button  id="btnBuscar" class="btn btn-primary"   style="background-color:rgb(0,56,143); border-color:rgb(237,126,37)"><i class="fas fa-address-card fa-2x"></i></button>
                        </div>
                        </div>
                    </div>
                </div>
                  </div>
                <br>
               

                
                

            </form>
        </div>
</template>
<script>
import Swal from 'sweetalert2';
//import AppVue from '../App.vue';
   
   import { db } from '../firebaseDb';
    //import {storage} from '../firebaseDb';
   // import swal from 'sweetalert';
  // const ref=storage.ref()
    
    export default {
        data() {
            return {
            }
        },
        created() {
            document.getElementById("nav").style.display="none";
            //console.log(AppVue.document.getElementById())
            localStorage.usuario="X"
            localStorage.nombreUsuario="X"
        },
        methods: {
            onFormSubmit() {
                var rut1=document.getElementById("rut").value;
                var rut=rut1.replaceAll(".","")
                console.log(rut)
                db.collection('usuarios').where("rut", "==", rut).onSnapshot((snapshotChange) => {
                    console.log()
                    if(snapshotChange.empty){
                         Swal.fire({
                        title: "Error",
                        text: "No se encontraron usuarios",
                        icon: "warning",
                        })
                    }else{
                        snapshotChange.forEach((doc) => {
                        console.log(doc.data())
                       // let usuario=doc.data().rut;
                        localStorage.usuario=doc.data().rut;
                        localStorage.nombreUsuario=doc.data().nombre;
                        if(doc.data()){
                            document.getElementById("n1").innerHTML=doc.data().nombre;
                            this.$router.push('/registrar')
                        }
                        /*else if(doc.data().tipo==2){
                            document.getElementById("n2").innerHTML=doc.data().nombre;
                            this.$router.push('/creditos')
                            
                        }else if(doc.data().tipo==3){
                            document.getElementById("n3").innerHTML=doc.data().nombre;
                            this.$router.push('/contabilidad')
                           
                        }*/
                    });
                    }
                    
                    
                })
            },
            leer(){
                var rut = document.getElementById("rut").value;
				var rutx=rut.replace("-","");
				var largo=rutx.length
				//console.log(largo,largo-1)
				var rut2=rutx.slice(0,largo-1)
				var rut3=rutx.slice(largo-1)
                //console.log(rut2+"-"+rut3)
				document.getElementById("rut").value=(rut2+"-"+rut3)
				
            }
           
        }
    }
</script>

