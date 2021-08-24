<template>
  <section class="add container">
    <form action="">
      <div class="add-forms">
      <div class="d-flex align-items-center">
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label class="add__label">First Name</label>
          <input
            v-model="form.firstName"
            class="add__input col-11"
            type="text"
            placeholder="Akbar"
            required
          />
        </div>
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label"
            >Last Name</label
          >
          <input
            class="add__input col-11"
            type="text"
            placeholder="Kamoldinov"
            required
            v-model="form.lastName"
          />
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label"
            >Interesting</label
          >
          <select v-model="form.interesting" class="add__input col-11" required>
            <option disabled selected>Choose</option>
            <option value="IT">IT</option>
            <option value="Sport">Sport</option>
            <option value="Math & Accounting">Math & Accounting</option>
          </select>
        </div>
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label"
            >Class</label
          >
          <input
            v-model="form.studentClass"
            class="add__input col-11"
            type="text"
            placeholder="9A"
            required
          />
        </div>
      </div>
    </div>
    <div class="add-details d-flex align-items-start flex-column">
      <div class="add-form mt-4 d-flex align-items-start flex-column">
        <label for="" class="add__label">Gender</label>
        <div class="d-flex align-items-start gap-4">
          <div class="form-check d-flex align-items-baseline gap-2">
            <input
              v-model="form.gender"
              type="radio"
              name="Gender"
              id="Male"
              class="add__check"
              value="Male"
              required
            />
            <label for="" class="add__label">Male</label>
          </div>
          <div class="form-check d-flex align-items-baseline gap-2">
            <input
              v-model="form.gender"
              type="radio"
              name="Gender"
              id="Female"
              class="add__check"
              value="Female"
              required
            />
            <label for="" class="add__label">Female</label>
          </div>
        </div>
      </div>
      <div class="add-form mt-4 d-flex flex-column align-items-start col-6">
        <label for="" class="add__label"
          >Data of Birth</label
        >
        <input
          v-model="form.dataOfBirth"
          class="add__input col-11"
          type="date"
          placeholder="dd/mm/yy"
          required
        />
      </div>
    </div>
    <input
      @click="save()"
      type="submit"
      class="add__submit mt-4 d-flex align-items-start"
      value="Submit Form"
    />
    </form>
  </section>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      form: {
          firstName: "",
          lastName: "",
          interesting: "",
          studentClass: "",
          gender: "",
          dataOfBirth: "",
      },
    };
  },
  methods: {
    save() {
      if (
        this.form.firstName.length == 0 ||
        this.form.lastName.length == 0 ||
        this.form.interesting.length == 0 ||
        this.form.studentClass.length == 0 ||
        //this.form.gender.length == 0 ||
        this.form.dataOfBirth.length == 0
      ) {
        console.log('Work');
        alert('Fill the Empty Places');
        return false;
      } else {
        this.$store.commit("getStudents", this.form);
        console.log(this.$store.state.students);
        this.$store.dispatch("saveDataToLocalStorage");
        this.form = {}
      }
    },
    // save() {
    //   this.$store.commit("getStudents", this.form);
    //   console.log(this.$store.state.students);
    //   this.$store.dispatch("saveDataToLocalStorage");
    //   this.clearForm();
    // },
    // clearForm() {
    //   this.form = {};
    // },
  },
};
</script>

<style lang="scss">
.add {
  margin-top: 30px;
  &__label {
    font-weight: 700 !important;
    margin-bottom: 6px;
  }
  &__submit {
    background: #78a1bb;
    color: #333;
    padding: 20px;
    border: none;
  }
  &__input {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .form-check {
    padding-left: 0;
  }
  input:focus { 
    outline: none !important;
    border-color: #719ECE;
    box-shadow: 0 0 10px #719ECE;
}
}
</style>
