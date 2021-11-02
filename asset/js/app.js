const app = new Vue(
    {
        el: "#app",
        data: {
            tasks: [
                "Fare i compiti",
                "Fare la spesa",
                "Fare il bucato"
            ]
        },
        methods: {
            removeTask(index) {
                this.tasks.splice(index, 1)
            }
        }






    })