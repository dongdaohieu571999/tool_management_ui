export class ContractListDTO{
  contractId: number;
  customerId: number;
  nameContractOwner: String;
  paymentPeriod: String;
  insuranceType: String;
  mainInterestId: number;
  illustrationId: number;
  startTime: Date;
  status: String;

  getId(): number {return this.contractId;}

  getIdCustomer(): number {return this.customerId;}

  getNameContractOwner(): String {return this.nameContractOwner;}

  getPaymentPeriod(): String {return this.paymentPeriod;}

  getInsuranceType(): String {return this.insuranceType;}

  getIdMainInterst(): number {return this.mainInterestId;}

  getIdIllustration(): number {return this.illustrationId;}

  getStartTime(): Date {return this.startTime;}

  getStatus(): String {return this.status;}
}
