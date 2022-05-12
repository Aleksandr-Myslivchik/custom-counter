export class Counter {
    #value
    #counterBlock
    #minValue
    #maxValue
    #incrementDisabled = false
    #decrementDisabled = false

    constructor(htmlElement, initValue, minValue, maxValue) {

        this.#value = initValue
        this.#minValue = minValue
        this.#maxValue = maxValue
        this.#counterBlock = htmlElement
        this.init()
    }

    init() {

        const incrementButton = this.#counterBlock.querySelector('.increment')
        const decrementButton = this.#counterBlock.querySelector('.decrement')

        incrementButton.onclick = this.increment
        decrementButton.onclick = this.decrement

    }

    get counter() {
        return this.#value
    }

    increment = () => {

        this.#value += 1
        const lable = this.#counterBlock.querySelector('.counter-lable-item')
        if (!lable) {
            return
        }
        lable.innerText = this.#value
        this.#checkButtonState()
    }
    decrement = () => {

        this.#value -= 1
        const lable = this.#counterBlock.querySelector('.counter-lable-item')
        if (!lable) {
            return
        }
        lable.innerText = this.#value
        this.#checkButtonState()

    }
    #checkButtonState = () => {
        if (this.#minValue === this.#value && !this.#decrementDisabled) {
            this.#counterBlock.querySelector('.decrement').setAttribute('disabled', 'true')
            this.#decrementDisabled = true
        }

        if (this.#maxValue === this.#value && !this.#incrementDisabled) {
            this.#counterBlock.querySelector('.increment').setAttribute('disabled', 'true')
            this.#incrementDisabled = true
        }

        if (this.#decrementDisabled && this.#minValue < this.#value) {
            this.#decrementDisabled = false
            this.#counterBlock.querySelector('.decrement').removeAttribute('disabled')
        }

        if (this.#incrementDisabled && this.#maxValue > this.#value) {
            this.#incrementDisabled = false
            this.#counterBlock.querySelector('.increment').removeAttribute('disabled')
        }
    }
}