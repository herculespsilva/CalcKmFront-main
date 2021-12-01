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
                <label for="valor">Valor R$: </label>
                <input type="text" id="valor" 
                required 
                v-model="valor">
            </p>
            <p>
                <label for="depreciacao">Depreciacao: </label>
                <input type="text" id="depreciacao" 
                required 
                v-model="depreciacao">
            </p>
            <button type="submit">Salvar</button>
        </form>

        <br>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Modelo</th>
                    <th>Valor</th>
                    <th>Depreciacao</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="form in formularios" :key="form.id">
                    <td>{{ form.id }}</td>
                    <td>{{ form.modelo }}</td>
                    <td>{{ form.valor }}</td>
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
            valor: '',
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
                valor: this.valor,
                depreciacao: this.depreciacao,
                usuario:{nome:this.usuario}
            }
            )
            .then(res => {
                console.log(res);
                this.modelo = '';
                this.valor = '';
                this.depreciacao = '';
                this.formularios.push(res.data);
            })
            .catch(error => console.log(error))
        }
    }
}
</script>