import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGateInformations = defineStore('gateInformations', () => {
    const gateDetails = ref({
        id: 1,
        height: 0,
        lengthh: 0,
        tubeSelected: {},
        colorSelected: {},
        acessoriesSelected: []
    })

    const tubeSelect = ref([
        {
            id: 1,
            name: 'Redondo',
        },
        {
            id: 2,
            name: 'Quadrado',
        }
    ])

    const colorSelect = ref([
        {
            id: 1,
            name: 'Preto',
            circleTubePrice: 30,
            squareTubePrice: 35,
            rulerPrice: 71.71,
            spearheadPrice: 7
        },
        {
            id: 2,
            name: 'Branco',
            circleTubePrice: 21,
            squareTubePrice: 25,
            rulerPrice: 69.58,
            spearheadPrice: 5
        }
    ])

    const acessorySelect = ref([
        {
            id: 1,
            name: 'Portão social',
            label: 'socialGate'
        },
        {
            id: 2,
            name: 'Cachorreira',
            label: 'petGate'
        },
        {
            id: 3,
            name: 'Ponta de lança',
            label: 'spearhead',
            whitePrice: 5,
            blackPrice: 6
        }
    ])

    const materialsPrice = ref(0)
    const laborValue = ref(0)
    const budgetValue = materialsPrice.value + laborValue.value

    // Função para atualizar os detalhes do portão
    function setGateDetails(details) {
        gateDetails.value = { ...gateDetails.value, ...details }
    }

    return {
        gateDetails,
        tubeSelect, 
        colorSelect, 
        acessorySelect,
        materialsPrice,
        laborValue,
        budgetValue,
        setGateDetails
    }
})