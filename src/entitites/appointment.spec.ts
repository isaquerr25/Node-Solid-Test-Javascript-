import { expect, test } from "vitest"
import { Appointment } from "./appointment"

test("create an appointment", () =>{ 

    const startAt = new Date()
    const endAt = new Date()
    
    startAt.setDate(startAt.getDate()+1)
    
    endAt.setDate(endAt.getDate()+2)
    
    const appointment = new Appointment({
    
        customer : "John Doe",
        startAt ,
        endAt
    })
    
    
    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual("John Doe")
    
})

test("cannot create an appointment with and date before start date", () =>{
    
    const startAt = new Date()
    const endAt = new Date()
    endAt.setDate(endAt.getDate()-1)
    expect(()=>{
        return new Appointment({
            customer: "John Doe",
            startAt,
            endAt
    })}).toThrow()
  

})
