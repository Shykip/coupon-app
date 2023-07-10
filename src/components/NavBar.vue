<template>
    <header class="flex justify-between items-center h-20 md:h-32">
        <div class="flex gap-2 md:gap-6 items-center cursor-pointer h-12">
            <font-awesome-icon :icon="['fas', 'tags']" class="text-3xl md:text-4xl lg:text-5xl" />
            <h1 class="text-xl md:text-2xl lg:text-3xl text-web-dark font-black">COUPONS</h1>
        </div>

        <div class="flex items-center justify-between bg-web-dark rounded-full gap-4 px-5 md:px-10 cursor-pointer  h-8 md:h-12">
            <p class="text-web-aqua text-lg font-bold whitespace-nowrap hidden md:block">Sign in</p>
            <font-awesome-icon :icon="['fas', 'right-to-bracket']" class="lg:text-3xl md:text-2xl text-xl text-web-aqua" />
        </div>
    </header>
</template>


<script>
</script>


<style lang="scss" scoped>
header{
    padding-left: max(30px, 15vw);
    padding-right: max(30px, 15vw);
    flex-shrink: 0;
}
</style>