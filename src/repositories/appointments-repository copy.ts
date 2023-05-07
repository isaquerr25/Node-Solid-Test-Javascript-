import { Appointment } from "../entitites/appointment";

export interface AppointmentsRepository {
    create(appointment: Appointment): Promise<void>;
    findOverlappingAppointment(startAt: Date, endAt: Date): Promise<Appointment | null>
}