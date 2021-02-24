export class Customer {
    private id: number;
    private birth_date: Date;
    private age: number;
    private birth_address: string;
    private types_identification: string;
    private ID_card: string;
    private nationality_1: string;
    private nationality_2: string;
    private nation: string;
    private job: string;
    private career: string;
    private position: string;
    private occupation_group: string;
    private company_name: string;
    private main_business: string;
    private specific_work: string;
    private monthly_income: number;
    private id_current_address: number;
    private id_permanent_address: number;
    private id_contact_address: number;
    private id_workplace_address: number;
    private email: string;
    private phone_1: string;
    private phone_2: string;
    private id_account : number

    constructor(id: number, birth_date: Date, age: number, birth_address: string, types_identification: string, ID_card: string, nationality_1: string, nationality_2: string,
        nation: string, job: string, career: string, position: string, occupation_group: string, company_name: string, main_business: string, specific_work: string, monthly_income: number,
        id_current_address: number, id_permanent_address: number, id_contact_address: number, id_workplace_address: number, email: string, phone_1: string, phone_2: string, id_account: number) {

        this.id = id;
        this.birth_date = birth_date;
        this.age = age;
        this.birth_address = birth_address;
        this.types_identification = types_identification;
        this.ID_card = ID_card;
        this.nationality_1 = nationality_1;
        this.nationality_2 = nationality_2;
        this.nation = nation;
        this.job = job;
        this.career = career;
        this.position = position;
        this.occupation_group = occupation_group;
        this.company_name = company_name;
        this.main_business = main_business;
        this.specific_work = specific_work;
        this.monthly_income = monthly_income;
        this.id_current_address = id_current_address;
        this.id_permanent_address = id_permanent_address;
        this.id_contact_address = id_contact_address;
        this.id_workplace_address = id_workplace_address;
        this.email = email;
        this.phone_1 = phone_1;
        this.phone_2 = phone_2;
    }
    getId(): number {
        return this.id;
    }

    getBirth_date(): Date {
        return this.birth_date;
    }

    getAge(): number {
        return this.age;
    }

    getBith_adress(): string {
        return this.birth_address;
    }

    getTypesIdentification(): string {
        return this.types_identification;
    }
    getID_card(): string {
        return this.ID_card;
    }
    getNationality_1(): string {
        return this.nationality_1;
    }
    getNationality_2(): string {
        return this.nationality_2;
    }
    getNation(): string {
        return this.nation;
    }
    getJob(): string {
        return this.job;
    }
    getCareer(): string {
        return this.career;
    }
    getPosition(): string {
        return this.position;
    }
    getOccupation_group(): string {
        return this.occupation_group;
    }
    getCompany_name(): string {
        return this.company_name;
    }
    getMain_business(): string {
        return this.main_business;
    }
    getSpecific_work(): string {
        return this.specific_work;
    }
    getMonthly_income(): number {
        return this.monthly_income;
    }
    getId_current_address(): number {
        return this.id_current_address;
    }
    getId_permanent_address(): number {
        return this.id_permanent_address;
    }
    getId_contact_address(): number {
        return this.id_contact_address;
    }
    getId_workplace_address(): number {
        return this.id_workplace_address;
    }
    getEmail(): string {
        return this.email;
    }
    getPhone_1(): string {
        return this.phone_1;
    }
    getPhone_2(): string {
        return this.phone_2;
    }
    getId_account(): number {
        return this.id_account;
    }
}