import { addCustomOrder } from "./dataAccess.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const OrderButton = () => {
    return `

        <div>
            <button id="orderButton">Place Car Order</button>
        </div>
    `
}