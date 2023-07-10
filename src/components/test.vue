<template>
<div
        class="container-fluid col-md-10"
        style="
          background: rgb(248, 249, 250);
          border-radius: 10px;
          box-shadow: 5px 5px 5px 5px #999999;
        "
        id="contenedor"
      >
      <!--<div class="d-flex justify-content-center">
							<div class="row">
								<div class="col">
								<br>
								<img src="https://seguimiento.cmimbral.cl/assets/logo_tienda.png"  width="200" class="img-fluid" alt="Responsive image"><br>
								</div>
							</div>
							
                        </div>--><br>
  <div class="text-center section">
     <h3 class="text-center"><b>Calendario de Eventos</b></h3><br>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Revisa los proximos eventos
    </p>
    <v-calendar 
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
    
      <template v-slot:day-content="{ day, attributes }" > 
        <div class="flex flex-col h-full z-10 overflow-hidden" >
          <span class="day-label text-sm text-gray-900" >{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto" >
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              style="background-color:rgba(0,58,140,0.2); border-radius:8px"
              :class="attr.customData.class"
            >
              {{ attr.customData.title}}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div><br>
   </div>
</template>

<script>
import { db } from "../firebaseDb";
//import Vue from 'vue'
    import { BootstrapVue } from 'bootstrap-vue'
    Vue.use(BootstrapVue)
 var sd = require('silly-datetime');
import Vue from 'vue';
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'v',  // Use <vc-calendar /> instead of <v-calendar />
               // ...other defaults
});
export default {
  
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    console.log(month,year)
    
    return {
      masks: {
        weekdays: 'WWW',
      },
      attributes: [/*
        {
          key: 1,
          customData: {
            title: 'Lunch with mom.',
            class: 'bg-blue-500 ',
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: 'Take Noah to basketball practice',
            class: 'bg-blue-500 ',
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: 'bg-blue-500 ',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Take car to the shop',
            class: 'bg-indigo-500 ',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Meeting with new client.',
            class: 'bg-teal-500 ',
          },
          dates: new Date(2021, 11, 7),
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: 'bg-pink-500 ',
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: 'Cookout with friends.',
            class: 'bg-orange-500 ',
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: 'bg-pink-500 ',
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: 'Visit great grandma.',
            class: 'bg-red-600 ',
          },
          dates: new Date(year, month, 25),
        },*/
      ],

    };
   
    
  },

   created() {
    //document.getElementById("nav").style.display="block";
    this.usuario=localStorage.usuario;
    this.validarUsuario();
    //this.cargarVendedores();
    this.obtenerFecha();
    this.cargarEventos();
    /*
    var o =new Object();
          o.customData= {
            title: 'Lunch with mom.',
            class: 'bg-blue-500 ',
          },
          o.dates= new Date(2021, 10, 1),
  this.attributes.push(o)*/
   
    
  },
      methods:{
      cargarEventos(){
      var fecha=(this.año+this.mes+this.dia)
     db.collection('capacitaciones').where("frcapacitacion", ">=", fecha).onSnapshot((snapshot) => {
                this.attributes = [];
                if(snapshot.empty){
                   console.log("no")
                }else{
                    snapshot.forEach((doc) => {
                      console.log(doc)
                      var fecha1=doc.data().fecha.split("-")
                      var año=fecha1[2]
                      var mes=parseInt(fecha1[1])-parseInt(1)
                      var dia=fecha1[0]
                      console.log(año, mes, dia)
                      var o =new Object();
                                o.customData= {
                                  title: doc.data().persona+" - "+doc.data().nombreProveedor,
                                  class: 'bg-blue-500 ',
                                },
                                o.dates= new Date(año, mes, dia),
                        this.attributes.push(o)
/*
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
                    })*/
                    
                });
                }
               
          })
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
      }
};
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>