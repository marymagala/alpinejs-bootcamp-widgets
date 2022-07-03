document.addEventListener('alpine:init', () =>{
    Alpine.data('shortestWord_widget',function(){
        return{ phrase:'',
        sentence2:'',
        showWord(){
            this.phrase=shortestWord(this.sentence2)
    
        }  
             
    }
})
})