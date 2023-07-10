<template>
    <div class="row justify-content-center">
        <img id="pdf" class="img-responsive" />
    </div>
</template>

<script>
    import { db } from "../firebaseDb";
import { storage } from "../firebaseDb";
import Swal from "sweetalert2";
import Vue from 'vue'
    import { BootstrapVue } from 'bootstrap-vue'
    Vue.use(BootstrapVue)
const ref = storage.ref();
    export default {
        data() {
            return {
                cheque: {
                },
                
            }
        },
        created() {
            var foto=(this.$route.params.id)
            console.log(foto)
             document.getElementById("pdf").src = "";
            //console.log(imagen);
            const refImg = ref
                .child("archivos/" + foto)
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
            /*
            let dbRef = db.collection('cheques').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                
                //this.cheque = doc.data();
                document.getElementById("rutF").value=doc.data().rutFacturacion
                document.getElementById("nDoc").value=doc.data().documento
                document.getElementById("rutT").value=doc.data().rut
                document.getElementById("nombreT").value=doc.data().nombreTitular
                document.getElementById("razonS").value=doc.data().razonSocial
                document.getElementById("monto").value=doc.data().monto
                document.getElementById("observacion").value=doc.data().observacion
            }).catch((error) => {
                console.log(error)
            })
            this.cargarCampos();*/
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('cheques').doc(this.$route.params.id)
                .update(this.cheque).then(() => {
                    console.log("Cheque actualizado");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
                this.subirImagen();
            },
            
           
        }
    }
</script>