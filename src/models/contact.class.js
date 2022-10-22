export class Contact {
    name = '';
    phone = '';
    connected = false;

    constructor(name, phone, connected) {
        this.name = name;
        this.phone = phone;
        this.connected = connected;
    }
}