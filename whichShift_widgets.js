document.addEventListener('alpine:init', () =>{
    Alpine.data('whichShiftWidget',function(){
        return{amount:'',
        workingShift:'',
        shift:'',
    transportAmount(){
        this.amount=transportFee(this.shift)
        
    }
   }
   })
})