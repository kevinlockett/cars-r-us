import { getTechnologies, setTechnology, getTechnologyPreselector } from "./dataAccess.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technologies") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    
    let html = "<h2>Technologies</h2>"

    html += '<select id="technologies">'
    html += '<option value="0">Select a technology package</option>'

    const technologyButton = getTechnologyPreselector()

    const techPackageOptions = technologies.map( (technology) => {

        if (technology.id === technologyButton) {

            return `<option value="${technology.id}" selected="selected" >${technology.package}</option>`

        } else {

            return `<option value="${technology.id}">${technology.package}</option>`

        }

    })

    html += techPackageOptions.join("")
    html += "</select>"
   
    return html
}
