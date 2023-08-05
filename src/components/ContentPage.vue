<template>
    <section class="flex flex-col py-12 md:py-36 gap-16 md:gap-20">

        <div v-if="showCodeBox" class="z-10 absolute w-screen h-screen bg-black top-0 left-0 opacity-80 flex justify-center items-center"></div>

        <div v-if="showCodeBox" class="z-10 absolute w-screen h-screen flex justify-center items-center top-0 left-0">
            <div class="redeem flex flex-col items-end pb-8">

                <font-awesome-icon :icon="['fas', 'xmark']" class="text-xl md:text-2xl lg:text-3xl closeBtn m-1 md:m-2 cursor-pointer"  @click="showItemCode()" />

                <div class="flex flex-col gap-1 md:gap-3 px-6 items-center w-full">
                    <div class="rounded-full w-16 h-16"><img :src="`./${activeItem.img}`" class="w-16"></div>
                    <h3 class="text-base md:text-2xl font-bold text-web-grey">{{ activeItem.title }}</h3>

                    <h3 v-if="redeemCode" class="text-base md:text-3xl h-14 w-36 md:w-64 mt-4 flex justify-center font-black text-web-grey p-2 border-2 rounded-lg">{{ activeItem.code }}</h3>

                    <div v-if="!redeemCode" class="bg-black h-14 w-36 md:w-64 rounded-lg mt-4 text-white font-bold flex justify-center items-center cursor-pointer hover:bg-white hover:text-black hover:border-2" @click="redeem(activeItem.id)">REDEEM</div>
                </div>

            </div>
        </div>
        

        <div class="flex flex-col lg:gap-10 gap-3 items-center md:items-start">

            <h1 class="text-5xl md:text-6xl lg:text-7xl text-web-dark font-extrabold text-center">My Coupons</h1>

            <div class="flex w-full xl:flex-row flex-col gap-10 lg:justify-between xl:items-center">
                <p class="text-xl md:text-2xl lg:text-3xl font-bold text-web-grey text-center md:text-left">We got a surprising discounts for you.</p>

                <div class="flex md:gap-10 text-web-grey text-sm md:text-lg lg:text-xl font-extrabold justify-between  items-center">
                    <p class="cursor-pointer" :class="{ 'text-web-dark' : sortBtn.all }" @click="sortData('all')">ALL</p>
                    <div class="bg-web-grey h-5 w-0.5"></div>
                    <p class="cursor-pointer" :class="{ 'text-web-dark' : sortBtn.food }" @click="sortData('food')">FOOD</p>
                    <div class="bg-web-grey h-5 w-0.5"></div>
                    <p class="cursor-pointer" :class="{ 'text-web-dark' : sortBtn.travel }" @click="sortData('travel')">TRAVEL</p>
                    <div class="bg-web-grey h-5 w-0.5"></div>
                    <p class="cursor-pointer" :class="{ 'text-web-dark' : sortBtn.shop }" @click="sortData('shop')">SHOP</p>
                </div>
            </div>

            
        </div>

        <div class="card_container flex flex-wrap w-full gap-10 md:gap-14 md:flex-row flex-col items-center">


            <div v-for="item in sortedData" class="card p-3 md:p-6 rounded-xl" :id="item.id" @click="showItemCode(item)">
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
    methods: {
        redeem(itemID) {
            this.redeemCode = true
            this.data = this.data.filter(item => item.id !== itemID)
            this.sortedData = this.sortedData.filter(item => item.id !== itemID)
        },

        showItemCode(item){
            this.activeItem = item
            this.showCodeBox = !this.showCodeBox
            this.redeemCode = false
        },

        sortData(sortType) {

            if(sortType == "food") {

                this.sortedData = this.data.filter  (item => item.type === "food")
                this.sortBtn = { all : false, food: true, travel : false, shop : false }

            } else if(sortType == "travel") {

                this.sortedData = this.data.filter  (item => item.type === "travel")
                this.sortBtn = { all : false, food: false, travel : true, shop : false }

            } else if(sortType == "shop") {

                this.sortedData = this.data.filter  (item => item.type === "shop")
                this.sortBtn = { all : false, food: false, travel : false, shop : true }

            } else {

                this.sortedData = this.data
                this.sortBtn = { all : true, food: false, travel : false, shop : false }
            }

        }
    },
    data (){
        let data = [
            { id: 1, title: "STARBUCKS", desc: "BUY GET 1 FREE", vDate: "01 Jan 2024", img: "starbucks.png", type: "food", code: "3A4FXC90A" },
            { id: 2, title: "MCDONALDS", desc: "$15 COUPON", vDate: "25 Oct 2023", img: "mcdon.png", type: "food", code: "9SDJKJ58J" },
            { id: 3, title: "DOMINO'S", desc: "30% Off", vDate: "12 Dec 2023", img: "dominos.png", type: "food", code: "783HIJAS7" },
            { id: 4, title: "NIKE", desc: "10% Off", vDate: "06 Apr 2023", img: "nike.png", type: "shop", code: "SDSFF4A27" },
            { id: 5, title: "GUCCI", desc: "5% Off", vDate: "19 Feb 2023", img: "gucci.png", type: "shop", code: "AESF2312S" },
            { id: 6, title: "NORTHFACE", desc: "Rs.3000 Off", vDate: "23 Mar 2023", img: "northface.jpg", type: "shop", code: "LCSDF892H" },
            { id: 7, title: "NEW BALANCE", desc: "Rs.1000 Off", vDate: "01 Mar 2023", img: "newBal.png", type: "shop", code: "AS82JGFN9" }
        ]

        let redeemCode = false

        let showCodeBox = false

        let sortedData = data

        let activeItem = { id: 1, title: "TEST", desc: "TEST", vDate: "01 Jan 2024", img: "starbucks.png", type: "food", code: "3A4FXC90A" }

        let sortBtn = { all : true, food: false, travel : false, shop : false }

        return { data, sortedData, sortBtn, showCodeBox, activeItem, redeemCode }
    }
}
</script>

<style lang="scss" scoped>
section{
    padding-left: max(30px, 15vw);
    padding-right: max(30px, 15vw);

    .redeem{
        height: fit-content;
        border-radius: 10px;
        background-color: white;
        animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
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

        .redeem{
            height: 260px;
        }

        .card_container {
            .card {
                height: 130px;
                width: 230px;
            }
        }
    
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