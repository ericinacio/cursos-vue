const app = Vue.createApp({
    data() {
        return {
            name: "",
            age: 19,
            input_name: ""
        };
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            
            console.log(this.input_name);
            
            this.name = this.input_name;
        }
    }
});

app.mount("#app");