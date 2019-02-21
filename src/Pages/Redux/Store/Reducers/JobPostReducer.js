const initState = {
    jobs: [
        { id: '1', service: 'Junk Removal', email: 'test@gmail.com', attachments: "", name: "Brandon", address: "48499 west lane", city: "Big City", state: "AL", zipCode: "45651", largeItems: "no", date: "2/28/2019", time: "12:00", flightOfStairs: "8", truckLoads: "3", typeOfTruck: "", specialInstructions: "test" },
        { id: '2', service: 'Junk Removal', email: 'test@gmail.com', attachments: "", name: "Brandon", address: "48499 west lane", city: "Big City", state: "AL", zipCode: "45651", largeItems: "no", date: "2/28/2019", time: "12:00", flightOfStairs: "8", truckLoads: "3", typeOfTruck: "", specialInstructions: "test" },
        { id: '3', service: 'Junk Removal', email: 'test@gmail.com', attachments: "", name: "Brandon", address: "48499 west lane", city: "Big City", state: "AL", zipCode: "45651", largeItems: "no", date: "2/28/2019", time: "12:00", flightOfStairs: "8", truckLoads: "3", typeOfTruck: "", specialInstructions: "test" }

    ]
}

const JobPostReducer = (state = initState, action) => {
    return state

}


export default JobPostReducer;