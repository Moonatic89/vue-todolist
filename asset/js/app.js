const app = new Vue(
    {
        el: "#app",
        data: {
            newTask: "",
            tasks: [
                "Fare i compiti",
                "Fare la spesa",
                "Fare il bucato"
            ]
        },
        methods: {
            removeTask(index) {
                this.tasks.splice(index, 1)
            },
            addNewTask() {
                this.tasks.push(this.newTask);
                this.newTask = "";
            }
        }






    })