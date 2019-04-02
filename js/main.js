var app = new Vue({
    el:'#app',
    data:{
        product:"Socks",
        image:"assets/vmSocks-green-onWhite.jpg",
        link: 'https://www.amazon.com/s?k=socks&ref=nb_sb_noss',
        inventory:0,
        inStock: false,
        sale: false,
        sizes:['S','M','L','XL'],
        details: ["80% cotton","20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage:"assets/vmSocks-green-onWhite.jpg"
            },
            {
                variantId:2235,
                variantColor: "blue",
                variantImage:"assets/vmSocks-blue-onWhite.jpg"

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
        updateProduct:function(variantImage){
            this.image = variantImage
        }
    }
})
        
        