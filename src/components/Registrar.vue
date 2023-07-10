<template>
    <div class="row justify-content-center">
        
        <div class="container-fluid col-md-8" style="background:rgb(248,249,250); border-radius: 10px; box-shadow: 5px 5px 5px 5px #999999;" id="contenedor">
           <!-- <div class="d-flex justify-content-center">
							<div class="row">
								<div class="col">
								<br>
								<img src="https://seguimiento.cmimbral.cl/assets/logo_tienda.png"  width="200" class="img-fluid" alt="Responsive image"><br>
								</div>
							</div>
							
                        </div>--><br>
            <h3 class="text-center"><b>Registrar Evento</b></h3><br>
            
            <form enctype="multipart/form-data" @submit.prevent="onFormSubmit">
            
                <div class="row">
                     <div class="col-sm-6">
                        <div class="form-group">
                        <label>Nombre Proveedor</label>
                        <input type="text" id="nombreProveedor" class="form-control" placeholder="Ingrese nombre proveedor" style="border-color:rgb(237,126,37)"  required>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                        <label>Relator</label>
                        <input type="text" id="relator" class="form-control" placeholder="Ingrese relator" style="border-color:rgb(237,126,37)"  required>
                        </div>
                    </div>
                </div><br>

                <div class="row">
                     <div class="col-sm-6">
                        <div class="form-group">
                        <label>Fecha</label>
                       <div class="input-group mb-3">
                         <input type="date" id="fecha" class="form-control" style="border-color:rgb(237,126,37)"  @change="verFecha()" required>
                        
                        </div>
                        </div>
                        
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                        <label>Hora</label>
                        <input type="time" id="hora" class="form-control"  style="border-color:rgb(237,126,37)"  required>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                          <label>Lugar</label>
                            <input type="text" id="lugar" class="form-control" placeholder="Ingrese lugar" style="border-color:rgb(237,126,37)"  required>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                        <label>Participantes estimados</label>
                        <input type="text" id="participantes" class="form-control" placeholder="Ingrese n° participantes" style="border-color:rgb(237,126,37)"   required>
                        </div>
                    </div>
                   
                </div><br>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                        <label>Persona a cargo</label>
                        <input type="text" id="persona" class="form-control" placeholder="Ingrese comprador" style="border-color:rgb(237,126,37)"  required>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label>Tipo</label>
                        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked @click="tipo1()">
  <label class="form-check-label" for="flexRadioDefault1">
    Capacitación
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" @click="tipo2()">
  <label class="form-check-label" for="flexRadioDefault2">
    Clínica
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" @click="tipo3()">
  <label class="form-check-label" for="flexRadioDefault3">
    Reunión
  </label>
</div>
                      </div>
                </div><br>
                
               <!-- <div class="row">
                    <div class="col-sm">
                      <label>Seleccionar archivo</label>
                        <input style="border-color:rgb(237,126,37)" id="archivo" @change="clickImagen($event)" type="file" accept="file/*" ><br>
                </div>
                </div>-->
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                        <label for="observacion">Observación</label>
                        <textarea class="form-control" id="observacion" rows="3" placeholder="Ingrese caracteristicas, elementos necesarios, etc."  style="border-color:rgb(237,126,37)"></textarea><br>
                    </div>
                    </div>
                </div>
                <!--<div class="row">
                    <div class="form-group"><br>
                        <label for="observacion">Observacion</label>
                        <textarea class="form-control" id="observacion" rows="3" v-model="cheque.observacion" style="border-color:rgb(237,126,37)"></textarea><br>
                    </div>
                </div>-->
               <!-- <div class="row" >
                    <div class="col-sm-6">
                        <input style="border-color:rgb(237,126,37)" @change="clickImagen($event)" type="file" accept="image/*" >
                    </div>

                </div>--><br>
                <div class="d-flex justify-content-center">
                    <div class="form-group">
                        <button class="btn btn-primary btn-block" id="btnRegistrar" style="background-color: rgb(0, 56, 143); color: white; border-color: rgb(237, 126, 37);">Registrar</button><br><br>
                    </div>
                </div>

            </form>
        </div>
        
    </div>
</template>
<script src='https://unpkg.com/v-calendar'></script>
<script>
    //import firebase from "firebase/app";
    import { db } from '../firebaseDb';
    import {storage} from '../firebaseDb';
    import Swal from 'sweetalert2'
    
    var sd = require('silly-datetime');

    const ref=storage.ref()
   
    export default {
         
        data() {
            return {
                capacitacion: {
                },
                imagen:null,
                imagenes:[],
                usuario:'',
                fecha:'',
                hora:'',
                semanaFecha:'',
                tipo:'CAPACITACION'
            
                
            }
        },
        created() {
            document.getElementById("nav").style.display="block";
            this.usuario=localStorage.usuario;
            this.validarUsuario();
            this.obtenerFecha();
        },
        methods: {
            tipo1(){
                this.tipo="CAPACITACION"
            },
            tipo2(){
                this.tipo="CLINICA"
            },
            tipo3(){
               this.tipo="REUNION"
            },
            verFecha(){
                var fecha=document.getElementById("fecha").value;
                console.log(fecha)
                var ndia=new Date(fecha).getDay() 
                var dia=new Date(fecha)/*.getDay()     */
                //console.log(ndia)
                var currentdate = dia
                var oneJan = new Date(currentdate.getFullYear(),0,1);
                //console.log(oneJan)
                var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
                //console.log(numberOfDays)
                var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
                if(ndia==0 || ndia==1 || ndia==2){
                    var final= parseInt(result)+parseInt(1)
                    console.log("semana:"+final)
                    this.semanaFecha=final;
                    this.contarSemana(final)
                }else if(ndia==6){
                     var final= parseInt(result)-parseInt(1)
                    console.log("semana:"+final)   
                    this.semanaFecha=final;
                    this.contarSemana(final)
                }else{
                    console.log("semana:"+result)  
                    this.semanaFecha=result;
                    this.contarSemana(result)
                }
                //console.log(result)
                //this.contarSemana(result)
            },
            onFormSubmit(event) {
                event.preventDefault()
               //this.guia.usuario=this.usuario;
                //this.capacitacion.fecha=this.fecha;
                //this.capacitacion.hora=this.hora;
                //this.capacitacion.estado='PENDIENTE';
                this.capacitacion.nombreProveedor = document.getElementById("nombreProveedor").value.toUpperCase()
                //this.capacitacion.rutProveedor = document.getElementById("rutProveedor").value
                this.capacitacion.fecha = document.getElementById("fecha").value
                var fecha2=document.getElementById("fecha").value.split("-")
                var añofecha2=fecha2[0];
                var mesfecha2=fecha2[1];
                var diafecha2=fecha2[2];
                this.capacitacion.frcapacitacion=añofecha2+mesfecha2+diafecha2;
                this.capacitacion.hora = document.getElementById("hora").value
                this.capacitacion.participantes = document.getElementById("participantes").value//.toUpperCase() 
                this.capacitacion.relator = document.getElementById("relator").value.toUpperCase()
                this.capacitacion.persona = document.getElementById("persona").value.toUpperCase()
                this.capacitacion.lugar = document.getElementById("lugar").value.toUpperCase()
                this.capacitacion.imagen="NO"
                this.capacitacion.observacion = document.getElementById("observacion").value.toUpperCase()
                this.capacitacion.fr = this.año+this.mes+this.dia
                this.capacitacion.fecha =diafecha2+"-"+mesfecha2+"-"+añofecha2;
                this.capacitacion.usuarioRegistro = this.usuario;
                this.capacitacion.semanaFecha = this.semanaFecha;
                this.capacitacion.tipo = this.tipo;
                //this.capacitacion.prioridad = "NO"
                //this.capacitacion.traslado = "NO"
                db.collection('capacitaciones').add(this.capacitacion).then(() => {
                    Swal.fire({
                    title: "Listo",
                    text: "Evento Registrado",
                    icon: "success",
                    })
                   // this.subirImagen();
                document.getElementById("nombreProveedor").value="";
               // document.getElementById("rutProveedor").value="";
                document.getElementById("fecha").value="";
                document.getElementById("hora").value="";
                document.getElementById("participantes").value="";
                document.getElementById("relator").value="";
                document.getElementById("persona").value="";
                document.getElementById("lugar").value="";
                document.getElementById("observacion").value="";
                this.camposMail()
                  this.testMail();  
                  this.testMail2();  
                }).catch((error) => {
                    console.log(error);
                });

            
            },
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
                }catch(error){
                    console.log(error)
                }
            },
        obtenerFecha(){
            this.fecha=sd.format(new Date(), 'DD-MM-YYYY');
            this.dia=(sd.format(new Date(), 'DD'))
            this.mes=(sd.format(new Date(), 'MM'))
            this.año=(sd.format(new Date(), 'YYYY'))
            this.hora=sd.format(new Date(), 'HH:mm');
        },
        validarUsuario(){
            if(this.usuario==undefined || this.usuario=="X"){
                this.$router.push('/')
            }
        },
        contarSemana(result){
            var docRef = db.collection("capacitaciones").where("semanaFecha", "==", result);
            docRef.get().then(doc => {
                console.log(doc.docs.length)
                var largo=doc.docs.length
                if(largo>=2){
                        Swal.fire({
                        title: "Aviso",
                        text: "Ya existen dos capacitaciones agendadas para esta semana, si es posible seleccione otra.",
                        icon: "info",
                        });
                        
                    }
            }).catch(function(error) {
            console.log("Error getting document:", error);
                    });
/*
             db.collection('capacitaciones').where("semanaFecha", "==", result).onSnapshot((snapshotChange) => {
                if(snapshotChange.empty){
                 
                    console.log("no")
                    document.getElementById("btnRegistrar").style.display="block"
                }else{
                    var largo=(snapshotChange.docs.length)
                    if(largo>=3){
                        Swal.fire({
                        title: "Error",
                        text: "Ya existen dos capacitaciones agendadas para esta semana, por favor seleccione otra.",
                        icon: "error",
                        });
                        document.getElementById("btnRegistrar").style.display="none"
                    }else{
                        document.getElementById("btnRegistrar").style.display="block"
                    }
                }
               
          })*/
        },
        leer(){
                var rut = document.getElementById("rutF").value;
				var rutx=rut.replace("-","");
				var largo=rutx.length
				//console.log(largo,largo-1)
				var rut2=rutx.slice(0,largo-1)
				var rut3=rutx.slice(largo-1)
                //console.log(rut2+"-"+rut3)
				document.getElementById("rutF").value=(rut2+"-"+rut3)
				
        },
        leer2(){
                var rut = document.getElementById("rutProveedor").value;
				var rutx=rut.replace("-","");
				var largo=rutx.length
				//console.log(largo,largo-1)
				var rut2=rutx.slice(0,largo-1)
				var rut3=rutx.slice(largo-1)
                //console.log(rut2+"-"+rut3)
				document.getElementById("rutProveedor").value=(rut2+"-"+rut3)
				
        },
        camposMail(){
            console.log(
            this.capacitacion.persona,
            this.capacitacion.tipo,
            this.capacitacion.lugar,
            this.capacitacion.observacion,
            this.capacitacion.fecha,
            this.capacitacion.hora        
            )
             
        },
        testMail(){
               var templateParams = {
                    usuario: this.capacitacion.persona,
                    lugar: this.capacitacion.lugar,
                    observacion: this.capacitacion.observacion,
                    fecha:this.capacitacion.fecha,
                    hora:this.capacitacion.hora
                };
                
                emailjs.send('service_7q45ogt', 'template_oalxnug', templateParams)
                    .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    }, function(error) {
                    console.log('FAILED...', error);
                    }); 
        },
        testMail2(){
               var templateParams = {
                    usuario: this.capacitacion.persona,
                    lugar: this.capacitacion.lugar,
                    //observacion: this.capacitacion.observacion,
                    fecha:this.capacitacion.fecha,
                    hora:this.capacitacion.hora
                };
                
                emailjs.send('service_7q45ogt', 'template_ipyic65', templateParams)
                    .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    }, function(error) {
                    console.log('FAILED...', error);
                    }); 
        }
        }
    }
</script>