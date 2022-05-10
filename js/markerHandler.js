AFRAME.registerComponent('marker-handler', {
    init: async function(){
        this.el.addEventListener('markerFound', ()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener('markerLost', ()=>{
            this.handleMarkerLost()
        })
    },
    handleMarkerFound: function(){
        var button = document.getElementById('button-div')
        button.style.display = 'flex'
        var rating = document.getElementById('rating-button')
        var order = document.getElementById('order-button')
        rating.addEventListener('click', function(){
            swal({
                icon: 'warning',
                title: 'Rate Dish',
                text: 'Work In Progress..'
            })
        })
        order.addEventListener('click', function(){
            swal({
                icon: './assets/4NZ6uLY.jpg',
                title: 'Thanks for Ordering',
                text: 'Your Order will be served at your table soon..'
            })
        })
    },
    handleMarkerLost: function(){
       var button = document.getElementById('button-div') 
       button.style.display = 'null'

    },
})