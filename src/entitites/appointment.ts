export interface IAppointmentProps{

    customer : string
    startAt : Date
    endAt : Date
}

export class Appointment {
    
    private props: IAppointmentProps
    
    constructor(props: IAppointmentProps){
        const {startAt, endAt} = props
        
        if(startAt <= new Date()){
            throw new Error("Invalid end date")
        }
        
        if(endAt <= startAt){
            throw new Error("Invalid end date")
        }
        
        this.props = props;
    
    }
    
    get customer() {
    
        return this.props.customer
        
    }
    
    get startAt() {
    
        return this.props.startAt
        
    }
    
    get endAt() {
    
        return this.props.endAt
        
    }
    
}