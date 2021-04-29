import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { Attachment } from 'src/app/model/Attachment';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import { EmployeeInfoDTO } from 'src/app/model/EmployeeInfoDTO';
import { PauseReason } from 'src/app/model/PauseReason';
import { CommonService } from 'src/app/services/common/common.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { FileManagementService } from 'src/app/services/fileManagement/file-management.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-admin-pause-employee-dialog',
  templateUrl: './admin-pause-employee-dialog.component.html',
  styleUrls: ['./admin-pause-employee-dialog.component.css']
})
export class AdminPauseEmployeeDialogComponent implements OnInit {

  constructor(private common:CommonService,private spinner:NgxSpinnerService, private fileService:FileManagementService,private snackBar:SnackbarService,@Inject(MAT_DIALOG_DATA) public employeeInfo:EmployeeInfoDTO,
  private employeeService:EmployeeService,public dialogRef: MatDialogRef<AdminPauseEmployeeDialogComponent>) { }

  employeeAcc : Array<EmployeeAcc>;
  adminAcc: EmployeeAcc;
  selectedFile=new Array<File>();
  description:string;
  ngOnInit(): void {
    this.employeeService.getAllAccByIDRole({id:2,code_app_support:this.employeeInfo.code_ap_support}).subscribe((data => {
      this.employeeAcc = data;
      this.employeeAcc=this.employeeAcc.filter(x => x.status == true && !(x.id == this.employeeInfo.id_acc));
    }))
   
  }
  PauseEmployee(){
    let codeEmployeeNew = (<HTMLInputElement>document.getElementById('saler')).value;
    this.employeeService.PauseEmployee(codeEmployeeNew,this.employeeInfo.id_acc).subscribe((data =>{
        this.snackBar.openSnackBar("Ngưng nhân viên thành công","Đóng");
    }))
    this.dialogRef.close();
  }

  onChangeFile(event){
    if(event.target.files[0].size > 10485760){
      this.snackBar.openSnackBar("Dung Lượng File Cần Nhỏ Hơn 10Mb","Đóng");
      return;
    }
    this.selectedFile.push(event.target.files[0]);
  }
  onUpload(){
    if(this.selectedFile.length!=0){
      this.spinner.show();
    const uploadImageData = new FormData();
    this.selectedFile.forEach(file => {
      uploadImageData.append('fileData', file, file.name);
    });
    this.fileService.uploadFile(uploadImageData).subscribe((data => {
      if(data['body']!=null){
        let listFileSave = Array<PauseReason>();
        let listAttachMent = Array<Attachment>();
        for(let i=0;i<this.selectedFile.length;i++){
          listFileSave.push(new PauseReason(this.description,this.adminAcc.id,this.employeeInfo.id_acc,new Date(),data['body'][i][1]));
          listAttachMent.push(new Attachment(data['body'][i][1],data['body'][i][0]));
        }
        this.fileService.saveFile(listFileSave).subscribe((data => {
          
        }))
      }
     
    }))
  } else {
    this.snackBar.openSnackBar("Vui Lòng Chọn Ít Nhất 1 File Để Tải Lên","Đóng");
  }
  }
}
