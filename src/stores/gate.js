import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGateInformations = defineStore('gateInformations', () => {
    const tubeSelect = ref([
        {
            id: 1,
            name: 'Redondo',
            whitePrice: 25,
            blackPrice: 30
        },
        {
            id: 2,
            name: 'Quadrado',
            whitePrice: 30,
            blackPrice: 35
        }
    ])

    const colorSelect = ref([
        {
            id: 1,
            name: 'Preto',
        },
        {
            id: 2,
            name: 'Branco',
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