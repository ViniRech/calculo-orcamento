<script setup>
import { useGateInformations } from '@/stores/gate';
import { ref, onMounted } from 'vue'

const gateInformations = useGateInformations()
const gate = gateInformations.gateDetails

const localBudgetDetails = ref({
    mandatoryPrice: 150,
    socialGateMandatoryPrice: 100,
    tubePrice: 0,
    rulerPrice: 0,
    materialsPrice: 0,
})

function gateBudget() {
    const h = gate.value.height
    const l = gate.value.lengthh
    const tube = gate.value.tubeSelected
    const color = gate.value.colorSelected
    const acessories = gate.value.acessoriesSelected
    const budget = localBudgetDetails.value

    // CÁLCULO DOS MATERIAIS
    // Tubo
    budget.tubePrice = Math.ceil(3 * (h * l) / 1.8)
    if (tube.id == 1) tubePrice *= color.circleTubePrice
    if (tube.id == 2) tubePrice *= color.squareTubePrice

    // Régua
    budget.rulerPrice = h * color.rulerPrice / 6

    if (h > 2.4) budget.rulerPrice += (l * color.rulerPrice / 6) * 4
    else budget.rulerPrice += (l * color.rulerPrice / 6) * 3
    
    // Cálculo dos acessórios
    let acessoriesPrice = 0

    // Portão social
    if (acessories.find((acessory) => acessory.id == 1)) {
        acessoriesPrice += (h * color.rulerPrice) + (0.8 * color.rulerPrice)
        acessoriesPrice += budget.socialGateMandatoryPrice
    }

    // Cachorreira
    if (acessories.find((acessory) => acessory.id == 2)) {
        if (tube.id == 1) acessoriesPrice += (10 * (h * l) / 9) * color.circleTubePrice
        else if (tube.id == 2) acessoriesPrice += (10 * (h * l) / 9) * color.squareTubePrice

        if (h <= 2.4) acessoriesPrice += l * color.rulerPrice / 6
    }

    // Ponta de lança
    if (acessories.find((acessory) => acessory.id == 3)) {
        acessoriesPrice += (10 * (h * l) / 1.8) * color.spearheadPrice
    }

    localBudgetDetails.materialsPrice = (tubePrice + rulerPrice + budget.mandatoryPrice + acessoriesPrice).toFixed(2)
}

onMounted(() => {
    gateBudget()
})

</script>

<template>
    <h1>Dados do orçamento</h1>
    
    <p>Altura: {{ gate.height }}</p>
    <p>Comprimento: {{ gate.lengthh }}</p>
    <p>Tubo: {{ gate.tubeSelected.name }}</p>
    <p>Cor: {{ gate.colorSelected.name }}</p>
    <div v-if="gate.acessoriesSelected">
        <h3>Adicionais:</h3>
        <template v-for="acessory in gate.acessoriesSelected" :key="acessory.id">
            <ul>
                <li>{{ acessory.name }}</li>
            </ul>
        </template>
    </div>

    <h2>Valores Finais</h2>
    {{ localBudgetDetails.materialsPrice }}
</template>