import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGateInformations = defineStore('gateInformations', () => {
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

    function getProductById(id) {
        // Modelo universal
        for (let product of products.value) {
          if (product.id == id) {
            return product
          }
        }
        return {}
    
        // Modelo javaScript
        // return products.value.find((product) => product.id == id)
    }

    return {tubeSelect, colorSelect, acessorySelect, getProductById}
})