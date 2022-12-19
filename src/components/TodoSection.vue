<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {storeToRefs} from "pinia";
import {useTodosStore} from "../stores/todosStore";
import Todos from "./Todos.vue";

defineProps(["sectionHeader", "sectionIcon", "checked"]);
const store = useTodosStore();
const {todos} = storeToRefs(store);
</script>

<template>
    <section
        :class="`todos ${sectionHeader.toLowerCase().replace(/\s/g, '')}`"
        v-if="checked"
    >
        <div id="darken"></div>
        <div class="todos__wrapper">
            <div class="todos__heading">
                <FontAwesomeIcon :icon="sectionIcon" />
                <h1>{{ sectionHeader }}</h1>
            </div>
            <Todos
                :todosListFiltered="
                    todos.filter((todo) => todo.status === sectionHeader)
                "
            />
        </div>
    </section>
</template>

<style lang="scss">
.todos {
    width: 30%;
    border-radius: 4px;
    #darken {
        background: rgba(var(--dark), var(--low-opacity));
        height: 10px;
    }
    .todos__wrapper {
        padding: 5px;
        > * {
            padding: 10px;
        }
        .todos__heading {
            display: flex;
            align-items: center;
            > * {
                font-size: 18px;
                color: var(--soft-brown);
            }
            h1 {
                margin-left: 10px;
            }
        }
    }
}

// .todos.inprogress {
//     svg {
//         animation: spinning 1.5s infinite linear;
//     }
// }

@keyframes spinning {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
