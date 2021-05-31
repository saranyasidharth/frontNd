import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminstudentService } from './adminstudent.service';
import { from, Observable } from 'rxjs';
import { AdminStudentDataModel } from './adminStudentData.model';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { saveAs as importedSaveAs } from 'file-saver';

@Component({
  selector: 'app-admin-add-student',
  templateUrl: './admin-add-student.component.html',
  styleUrls: ['./admin-add-student.component.css', '../../assets/css/prism-okaidia.css', '../../assets/css/custom.min.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AdminAddStudentComponent implements OnInit {
  @ViewChild('resumeInput', {  
    static: true  
}) resumeInput;  
@ViewChild('logoInput', {  
    static: true  
}) logoInput;  
selectedFile: File = null;  
imageUrl: String;  
fileToUpload: File = null;  
saveFileForm: any;  
lstFileDetails: any;
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  response$: Observable<any>
  id: string;
  isAddMode: boolean;
  student:AdminStudentDataModel;
  firstName:string;
  
  

  constructor(private _formBuilder:FormBuilder, 
    private router:Router, private route:ActivatedRoute, 
    private adminStudentService:AdminstudentService) { }
    emailPattern="^[a-z0-9.%+]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    phonePattern="^(\+\d{1,3}[- ]?)?\d{10}$"

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode){
      this.getStudent();
    }
      this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      Gender: ['', Validators.required],
      email: ['', Validators.required],
      contactNo: ['', Validators.required],
      addLine1: ['', Validators.required],
      addLine2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      school: ['', Validators.required],
      highestDegree: ['', Validators.required],
      fieldOfStudy: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      grade: [''],
      activities: [''],
      description: [''],
      skillsTextarea:['']
    });

    // file
    this.imageUrl = 'assets/images/blank-profile-image.jpg';  
    this.saveFileForm = this._formBuilder.group({  
        // UserName: ['', [Validators.required]]  
    });  
    // this.adminStudentService.getFiles().subscribe(result => {  
    //     this.lstFileDetails = result;  
    // }) 
  }
  onSubmitForm1(value1){
    debugger;  
    if (this.firstFormGroup.invalid) {  
        return;  
    }
  }
  onSubmitForm2(value2){
    if (this.secondFormGroup.invalid) {  
      return;  
  }  
  }
  getStudent(){
      this.adminStudentService.getStudent(this.id).subscribe((data:AdminStudentDataModel)=>{
        console.log(data);
        this.imageUrl = data.logoInput
        this.firstFormGroup.patchValue({
          firstName:data.firstName,
          lastName: data.lastName,
          age: data.age,
          Gender: data.Gender,
          email: data.email,
          contactNo: data.contactNo,
          addLine1: data.addLine1,
          addLine2: data.addLine2,
          city: data.city,
          state: data.state,
          country: data.country,
          pincode: data.pincode
        });
        this.secondFormGroup.patchValue({
          school: data.school,
          highestDegree: data.highestDegree,
          fieldOfStudy: data.fieldOfStudy,
          startDate: data.startDate,
          endDate: data.endDate,
          grade: data.grade,
          activities: data.activities,
          description: data.description,
          skillsTextarea:data.skillsTextarea
        })
        
      })
  }
  finished(){
    console.log("Finished");
    if (this.isAddMode){
      let formData = new FormData();  
      formData.append('ImageUpload', this.logoInput.nativeElement.files[0]);  
      formData.append('FileUpload', this.resumeInput.nativeElement.files[0]);
      formData.append('firstName', this.firstFormGroup.value.firstName); 
      formData.append('lastName', this.firstFormGroup.value.lastName); 
      formData.append('age', this.firstFormGroup.value.age); 
      formData.append('Gender', this.firstFormGroup.value.Gender); 
      formData.append('email', this.firstFormGroup.value.email);  
      formData.append('contactNo', this.firstFormGroup.value.contactNo); 
      formData.append('addLine1', this.firstFormGroup.value.addLine1); 
      formData.append('addLine2', this.firstFormGroup.value.addLine2);
      formData.append('city', this.firstFormGroup.value.city); 
      formData.append('state', this.firstFormGroup.value.state);
      formData.append('country', this.firstFormGroup.value.country); 
      formData.append('pincode', this.firstFormGroup.value.pincode);   
      formData.append('school', this.secondFormGroup.value.school);
      formData.append('highestDegree', this.secondFormGroup.value.highestDegree);
      formData.append('fieldOfStudy', this.secondFormGroup.value.fieldOfStudy);
      formData.append('startDate', this.secondFormGroup.value.startDate); 
      formData.append('endDate', this.secondFormGroup.value.endDate);
      formData.append('grade', this.secondFormGroup.value.grade);
      formData.append('activities', this.secondFormGroup.value.activities);
      formData.append('description', this.secondFormGroup.value.description);
      formData.append('skillsTextarea', this.secondFormGroup.value.skillsTextarea);
      this.adminStudentService.AddFileDetails(formData).subscribe(result => {setTimeout(()=>{
        console.log("Student added")
      },500) }); 
      this.router.navigate(['/recruiter']);
    }
    else{
      let formData = new FormData();  
      formData.append('ImageUpload', this.logoInput.nativeElement.files[0]);  
      formData.append('FileUpload', this.resumeInput.nativeElement.files[0]);
      formData.append('firstName', this.firstFormGroup.value.firstName); 
      formData.append('lastName', this.firstFormGroup.value.lastName); 
      formData.append('age', this.firstFormGroup.value.age); 
      formData.append('Gender', this.firstFormGroup.value.Gender); 
      formData.append('email', this.firstFormGroup.value.email);  
      formData.append('contactNo', this.firstFormGroup.value.contactNo); 
      formData.append('addLine1', this.firstFormGroup.value.addLine1); 
      formData.append('addLine2', this.firstFormGroup.value.addLine2);
      formData.append('city', this.firstFormGroup.value.city); 
      formData.append('state', this.firstFormGroup.value.state);
      formData.append('country', this.firstFormGroup.value.country); 
      formData.append('pincode', this.firstFormGroup.value.pincode);   
      formData.append('school', this.secondFormGroup.value.school);
      formData.append('highestDegree', this.secondFormGroup.value.highestDegree);
      formData.append('fieldOfStudy', this.secondFormGroup.value.fieldOfStudy);
      formData.append('startDate', this.secondFormGroup.value.startDate); 
      formData.append('endDate', this.secondFormGroup.value.endDate);
      formData.append('grade', this.secondFormGroup.value.grade);
      formData.append('activities', this.secondFormGroup.value.activities);
      formData.append('description', this.secondFormGroup.value.description);
      formData.append('skillsTextarea', this.secondFormGroup.value.skillsTextarea);
      this.adminStudentService.updateStudent(this.id,formData).subscribe(result => {setTimeout(()=>{
        console.log("Student edited")
      },500) }); 
      this.router.navigate(['/recruiter']);
    }
  }
  // file form

onSelectFile(file: FileList) {  
    this.fileToUpload = file.item(0);  
    var reader = new FileReader();  
    reader.onload = (event: any) => {  
        this.imageUrl = event.target.result;  
    }  
    reader.readAsDataURL(this.fileToUpload);  
}   
onExpSubmit() {  
    debugger;  
    if (this.saveFileForm.invalid) {  
        return;  
    }   
} 
}