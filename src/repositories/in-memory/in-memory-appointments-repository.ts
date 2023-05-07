import { Appointment } from "../../entitites/appointment";
import { AppointmentsRepository } from "../appointments-repository copy";
import { areIntervalsOverlapping } from "date-fns";
export class InMemoryAppointmentsRepository implements AppointmentsRepository{
    public items: Appointment[] = [];
    
    async create(appointment: Appointment): Promise<void> {
        this.items.push(appointment);
    }
    async findOverlappingAppointment(startAt: Date, endAt: Date): Promise<Appointment | null> {

        const overlappingAppointment = this.items.find(appointment => {
        
            return areIntervalsOverlapping({start:startAt,end:endAt},{start:appointment.startAt,end:appointment.endAt},{inclusive:true})
        
        })
        if (!overlappingAppointment){
            return null;
        }
        return overlappingAppointment;
    }
  
}