const app = new Vue(
    {
        el: "#app",
        data: {
            newTask: "",
            errorCheck: true,
            tasks: [
                "Fare i compiti",
                "Fare la spesa",
                "Fare il bucato"
            ],
            completedTasks: [
            ],
            erasedTasks: [
            ]
        },
        methods: {
            removeTask(index) {
                this.erasedTasks.push(this.tasks[index]);
                this.tasks.splice(index, 1)
            },
            completeTask(index) {
                this.completedTasks.push(this.tasks[index]);
                this.tasks.splice(index, 1)

            },
            addNewTask() {
                if (this.newTask != "" && this.newTask.length > 5) {
                    this.tasks.push(this.newTask);
                    this.newTask = "";
                    this.errorCheck = true;
                } else {
                    this.errorCheck = false;

                }
            }
        }
    })
