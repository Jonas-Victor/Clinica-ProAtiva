export class AppointmentAlreadyBooked extends Error {
  constructor() {
    super("This appointment is already booked.");
  }
}