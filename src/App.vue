<script setup>
import {storeToRefs} from "pinia";
import {useTodosStore} from "./stores/todosStore";
import TodoSection from "./components/TodoSection.vue";
import StatusFilter from "./components/StatusFilter.vue";
import TodoInput from "./components/TodoInput.vue";

const store = useTodosStore();
const {todosStatus} = storeToRefs(store);
const {handleStatusChecked} = store;
</script>

<template>
    <div class="wrapper">
        <section class="container">
            <div class="heading">
                <div>
                    <h1>Ming's to-do list</h1>
                    <StatusFilter @statusChecked="handleStatusChecked" />
                </div>
                <TodoInput />
            </div>
            <div class="container__todos">
                <TodoSection
                    v-for="(status, key) in todosStatus"
                    :key="key"
                    :sectionHeader="status.name"
                    :sectionIcon="status.icon"
                    :checked="status.checked"
                />
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    width: 1440px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    .container {
        position: absolute;
        top: 50%;
        width: 100%;
        height: 80%;
        transform: translateY(-50%);
        .heading {
            display: flex;
            justify-content: space-between;
            div {
                h1 {
                    font-weight: 700;
                    font-size: 40px;
                    margin-bottom: 40px;
                }
            }
        }
        .container__todos {
            display: flex;
            gap: 20px;
        }
    }
}
</style>
