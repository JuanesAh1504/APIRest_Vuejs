<template>
    <div>
        <v-alert :type="type">
            {{ mensaje }}
        </v-alert>
        <v-btn color="error" @click="salir()">Cerrar</v-btn>
    </div>
</template>

<script>
export default {
    props: ['type', 'mensaje'],

    methods:{
        salir(){
            this.$emit('visible',false)
        }
    }
}
</script>
