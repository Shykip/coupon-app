<template>
    <header class="flex justify-between items-center h-20 md:h-32">
        <div class="flex gap-2 md:gap-6 items-center cursor-pointer h-12">
            <font-awesome-icon :icon="['fas', 'tags']" class="text-3xl md:text-4xl lg:text-5xl" />
            <h1 class="text-xl md:text-2xl lg:text-3xl text-web-dark font-black">COUPONS</h1>
        </div>

        <div class="flex items-center justify-between bg-web-dark rounded-full gap-4 px-5 md:px-10 cursor-pointer  h-8 md:h-12"  @click="toggleSignInBox()">
            <p class="text-web-aqua text-lg font-bold whitespace-nowrap hidden md:block">Sign in</p>
            <font-awesome-icon :icon="['fas', 'right-to-bracket']" class="lg:text-3xl md:text-2xl text-xl text-web-aqua" />
        </div>

        <div v-if="showSignInBox" class="z-10 absolute w-screen h-screen bg-black top-0 left-0 opacity-80 flex justify-center items-center"></div>
        <div v-if="showSignInBox" class="z-10 absolute w-screen h-screen flex justify-center items-center top-0 left-0">
            <div class="signInBox flex flex-col items-end h-fit pb-8">
                
                <font-awesome-icon :icon="['fas', 'xmark']" class="text-xl md:text-2xl lg:text-3xl closeBtn m-1 md:m-2 cursor-pointer"  @click="toggleSignInBox()" />

                <div class="flex flex-col gap-1 md:gap-3 px-6 justify-center w-full">

                    <label for="" class="text-lg font-bold text-web-grey">Username</label>
                    <input type="text" placeholder="Username" class=" w-full h-14 border-2 rounded-lg pl-4">

                    <label for="" class="text-lg font-bold text-web-grey">Password</label>
                    <input type="password" placeholder="Password" class=" w-full h-14 border-2 rounded-lg pl-4">

                    <label v-if="signInMode == 'Register'" for="" class="text-lg font-bold text-web-grey">Confirm Password</label>
                    <input v-if="signInMode == 'Register'" type="password" placeholder="Confirm Password" class=" w-full h-14 border-2 rounded-lg pl-4">

                    <p v-if="signInMode == 'Login'" class="text-md font-bold text-web-grey cursor-pointer hover:text-black w-fit" @click="toggleSignInMode('Register')">Create new account?</p>
                    <p v-if="signInMode == 'Register'" class="text-md font-bold text-web-grey cursor-pointer hover:text-black w-fit" @click="toggleSignInMode('Login')">Already have an account?</p>
                    
                    <button class="bg-black rounded-lg h-14 text-white font-bold text-lg mt-10 cursor-pointer">{{ signInMode }}</button>
                </div>

            </div>
        </div>
        

    </header>
</template>


<script>

export default {
    methods : {
        toggleSignInBox(){
            this.showSignInBox = !this.showSignInBox
        },

        toggleSignInMode(mode){
            this.signInMode = mode
        }
    },

    data (){
        let showSignInBox = false   
        let signInMode = "Login"

        return {showSignInBox, signInMode}
    }
}
</script>


<style lang="scss" scoped>
header{
    padding-left: max(30px, 15vw);
    padding-right: max(30px, 15vw);
    flex-shrink: 0;

    .signInBox{
        width: 360px;
        background-color: white;
        border-radius: 10px;
        animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    }
}

@keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}
</style>