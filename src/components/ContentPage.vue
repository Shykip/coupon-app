<template>
    <section class="flex flex-col py-20 md:py-48 gap-20">
        <div class="flex flex-col lg:gap-10 gap-3">

            <h1 class="text-5xl md:text-6xl lg:text-7xl text-web-dark font-extrabold">My Coupons</h1>

            <div class="flex xl:flex-row flex-col gap-10 lg:justify-between xl:items-center">
                <p class="text-xl md:text-2xl lg:text-3xl font-bold text-web-grey">We got a surprising discounts for you.</p>

                <div class="flex md:gap-10 text-web-grey text-sm md:text-lg lg:text-xl font-extrabold justify-between  items-center">
                    <p class="text-web-dark cursor-pointer">ALL</p>
                    <div class="bg-web-grey h-5 w-0.5"></div>
                    <p class="cursor-pointer">FOOD</p>
                    <div class="bg-web-grey h-5 w-0.5"></div>
                    <p class="cursor-pointer">TRAVEL</p>
                    <div class="bg-web-grey h-5 w-0.5"></div>
                    <p class="cursor-pointer">SHOP</p>
                </div>
            </div>

            
        </div>

        <div>

            <div>
                <div><img src="" alt=""></div>

                <div>
                    <h3>STARBUCKS</h3>
                    <h1>BUY GET 1 FREE</h1>
                    <p>Valid until 05 Apr 2023</p>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
section{
    padding-left: max(30px, 15vw);
    padding-right: max(30px, 15vw);
}
</style>