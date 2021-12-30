export class contactPersonModel {
    id!: number;
    deliveryFlag!: boolean;
    type!: Type;
    firstName!: string;
    lastName!: string;
    identity!: number;
    address!: Address;
    cellPhone!: number;
    email!: string;
}

class Type {
    code!: number;
    value!: string;
}

class Address {
    homeNumber!: number;
    cityName!: string;
    streetName!: string;
}