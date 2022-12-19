<script setup>
import {storeToRefs} from "pinia";
import { useTodosStore } from "../stores/todosStore";

const store = useTodosStore();
const {todoInput} = storeToRefs(store);
const {addTodo} = store;
</script>

<template>
    <form class="todo-input">
        <section class="input-section">
            <div>
                <label>Title: </label>
                <input type="text" v-model="todoInput.title" required />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" v-model="todoInput.description" required />
            </div>
        </section>
        <section class="select-section">
            <div>
                <label>Status: </label>
                <select v-model="todoInput.status">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                </select>
            </div>
            <div>
                <label>Priority: </label>
                <select v-model="todoInput.priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
        </section>
        <button
            @click.prevent="
                () => {
                    addTodo(todoInput);
                }
            "
        >
            Add
        </button>
    </form>
</template>

<style scoped lang="scss">
.todo-input {
    display: flex;
    gap: 20px;
    .input-section,
    .select-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
    .input-section {
        div {
            display: flex;
            align-items: center;
            label {
                display: block;
                text-align: center;
                width: 100px;
            }
        }
    }
    .select-section {
        div {
            display: flex;
            align-items: center;
            label {
                width: 65px;
            }
            select {
                width: 100px;
            }
        }
    }
    button {
        align-self: center;
        height: fit-content;
        width: fit-content;
        padding: 5px 10px;
    }
}
</style>
