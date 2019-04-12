Vue.component('product',{
    props: [message],
    template: `
        <div>
        {{message}}}
        </div>
`
})


var app = new Vue({
    el:'#app',
    data:{
        brand: 'Vue Mastery',
        product:"Socks",
        selectedVariant:0,
        link: 'https://www.amazon.com/s?k=socks&ref=nb_sb_noss',
        sale: false,
        inventory:0,
        sizes:['S','M','L','XL'],
        details: ["80% cotton","20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage:"assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId:2235,
                variantColor: "blue",
                variantImage:"assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0

            }
        ],
        cart:0
        },
    methods:{
        addToCart: function(){
            this.cart += 1
        },
        removeFromCart: function(){
            if(this.cart>0){
                this.cart -= 1
            }

        },
        updateProduct:function(index){
            this.selectedVariant = index
        }
    },
    
    computed:{
        title(){
            return this.brand +' '+ this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
        
    }
})

        
        