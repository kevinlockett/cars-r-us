import { getModels, setModel } from "./database.js"

const models = getModels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "model") {
            setModel(parseInt(event.target.value))
        }
    }
)

export const Models = () => {
    
    let html = "<h2>Models</h2><h4>Select your choice of model</h4>"

    const modelOptions = models.map(model => {
        return `<input type="radio" name="model" value="${model.id}" /> ${model.type}`
    })

    html += modelOptions.join(" ")
   
    return html
}
