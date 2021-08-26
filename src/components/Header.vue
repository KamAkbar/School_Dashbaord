<template>
  <header class="header">
    <div class="container header-container">
        <router-link to="/" class="logo">Dashboard</router-link>
        <nav :class="isOpen ? 'active' : '' " class="nav">
            <router-link to="/" class="nav__item">Home</router-link>
            <router-link to="/employees" class="nav__item">Students</router-link>
            <router-link to="/about" class="nav__item">About</router-link>
            <router-link to="/signup"><button class="btn btn_p">Sign Up</button></router-link>
            <h1 @click="showNav()" class="close">+</h1>
        </nav>
        <svg @click="showNav()" class="open" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isOpen: false
        }
    },
    methods :{
        showNav(){
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn{
        border: none;
        padding: 6px 12px;
        border-radius: 0.25rem;
        &_p{
            background-color: #fff;
            color: #283044;
            border-color: #283044;
        }
    }
    .header{
        background-color: #283044;
        &-container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 5px 18px;
        }
        .logo{
        font-size: 30px;
        color: #ffffff!important;
        }
        .nav{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 48px;
        &__item{
            color: hsl(138, 33%, 94%)!important;
            font-size: 20px;
            }
        }
        .open{
        display: none;
        }
        .close{
            display: none;
        }
    }
@media (max-width: 768px) {
    .header{
        .open{
            display: block;
        }
    }
        .nav{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 50px;
            padding: 80px 0;
            position: absolute;
            left: -100%;
            top: 0;
            transition: all 0.35s;
            z-index: 1;
            background-color: #283044;
            width: 100%;

            height: 100vh;
            &__item{
                color: #fff!important;
            }
        }
        .active{
            left: 0;
        }
        .close{
            display: block!important;
            position: absolute;
            font-size: 50px;
            top: 10px;
            right: 5px;
            color: #fff;
            transform: rotate(45deg);
            z-index: 1;
        }
}

</style>