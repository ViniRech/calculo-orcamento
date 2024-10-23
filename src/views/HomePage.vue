<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGateInformations } from '@/stores/gate'

const gateInformations = useGateInformations()
const router = useRouter()

const gateDetails = ref({
    id: 1,
    height: 0,
    lengthh: 0,
    tubeSelected: {},
    colorSelected: {},
    acessoriesSelected: []
})

const showBudget = ref(false);
</script>

<template>

    <main>
        <h2>Insira os dados do portão</h2>

        <form>
            <div>
                <label for="height">Altura (em metros):</label>
                <input v-model="gateDetails.height" type="number" min="0">
            </div>

            <div>
                <label for="length">Comprimento (em metros):</label>
                <input v-model="gateDetails.lengthh" type="number" min="0">
            </div>

            <div>
                <label for="tube">Tubo da grade:</label>
                <select v-model="gateDetails.tubeSelected" name="tube" id="tube">
                    <option v-for="tube in gateInformations.tubeSelect" :key="tube.id" :value="tube">
                        {{ tube.name }}
                    </option>
                </select>
            </div>

            <div>
                <label for="color">Cor:</label>
                <select v-model="gateDetails.colorSelected" name="color" id="color">
                    <option v-for="color in gateInformations.colorSelect" :key="color.id" :value="color">
                        {{ color.name }}
                    </option>
                </select>
            </div>

            <section>
                <h3>Acessórios:</h3>
                <template v-for="acessory in gateInformations.acessorySelect" :key="acessory.id">
                    <div>
                        <label :for="acessory.label">{{ acessory.name }}</label>
                        <input v-model="gateDetails.acessoriesSelected" :value="acessory" type="checkbox">
                    </div>
                </template>
            </section>
            
            <div>
                <button @click.prevent="showBudget = !showBudget">Confirmar</button>
            </div>
        </form>

        <section v-if="showBudget">
            {{ gateDetails }}
        </section>
    </main>
    
</template>