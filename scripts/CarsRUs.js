import { Models } from "./Models.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { OrderButton } from "./OrderButton.js"
import { CustomOrders } from "./CustomOrders.js"


export const CarsRUs = () => {
    return `
    
        <h1>Cars 'R Us: Personal Car Builder</h1>
        
        <article class="choices__models">
            ${Models()}
        </article>

        <article class="choices">


            <section class="choices__paints options">
                ${Paints()}
            </section>
    
            <section class="choices__interiors options">
                ${Interiors()}
            </section>

            <section class="choices__wheels options">
                ${Wheels()}
            </section>
        
            <section class="choices__technologies options">
                ${Technologies()}
            </section>

        </article>
            
        <article class="orderButton">
            ${OrderButton()}
        </article>
        
        <article class="customOrders">
            <h2>Custom Car Orders<h2>
            <section>
                ${CustomOrders()}
            </section>
        </article>



    `

}