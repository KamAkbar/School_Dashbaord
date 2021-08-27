<template>
  <section class="container">
      <div class="pcard d-flex justify-content-between gap-3">
        <div class="pcard-main mt-3 col-md-5 col-sm-12">
            <img src="https://i.pravatar.cc/300?img=67" alt="Profile Photo" class="pcard__img mt-3">
            <h1 class="pcard__title mt-3">{{signs[0].name}} {{signs[0].surname}}</h1>
            <p class="pcard__country">{{signs[0].country}}</p>
            <button class="btn btn_p mt-1 mb-3" @click="isActive = !isActive">{{isActive ? 'Following' : 'Follow'}}</button>
        </div>
        <div class="pcard-details mt-3 col-md-7 col-sm-12">
            <div class="pcard-info d-flex">
                <table class="table">
                    <tr>
                        <th scope="col">First Name</th>
                        <td> {{ signs[0].name }} </td></tr>
                    <tr>
                        <th scope="col">Last Name</th>
                        <td>{{signs[0].surname}}</td>
                    </tr>
                    <tr>
                        <th scope="col">Email</th>
                        <td>{{signs[0].email}}</td>
                    </tr>
                    <tr>
                        <th scope="col">Gender</th>
                        <td>{{signs[0].signgender}}</td>
                    </tr>
                    <tr>
                        <th scope="col">Address</th>
                        <td>{{signs[0].country}}</td>
                    </tr>
                </table>
            </div>
            <div class="pcard-media mt-3">
                <br>
                <p>⚡ This card in Progress ⚡</p>
                <br>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Profile',
    data() {
        return {
            isActive: false,
        }
    },
    computed: {
        ...mapState({
            signs: state => state.signs,
            //DELETE_ITEM
            // DELETE_ITEM(state, index) {
            // this.state.splice(state, index)
            // }
        }),
    },
    mounted(){
        this.$store.dispatch('loadSignDataToLocalStorage')
    },
    //Methods
    // methods: {
    //     async deleteButton(index){
    //     this.$store.commit('DELETE_ITEM', index)
    //     await this.$store.dispatch('SAVE_TO_LOCALSTORAGE')
    //   },
    // }
}
</script>

<style lang="scss">
    .pcard{
    &-main, &-info, &-media{
        box-shadow: 4px 0px 16px rgba(16, 30, 115, 0.08);
        background: #fff;
        border-radius: 8px;
        &:hover{
            box-shadow: 12px 0px 24px rgba(16, 30, 115, 0.08);
            background: #fff;
            transition: .4s;
    }
  }
  .btn{
    padding: 6px 12px;
    border-radius: 0.25rem;
    &_p{
        background-color: #fff;
        color: #283044;
        border-color: #42b983!important;
    }
    }
    &__img{
        border: 2px solid #42b983;
        border-radius: 50%;
        width: 250px;
        height: 250px;
    }
    .table{
        th, td{
            padding: 20px 0;
        }
        td{
            color: #6c757d!important;
        }
        tr:not(:last-child){
            border-bottom: 1px solid rgba(0,0,0,.1);
            width: 90%;
        }
    }
}
@media (max-width: 992px) {
    .pcard{
        &__img{
            width: 200px;
            height: 200px;
        }
    }
}
@media (max-width: 768px) {
    .pcard{
        display: grid!important;
        grid-template-columns: 1fr;
  }
}
@media (max-width: 535px) {
    .pcard{
        &__img{
            width: 150px;
            height: 150px;
        }
  }
}
</style>