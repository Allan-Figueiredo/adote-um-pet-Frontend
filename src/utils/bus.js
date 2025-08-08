import EventEmitter from "events";
const bus = new EventEmitter();
bus.setMaxListeners(20); // Increase max listeners to avoid warnings
export default bus;