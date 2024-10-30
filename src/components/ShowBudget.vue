<script setup>
import { defineProps, ref, onMounted, computed } from 'vue'

const props = defineProps(['gateDetails'])

const mensagem = ref("")
function amostragem() {
    localBudgetDetails.value.materialsPrice = 100
}

onMounted(() => {
    gateBudget()
})

const localBudgetDetails = ref({
    mandatoryPrice: 150,
    socialGateMandatoryPrice: 100,
    tubePrice: 0,
    rulerPrice: 0,
    acessoriesPrice: 0,
    // materialsPrice: computed(() => {localBudgetDetails.value.tubePrice + localBudgetDetails.value.rulerPrice + localBudgetDetails.value.acessoriesPrice + localBudgetDetails.value.mandatoryPrice}),
})

const materialsPrice = computed(() => localBudgetDetails.value.mandatoryPrice + 
localBudgetDetails.value.tubePrice + localBudgetDetails.value.rulerPrice + localBudgetDetails.value.acessoriesPrice)

function gateBudget() {
    const h = props.gateDetails.height
    const l = props.gateDetails.lengthh
    const tube = props.gateDetails.tubeSelected
    const color = props.gateDetails.colorSelected
    const acessories = props.gateDetails.acessoriesSelected

    // CÁLCULO DOS MATERIAIS
    // Tubo
    localBudgetDetails.value.tubePrice = Math.ceil(3 * (h * l) / 1.8)
    if (tube.id == 1) localBudgetDetails.value.tubePrice *= color.circleTubePrice
    if (tube.id == 2) localBudgetDetails.value.tubePrice *= color.squareTubePrice

    // Régua
    localBudgetDetails.value.rulerPrice = h * color.rulerPrice / 6

    if (h > 2.4) localBudgetDetails.value.rulerPrice += (l * color.rulerPrice / 6) * 4
    else localBudgetDetails.value.rulerPrice += (l * color.rulerPrice / 6) * 3
    
    // Cálculo dos acessórios

    // Portão social
    if (acessories.find((acessory) => acessory.id == 1)) {
        localBudgetDetails.value.acessoriesPrice += (h * color.rulerPrice) + (0.8 * color.rulerPrice)
        localBudgetDetails.value.acessoriesPrice += localBudgetDetails.value.socialGateMandatoryPrice
    }

    // Cachorreira
    if (acessories.find((acessory) => acessory.id == 2)) {
        if (tube.id == 1) localBudgetDetails.value.acessoriesPrice += (10 * (h * l) / 9) * color.circleTubePrice
        else if (tube.id == 2) localBudgetDetails.value.acessoriesPrice += (10 * (h * l) / 9) * color.squareTubePrice

        if (h <= 2.4) localBudgetDetails.value.acessoriesPrice += l * color.rulerPrice / 6
    }

    // Ponta de lança
    if (acessories.find((acessory) => acessory.id == 3)) {
        localBudgetDetails.value.acessoriesPrice += (10 * (h * l) / 1.8) * color.spearheadPrice
    }
}
</script>

<template>
    <h1>Dados do orçamento</h1>
    
    <p>Altura: {{ props.gateDetails.height }}</p>
    <p>Comprimento: {{ props.gateDetails.lengthh }}</p>
    <p>Tubo: {{ props.gateDetails.tubeSelected.name }}</p>
    <p>Cor: {{ props.gateDetails.colorSelected.name }}</p>
    <div v-if="props.gateDetails.acessoriesSelected">
        <h3>Adicionais:</h3>
        <template v-for="acessory in props.gateDetails.acessoriesSelected" :key="acessory.id">
            <ul>
                <li>{{ acessory.name }}</li>
            </ul>
        </template>
    </div>

    <h2>Valores Finais</h2>
    {{ materialsPrice }} <br>
    {{ localBudgetDetails }}
    {{ mensagem }}
</template>