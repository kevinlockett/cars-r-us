import { getPaints, setPaint, getPaintPreselector} from "./dataAccess.js";

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paints") {
            setPaint(parseInt(event.target.value))
        }
    }
)


export const Paints = () => {
    let html = "<h2>Paints</h2>"

    
    html += '<select id="paints">'
    html += '<option value="0">Select an exterior color</option>'
    
    const paintButton = getPaintPreselector()
    
    const paintColorOptions = paints.map( (paint) => {

        if (paint.id === paintButton) {

            return `<option value="${paint.id}" selected="selected" >${paint.color} </option>`
            
        } else {

            return `<option value="${paint.id}">${paint.color}</option>`

        }
    })

    html += paintColorOptions.join("")
    html += "</select>"
   
    return html
}