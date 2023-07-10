<template>
  <div class="row">
    <div class="col">
      <div
        class="container-fluid col-md-10"
        style="
          background: rgb(248, 249, 250);
          border-radius: 10px;
          box-shadow: 5px 5px 5px 5px #999999;
        "
        id="contenedor"
      ><!--
      <div class="d-flex justify-content-center">
							<div class="row">
								<div class="col">
								<br>
								<img src="https://seguimiento.cmimbral.cl/assets/logo_tienda.png"  width="200" class="img-fluid" alt="Responsive image"><br>
								</div>
							</div>
							
                        </div>--><br>
            <h3 class="text-center"><b>Buscar Eventos</b></h3><br>
         
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col">
<label>Buscar por</label>
                    <select class="form-select" aria-label="Default select example" id="busqueda" @change="cambio()" style="border-color: rgb(237, 126, 37);">
                     <option value="1">Próximos eventos</option>
                      <option value="2">Rango de fechas</option>
                      </select><br><br>
          </div>
        </div>
        
      </div>
         <div class="d-flex justify-content-center">
							<div id="bFecha" style="display:none">
							<div class="row">
							<div class="col-sm-5">
								<label ><strong>Fecha desde</strong></label><br>
								<input type="date" class="form-control" id="fecha1f" style=" border: solid 1px; border-radius: 5px;border-color:rgb(237,126,37) "/>
								
							</div>
                            <div class="col-sm-5">
								<label ><strong>Fecha hasta</strong></label><br>
								<input type="date" class="form-control" id="fecha2f" style=" border: solid 1px; border-radius: 5px; border-color:rgb(237,126,37)"/>
                            </div>
								
								<div class="col-sm"><label><strong>Buscar</strong></label><br>
										<button type="submit"  id="btnBuscar" class="btn btn-primary" @click="buscarFecha()"  style="background-color:rgb(0,56,143); border-color:rgb(237,126,37)"><i class="fas fa-search"></i></button>
								</div>
                        </div><br><br>
							
						</div>	
        </div>



        <table class="table table-striped table-responsive" style="display:block" id="tabla1">
           <thead style="background-color:rgb(0,58,140);color:white">
            <tr>
              <th>Proveedor</th>
              <th>Comprador</th>
              <th>Tipo</th>
              <th>Participantes</th>
              <th>Lugar</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Observacion</th>
              <th>Imagen</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="capacitacion in Capacitaciones" :key="capacitacion.key">
              <td>{{ capacitacion.nombreProveedor }}</td>
              <td>{{ capacitacion.persona }}</td>
               <td>{{ capacitacion.tipo }}</td>
              <td>{{ capacitacion.participantes }}</td>
              <td>{{ capacitacion.lugar }}</td>
              <td>{{ capacitacion.fecha }}</td>
              <td>{{ capacitacion.hora }}</td>
              <td>{{ capacitacion.observacion }}</td>
              <td v-if="capacitacion.imagen!='NO'">
                <router-link :to="{name: 'edit', params: { id: capacitacion.imagen }}" class="btn btn-success btn-sm" style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "><i class="far fa-image fa-2x"></i>
                </router-link>
              </td>
              <td v-else>
                <router-link :to="{name: 'asignarimagen', params: { id: capacitacion.key }}" >
                   <h6 style="color:#ED7E25"><b>ASIGNAR</b> </h6>
                </router-link>
              </td>
              <td>
                <b-button  
                
                  type="button"
                  
                  class="btn btn-success btn-sm"
                  style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "
                  @click="cargarDatos(capacitacion.key,capacitacion.nombreProveedor,capacitacion.persona,capacitacion.participantes,capacitacion.lugar,capacitacion.fecha,capacitacion.hora,capacitacion.observacion,capacitacion.relator,capacitacion.usuarioRegistro)"
                >
                  <i class="far fa-edit fa-2x"></i>
                </b-button>
              </td>
              <td>
                <button
                  type="button"
                  
                  class="btn btn-success btn-sm"
                  style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "
                  @click="eliminar(capacitacion.key,capacitacion.usuarioRegistro)"
                >
                 <i class="far fa-trash-alt fa-2x"></i>
                </button>
              </td>
              
             <!-- <td>{{ guia.nombreProveedor }}</td>
              <td>{{ guia.oc }}</td>
              <td>{{ guia.nbultos }}</td>
              <td>{{ guia.npallet }}</td>
              <td>{{ guia.fecha}}</td>
              <td>{{ guia.observacion }}</td>
              <td v-if="guia.imagen!=null && guia.imagen!=''">
                <router-link :to="{name: 'edit', params: { id: guia.imagen }}" class="btn btn-success btn-sm" style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "><i class="far fa-image fa-2x"></i>
                </router-link>
              </td>
              <td v-else>
                <h6 style="color:#ED7E25"><b>NO</b> </h6>
              </td>
              <td v-if="guia.prioridad=='NO'">-->
                <!--<router-link :to="{name: 'edit', params: { id: cheque.key }}" class="btn btn-success btn-sm" style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "
                ><i class="far fa-edit fa-2x"></i>
                            </router-link>-->
                <!--<b-button v-b-modal.modal-1 
                
                  type="button"
                  
                  class="btn btn-success btn-sm"
                  style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "
                  @click="cargarDatos(cheque.key,cheque.rutFacturacion,cheque.documento,cheque.rut,cheque.nombreTitular,cheque.razonSocial,cheque.monto,cheque.observacion)"
                >
                  <i class="far fa-edit fa-2x"></i>
                </b-button>
                <b-button 
                  type="button"
                  
                  class="btn btn-success btn-sm"
                  style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "
                  @click="editar(guia.key)"
                >
                  Marcar prioridad
                </b-button>
              </td>
               <td v-else>
                   <h6 style="color:green"><b>SÍ</b> </h6>
                </td>-->
            </tr>
          </tbody>
        </table>
        <br>

        <table class="table table-striped table-responsive" style="display:none" id="tabla2">
           <thead style="background-color:rgb(0,58,140);color:white">
            <tr>
              <th>Proveedor</th>
              <th>Comprador</th>
              <th>Tipo</th>
              <th>Participantes</th>
              <th>Lugar</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Observacion</th>
              <th>Imagen</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="capacitacion in Capacitaciones2" :key="capacitacion.key">
              <td>{{ capacitacion.nombreProveedor }}</td>
              <td>{{ capacitacion.persona }}</td>
               <td>{{ capacitacion.tipo }}</td>
              <td>{{ capacitacion.participantes }}</td>
              <td>{{ capacitacion.lugar }}</td>
              <td>{{ capacitacion.diaF }}-{{ capacitacion.mesF }}-{{ capacitacion.añoF }}</td>
              <td>{{ capacitacion.hora }}</td>
              <td>{{ capacitacion.observacion }}</td>
              <td v-if="capacitacion.imagen!='NO'">
                <router-link :to="{name: 'edit', params: { id: capacitacion.imagen }}" class="btn btn-success btn-sm" style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "><i class="far fa-image fa-2x"></i>
                </router-link>
              </td>
              <td v-else>
                <router-link :to="{name: 'asignarimagen', params: { id: capacitacion.key }}" >
                   <h6 style="color:#ED7E25"><b>ASIGNAR</b> </h6>
                </router-link>
              </td>
              <td>
                <b-button v-b-modal.modal-1 
                
                  type="button"
                  
                  class="btn btn-success btn-sm"
                  style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "
                  @click="cargarDatos(capacitacion.key,capacitacion.nombreProveedor,capacitacion.persona,capacitacion.participantes,capacitacion.lugar,capacitacion.fecha,capacitacion.hora,capacitacion.observacion,capacitacion.relator)"
                >
                  <i class="far fa-edit fa-2x"></i>
                </b-button>
              </td>
              <td>
                <button
                  type="button"
                  
                  class="btn btn-success btn-sm"
                  style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "
                  @click="eliminar(capacitacion.key)"
                >
                 <i class="far fa-trash-alt fa-2x"></i>
                </button>
              </td>
              
             <!-- <td>{{ guia.nombreProveedor }}</td>
              <td>{{ guia.oc }}</td>
              <td>{{ guia.nbultos }}</td>
              <td>{{ guia.npallet }}</td>
              <td>{{ guia.fecha}}</td>
              <td>{{ guia.observacion }}</td>
              <td v-if="guia.imagen!=null && guia.imagen!=''">
                <router-link :to="{name: 'edit', params: { id: guia.imagen }}" class="btn btn-success btn-sm" style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "><i class="far fa-image fa-2x"></i>
                </router-link>
              </td>
              <td v-else>
                <h6 style="color:#ED7E25"><b>NO</b> </h6>
              </td>
              <td v-if="guia.prioridad=='NO'">-->
                <!--<router-link :to="{name: 'edit', params: { id: cheque.key }}" class="btn btn-success btn-sm" style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "
                ><i class="far fa-edit fa-2x"></i>
                            </router-link>-->
                <!--<b-button v-b-modal.modal-1 
                
                  type="button"
                  
                  class="btn btn-success btn-sm"
                  style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "
                  @click="cargarDatos(cheque.key,cheque.rutFacturacion,cheque.documento,cheque.rut,cheque.nombreTitular,cheque.razonSocial,cheque.monto,cheque.observacion)"
                >
                  <i class="far fa-edit fa-2x"></i>
                </b-button>
                <b-button 
                  type="button"
                  
                  class="btn btn-success btn-sm"
                  style="
                    background-color: rgb(0, 56, 143);
                    color: white;
                    border-color: rgb(237, 126, 37);
                  "
                  @click="editar(guia.key)"
                >
                  Marcar prioridad
                </b-button>
              </td>
               <td v-else>
                   <h6 style="color:green"><b>SÍ</b> </h6>
                </td>-->
            </tr>
          </tbody>
        </table><br>  

        <img id="pdf" width="1%" height="1px"/>
      </div>
    </div>
    <div>


  <b-modal id="modal-1" hide-footer hide-header >
    
    <div class="d-block text-center">
      <h3><b>Editar Capacitación</b></h3><br>
      
                <input type="text" id="key" v-model="key" class="form-control" placeholder="Ingrese RUT facturación" style="display:none"  >
                         
                <div class="row">
                
                    <div class="col-sm-6">
                        <div class="form-group">
                        <label>Proveedor</label>
                        <input type="text" id="rutF" v-model="proveedor" class="form-control" placeholder="Ingrese proveedor" style="border-color:rgb(237,126,37)"   required>
                         </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                        <label>Relator</label>
                        <input type="text" id="nDoc" v-model="relator" class="form-control" placeholder="Ingrese n° documento" style="border-color:rgb(237,126,37)"  required>
                        </div>
                    </div>
                    
                    
                </div><br>
                
                <div class="row">
                     <div class="col-sm-6">
                        <div class="form-group">
                        <label>Fecha</label>
                       <div class="input-group mb-3">
                         <input type="date" id="fecha" v-model="fecha" @change="verFecha()" class="form-control" style="border-color:rgb(237,126,37)"   required>
                        
                        </div>
                        </div>
                        
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                        <label>Hora</label>
                        <input type="time" id="hora" v-model="hora" class="form-control" style="border-color:rgb(237,126,37)"  required>
                        </div>
                    </div>
                    
                    
                </div><br>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                        <label>Lugar</label>
                        <input type="text" id="razonS" v-model="lugar" class="form-control" placeholder="Ingrese nombre" style="border-color:rgb(237,126,37)"  required>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label>Participantes</label>
                          <input type="text" id="participantes" v-model="participantes" class="form-control" placeholder="Ingrese nombre" style="border-color:rgb(237,126,37)"  required>
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                        <label>Persona a cargo</label>
                        <input type="text" id="razonS" v-model="persona" class="form-control" placeholder="Ingrese persona" style="border-color:rgb(237,126,37)"  required>
                        </div>
                    </div>
                </div><br>
                <div class="row">
                    <div class="form-group">
                        <label for="observacion">Observacion</label>
                        <textarea class="form-control" id="observacion" v-model="observacion" rows="3"  style="border-color:rgb(237,126,37)"></textarea><br>
                    </div>
                </div>
               <!-- <div class="row" >
                    <div class="col-sm-6">
                        <input style="border-color:rgb(237,126,37)" @change="clickImagen($event)" type="file" accept="image/*" >
                    </div>

                </div>--><br>

                
                <div class="d-flex justify-content-center">
                    <div class="form-group">
                        <button class="btn btn-primary btn-block" @click="editar()" style="background-color: rgb(0, 56, 143); color: white; border-color: rgb(237, 126, 37);">Editar</button><br><br>
                    </div>
                </div>

    </div>

  </b-modal>
</div>
  </div>
  
</template>

<script>
import { db } from "../firebaseDb";
import { storage } from "../firebaseDb";
import Swal from "sweetalert2";
import Vue from 'vue'
    import { BootstrapVue } from 'bootstrap-vue'
    Vue.use(BootstrapVue)
      var sd = require('silly-datetime');
const ref = storage.ref();

export default {
  data() {
    return {
      Capacitaciones: [],
      Capacitaciones2: [],
      vendedores:[],
      editado:[],
      chequeEditado:[],
      observacion:'',
      key:'',
      rutFacturacion:'',
      documento:'',
      rut:'',
      nombreTitular:'',
      razonSocial:'',
      monto:'',
      usuario:'',
      capacitacionEditada:[],
      proveedor:'',
      relator:'',
      fecha:'',
      hora:'',
      lugar:'',
      participantes:'',
      persona:'',

      semanaFecha:'',
      bultosTotales:'',
      palletsTotales:0,
      guiaPrioridad:[],
    };
  },
  created() {
    document.getElementById("nav").style.display="block";
    this.usuario=localStorage.usuario;
    this.validarUsuario();
    //this.cargarVendedores();
    this.obtenerFecha();
    this.cargarEventos();
   
    
  },
  methods: {
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
                    var x= parseInt(result)-parseInt(1)
                    console.log("semana:"+x)   
                    this.semanaFecha=x;
                    this.contarSemana(x)
                }else{
                    console.log("semana:"+result)  
                    this.semanaFecha=result;
                    this.contarSemana(result)
                }
                //console.log(result)
                //this.contarSemana(result)
            },
    cargarVendedores(){
              //  var vendedor = document.getElementById("vendedores")
                db.collection('usuarios').where("tipo", "==", 1).onSnapshot((snapshotChange) => {
                this.vendedores = [];
                snapshotChange.forEach((doc) => {
                    var option = document.createElement("option")
                    option.value = doc.data().rut,
                    option.innerHTML = doc.data().nombre,
                    document.getElementById("vendedor").appendChild(option)
                    /*this.vendedores.push({
                        key: doc.id,
                        nombre: doc.data().nombre,
                        rut: doc.data().rut,
                        
                    })*/
                });
            })
            },
    eliminar(id,usuario) {
      var user=localStorage.usuario;
      console.log(usuario,user)
      if(user==usuario){
        if (window.confirm("Realmente deseas eliminar el registro?")) {
        db.collection("capacitaciones")
          .doc(id)
          .delete()
          .then(() => {
            Swal.fire({
            title: "Listo",
            text: "Registro eliminado",
            icon: "success",
          });
          })
          .catch((error) => {
            console.error(error);
          });
      }
      }else{
        Swal.fire({
            title: "Error",
            text: "Sólo el usuario que registró el evento puede eliminarlo",
            icon: "error",
          });
      }
      
    },
    verArchivo(imagen) {
      console.log(imagen);
      document.getElementById("pdf").src = "";
      console.log(imagen);
      const refImg = ref
        .child("archivos/" + imagen)
        .getDownloadURL()
        .then(function (url) {
          console.log(refImg);

          var img = document.getElementById("pdf");
          img.src = url;
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire({
            title: "Error",
            text: "No hay imagen asociada",
            icon: "error",
          });
        });
    },
    cambio(){
     var busqueda=document.getElementById("busqueda").value;
      console.log(busqueda)
      if(busqueda=="1"){
        this.Guias=[];
          document.getElementById("bFecha").style.display="none";
          document.getElementById("tabla2").style.display="none";
          document.getElementById("tabla1").style.display="block";
          this.cargarEventos();
          //this.buscarDocumento();
      }else if(busqueda=="2"){
        this.Guias=[];
        document.getElementById("bFecha").style.display="block";
        document.getElementById("tabla2").style.display="block";
        document.getElementById("tabla1").style.display="none";
        
      }

    },

    buscarFecha(){
       // this.bultosTotales=0
      //  this.palletsTotales=0
      console.log("a")
        var fecha1= document.getElementById("fecha1f").value;
        var fecha2= document.getElementById("fecha2f").value;
       
                var fecha12=fecha1.split("-");
                var año=fecha12[0]
                var mes=fecha12[1]
                var dia=fecha12[2]
                var fechaF1=año+""+mes+""+dia;

                var fecha22=fecha2.split("-");
                var año2=fecha22[0]
                var mes2=fecha22[1]
                var dia2=fecha22[2]
                var fechaF2=año2+""+mes2+""+dia2;
         db.collection('capacitaciones').where("frcapacitacion", ">=", fechaF1).where("frcapacitacion", "<=", fechaF2).orderBy('frcapacitacion', 'asc').orderBy('hora', 'asc').onSnapshot((snapshotChange) => {
                this.Capacitaciones2 = [];
                if(snapshotChange.empty){
                  Swal.fire({
                      title: "Error",
                      text: "No se encontraron registros",
                      icon: "error",
                    });
                }else{
                  this.largo=(snapshotChange.docs.length)
                    snapshotChange.forEach((doc) => {
                    var fecha1=doc.data().fecha.split("-");
                    this.Capacitaciones2.push({
                        key: doc.id,
                        nombreProveedor: doc.data().nombreProveedor,
                        persona: doc.data().persona,
                        relator: doc.data().relator,
                        participantes: doc.data().participantes,
                        lugar: doc.data().lugar,
                        observacion: doc.data().observacion, 
                        hora: doc.data().hora,
                        fecha: doc.data().fecha,
                        diaF:fecha1[2],
                        mesF:fecha1[1],
                        añoF:fecha1[0],
                        imagen: doc.data().imagen,
                        tipo: doc.data().tipo,
                        usuarioRegistro: doc.data().usuarioRegistro,
                    })
                    //this.bultosTotales=parseInt(this.bultosTotales) +parseInt(doc.data().nbultos)
                    //this.palletsTotales=parseInt(this.palletsTotales) +parseInt(doc.data().npallet)
                });
                }
               
          })
    },


  contarSemana(result){
            var docRef = db.collection("capacitaciones").where("semanaFecha", "==", result);
            docRef.get().then(doc => {
                console.log(doc.docs.length)
                var largo=doc.docs.length
                if(largo>=2){
                        Swal.fire({
                        title: "Aviso",
                        text: "Ya existen dos capacitaciones agendadas para esta semana",
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



    buscarDocumento(){
        
       // var documento= document.getElementById("numero").value;
         db.collection('capacitaciones').where("fr", "==", '20211029').onSnapshot((snapshotChange) => {
                this.Capacitaciones = [];
                if(snapshotChange.empty){
                   Swal.fire({
                      title: "Error",
                      text: "No se encontraron capacitaciones",
                      icon: "error",
                    });
                }else{
                    snapshotChange.forEach((doc) => {
                    this.Capacitaciones.push({
                        key: doc.id,
                        nguia: doc.data().nguia,
                        nombreProveedor: doc.data().nombreProveedor,
                        oc: doc.data().oc,
                        nbultos: doc.data().nbultos,
                        npallet: doc.data().npallet,
                        observacion: doc.data().observacion, 
                        imagen: doc.data().imagen,
                        fecha: doc.data().fecha+" "+doc.data().hora,
                        prioridad: doc.data().prioridad,
                        
                    })
                    this.bultosTotales=parseInt(this.bultosTotales) +parseInt(doc.data().nbultos)
                   this.palletsTotales=parseInt(this.palletsTotales) +parseInt(doc.data().npallet)
                });
                }
                //this.calcularTotales()
               
          })
    },
    obtenerFecha(){
            this.fecha=sd.format(new Date(), 'DD-MM-YYYY');
            this.dia=(sd.format(new Date(), 'DD'))
            this.mes=(sd.format(new Date(), 'MM'))
            this.año=(sd.format(new Date(), 'YYYY'))
            this.hora=sd.format(new Date(), 'HH:mm');
        },
    calcularTotales(){
        var data=this.Guias;
        data.forEach(function(dato){
            console.log(dato.nbultos)
            //this.bultosTotales=dato;
            //this.calcularTotales2(dato.nbultos)
            /*this.bultosTotales=parseInt( this.bultosTotales)+parseInt(dato.nbultos) 
            console.log(this.bultosTotales)*/
        })
    },
    calcularTotales2(bultos){
        this.bultosTotales=parseInt( this.bultosTotales)+parseInt(bultos) 
        console.log(this.bultosTotales)
        
    },

   

/*
    async cargarEventos(){
      var fecha=(this.año+this.mes+this.dia)
      const citiesRef = db.collection('capacitaciones').where("frcapacitacion", ">=", fecha);
      const snapshot = await citiesRef.get();
      snapshot.forEach(doc => {
       // console.log(doc.id, '=>', doc.data());
        this.Capacitaciones.push({
                        key: doc.id,
                        nombreProveedor: doc.data().nombreProveedor,
                        persona: doc.data().persona,
                        relator: doc.data().relator,
                        participantes: doc.data().participantes,
                        lugar: doc.data().lugar,
                        observacion: doc.data().observacion, 
                        hora: doc.data().hora,
                        fecha: doc.data().fecha,
                        imagen: doc.data().imagen,
                        tipo: doc.data().tipo,
                    })
      });
      /*
      const cityRef = db.collection('capacitaciones');
      const doc = await cityRef.get();
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
      }*/
     /*
       
        var docRef = db.collection("capacitaciones")//.where("frcapacitacion", ">=", fecha);
            docRef.get().then(docRef => {
                console.log(docRef)
                
            }).catch(function(error) {
            console.log("Error getting document:", error);
                    });*/
/*
         db.collection('capacitaciones').where("frcapacitacion", ">=", fecha).onSnapshot((snapshot) => {
                this.Capacitaciones = [];
                if(snapshot.empty){
                   console.log("no")
                }else{
                    snapshot.forEach((doc) => {
                     this.Capacitaciones.push({
                        key: doc.id,
                        nombreProveedor: doc.data().nombreProveedor,
                        persona: doc.data().persona,
                        relator: doc.data().relator,
                        participantes: doc.data().participantes,
                        lugar: doc.data().lugar,
                        observacion: doc.data().observacion, 
                        hora: doc.data().hora,
                        fecha: doc.data().fecha,
                        imagen: doc.data().imagen,
                        tipo: doc.data().tipo,
                    })
                    
                });
                }
               
          })*/
   // },
   cargarEventos(){
      var fecha=(this.año+this.mes+this.dia)
     db.collection('capacitaciones').where("frcapacitacion", ">=", fecha).onSnapshot((snapshot) => {
                this.Capacitaciones = [];
                if(snapshot.empty){
                   console.log("no")
                }else{
                    snapshot.forEach((doc) => {
                     this.Capacitaciones.push({
                        key: doc.id,
                        nombreProveedor: doc.data().nombreProveedor,
                        persona: doc.data().persona,
                        relator: doc.data().relator,
                        participantes: doc.data().participantes,
                        lugar: doc.data().lugar,
                        observacion: doc.data().observacion, 
                        hora: doc.data().hora,
                        fecha: doc.data().fecha,
                        imagen: doc.data().imagen,
                        tipo: doc.data().tipo,
                        usuarioRegistro: doc.data().usuarioRegistro,
                    })
                    
                });
                }
               
          })
   },
    buscarRut(){
       var rut= document.getElementById("rut").value;
       var fecha1= document.getElementById("fecha1RUT").value;
       var fecha2= document.getElementById("fecha2RUT").value;
       
                var fecha12=fecha1.split("-");
                var año=fecha12[0]
                var mes=fecha12[1]
                var dia=fecha12[2]
                var fechaF1=dia+"-"+mes+"-"+año;

                var fecha22=fecha2.split("-");
                var año2=fecha22[0]
                var mes2=fecha22[1]
                var dia2=fecha22[2]
                var fechaF2=dia2+"-"+mes2+"-"+año2;
         db.collection('cheques').where("rutFacturacion", "==", rut).where("fecha", ">=", fechaF1).where("fecha", "<=", fechaF2).orderBy('fecha', 'desc').orderBy('hora', 'desc').onSnapshot((snapshotChange) => {
                this.Cheques = [];
                if(snapshotChange.empty){
                  Swal.fire({
                      title: "Error",
                      text: "No se encontraron cheques",
                      icon: "error",
                    });
                }else{
                    this.largo=(snapshotChange.docs.length)
                    snapshotChange.forEach((doc) => {
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
                        fecha: doc.data().fecha+" "+doc.data().hora,
                    })
                });
                }
               
          })
    },


    buscarRazon(){
       var razon= document.getElementById("razon").value.toUpperCase() ;
       var fecha1= document.getElementById("fecha1Razon").value;
       var fecha2= document.getElementById("fecha2Razon").value;
       
                var fecha12=fecha1.split("-");
                var año=fecha12[0]
                var mes=fecha12[1]
                var dia=fecha12[2]
                var fechaF1=dia+"-"+mes+"-"+año;

                var fecha22=fecha2.split("-");
                var año2=fecha22[0]
                var mes2=fecha22[1]
                var dia2=fecha22[2]
                var fechaF2=dia2+"-"+mes2+"-"+año2;
         db.collection('cheques').where("razonSocial", "==", razon).where("fecha", ">=", fechaF1).where("fecha", "<=", fechaF2).orderBy('fecha', 'desc').orderBy('hora', 'desc').onSnapshot((snapshotChange) => {
                this.Cheques = [];
                if(snapshotChange.empty){
                   Swal.fire({
                      title: "Error",
                      text: "No se encontraron cheques",
                      icon: "error",
                    });
                }else{
                    snapshotChange.forEach((doc) => {
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
                        fecha: doc.data().fecha+" "+doc.data().hora,
                    })
                });
                }
               
          })
    },
   
    cargarDatos(key,nombreProveedor,persona,participantes,lugar,fecha,hora,observacion,relator,usuarioRegistro){
      var user=localStorage.usuario;
      console.log(usuarioRegistro,user)
      if(user==usuarioRegistro){
        this.key=key;
        this.proveedor=nombreProveedor;
        this.relator=relator;
        this.participantes=participantes;
        this.lugar=lugar;
        var f1=fecha.split("-")
        var año=f1[2]
        var mes=f1[1]
        var dia=f1[0]
        this.fecha=año+"-"+mes+"-"+dia;
        this.persona=persona;
        this.hora=hora;
        this.observacion=observacion;
        this.$bvModal.show("modal-1")
      }else{

        console.log("Error");
                          Swal.fire({
                          title: "Error",
                          text: "Sólo el usuario que registró el evento puede editarlo",
                          icon: "error",
                        })
      }
    },
    editar() {
      console.log(this.persona)
        if(confirm("Deseas editar la capacitación?")){
            var capacitacionEditada = new Object();
								capacitacionEditada.key=this.key;
                capacitacionEditada.nombreProveedor=this.proveedor;
                capacitacionEditada.relator=this.relator;
                capacitacionEditada.participantes=this.participantes;
                capacitacionEditada.lugar=this.lugar;
                //console.log(this.fecha)
               // capacitacionEditada.fecha=this.fecha;
                capacitacionEditada.semanaFecha=this.fecha;
                capacitacionEditada.hora=this.hora;
                capacitacionEditada.persona=this.persona;
                capacitacionEditada.observacion=this.observacion;
                var fecha12=this.fecha.split("-");
                var año=fecha12[0]
                var mes=fecha12[1]
                var dia=fecha12[2]
                var fechaF1=año+mes+dia;
                capacitacionEditada.frcapacitacion=fechaF1;
                capacitacionEditada.fecha=dia+"-"+mes+"-"+año
								this.capacitacionEditada.push(capacitacionEditada)
                this.editar2();
               // this.editarTest();
        }
               
    },
    editar2(){
       var data=this.capacitacionEditada;
                data.forEach((doc) => {
                  console.log(doc)
                    db.collection('capacitaciones').doc(doc.key)
                    .update(doc).then(() => {
                        console.log("LISTO");
                          Swal.fire({
                          title: "Listo",
                          text: "Evento editado",
                          icon: "success",
                        })
                        //this.capacitacionEditada=[];
                        this.$bvModal.hide("modal-1")
                        //this.camposMail()
                    }).catch((error) => {
                        console.log(error);
                    });
                });      
    },

     camposMail(){
          console.log(this.capacitacionEditada[0].persona+" ha modificado el evento registrado de "+this.capacitacionEditada[0].nombreProveedor)
       /*
            console.log(
            this.capacitacion.persona,
            this.capacitacion.tipo,
            this.capacitacion.lugar,
            this.capacitacion.observacion,
            this.capacitacion.fecha,
            this.capacitacion.hora        
            )    */
    },




    editarTest(){
      console.log(this.capacitacionEditada)
       var data=this.capacitacionEditada;
                data.forEach((dato) => {
                  console.log(dato)
                  
                      db.collection('capacitaciones').doc(dato.key).set({
                            relator: this.capacitacionEditada[0].relator,
                            fecha: this.capacitacionEditada[0].fecha,
                            hora: this.capacitacionEditada[0].hora,
                            lugar: this.capacitacionEditada[0].lugar,
                            nombreProveedor: this.capacitacionEditada[0].proveedor,
                            participantes: this.capacitacionEditada[0].participantes,
                            frcapacitacion: this.capacitacionEditada[0].frcapacitacion,
                            persona: this.capacitacionEditada[0].persona,
                            observacion: this.capacitacionEditada[0].observacion,

                        },
                         { merge: true });    
                });

    },
    validarUsuario(){
            if(this.usuario==undefined || this.usuario=="X"){
                this.$router.push('/')
            }
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
    
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>