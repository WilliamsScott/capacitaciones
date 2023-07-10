
<template>

  <div>
    <nav class="navbar navbar-expand-lg " id="nav" style="font-family:'Montserrat', sans-serif; background-color:rgb(0,58,140);">
      <div class="container">
        <a class="navbar-brand float-left"><img src="https://seguimiento.cmimbral.cl/assets/img/logoSeguimiento.png" width="130" responsive></a>
        <ul class="nav navbar-nav flex-row float-right">
           <div>
  <b-nav  >
    <b-nav-item-dropdown
    toggle-class="text-light"
      id="my-nav-dropdown"
      text="Opciones"
      right
    >
      <b-dropdown-item><router-link class="nav-link pr-3" to="/registrar" style="color:black"><b>Registrar</b></router-link></b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item><router-link class="nav-link pr-3" to="/buscar" style="color:black"><b>Buscar</b></router-link></b-dropdown-item>
      <b-dropdown-item><router-link class="nav-link pr-3" to="/proximos" style="color:black"><b>Ver proximos</b></router-link></b-dropdown-item>
      
      
    </b-nav-item-dropdown>
  </b-nav>
</div>
          
        </ul>
                <div class="row">
                    <div class="col-sm-12">
                         <div class="form-group">
                        </div>
                        <div class="input-group mb-3">
                        <div class="input-group-append">
                         <span id="n1" style="color:white"></span>
                           <button  id="btnBuscar" class="btn btn-primary"   style="background-color:rgb(0,56,143); border-color:#003A8C"  @click="ingresar()"><b>{{nombreUsuario}}</b>  <i class="fas fa-sign-out-alt"></i></button>
                        </div>
                        </div>
                    </div>
                </div>




      </div>
     
      
		
    </nav>

    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
    import { BootstrapVue } from 'bootstrap-vue'
    Vue.use(BootstrapVue)
    
    export default {
        data() {
            return {
              nombreUser:localStorage.nombreUsuario,
              nombreUsuario:''
            }
        },
        created() {
          // this.verUsuario();
        },
        methods: {
            ingresar(){
              this.$router.push('/')
            },
            verUsuario(nombre){
              this.nombreUsuario=nombre;
            }
        }
    }
</script>
