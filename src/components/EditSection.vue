<template>
  <section class="add container">
    <div class="add-forms">
      <div class="d-flex align-items-center">
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label"
            >First Name</label
          >
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
          <select v-model="form.interesting" class="add__input col-11">
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
      value="Update and Save"
    />
  </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "EditSection",
  data() {
    return {
      form: {},
      perPage: 2,
      currentPage: 2,
      employees: null,
      query: '',
    };
  },
  async created() {
    await this.$store.dispatch('LOAD_FROM_LOCALSTORAGE')
    let index = this.$route.params.index
    if (!/^\d+$/.test(index)) {
      return this.$router.push('/404')
    }
    index = parseInt(index)
    const items = this.$store.state.employees.items
    const item = items[index]
    if (!item) {
      return this.$router.push('/404')
    }
    this.form = Object.assign({}, item)
  },
  methods: {
    clearForm() {
      this.form = {};
    },
   async updateButton() {
    this.$store.commit('UPDATE_ITEM', {
    index: this.$route.params.index,
    item: this.form,
    })
    await this.$store.dispatch('SAVE_TO_LOCALSTORAGE')
    await this.$router.push('/employees')
    },
  },
   computed: {
    ...mapState({
      students: s => s.employees.students,
    }),
    countMale() {
      return this.students.filter(el => el.picked === 'male').length
    },
    countFemale() {
      return this.students.filter(el => el.picked === 'female').length
    },
    countAccounting() {
      return this.students.filter(el => el.selected === 'Math & Accounting').length
    },
    countIT() {
      return this.students.filter(el => el.selected === 'IT').length
    },
    countMarketing() {
      return this.students.filter(el => el.selected === 'sport').length
    },
  },
  mounted() {
    this.$store.dispatch('LOAD_FROM_LOCALSTORAGE')
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
}
</style>
