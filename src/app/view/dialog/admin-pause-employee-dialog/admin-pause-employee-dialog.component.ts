import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { Attachment } from 'src/app/model/Attachment';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import { PauseReason } from 'src/app/model/PauseReason';
import { CommonService } from 'src/app/services/common/common.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { FileManagementService } from 'src/app/services/fileManagement/file-management.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pause-employee-dialog',
  templateUrl: './admin-pause-employee-dialog.component.html',
  styleUrls: ['./admin-pause-employee-dialog.component.css']
})
export class AdminPauseEmployeeDialogComponent implements OnInit {

  constructor(private router: Router,private common: CommonService, private spinner: NgxSpinnerService, private fileService: FileManagementService, private snackBar: SnackbarService, @Inject(MAT_DIALOG_DATA) public id_employee_acc: number,
    private employeeService: EmployeeService, public dialogRef: MatDialogRef<AdminPauseEmployeeDialogComponent>) { }

  employeeAcc: Array<EmployeeAcc>;
  adminAccs: Array<EmployeeAcc>;
  adminAcc: EmployeeAcc;
  selectedFile = new Array<File>();
  description: string;
  ngOnInit(): void {
    this.employeeService.getAllAccByIDRole(2).subscribe((data => {
      this.employeeAcc = data;
      this.employeeAcc = this.employeeAcc.filter(x => x.status == true && !(x.id == this.id_employee_acc));
    }))
    this.employeeService.getAllAccByIDRole(1).subscribe((data => {
      this.adminAccs = data;
      this.adminAcc = this.adminAccs.filter(x => x.code == jwt_decode(this.common.getCookie('token_key'))['sub'])[0];
      console.log(this.adminAcc);
    }))
    console.log(jwt_decode(this.common.getCookie('token_key'))['sub']);
    // this.employeeService.getAccByCode(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data =>{
    //   console.log(this.adminAcc);
    //   this.adminAcc = data;
    // }))

  }

  PauseEmployee() {
    let codeEmployeeNew = (<HTMLInputElement>document.getElementById('saler')).value;
    this.employeeService.PauseEmployee(codeEmployeeNew, this.id_employee_acc).subscribe((data => {
      this.snackBar.openSnackBar("Ngưng nhân viên thành công", "Đóng");
    }))
    this.dialogRef.close();
    this.router
  }

  onChangeFile(event) {
    if (event.target.files[0].size > 10485760) {
      this.snackBar.openSnackBar("Dung Lượng File Cần Nhỏ Hơn 10Mb", "Đóng");
      return;
    }
    this.selectedFile.push(event.target.files[0]);
  }

  onUpload() {
    if (this.selectedFile.length != 0) {
      this.spinner.show();
      const uploadImageData = new FormData();
      this.selectedFile.forEach(file => {
        uploadImageData.append('fileData', file, file.name);
      });
      this.fileService.uploadFile(uploadImageData).subscribe((data => {
        if (data['body'] != null) {
          let listFileSave = Array<PauseReason>();
          let listAttachMent = Array<Attachment>();
          for (let i = 0; i < this.selectedFile.length; i++) {
            listFileSave.push(new PauseReason(this.description, this.adminAcc.id, this.id_employee_acc, new Date(), data['body'][i][1]));
            listAttachMent.push(new Attachment(data['body'][i][0], data['body'][i][1], this.selectedFile[i].name));
          }
          this.fileService.saveFileAttachment(listAttachMent).subscribe((data => {
            this.employeeService.PauseEmployeeReason(listFileSave).subscribe((data => {
              console.log(data)
              this.PauseEmployee();
              this.dialogRef.close();
            }))
          }))
          
        }
      }))
      this.spinner.hide();
    } else {
      this.snackBar.openSnackBar("Vui Lòng Chọn Ít Nhất 1 File Để Tải Lên", "Đóng");
    }
  }
}
