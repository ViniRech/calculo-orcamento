<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGateInformations } from '@/stores/gate'

const gateInformations = useGateInformations()
const router = useRouter()

const localGateDetails = ref({
    height: 0,
    lengthh: 0,
    tubeSelected: {},
    colorSelected: {},
    acessoriesSelected: []
})

const errorSentence = ref('')
const showCorrection = ref(false)

function handleSubmit() {
    // Atualiza os dados no store antes de navegar
    gateInformations.setGateDetails(localGateDetails.value)
    router.push('/budget')
}

function verification() {
    let sum = 0

    // Height verification
    if (localGateDetails.value.height == 0 || localGateDetails.value.height == '') errorSentence.value = 'Altura é um campo obrigatório'
    else if (localGateDetails.value.height < 1) errorSentence.value = 'O valor mínimo para a altura é de 1 metro'
    else if (localGateDetails.value.height > 5) errorSentence.value = 'O valor máximo para a altura é de 5 metros'
    else sum++

    // Length verification
    if (localGateDetails.value.lengthh == 0 || localGateDetails.value.lengthh == '') errorSentence.value = 'Comprimento é um campo obrigatório'
    else if (localGateDetails.value.lengthh < 1) errorSentence.value = 'O valor mínimo para o comprimento é de 1 metro'
    else if (localGateDetails.value.lengthh > 10) errorSentence.value = 'O valor máximo para o comprimento é de 10 metros'
    else sum++

    // Tube and color verification
    if (!localGateDetails.value.tubeSelected || Object.keys(localGateDetails.value.tubeSelected).length === 0) {
        errorSentence.value = 'Tubo da grade é um campo obrigatório' } else sum++
    if (!localGateDetails.value.colorSelected || Object.keys(localGateDetails.value.colorSelected).length === 0) { 
        errorSentence.value = 'Cor é um campo obrigatório'} else sum++

    // 
    // if (sum === 4) router.push(`/budget`)
    if (sum === 4) {
        showCorrection.value = false
        handleSubmit()
    }
    else showCorrection.value = true

}
</script>

<template>

    <main>
        <h2>Insira os dados do portão:</h2>

        <form>
            <div>
                <label for="height">Altura (em metros):</label>
                <input required v-model="localGateDetails.height" type="number" min="1" max="5">
            </div>

            <div>
                <label for="length">Comprimento (em metros):</label>
                <input required v-model="localGateDetails.lengthh" type="number" min="1" max="10">
            </div>

            <div>
                <label for="tube">Tubo da grade:</label>
                <select required v-model="localGateDetails.tubeSelected" name="tube" id="tube">
                    <option v-for="tube in gateInformations.tubeSelect" :key="tube.id" :value="tube">
                        {{ tube.name }}
                    </option>
                </select>
            </div>

            <div>
                <label for="color">Cor:</label>
                <select required v-model="localGateDetails.colorSelected" name="color" id="color">
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
                        <input v-model="localGateDetails.acessoriesSelected" :value="acessory" type="checkbox">
                    </div>
                </template>
            </section>
            
            <div>
                <button @click.prevent="verification">Confirmar</button>
            </div>
        </form>

        <section v-if="showCorrection">
            {{ errorSentence }}
        </section>
    </main>
    
</template>