class Counter {
    constructor(initValue, htmlElement) {
        this.value = initValue
        this.counterBlock = htmlElement
        this.init()
    }
    init(){
        const incrementButton = this.counterBlock.querySelector('.increment')
        const decrementButton = this.counterBlock.querySelector('.decrement')

        incrementButton.onclick = this.increment
        decrementButton.onclick = this.decrement

    }

    get counter(){
        return this.value
    }
    get element(){
        return this.counterBlock
    }
    increment = ()=>{
        this.value += 1
        const lable = this.counterBlock.querySelector('.counter-lable-item')
        if(!lable){
            return
        }
        lable.innerText = this.value
    }
    decrement = ()=> {
        this.value -= 1
        const lable = this.counterBlock.querySelector('.counter-lable-item')
        if(!lable){
            return
        }
        lable.innerText = this.value
    }
}


function createCounter(initValue = 0) {
    const root = document.querySelector('#root')
    const counterElement = document.createElement('div')
    counterElement.insertAdjacentHTML('afterbegin',`
    <div class="buttons">
            <button class="counter-button decrement">-</button>
            <button class="counter-button increment">+</button>
        </div>
        <span class="counter-lable">counter: <span class="counter-lable-item">${initValue}</span></span>
    `)
    counterElement.classList.add('counter-block')
    root.append(counterElement)

    return new Counter(initValue,counterElement)
}

const counterOne = createCounter(10)
const counterTwo = createCounter()



