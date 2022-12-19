<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import Todo from "./Todo.vue";
import PriorityFilter from "./PriorityFilter.vue";

defineProps(["todosListFiltered"]);
const priorityStatus = ref([
    {name: "Low", checked: true},
    {name: "Medium", checked: true},
    {name: "High", checked: true},
]);
</script>

<template>
    <PriorityFilter
        :data="todosListFiltered"
        :priorityStatus="priorityStatus"
    />
    <ul class="todos__list">
        <li v-for="(todo, key) in todosListFiltered" :key="key">
            <Todo :todo="todo" :idx="key" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
.todos__list {
    display: flex;
    flex-direction: column;
    height: 320px !important;
    overflow: auto;
}
::-webkit-scrollbar {
    display: none;
}
</style>
