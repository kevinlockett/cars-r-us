import { addCustomOrder } from "./database.js"
import { CustomOrders } from "./CustomOrders.js"

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