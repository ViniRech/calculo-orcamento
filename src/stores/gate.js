import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGateInformations = defineStore('gateInformations', () => {
    const tubeSelect = ref([
        {
            id: 1,
            name: 'Redondo',
            price: 25
        },
        {
            id: 2,
            name: 'Quadrado',
            price: 30
        }
    ])

    const colorSelect = ref([
        {
            id: 1,
            name: 'Preto',
            price: 7
        },
        {
            id: 2,
            name: 'Branco',
            price: 5
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