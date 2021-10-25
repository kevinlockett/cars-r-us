import { getInteriors, setInterior, getInteriorPreselector } from "./dataAccess.js"

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
    
    const interiorButton = getInteriorPreselector()

    const interiorOptions = interiors.map( (interior) => {

        if (interior.id === interiorButton) {

            return `<option value="${interior.id}" selected="selected" >${interior.type}</option>`

        }   else {

                return `<option value="${interior.id}">${interior.type}</option>`
        }
        
    })

    html += interiorOptions.join("")
    html += "</select>"
   
    return html
}