"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
          tasks :[
            {
                text: 'Fare la spesa',
                done: false,
                modify: false
            },
            {
                text: 'Fare la spesa',
                done: false,
                modify: false
            },
            {
                text: 'Fare la spesa',
                done: false,
                modify: false
            },
            {
                text: 'Fare la spesa',
                done: false,
                modify: false
            },
            {
                text: 'Fare la spesa',
                done: false,
                modify: false
            },
            {
                text: 'Fare la spesa',
                done: false,
                modify: false
            },
            {
                text: 'Fare la spesa',
                done: false,
                modify: false
            },
          ]  
        }
    },
}).mount('#app')