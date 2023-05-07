import { Appointment } from "../entitites/appointment";
import { AppointmentsRepository } from "../repositories/appointments-repository copy";

interface ICreateAppointmentRequest {
    customer: string;
    startAt: Date;
    endAt: Date;
}

type TCreateAppointmentResponse = Appointment



export class CreateAppointment {
    
    constructor(
        private appointmentsRepository: AppointmentsRepository
    ){}

    async execute( {customer,startAt,endAt} : ICreateAppointmentRequest): Promise<TCreateAppointmentResponse>{
        
        const overlappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(startAt,endAt)
        
        if(overlappingAppointment){
        
            throw new Error("Another appointment overlaps this appointment dates")
        }
        
        const appointment = new Appointment({customer,startAt,endAt})
        
        await this.appointmentsRepository.create(appointment)
        
        return appointment
        
        
    
    }
    
}
