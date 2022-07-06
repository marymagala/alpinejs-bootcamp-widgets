document.addEventListener('alpine:init', () => {
    Alpine.data('wordLength_widget', function () {
        return {
            sentenceLength: '',
            length: '',
            calculate() {
                this.length = wordLength(this.sentenceLength)
            }
        }
    })
}) 