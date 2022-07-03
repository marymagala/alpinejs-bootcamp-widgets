document.addEventListener('alpine:init', () =>{
    Alpine.data('wordLength_widget',function(){
        return{sentenceLength:'',
        length:0,
        calculate(){
    this.length=wordLength(this.sentenceLength +=1)
        }
    }
})
}) 