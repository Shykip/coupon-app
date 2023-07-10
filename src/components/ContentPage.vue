<template>
    <section class="flex flex-col py-12 md:py-36 gap-16 md:gap-20">

        <div class="flex flex-col lg:gap-10 gap-3 items-center md:items-start">

            <h1 class="text-5xl md:text-6xl lg:text-7xl text-web-dark font-extrabold text-center">My Coupons</h1>

            <div class="flex xl:flex-row flex-col gap-10 lg:justify-between xl:items-center">
                <p class="text-xl md:text-2xl lg:text-3xl font-bold text-web-grey text-center">We got a surprising discounts for you.</p>

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

        <div class="card_container flex flex-wrap w-full gap-10 md:gap-13 md:flex-row flex-col items-center">


            <div v-for="item in data" class="card p-3 md:p-6 rounded-xl">
                <div class="rounded-full"><img :src="`./${item.img}`" class="w-16"></div>

                <div class="flex flex-col gap-1 md:gap-3 border-l-4 pl-4 ml-4 border-dashed">
                    <h3 class="text-base md:text-2xl font-bold text-web-grey">{{ item.title }}</h3>
                    <h1 class="text-base md:text-3xl font-black text-web-dark">{{ item.desc }}</h1>
                    <p class="text-xs md:text-base text-web-grey font-medium">Valid until {{ item.vDate }}</p>
                </div>
            </div>


        </div>

    </section>
</template>

<script>
export default {
    data (){
        let data = [
            { id: 1, title: "STARBUCKS", desc: "BUY GET 1 FREE", vDate: "05 Apr 2023", img: "starbucks.png" },
            { id: 1, title: "MCDONALDS", desc: "$15 COUPON", vDate: "05 Apr 2023", img: "mcdon.png" },
            { id: 1, title: "DOMINO'S", desc: "30% Off", vDate: "05 Apr 2023", img: "dominos.png" }
        ]
        return {
            data
        }
    }
}
</script>

<style lang="scss" scoped>
section{
    padding-left: max(30px, 15vw);
    padding-right: max(30px, 15vw);

    ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: none;
        
    }
    ::-webkit-scrollbar-thumb {
        background: #595959;
        border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #080E14;
    }

    .card_container{
        .card{
            height: 180px;
            width: 410px;
            filter: drop-shadow(8px 8px 0px #595959);
            cursor: pointer;
            display: flex;
            background-color: white;
            align-items: center;
        }
        .card:hover{
            transition: all .3s;
            transform: translate(-10px, -10px);
            filter: drop-shadow(18px 18px 0px #080E14);
        }
    }

    @media only screen and (max-width: 767px) {
        .card_container {
            .card {
                height: 130px;
                width: 230px;
                }
        }
    
    }
}
</style>