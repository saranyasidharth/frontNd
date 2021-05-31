import { Component, OnInit, ViewChild, Inject, AfterViewInit } from '@angular/core';
// dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// table
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminStudentDataModel } from '../admin-add-student/adminStudentData.model';
import { AdminstudentService } from '../admin-add-student/adminstudent.service';


export interface DialogData {
  Gender: String;
  activities: String;
  addLine1: String;
  addLine2: String;
  age: Number;
  city: String;
  contactNo: Number;
  country: String;
  description: String;
  email: String;
  endDate: String;
  firstName: String;
  grade: String;
  highestDegree: String;
  lastName: String;
  pincode: Number;
  school: String;
  skillsTextarea: String;
  startDate: String;
  state: String;
  _id: String;
  }

@Component({
    selector: 'app-recruiter',
    templateUrl: './recruiter.component.html',
    styleUrls: ['./recruiter.component.css', '../../assets/css/prism-okaidia.css', '../../assets/css/custom.min.css'],
    animations: [
            trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})

export class RecruiterComponent implements OnInit {
    Number:Number;
    displayedColumns: string[] = ['firstName', 'age', 'Gender', 'highestDegree','endDate','contactdetails','skills','actions'];
    dataSource: MatTableDataSource<AdminStudentDataModel>;
    expandedElement: AdminStudentDataModel | null;

    @ViewChild(MatSort) sort:MatSort;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor( public dialog:MatDialog, public router:Router, private adminStudentDataService:AdminstudentService) { }

    openDialog(element): void {
      console.log(element);
        const dialogRef = this.dialog.open(DialogOverview, {
          width: '400px',
          data: element
        });
      }

    ngOnInit(): void {
      this.adminStudentDataService.getStudents().subscribe((response: any)=>{
        console.log(response)

        setTimeout(()=>{
                          // Assign the data to the data source for the table to render
                          this.dataSource = new MatTableDataSource([])
                          this.dataSource.data=response;          
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },100)
      });
    }
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    addStudent(){
      this.router.navigate(['/recruiter/adminaddstudent']);
    }
    editStudent(id){
      this.router.navigate([`/recruiter/edit/${id}`])
    }
}
@Component({
    selector: 'dialog-overview',
    templateUrl: 'dialog-overview.html',
  })
  export class DialogOverview {
  studentId=this.route.snapshot.params['id'];
    constructor(
      public dialogRef: MatDialogRef<DialogOverview>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      public router:Router,
      public adminStudentDataService:AdminstudentService,
      private route:ActivatedRoute
      ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    delete(id){
      this.adminStudentDataService.deleteStudent(id);
      this.router.navigate(['/recruiter']);
      this.dialogRef.close();
    }
  }