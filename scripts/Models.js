import { getModels, setModel } from "./database.js"

const models = getModels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "models") {
            setModel(parseInt(event.target.value))
        }
    }
)

export const Models = () => {
    
    let html = "<h2>Models</h2>"

    html += '<select id="models">'
    html += '<option value="0">Select a model</option>'

    const modelOptions = models.map( (model) => {
            return `<option value="${model.id}">${model.type}</option>`
        }
    )

    html += modelOptions.join("")
    html += "</select>"
   
    return html
}
