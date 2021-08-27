import { PhoneNumberType } from "./phoneNumberType";

export class PersonPhone {
    BusinessEntityID: number;
    PhoneNumber: string;
    PhoneNumberTypeId: number;

    constructor(businessEntityID: number, phoneNumber: string, phoneNumberTypeId: number ) {
        this.BusinessEntityID = businessEntityID;
        this.PhoneNumber = phoneNumber;
        this.PhoneNumberTypeId = phoneNumberTypeId;
    }
  }