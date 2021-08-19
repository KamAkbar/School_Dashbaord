<template>
  <section class="add container">
    <div class="add-forms">
      <div class="d-flex align-items-center">
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label">First Name: {{firstName}}</label>
          <input v-model="firstName" class="add__input col-11" type="text" placeholder="Akbar" required/>
        </div>
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label">Last Name: {{lastName}}</label>
          <input 
            class="add__input col-11"
            type="text"
            placeholder="Kamoldionov"
            required
            v-model="lastName"
          />
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label">Interesting: {{interesting}}</label>
          <select v-model="interesting" class="add__input col-11">
            <option disabled selected>Choose</option>
            <option value="IT">IT</option>
            <option value="Sport">Sport</option>
            <option value="Math & Accounting">Math & Accounting</option>
          </select>
        </div>
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label">Class: {{studentClass}}</label>
          <input
            v-model="studentClass"
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
        <label for="" class="add__label">Gender: {{gender}}</label>
        <div class="d-flex align-items-start gap-4">
          <div class="form-check d-flex align-items-baseline gap-2">
            <input
            v-model="gender"
              type="radio"
              name="Gender"
              id="Male"
              class="add__check"
              value="Male"
            />
            <label for="" class="add__label">Male</label>
          </div>
          <div class="form-check d-flex align-items-baseline gap-2">
            <input
            v-model="gender"
              type="radio"
              name="Gender"
              id="Female"
              class="add__check"
              value="Female"
            />
            <label for="" class="add__label">Female</label>
          </div>
        </div>
      </div>
      <div class="add-form mt-4 d-flex flex-column align-items-start col-6">
        <label for="" class="add__label">Data of Birth: {{dataOfBirth}}</label>
        <input v-model="dataOfBirth" class="add__input col-11" type="date" placeholder="dd/mm/yy" required />
      </div>
    </div>
    <input @click="persist()" type="submit" class="add__submit mt-4 d-flex align-items-start" value="Submit Form">
  </section>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      // students: [],
      // newStudent: null,


      firstName: '',
      lastName: '',
      interesting: '',
      studentClass: '',
      gender: '',
      dataOfBirth: '',
    }
  },
  mounted() {
  
    // if (localStorage.getItem('students')) {
    //   try {
    //     this.students = JSON.parse(localStorage.getItem('students'));
    //   } catch(e) {
    //     localStorage.removeItem('students');
    //   }
    // }




    //Equal value from input to localStorage 
    if (localStorage.firstName) {
      this.firstName = localStorage.firstName;
    }
    if (localStorage.lastName) {
      this.lastName = localStorage.lastName;
    }
    if (localStorage.interesting) {
      this.interesting = localStorage.interesting;
    }
    if (localStorage.studentClass) {
      this.studentClass = localStorage.studentClass;
    }
    if (localStorage.gender) {
      this.gender = localStorage.gender;
    }
    if (localStorage.dataOfBirth) {
      this.dataOfBirth = localStorage.dataOfBirth;
    }
  },
  methods: {
  //   addStudent() {
  //     if (!this.newStudent) {
  //       return;
  //     }

  //     this.students.push(this.newStudent);
  //     this.newStudent = '';
  //     this.saveStudents();
  //   },
  //   removeStudent(x) {
  //     this.students.splice(x, 1);
  //     this.saveStudents();
  //   },
  //   saveStudents() {
  //     const parsed = JSON.stringify(this.students);
  //     localStorage.setItem('students', parsed);
  //   }





    // Function to save value to localStorage 
    persist() {
      localStorage.firstName = this.firstName;
      localStorage.lastName = this.lastName;
      localStorage.interesting = this.interesting;
      localStorage.studentClass = this.studentClass;
      localStorage.gender = this.gender;
      localStorage.dataOfBirth = this.dataOfBirth;
    }
  }
};
</script>

<style lang="scss">
.add {
  margin-top: 30px;
  &__label {
    font-weight: 700 !important;
    margin-bottom: 6px;
  }
  &__submit{
    background: #78a1bb;
    color: #333;
    padding: 20px;
    border: none;
  }
  // &-forms{
  //     display: grid;
  //     grid-template-columns: 1fr 1fr;
  //     margin-top: 16px;
  // }
  // &-form{
  //     display: flex;
  //     align-items: flex-start;
  //     flex-direction: column;
  // }
  &__input{
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .form-check{
      padding-left: 0;
  }
}
</style>
