<template>
    <div>
        <button
            @click="$emit('object-selection', object.id)"
            :style="{backgroundColor: color}" 
        >
            {{ object.name }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        object: Object,
        color: String
    },
    emits: ['object-selection']
}
</script>