const database = {
    paints: [
        {
            id: 1,
            color: "Silver",
            price: 900
        },{
            id: 2,
            color: "Midnight Blue",
            price: 600
        },{
            id: 3,
            color: "Firebrick Red",
            price: 600
        },{
            id: 4,
            color: "Spring Green",
            price: 300
        }
    ],
    interiors: [
        {
            id: 1,
            type: "Beige Fabric",
            price: 1250
        },{
            id: 2,
            type: "Charcoal Fabric",
            price: 1075
        },{
            id: 3,
            type: "White Leather",
            price: 1750
        },{
            id: 4,
            type: "Black Leather",
            price: 1500
        }
    ],
    technologies: [
        {
            id: 1,
            package: "Basic Package",
            price: 500
        },{
            id: 2,
            package: "Navigation Package",
            price: 2500
        },{
            id: 3,
            package: "Visibility Package",
            price: 2750
        },{
            id: 4,
            package: "Ultra Package",
            price: 5000
        }
    ],
    wheels: [
        {
            id: 1,
            option: "17-inch Pair Radial Silver",
            pricePerSet: 515.95
        },{
            id: 2,
            option: "17-inch Pair Radial Black",
            pricePerSet: 593.95
        },{
            id: 3,
            option: "18-inch Pair Spoke Silver",
            pricePerSet: 663.98
        },{
            id: 4,
            option: "18-inch Pair Spoke Black",
            pricePerSet: 763.99
        }
    ],
    models: [
        {
            id: 1,
            type: "Car",
            basePrice: 25295,
            optionsAdjustment: 1
        },{
            id: 2,
            type: "SUV",
            basePrice: 26350,
            optionsAdjustment: 1.5
        },{
            id: 3,
            type: "Truck",
            basePrice: 34125,
            optionsAdjustment: 2.5
        },
    ],
    customOrders: [

    ],
    orderBuilder: {}
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const getModels = () => {
    return database.models.map(model => ({...model}))
}

export const setModel = (id) => {
    database.orderBuilder.modelId = id
}

export const getCustomOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

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