import { database } from "./database.js"

export const addCustomOrder = () => {

    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    if ( database.customOrders.length === 0 ) {
        newOrder.id = 1
        } else {
            const lastIndex = database.customOrders.length - 1
            newOrder.id = database.customOrders[lastIndex].id + 1
    }

    // Add a timestamp to the order
    const date = new Date()
    newOrder.timestamp = date.toLocaleDateString

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getCustomOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getInteriorPreselector = () => {
    return database.orderBuilder.interiorId
}

export const getModels = () => {
    return database.models.map(model => ({...model}))
}

export const setModel = (id) => {
    database.orderBuilder.modelId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getModelPreselector = () => {
    return database.orderBuilder.modelId
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getPaintPreselector = () => {
    return database.orderBuilder.paintId
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getTechnologyPreselector = () => {
    return database.orderBuilder.technologyId
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getWheelPreselector = () => {
    return database.orderBuilder.wheelId
}
