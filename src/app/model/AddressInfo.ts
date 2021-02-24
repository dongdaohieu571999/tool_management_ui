export class AddressInfo {
    private district : string;
    private id: number;
    private no_street : string;
    private city : string;
    private wards : string;

    public AddressInfo(district : string, id: number, no_street : string, city : string, wards : string) {
        this.district = district;
        this.id = id;
        this.no_street = no_street;
        this.city = city;
        this.wards = wards;
    }

    getDistrict() : string{
        return this.district;
    }

    
    getId() : number{
        return this.id;
    }

    

    getNo_street() : string{
        return this.no_street;
    }

    
    getCity() : string{
        return this.city;
    }

    

    getWards() : string{
        return this.wards;
    }

    
}
