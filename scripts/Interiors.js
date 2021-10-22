import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiors") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interior</h2>"

    html += '<select id="interiors">'
    html += '<option value="0">Select an interior option</option>'

    const interiorOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.type}</option>`
        }
    )

    html += interiorOptions.join("")
    html += "</select>"
   
    return html
}