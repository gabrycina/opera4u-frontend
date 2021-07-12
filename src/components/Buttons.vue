<template>
  <div>
    <Button
      @object-selection="$emit('object-selection', 0)"
      :object="{id: 0, name: 'all'}"
      :color="selected[0] ? 'red' : 'gray'"
    />

    <div :key="object.id" v-for="object in objects">
      <Button
        @object-selection="$emit('object-selection', object.id)"
        :object="object"
        :color="selected[object.id] ? 'red' : 'gray'"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Buttons",
  components: {
    Button,
  },
  props: {
    objects: Array,
    selected: Array,
  },
  emits: ["object-selection"],
};
</script>
