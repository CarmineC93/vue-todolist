const {createApp} = Vue;

createApp({
    data(){
        return{

            //oggetto temporaneo
            newTask : {
                text: "",
                done: false
            },

            //array nel quale pusherò gli oggetti task
            tasks:[

                ],

                tooShort : false,
        }
    },
    methods:{
    addNewTask(){
         //pushare task solo se si hanno più di 5 caratteri
        if(this.newTask.text.length <= 5){
            this.tooShort = true;

        } else {
            this.tasks.push({...this.newTask});
            this.newTask.text = "";
            this.newTask.done = false;
            this.tooShort = false;
        }
    },
    //funzione che elimina task (sostituisce un elemento dell'array con uno vuoto)
    removeTask(indexOfTask){
        this.tasks.splice(indexOfTask, 1);
    },

    taskCompleted(index){
        this.tasks[index].done = !this.tasks[index].done
    }

    }
}).mount("#app")