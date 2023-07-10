
<template>


<div>
    <div class="container-fluid col-md-8" style="background:rgb(248,249,250); border-radius: 10px; box-shadow: 5px 5px 5px 5px #999999;" id="contenedor">
    <div class="row">
        <div class="col"><br>
            <h2><b>Asignar Imagen</b></h2>
        </div>
    </div>
    
            <div class="row">
                <div class="col-sm"><br>
                      <label>Seleccionar archivo</label>
                        <input style="border-color:rgb(237,126,37)" id="archivo" @change="clickImagen($event)" type="file" accept="file/*" ><br>
                </div><br>
            </div><br></div>
<br><br><!--
        <div class="container-fluid col-md-11" style="background:rgb(248,249,250); border-radius: 10px; box-shadow: 5px 5px 5px 5px #999999;" id="contenedor">
            <div class="row" >
                    <div class="col-sm-6">
                       <br> <h4>Seleccionar archivo</h4>
                        <input style="border-color:rgb(237,126,37)" @change="clickImagen($event)" type="file" accept="file/*" >
                    </div>

                </div><br>
        </div><br><br>-->
        <div class="container-fluid col-md-8" style="background:rgb(248,249,250); border-radius: 10px; box-shadow: 5px 5px 5px 5px #999999;" id="contenedor">
                <br><h4><b>Evento</b></h4>
             <table class="table table-striped table-responsive" style="display:block">
                <thead style="background-color:rgb(0,58,140);color:white">
                    <tr>
                        <th>Proveedor</th>
                        <th>Comprador</th>
                        <th>Participantes</th>
                        <th>Lugar</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Observacion</th>
                    </tr>
                </thead>
                <tbody>
                   <tr v-for="capacitacion in Capacitaciones" :key="capacitacion.key">
                        <td>{{ capacitacion.nombreProveedor }}</td>
                        <td>{{ capacitacion.persona }}</td>
                        <td>{{ capacitacion.participantes }}</td>
                        <td>{{ capacitacion.lugar }}</td>
                        <td>{{ capacitacion.fecha }}</td>
                        <td>{{ capacitacion.hora }}</td>
                        <td>{{ capacitacion.observacion }}</td>
                    </tr>
                </tbody>
            </table>
            <br>
       
            <div class="d-flex justify-content-center">
            <div class="form-group"><br>
                    <button class="btn btn-primary btn-lg" @click="guardarAsignacion()" style="background-color:rgb(0,56,143); border-color:rgb(237,126,37)">Guardar</button><br><br>
                </div>
            </div>
        </div>
            <!--<img class="img-responsive" id="foto"  width="600" ><br>
            <iframe id="pdf" width="100%" height="800px"></iframe>-->
           
      
</div>
</template>

<script>

    import { db } from '../firebaseDb';
    import {storage} from '../firebaseDb';
    import swal from 'sweetalert';
import Swal from 'sweetalert2';
    
    const ref=storage.ref()
    
    export default {
        data() {
            return {
                Capacitaciones: [],
                copia:[],
                arregloAsignados:[],
                imagen:null,
                vendedores:[],
                chequesCarga:[],
            }
            
        },
        created() {
            document.getElementById("nav").style.display="block";
            this.usuario=localStorage.usuario;
            var capacitacion=(this.$route.params.id)
            //console.log(capacitacion)
             db.collection('capacitaciones').onSnapshot((snapshotChange) => {
                this.Capacitaciones = [];
                if(snapshotChange.empty){
                   Swal.fire({
                      title: "Error",
                      text: "No se encontraron capacitaciones",
                      icon: "error",
                    });
                }else{
                    snapshotChange.forEach((doc) => {
                        if(doc.id==capacitacion){
                            console.log(capacitacion)
                            
                            this.Capacitaciones.push({
                         key: doc.id,
                        nombreProveedor: doc.data().nombreProveedor,
                        persona: doc.data().persona,
                        participantes: doc.data().participantes,
                        lugar: doc.data().lugar,
                        observacion: doc.data().observacion, 
                        hora: doc.data().hora,
                        fecha: doc.data().fecha,
                        
                    })     
                        }
                   
                    
                });
                }
                //this.calcularTotales()
               
          })

            //console.log(this.usuario)
        this.validarUsuario();
            //this.cargarVendedores();
           //this.buscarChequeTodos();
        },
        methods: {

            clickImagen(e){
               this.imagen=e.target.files[0];  
               console.log(this.imagen)   
            },
            subirImagen(){
                //referencia de subida
                try{
                  const refImg=ref.child('archivos/'+this.imagen.name)
                    const metadata={contentType:'img/jpeg'}
                    refImg.put(this.imagen,metadata)
                    .then(e=>console.log(e)) 
                     document.getElementById("archivo").value="";
                        this.imagen=null;   
                        swal({
                        title: "Listo",
                        text: "Imagen asociada",
                        icon: "success",
                        }) 
                        this.$router.push('buscar')  
                }catch(error){
                    console.log(error)
                }
            },
            verImagen(imagen){
                document.getElementById('foto').src="";
                console.log(imagen)
                const refImg=ref.child('imagenes/'+imagen).getDownloadURL().then(function(url) {
                console.log(refImg)
               
                var img = document.getElementById('foto');
                img.src = url;
                }).catch(function(error) {
                    console.log(error)
                    swal({
                    title: "Error",
                    text: "No hay imagen asociada",
                    icon: "error",
                    })
                });
            },
            verCheque(imagen){
                document.getElementById('pdf').src="";
                console.log(imagen)
                const refImg=ref.child('archivos/test.pdf').getDownloadURL().then(function(url) {
                console.log(refImg)
                var img = document.getElementById('pdf');
                img.src = url;
                }).catch(function(error) {
                    console.log(error)
                    swal({
                    title: "Error",
                    text: "No hay imagen asociada",
                    icon: "error",
                    })
                });
            },
            agregarArreglo(cheque){
                if(this.imagen!=null){
                var data=this.Cheques;
                this.Cheques=[];
                data.forEach((doc) => {
                         if(doc.key!=cheque){
                            this.Cheques.push(doc)
                        }else{
                            //this.arregloAsignados.push(doc)
                            var chequeAsignado = new Object();
								chequeAsignado.key=doc.key;
                                chequeAsignado.documento=doc.documento;
                                chequeAsignado.nombreTitular=doc.nombreTitular;
                                chequeAsignado.rut=doc.rut;
                                chequeAsignado.rutFacturacion=doc.rutFacturacion;
                                chequeAsignado.razonSocial=doc.razonSocial;
                                chequeAsignado.observacion=doc.observacion;
                                chequeAsignado.fechaHora=doc.fechaHora;
                                chequeAsignado.monto=doc.monto;
                                chequeAsignado.imagen=this.imagen.name;
								chequeAsignado.estado='asignado';
								this.arregloAsignados.push(chequeAsignado)
                        }
                });
                }else{
                    Swal.fire({
                    title: "Aviso",
                    text: "Debe selecionar un archivo",
                    icon: "warning",
                    })
                }
            },
            quitarArreglo(cheque){
                var data=this.arregloAsignados;
                this.arregloAsignados=[];
                data.forEach((doc) => {
                         if(doc.key!=cheque){
                            this.arregloAsignados.push(doc)
                        }else{
                            this.Cheques.push(doc)
                        }
                });
            },
            agregarCopia(dato){
                console.log(dato)
            },
            guardarAsignacion(){
                var data=this.Capacitaciones;
                data.forEach((dato) => {
                      db.collection('capacitaciones').doc(dato.key).set({
                            imagen: this.imagen.name,
                            //ntraslado:this.largo,
                        },
                         { merge: true });    
                });
                this.subirImagen();
            },
            cargarVendedores(){
              //  var vendedor = document.getElementById("vendedores")
                db.collection('usuarios').where("tipo", "==", 1).onSnapshot((snapshotChange) => {
                this.vendedores = [];
                snapshotChange.forEach((doc) => {
                    var option = document.createElement("option")
                    option.value = doc.data().rut,
                    option.innerHTML = doc.data().nombre,
                    document.getElementById("vendedores").appendChild(option)
                    /*this.vendedores.push({
                        key: doc.id,
                        nombre: doc.data().nombre,
                        rut: doc.data().rut,
                        
                    })*/
                });
            })
            },
            buscarCheque(){
                console.log("aca")
                var usuario=document.getElementById("vendedores").value;
                db.collection('cheques').where("estado", "==", 'pendiente').where("usuario", "==", usuario).onSnapshot((snapshotChange) => {
                this.Cheques = [];
                if(snapshotChange.empty){
                    Swal.fire({
                    title: "Aviso",
                    text: "No se encontraron cheques pendientes",
                    icon: "info",
                    })
                }else{
                     snapshotChange.forEach((doc) => {
                    console.log(doc.data())
                    this.Cheques.push({
                       key: doc.id,
                        documento: doc.data().documento,
                        rut: doc.data().rut,
                        nombreTitular: doc.data().nombreTitular,
                        rutFacturacion: doc.data().rutFacturacion,
                        razonSocial: doc.data().razonSocial,
                        observacion: doc.data().observacion, 
                        monto: doc.data().monto,
                        imagen: doc.data().imagen,
                        fechaHora: doc.data().fecha+" "+doc.data().hora,
                    })
                });
                }
               
            })
            },

            validarUsuario(){
             //document.getElementById("monto").display = "none";   
            if(this.usuario==undefined || this.usuario=="X"){
                this.$router.push('/')
            }
            },
            /*
            buscarChequeTodos(){
                console.log("aca")
                //var usuario=document.getElementById("vendedores").value;
                db.collection('cheques').where("usuario", "==", '15755442-5').onSnapshot((snapshotChange) => {
                //this.Cheques = [];
                if(snapshotChange.empty){
                    Swal.fire({
                    title: "Aviso",
                    text: "No se encontraron cheques pendientes",
                    icon: "info",
                    })
                }else{
                     snapshotChange.forEach((doc) => {
                        var fecha12=doc.data().fecha.split("-");
                        var año=fecha12[2]
                        var mes=fecha12[1]
                        var dia=fecha12[0]
                        var fechaF1=año+mes+dia;
                        db.collection('cheques').doc(doc.id)
                        .update({fr:fechaF1}).then(() => {
                            console.log(doc.data());
                        }).catch((error) => {
                            console.log(error);
                        });
                });
                }
               
            })
            },  
*/


            

        }
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>