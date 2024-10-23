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
            name: 'Quadrado'
        }
    ])

    const colorSelect = ref([
        {
            id: 1,
            name: 'Preto'
        },
        {
            id: 2,
            name: 'Branco'
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
            label: 'spearhead'
        }
    ])

    return {tubeSelect, colorSelect, acessorySelect}
})