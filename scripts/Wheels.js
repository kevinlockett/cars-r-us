import { getWheels, setWheel, getWheelPreselector } from "./dataAccess.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel option</option>'

    const wheelButton = getWheelPreselector()

    const wheelOptions = wheels.map( (wheel) => {

        if (wheel.id === wheelButton) {

            return `<option value="${wheel.id}" selected="selected" >${wheel.option}</option>`

        } else {

            return `<option value="${wheel.id}">${wheel.option}</option>`

        }
    })

    html += wheelOptions.join("")
    html += "</select>"
   
    return html
}