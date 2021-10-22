import { getPaints, setPaint } from "./database.js";

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

    const paintColorOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += paintColorOptions.join("")
    html += "</select>"
   
    return html
}