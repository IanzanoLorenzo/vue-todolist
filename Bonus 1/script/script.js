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
            if(this.newTask.trim() !== ''){
                let obj = {
                    text : this.newTask.trim(),
                    done : false,
                    modify : false
                }
    
                this.tasks.push(obj)
    
            } else{
                alert('Inserisci una task valida')
            }
            this.newTask = ''
        },
        modifyTask(index){
            if(this.tasks[index].text.trim() === ''){
                console.log('cipolla')
                this.tasks.splice(index, 1)
            }else{
            this.tasks[index].modify = !this.tasks[index].modify
            }
        }
    },
}).mount('#app')