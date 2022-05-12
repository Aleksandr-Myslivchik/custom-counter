import {Counter} from './counter.js'
import {fixValues} from './fixValues.js'

export function createCounter(initValue = 0, minValue, maxValue) {

    const [init, min, max] = fixValues(initValue, minValue, maxValue)


    const root = document.querySelector('#root')
    const counterHTMLElement = document.createElement('div')
    counterHTMLElement.insertAdjacentHTML('afterbegin', `
    <div class="buttons">
            <button ${init === min ? 'disabled' : null} class="counter-button decrement">-</button>
            <button ${init === max ? 'disabled' : null} class="counter-button increment">+</button>
        </div>
        <span class="counter-lable">counter: <span class="counter-lable-item">${init}</span></span>
    `)
    counterHTMLElement.classList.add('counter-block')
    root.append(counterHTMLElement)


    return new Counter(counterHTMLElement, init, min, max)
}