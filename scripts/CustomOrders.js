import { getCustomOrders, getInteriors, getModels, getPaints, getTechnologies, getWheels } from "./dataAccess.js"

const buildOrderOptionsList = (order) => {
    
    const customOrders = getCustomOrders()

        if ( customOrders.length >= 0 ) {


            const models = getModels()
    
            const modelChoice = models.find(
                (model) => {
                return model.id === order.modelId
                }
            )
    
            const interiors = getInteriors()
    
            const interiorChoice = interiors.find(
                (interior) => {
                    return interior.id === order.interiorId
                }
            )
        
            const paints = getPaints()
        
            const paintChoice = paints.find(
                (paint) => {
                    return paint.id === order.paintId
                }
            )

            const technologies = getTechnologies()

            const technologyChoice = technologies.find(
                (technology) => {
                   return technology.id === order.technologyId
                }
            )

            const wheels = getWheels()

            const wheelChoice = wheels.find(
                (wheel) => {
                    return wheel.id === order.wheelId
                }
            )

            const totalCost = modelChoice.basePrice + ((interiorChoice.price + paintChoice.price + technologyChoice.price + wheelChoice.pricePerSet) * modelChoice.optionsAdjustment)

            const costString = totalCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

            return `<div class="newOrder">
                Order #${order.id}: ${paintChoice.color} ${modelChoice.type} with ${wheelChoice.option} wheels, ${interiorChoice.type}, and the ${technologyChoice.package} for a total cost of ${costString}
            </div>`
        }
}

export const CustomOrders = () => {

    const customOrders = getCustomOrders()

    let orderHTML = ""

    const orderListItems = customOrders.map(buildOrderOptionsList)

    orderHTML += orderListItems.join("")

    return orderHTML
}