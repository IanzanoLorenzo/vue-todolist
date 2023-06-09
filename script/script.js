"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: '',
            tasks :[
                {
                    text: 'Preparare la colazione',
                    done: false,
                    modify: false
                },
                {
                    text: 'Fare palesta',
                    done: false,
                    modify: false
                },
                {
                    text: 'Rifare il letto',
                    done: false,
                    modify: false
                },
                {
                    text: 'Andare a prendere mio figlio alle elementeri',
                    done: false,
                    modify: false
                },
                {
                    text: 'Preparare il pranzo',
                    done: false,
                    modify: false
                },
                {
                    text: 'Pulire il salone',
                    done: false,
                    modify: false
                },
                {
                    text: 'Fare la spesa per il giorno dopo',
                    done: false,
                    modify: false
                },
            ]  
        }
    },
    methods: {
        doneUndoneTask(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        deleteTask(index){
            this.tasks.splice(index, 1)
        },
        addNewTask(){
            let obj = {
                text : this.newTask,
                done : false,
                modify : false
            }

            this.tasks.push(obj)

            this.newTask = ''
        }
    },
}).mount('#app')