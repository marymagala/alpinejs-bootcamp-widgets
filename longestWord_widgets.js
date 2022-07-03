document.addEventListener('alpine:init', () =>{
    Alpine.data('longestWord_widget',function(){
        return{ phrase:'',
        sentence:'',
        showWord(){
            this.phrase=longestWord(this.sentence)
    
        }
    }
})
})