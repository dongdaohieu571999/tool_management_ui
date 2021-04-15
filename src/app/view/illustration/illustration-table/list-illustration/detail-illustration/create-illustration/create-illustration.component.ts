import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { Illustration } from 'src/app/model/Illustration';
import { IllustrationMainInterest } from 'src/app/model/IllustrationMainInterest';
import { IllustrationSubInterest } from 'src/app/model/IllustrationSubInterest';
import { Interest } from 'src/app/model/Interest';
import { MultiplierForPaymentPeriod } from 'src/app/model/MultiplierForPaymentPeriod';
import { Referencetable } from 'src/app/model/Referencetable';
import { RelatedPerson } from 'src/app/model/RelatedPerson';
import { CommonService } from 'src/app/services/common/common.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';
import { InterestService } from 'src/app/services/interest/interest.service';
import { RefertableService } from 'src/app/services/refertable/refertable.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { RelatedPersonService } from 'src/app/services/relatedPerson/related-person.service';

@Component({
  selector: 'app-create-illustration',
  templateUrl: './create-illustration.component.html',
  styleUrls: ['./create-illustration.component.css']
})
export class CreateIllustrationComponent implements OnInit {

  constructor(private relateSer: RelatedPersonService, private snackBar: SnackbarService, private spinner: NgxSpinnerService,
    private referenceTable: RefertableService, private illustService: IllustrationService,
    private interest: InterestService, private activeRoute: ActivatedRoute,
    private common: CommonService, private customerService: CustomerService) {
  }

  // biến dùng để xuất pdf
  @ViewChild('content') content: ElementRef;

  relatedPerson = new Array<RelatedPerson>();
  customerInfo = new CustomerInfo(0, new Date(), 0, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0, 0, 0, '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, 0, '', new Date(), 0, new Date(), '', 0);
  mainInterestList: Array<Interest>;
  subInterestList: Array<Interest>;
  subInterestListCopy: Array<Interest>;
  mainInterestSelect = new Interest;
  reference = new Referencetable();

  // disable button lưu bảng minh họa
  checkedTick = false;

  // disble button tính phí
  checkCountPayment = false;

  //hệ số định kỳ hàng năm
  mulPeriod: MultiplierForPaymentPeriod;

  //tổng số tiền bảo hiểm cuối cùng
  totalPayment = 0;

  // lấy id của illustration từ đường Link
  id_ill: number;



  //Them cac bien thuoc bang minh hoa o day

  create_time_ill: Date;

  illustrationMainInterest = new IllustrationMainInterest(0, this.mainInterestSelect.id, '', null, 0, false, 1, '', "Bản thân", 0, 0);

  illustration = new Illustration(0, 0, new Date(), this.mainInterestSelect.interest_name, 0, 0, this.illustrationMainInterest, []);



  //Them cac bien thuoc bang minh hoa o day


  ngOnInit(): void {
    this.getAllSubInterest();
    this.getAllMainInterest();
    this.getInfoCustomer();
    this.referenceTable.getAllReference().subscribe((data => {
      this.reference = data;
    }))
  }



  onCalculate() {
    let checkSubmit = true;
    if (this.create_time_ill != null
      && this.illustrationMainInterest.full_name_insured_person != ""
      && this.illustrationMainInterest.birth_date_insured_person != null
      && this.illustrationMainInterest.insurance_buyer_relation_insured_person != null
      && this.illustrationMainInterest.denominations != 0
      && this.mulPeriod != null) {
      console.log('the deo nao');

      if (this.subInterestListCopy.length != 0) {
        for (let item of this.subInterestListCopy) {
          if (!item.isDisable) {
            if (item.denominations == 0 || item.denominations == null) {
              this.snackBar.openSnackBar("Vui lòng điền các trường đầy đủ", "Đóng");
              checkSubmit = false;
              break;
            }
          }
        }
      }

      if (this.relatedPerson.length != 0) {
        for (let relate of this.relatedPerson) {
          if (relate.full_name != null
            && relate.relation != null
            && relate.date_of_birth != null) {
            if (relate.listSubInterest.length != 0) {
              for (let interest of relate.listSubInterest) {
                if (!interest.isDisable) {
                  if (interest.denominations == 0 || interest.denominations == null) {
                    this.snackBar.openSnackBar("Vui lòng điền các trường đầy đủ", "Đóng");
                    checkSubmit = false;
                    break;
                  }
                }
              }
            }
          } else {
            this.snackBar.openSnackBar("Vui lòng điền các trường đầy đủ", "Đóng");
            checkSubmit = false;
            break;
          }
        }
      }

      //tinh chi phi
      if (checkSubmit) {
        this.spinner.show();
        if (this.reference.multiplierForAge.length != 0) {
          console.log('sai cho loz nay af1');
          this.CalculateFee(this.reference, this.illustration);
          console.log('sai cho loz nay af2');
        } else {
          this.snackBar.openSnackBar("Vui Lòng Tải Lại Trang", 'Đóng');
        }
        this.spinner.hide();
        this.checkedTick = true;
      }

    } else {
      this.snackBar.openSnackBar("Vui lòng điền các trường đầy đủ", "Đóng");
    }

  }

  CalculateFee(ref: Referencetable, illustration: Illustration) {
    this.totalPayment = 0;
    // phí của gói quyền lợi chính
    this.illustrationMainInterest.fee_value = Math.round(ref.multiplierForMainInterest.find(i => i.main_interest_id == this.mainInterestSelect.id)['multiplier'] *
      this.illustrationMainInterest.denominations * ref.multiplierForGenders.find(i => i.gender == this.illustrationMainInterest.gender_insured_person ? '1' : '0')['multiplier'] *
      (1 + this.calculateAge(this.illustrationMainInterest.birth_date_insured_person) * ref.multiplierForAge.find(i => i.age == this.calculateAge(this.illustrationMainInterest.birth_date_insured_person))['multiplier']) *
      ref.multiplierForCareerGroup.find(i => i.group_number == this.illustrationMainInterest.carrier_group_insured_person)['multiplier']);

    // cộng vào tổng giá trị
    this.totalPayment += this.illustrationMainInterest.fee_value;

    // phí của gói quyền lợi phụ của người được bảo hiểm
    if (this.subInterestListCopy.find(i => i.isDisable == false)) {// kiểm tra xem người được bảo hiểm có quyền lợi phụ hay không
      for (let item of this.subInterestListCopy) {
        if (!item.isDisable) {// tìm kiếm những trường đã được tích chọn
          item.fee_value = Math.round(item.denominations * ref.multiplierForSubInterests.find(i => i.sub_interest_id == item.id)['multiplier'] *
            ref.multiplierForGenders.find(i => i.gender == this.illustrationMainInterest.gender_insured_person ? '1' : '0')['multiplier'] *
            (1 + this.calculateAge(this.illustrationMainInterest.birth_date_insured_person) * ref.multiplierForAge.find(i => i.age == this.calculateAge(this.illustrationMainInterest.birth_date_insured_person))['multiplier']) *
            ref.multiplierForCareerGroup.find(i => i.group_number == this.illustrationMainInterest.carrier_group_insured_person)['multiplier']);

          // cộng vào tổng giá trị
          this.totalPayment += item.fee_value;

        } else {
          item.fee_value = 0;
        }
      }
    }


    // phí của gói quyền lợi phụ của những người liên quan
    for (let relate of this.relatedPerson) {
      for (let interest of relate.listSubInterest) {
        if (!interest.isDisable) {
          interest.fee_value = Math.round(interest.denominations * ref.multiplierForSubInterests.find(i => i.sub_interest_id == interest.id)['multiplier'] *
            ref.multiplierForGenders.find(i => i.gender == relate.gender ? '1' : '0')['multiplier'] *
            (1 + this.calculateAge(relate.date_of_birth) * ref.multiplierForAge.find(i => i.age == this.calculateAge(relate.date_of_birth))['multiplier']) *
            ref.multiplierForCareerGroup.find(i => i.group_number == relate.carreer_group)['multiplier']);

          // cộng vào tổng giá trị
          this.totalPayment += interest.fee_value;

        } else {
          interest.fee_value = 0;
        }
      }
    }

    // tổng kết totalPayment
    this.totalPayment = Math.round(this.totalPayment * this.mulPeriod.multiplier);

    this.illustration.total_fee = this.totalPayment;
    this.illustration.payment_period_id = this.mulPeriod.priod_id;

  }

  addField() {
    var relatedPer1 = new RelatedPerson(0, '', '', null, true, 1, []);
    // deep copy this.subInterestList
    let list = this.subInterestList.map(x => Object.assign({}, x));
    relatedPer1.listSubInterest = list
    if (this.relatedPerson.length < 10) {
      this.relatedPerson.push(relatedPer1);
    }
  }

  getAllMainInterest() {
    this.interest.getAllMainInterest().subscribe((data => {
      for (let interest of data) {
        interest.isDisable = true;
      }
      this.mainInterestSelect = data[0];
      this.mainInterestList = data;
    }))
  }

  getAllSubInterest() {
    this.interest.getAllSubInterest().subscribe((data => {
      for (let interest of data) {
        interest.isDisable = true;
      }
      this.subInterestList = data;
      this.subInterestListCopy = this.subInterestList.map(x => Object.assign({}, x));

    }))
  }

  getInfoCustomer() {
    this.activeRoute.queryParams.subscribe(params => {
      this.customerService.getOneCustomerInfo(params['id'], this.common.getCookie('token_key')).subscribe((data => {
        this.customerInfo = data[0];
        this.illustrationMainInterest.full_name_insurance_buyer = this.customerInfo.full_name;
        this.illustrationMainInterest.id_illustration = params['id'];
        this.id_ill = params['id'];
      }))
    })
  }

  removeField(index: number) {
    if (index > -1) {
      this.relatedPerson.splice(index, 1);
    }
  }

  activeSubIllustration(index: number) {
    this.subInterestListCopy[index].isDisable = !this.subInterestListCopy[index].isDisable;
    return;
  }


  activeSubIllustrationRelatedPerson(indexParent: number, indexChild: number) {
    this.relatedPerson[indexParent].listSubInterest[indexChild].isDisable = !this.relatedPerson[indexParent].listSubInterest[indexChild].isDisable;
    return;
  }

  calculateAge(birthday: Date) {
    var diff_ms = Date.now() - new Date(birthday).getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  dowloadPDF() {
    window.print();
  }

  // giá trị i tăng mỗi lần gọi đệ quy
  i = 0;

  // hàm đệ quy
  next() {
    var relatePer = this.relatedPerson[this.i];
    this.relateSer.addRelatedPerson({
      full_name: relatePer.full_name,
      date_of_birth: relatePer.date_of_birth, gender: relatePer.gender,
      carreer_group: relatePer.carreer_group, relation: relatePer.relation,
      id_illustration: this.id_ill
    }).subscribe((data => {


      for (let interest of relatePer.listSubInterest) {
        if (!interest.isDisable) {
          this.activeRoute.queryParams.subscribe(params => {
            this.illustration.illustrationSubInterestList.push(new IllustrationSubInterest(params['id'], interest.id, relatePer.full_name
              , relatePer.relation, relatePer.date_of_birth, this.calculateAge(relatePer.date_of_birth), relatePer.gender, relatePer.carreer_group, interest.denominations, interest.fee_value
              , true, data));
          })
        }
      }
      // phải chạy đến phần tử cuối cùng của mảng thì mới cho phép lưu bảng minh họa
      if (this.i == this.relatedPerson.length - 1) {
        this.i = 0;
        this.processSaveIntoDB();
      } else {
        this.i++;
        this.next();
      }


    }))
  }


  processSaveIntoDB() {
    this.illustration.illustrationMainInterest.id_main_interest = this.mainInterestSelect.id;
    this.illustration.id_customer_info = this.customerInfo.id;
    this.illustration.illustrationMainInterest.age_insured_person = this.calculateAge(this.illustrationMainInterest.birth_date_insured_person);



    this.illustService.saveOneIllustration(this.illustration).subscribe((data => {
      this.snackBar.openSnackBar("Lưu Bảng Minh Họa Thành Công", "Đóng");
      this.spinner.hide();
      this.checkedTick = false;
      this.checkCountPayment = true;
    }))
  }

  save() {
    this.spinner.show();
    this.illustration.illustrationSubInterestList = [];
    // thêm người được bảo vệ bằng các quyền lợi bổ sung
    this.relateSer.addRelatedPerson({
      full_name: this.illustrationMainInterest.full_name_insured_person,
      date_of_birth: this.illustrationMainInterest.birth_date_insured_person, gender: this.illustrationMainInterest.gender_insured_person,
      carreer_group: this.illustrationMainInterest.carrier_group_insured_person, relation: this.illustrationMainInterest.insurance_buyer_relation_insured_person,
      id_illustration: this.id_ill
    }).subscribe((data => {
      for (let interest of this.subInterestListCopy) {
        if (!interest.isDisable) {
          this.activeRoute.queryParams.subscribe(params => {

            let subInterest = new IllustrationSubInterest(params['id'], interest.id, this.illustrationMainInterest.full_name_insured_person
              , this.illustrationMainInterest.insurance_buyer_relation_insured_person, this.illustrationMainInterest.birth_date_insured_person, this.calculateAge(this.illustrationMainInterest.birth_date_insured_person),
              this.illustrationMainInterest.gender_insured_person, this.illustrationMainInterest.carrier_group_insured_person, interest.denominations,
              interest.fee_value, false, data);


            this.illustration.illustrationSubInterestList.push(subInterest);
          })
        }
      }
      // lưu các người được bảo hiểm khác và lấy id của họ gắn vào cho mỗi illustrationSubInterest
      // vì callback được gọi lồng nhau nên không thể dùng for loop mà ta cần dùng đệ quy
      if (this.relatedPerson.length != 0) {
        this.next();
      } else {
        this.processSaveIntoDB();

      }

    }))
  }
}





