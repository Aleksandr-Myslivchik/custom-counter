class Counter {
    #value
    #counterBlock
    #minValue
    #maxValue

    constructor(initValue, htmlElement,minValue,maxValue) {

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
    }
    decrement = () => {
        if(this.#minValue === this.#value ){
            this.#counterBlock.querySelector('.decrement').setAttribute('disabled','true')
        }
        this.#value -= 1
        const lable = this.#counterBlock.querySelector('.counter-lable-item')
        if (!lable) {
            return
        }
        lable.innerText = this.#value
    }
}


function createCounter(initValue = 0, minValue, maxValue) {

    const fixedValue = typeof minValue === "number" && minValue > initValue ? minValue : initValue
    
    const root = document.querySelector('#root')
    const counterElement = document.createElement('div')
    counterElement.insertAdjacentHTML('afterbegin', `
    <div class="buttons">
            <button disabled=${fixedValue === minValue} class="counter-button decrement">-</button>
            <button class="counter-button increment">+</button>
        </div>
        <span class="counter-lable">counter: <span class="counter-lable-item">${fixedValue}</span></span>
    `)
    counterElement.classList.add('counter-block')
    root.append(counterElement)


    return new Counter(fixedValue, counterElement,minValue,maxValue)
}


createCounter(undefined,5)

// (()=> {
//     if(  typeof window === 'undefined'){
//         return
//     }
//
//     const body = document.body
//     const createCounter = document.createElement('button')
//     createCounter.innerText = 'Create Counter'
//     body.append(createCounter)
//
//
// })()
//


