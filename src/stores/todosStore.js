import {defineStore} from "pinia";

export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: [
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
        ],
        todosStatus: [
            {
                name: "Pending",
                icon: "fa-solid fa-clipboard-list",
                checked: true,
            },
            {name: "In Progress", icon: "fa-solid fa-spinner", checked: true},
            {name: "Done", icon: "fa-solid fa-circle-check", checked: true},
        ],
        priorityStatus: [
            {name: "Low", checked: true},
            {name: "Medium", checked: true},
            {name: "High", checked: true},
        ],
    }),
    getters: {
        getState: (state) => state,
    },
    actions: {},
});
