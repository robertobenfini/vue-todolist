const { createApp } = Vue;

createApp({
    data() {
        return {
            new_task: '', // Contiene il testo della nuova attività
            tasks: [ // Contiene la lista delle attività
                {
                    text: 'seguire la lezione di Boolean',
                    done: false
                },
                {
                    text: "fare l'esercizio quotidiano",
                    done: false
                },
                {
                    text: 'lavare la macchina',
                    done: false
                },
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'giocare con il cane',
                    done: false
                },
                {
                    text: "falciare l'erba in giardino",
                    done: false
                },
                {
                    text: 'fare la carbonara',
                    done: false
                },
            ]
        }
    },

    methods: {
        // Cambia lo stato di completamento di un'attività
        changeTaskStatus(index) {
            this.tasks[index].done = !this.tasks[index].done;
        },

        // Elimina un'attività dalla lista
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },

        // Aggiunge una nuova attività alla lista
        addTask() {
            let obj = {
                text: this.new_task,
                done: false
            };

            this.tasks.push(obj);

            this.new_task = ''; // Resetta il campo di input
        }
    },
}).mount('#app');