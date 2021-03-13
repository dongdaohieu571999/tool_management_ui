export class ContractInContractListDTO{
  contractId: number;
  customerId: number;
  nameContractOwner: String;
  paymentPeriod: String;
  insuranceType: String;
  idMainInterest: number;
  idIllustration: number;
  startTime: Date;
  status: String;

  getId(): number {return this.contractId;}

  getIdCustomer(): number {return this.customerId;}

  getNameContractOwner(): String {return this.nameContractOwner;}

  getPaymentPeriod(): String {return this.paymentPeriod;}

  getInsuranceType(): String {return this.insuranceType;}

  getIdMainInterst(): number {return this.idMainInterest;}

  getIdIllustration(): number {return this.idIllustration;}

  getStartTime(): Date {return this.startTime;}

  getStatus(): String {return this.status;}
}
