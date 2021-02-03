const app = Vue.createApp({
  data() {
    return {
      name: "Your Name",
      confirmedName: "Press Enter to Confirm",
    };
  },
  methods: {
    confirmName(e){
        this.confirmedName = e.target.value
    },
    typing(e){
        this.name = e.target.value
    },
    showAlert() {
      alert("Hello World!");
    },
  },
});

app.mount("#assignment");
