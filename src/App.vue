<script setup>
import {ref, provide} from "vue";
import TodoSection from "./components/TodoSection.vue";
import StatusFilter from "./components/StatusFilter.vue";
import TodoInput from "./components/TodoInput.vue";

const todosStatus = ref([
    {name: "Pending", icon: "fa-solid fa-clipboard-list", checked: true},
    {name: "In Progress", icon: "fa-solid fa-spinner", checked: true},
    {name: "Done", icon: "fa-solid fa-circle-check", checked: true},
]);

const todos = ref([
    {
        title: "Do homework",
        description: "fewfwefwe",
        priority: "Low",
        status: "Pending",
        showed: true,
        id: 0,
    },
    {
        title: "Play games",
        description: "rghergr",
        priority: "High",
        status: "In Progress",
        showed: true,
        id: 1,
    },
    {
        title: "Do exercises",
        description: "fbqeiufbweiuofw",
        priority: "Medium",
        status: "Done",
        showed: true,
        id: 2,
    },
]);

const addTodo = (todo) => {
    todos.value.push(todo);
};

const handleStatusChecked = (name, e) => {
    const temp = todosStatus.value.filter((status) => status.name === name);
    if (e.target.checked) temp[0].checked = true;
    else temp[0].checked = false;
};

const handlePriorityChecked = (checkedPriority, s, e) => {
    if (e.target.checked) {
        todos.value.map((todo) => {
            if (todo.priority === checkedPriority && todo.status === s)
                todo.showed = true;
        });
    } else {
        todos.value.map((todo) => {
            if (todo.priority === checkedPriority && todo.status === s)
                todo.showed = false;
        });
    }
};

const changeTodoStatus = (index) => {
    if (todos.value[index].status === "Pending")
        todos.value[index].status = "In Progress";
    else if (todos.value[index].status === "In Progress")
        todos.value[index].status = "Done";
};

const deleteTodo = (index) => {
    todos.value.splice(index, 1);
    todos.value.map((todo, index) => (todo.id = index));
};

provide("addTodo", addTodo);
provide("todosList", todos);
provide("todosStatus", todosStatus);
provide("handlePriorityStatus", handlePriorityChecked);
provide("changeTodoStatus", changeTodoStatus);
provide("deleteTodo", deleteTodo);
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
