<script setup>
import {ref, inject} from "vue";

const props = defineProps(["data", "priorityStatus"]);
const status = ref(props.data[0].status);
const handlePriorityChecked = inject("handlePriorityStatus");
const handleInput = (checkedPriority, e) => {
    if (e.target.checked) {
        props.priorityStatus.map((pr) => {
            if (pr.name === checkedPriority) pr.checked = true;
        });
    } else {
        props.priorityStatus.map((pr) => {
            if (pr.name === checkedPriority) pr.checked = false;
        });
    }
};
</script>

<template>
    <div class="priority__filter">
        <div class="filter__heading">
            <FontAwesomeIcon icon="fa-solid fa-filter" />
            <h1>Filter:</h1>
        </div>
        <div
            class="filter__item"
            v-for="(priority, key) in priorityStatus"
            :key="key"
        >
            <input
                :id="`${status.toLowerCase()}-${priority.name.toLowerCase().replace(/\s/g, '')}`"
                type="checkbox"
                @click="
                    ($event) => {
                        handleInput(priority.name, $event);
                        handlePriorityChecked(priority.name, status, $event);
                    }
                "
                :checked="priority.checked"
            />
            <label :for="`${status.toLowerCase()}-${priority.name.toLowerCase().replace(/\s/g, '')}`">{{
                priority.name
            }}</label>
        </div>
    </div>
</template>

<style scoped lang="scss">
.priority__filter {
    display: flex;
    gap: 15px;
    margin-bottom: 5px;
    .filter__heading,
    .filter__item {
        display: flex;
        gap: 5px;
        font-size: 16px;
        h1 {
            font-weight: 600;
        }
    }
}
</style>
