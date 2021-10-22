import { Models } from "./Models.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { OrderButton } from "./OrderButton.js"


export const CarsRUs = () => {
    return `
    
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">

            <section class="choices__models options">
                ${Models()}
            </section>

            <section class="choices__paints options">
                ${Paints()}
            </section>
    
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
        
            <section class="choices__technologies options">
                ${Technologies()}
            </section>

            <section class="choices__wheels options">
                ${Wheels()}
            </section>
            
            <section class="orderButton">
                ${OrderButton()}
            </section>

        </article>

    `

}