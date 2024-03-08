<template>
  <div>
    <h1 class="text-center">
      IMÁGENES
    </h1>
    <imagen :items="Items"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import imagen from '@/components/imagen.vue'

export default {
  name: "Imagenes",
  components: {
    imagen
  },
  created(){
    this.cargarImagenes();  
  },
  data(){
    return{
      
    }
  },
  methods:{
    ...mapActions('imagenes', ['cargarImagenes'])
  },
  computed:{
    ...mapGetters('imagenes', ['Items'])
  }
}
</script>
