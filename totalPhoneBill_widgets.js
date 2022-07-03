
document.addEventListener('alpine:init', () =>{
    Alpine.data('totalPhoneBillWidgets',function(){
        return{ bill:'',
        usageFor: '',
        calculate(){
            this.bill=totalPhoneBill(this.usageFor)
        }
    }
  })
})  