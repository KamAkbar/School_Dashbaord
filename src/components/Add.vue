<template>
  <section class="add container">
    <div class="add-forms">
      <div class="d-flex align-items-center">
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label">First Name</label>
          <input class="add__input col-11" type="text" placeholder="Akbar" required />
        </div>
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label">Last Name</label>
          <input
            class="add__input col-11"
            type="text"
            placeholder="Kamoldionov"
            required
          />
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label">Department</label>
          <select class="add__input col-11">
            <option disabled selected>Choose</option>
            <option value="accounting">Accounting</option>
            <option value="marketing">Marketing</option>
            <option value="IT">IT</option>
          </select>
        </div>
        <div class="add-form mt-4 col-6 d-flex align-items-start flex-column">
          <label for="" class="add__label">Position</label>
          <input
            class="add__input col-11"
            type="text"
            placeholder="Software Engineer"
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
              type="radio"
              name="Gender"
              id="male"
              class="add__check"
              value="male"
            />
            <label for="" class="add__label">Male</label>
          </div>
          <div class="form-check d-flex align-items-baseline gap-2">
            <input
              type="radio"
              name="Gender"
              id="female"
              class="add__check"
              value="female"
            />
            <label for="" class="add__label">Female</label>
          </div>
        </div>
      </div>
      <div class="add-form mt-4 d-flex flex-column align-items-start col-6">
        <label for="" class="add__label">Data of Birth</label>
        <input class="add__input col-11" type="date" placeholder="dd/mm/yy" required />
      </div>
    </div>
    <button class="add__submit mt-4 d-flex align-items-start">Submit Form</button>
  </section>
</template>

<script>
export default {
  name: "Add",
};
</script>

<style lang="scss">
.add {
  margin-top: 80px;
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
