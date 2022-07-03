document.addEventListener('alpine:init', () =>{
    Alpine.data('whichShiftWidget',function(){
        return{amount:'',
        workingShift:'',
    transportAmount(){
        this.amount=transportFee(this.workingShift)
    }
   }
   })
})