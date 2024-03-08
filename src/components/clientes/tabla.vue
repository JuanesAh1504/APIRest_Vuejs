<template>
    <div>
        <Nuevo :dialog="dialog" @dialog="dialog = $event" :Item="itemSelected"/>
        <h1>{{ Titulo }}</h1>
        <v-btn
            color="primary"
            dark
            class="mb-2"
            v-bind="attrs"
            v-on="on"
            @click="nuevoItem()"
        >Nuevo</v-btn>
        <v-data-table
        :headers="Cabecera"
        :items="Items"
        :items-per-page="5"
        class="elevation-1"
        >
        <template v-slot:[`item.actions`]="{item}">
            <v-icon
            small
            class="mr-2"
            @click="editarItem(item)"
            >
            mdi-pencil
            </v-icon>
            <v-icon
            small
            class="mr-2"
            @click="eliminar(item)"
            >
            mdi-delete
            </v-icon>
        </template>
        </v-data-table>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';
    import Nuevo from './nuevo.vue';
    export default {
        props: ['Titulo', 'Cabecera', 'Items'],
        components:{
            Nuevo
        },
        data() {
            return {
                search: '',
                dialog: false,
                itemSelected:{
                    
                }
            }
        },
        methods: {
            ...mapActions('clientes', ['eliminarCliente']),
            nuevoItem(){
                this.itemSelected={
                    id: 0,
                    nombre: '',
                    edad: 0,
                    profesion: ''
                }
                this.dialog = true
            },
            editarItem(item){
                this.itemSelected = item;
                this.dialog = true

            },
            eliminar(item) {
                this.$alertify.confirm(
                    '¿Desea eliminar el registro de '+item.nombre+'?',
                    () => {
                            this.eliminarCliente(item);
                            this.$alertify.success('Item eliminado')
                        },
                    () => this.$alertify.error('Se canceló la acción')
                );
            }
        }
    }
</script>
