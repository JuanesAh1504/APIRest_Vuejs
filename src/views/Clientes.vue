<template>
    <div>
        <h1 class="text-center">CLIENTES</h1>
        <tabla Titulo="Clientes" :Cabecera="Cabecera" :Items="Items.body"/>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
    import tabla from '@/components/clientes/tabla'
    export default{
        name: "CLIENTES",
        components:{
            tabla,
        },
        created(){
            this.cargarClientes()
        },
        data(){
            return {
                Cabecera: [
                    {text: 'ID', value: 'id'},
                    {text: 'Nombre', value: 'nombre'},
                    {text: 'Edad', value: 'edad'},
                    {text: 'Profesión', value: 'profesion'},
                    {text: 'Acciones', value: 'actions'},
                    
                ]
            }
        },
        methods:{
            ...mapActions('clientes', ['cargarClientes'])
        },
        computed:{
            ...mapGetters('clientes', ['Items'])
        }
    }
</script>