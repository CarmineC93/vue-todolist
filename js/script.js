const {createApp} = Vue;

createApp({
    data(){
        return{
            index: 0,
            tooShort : false,
            //array nel quale pusherò gli oggetti task
            tasks:[
                    {
                        text: "",
                        done: false
                    },
                ],
        }
    },
    methods:{
     addNewTask(){
         //pushare task solo se si hanno più di 5 caratteri
        if(this.tasks[this.index].text.length <= 5){
            this.tooShort = true;

        }else{
            this.tasks.push(this.tasks[this.index]);
            this.index++

            //dopo il push puliamo il campo dell'input
            this.tasks[this.index].text = ""; //non funziona
            this.tooShort = false;
        }
    },
    //funzione che elimina task (sostituisce un elemento dell'array con uno vuoto)
    removeTask(indexOfTask){
        this.tasks.splice(indexOfTask, 1);
        this.index--
    },
    taskCompleted(){
        this.tasks[index].done = !this.tasks[index].done
    }

    }
}).mount("#app")