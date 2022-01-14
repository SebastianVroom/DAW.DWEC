const Counter = {
    data(){
        return{
            contador : 0
        }
    }
}
window.onload = ()=>{
    Vue.createApp(Counter).mount('#Vueapp')
}