import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entitites/appointment";
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointments-repository";

describe('Create Appointment', () => {
    it("should be created an appointment", async () => {
        const startAt = new Date()
        const endAt = new Date()
        startAt.setDate(endAt.getDate()+1)
        endAt.setDate(endAt.getDate()+2)
        
        const appointmentsRepository = new InMemoryAppointmentsRepository()
        const createAppointment = new CreateAppointment(appointmentsRepository)
        expect(createAppointment.execute({
            customer : "John Doe",
            startAt ,
            endAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})