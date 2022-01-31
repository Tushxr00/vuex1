<template>
    <div id="ProductListOne">
        <h2>Product list one </h2>
        <ul>
            <li v-for="product in saleProducts" :key="product.index">
                <!-- {{product.name}} -- {{product.price}} -->
                <span class="name">{{ product.name }}</span>
                <span class="price"> ! {{ product.price }}</span>

            </li>
        </ul>
        <button @click="reducePrice(4)"> Reduce Price</button>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    computed:{
        products(){
            return this.$store.state.products;
            
        },
        ...mapGetters([
            'saleProducts'
        ])
    },
    methods:{
        ...mapActions([
            'reducePrice'
        ])
    }
}
</script>

<style scoped>
#ProductListOne{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#ProductListOne ul{
    padding: 0;
}
#ProductListOne li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>