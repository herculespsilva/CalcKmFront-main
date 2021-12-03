<template>
    <div>
        <form @submit.prevent="cadastrar">
            <h2>Formulario</h2>
            <p>
                <label for="modelo">Modelo do veiculo: </label>
                <input type="text" id="modelo" 
                required autofocus 
                v-model="modelo">
            </p>
            <p>
                <label for="valor_automovel">Valor R$: </label>
                <input type="text" id="valor_automovel" 
                required 
                v-model="valor_automovel">
            </p>
            <p>
                <label for="depreciacao">Depreciacao: </label>
                <input type="text" id="depreciacao" 
                required 
                v-model="depreciacao">
            </p>
            <button type="submit">Salvar</button>
            
        </form>

      <div>
        <button type="submit" @click="getFormInfo">Sincronizar</button>
      </div>

        <br>

        <table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Valor</th>
                    <th>Depreciacao</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="form in formularios" :key="form.id">
                    <td>{{ form.modelo }}</td>
                    <td>{{ form.valor_automovel }}</td>
                    <td>{{ form.depreciacao }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import axios from 'axios';
import { mapState } from 'vuex';

export default {
    name: 'anotacoes',
    data(){
        return {
            modelo: '',
            valor_automovel: '',
            depreciacao: '',
            formularios: []
        }
    },
    computed: {
        ...mapState([
            'usuario',
            'senha'
        ])
    },
    methods: {
        cadastrar() {
            axios.post('formulario',
            {
                modelo: this.modelo,
                valor_automovel: this.valor_automovel,
                depreciacao: this.depreciacao,
                usuario:{nome:this.usuario}
            }
            )
            .then(res => {
                console.log(res);
                this.modelo = '';
                this.valor_automovel = '';
                this.depreciacao = '';
                this.formularios.push(res.data);
            })
            .catch(error => console.log(error))
        },
        getFormInfo() {
            axios.get("usuario/nome?nome=" + this.usuario, {
                headers: { Accept: "application/json" }
                })
                .then((res) => {
                    
                this.formularios.push(res.data);
                console.log(res);
                })
                .catch((error) => console.log(error));
            }
    }
}
</script>