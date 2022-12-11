const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "kiron",
      confirmedName: "",
    };
  },
  computed: {
    // fullName will be recomputed only if name changes - this improves performance
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Deb";
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Deb";
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
