<template>
    <div class="pa-4 text-center">
      <v-dialog
        v-model="dialog"
        max-width="600"
      >
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            class="text-none font-weight-regular"
            prepend-icon="mdi-account"
            text="Edit Profile"
            variant="tonal"
            v-bind="activatorProps"
          ></v-btn>
        </template>
  
        <v-card
        >
        <v-card-title>
            <span v-if="Item.id == 0" class="text-h5">Nuevo cliente</span>
            <span v-else class="text-h5">Editar cliente</span>
        </v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Nombre*"
                  v-model="Item.nombre"
                  required
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Edad"
                  v-model="Item.edad"

                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Profesión"
                  v-model="Item.profesion"

                  required
                ></v-text-field>
              </v-col>
  
              
            </v-row>
  
            <small class="text-caption text-medium-emphasis">*Indica los campos requeridos</small>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
            color="blue darken-1"
            text
            @click="cerrarDialog()"
            >Cerrar</v-btn>
  
            <v-btn
              color="primary"
              text
              @click="agregar()"
            >Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
<script>
import {mapActions} from 'vuex'
export default {
props: ['dialog', 'Item'],
data(){
    return{

    }
},
methods:{
    ...mapActions('clientes', ['agregarCliente']),
    agregar(){
        this.$alertify.confirm(
            (this.Item.id == 0 ? '¿Desea agregar item?' : '¿Desea editar item?'),
            () => {
                    this.agregarCliente(this.Item);
                    this.cerrarDialog();
                    this.$alertify.success(this.Item.id == 0 ? 'Item agregado' : 'Item actualizado')
                },
            () => this.$alertify.error('Se canceló la acción')
        );
        
    },
    cerrarDialog(){
        this.$emit('dialog', false)
    }
}
}
</script>