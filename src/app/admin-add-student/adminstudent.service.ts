import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminstudentService {
  private adminStudentUrl='http://localhost:3000/adminStudent'

  constructor(private http:HttpClient) { }
// newStudent(body:FormData){
//   console.log(body);
//   return this.http.post<any>('http://127.0.0.1:3000/adminStudent/add',body,{
//          observe:'events',
//          headers:new HttpHeaders().append('Content-Type','multipart/form-data')
// headers: new HttpHeaders().delete('Content-Type')
// headers:new HttpHeaders().append('Content-Type',  'application/x-www-form-urlencoded')
//        });
//      }
  newStudent(form1,form2){
  console.log(form1+form2);
  const url=`${this.adminStudentUrl}/add`
    return this.http.post(url,{'PersonalDetails': form1,'EdDetails': form2},{
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
   
  getStudents(){
    console.log("Called")
    const url=`${this.adminStudentUrl}`
    return this.http.get(url)
  }

  getStudent(id:String){ 
    console.log("single called") 
    const url=`${this.adminStudentUrl}/${id}`;
    console.log(url);
    return this.http.get(url);
  }

  updateStudent(id:String,data: FormData): Observable < string > {
    const url=`${this.adminStudentUrl}/${id}`;
    let headers = new HttpHeaders();  
    headers.append('Content-Type', 'application/json');  
    const httpOptions = {  
        headers: headers  
    };  
    
    return this.http.put < string > (url, data, httpOptions);  

    // console.log(id);
    // const url=`${this.adminStudentUrl}/${id}`;
    // console.log(url);
    // return this.http.put(url,{'PersonalDetails':form1,'EdDetails':form2})
    // .subscribe((data)=>{console.log("Edited Book"+data);})
  }
  deleteStudent(id){
    const url=`${this.adminStudentUrl}/${id}`;
    return this.http.delete(url).subscribe((data)=>{
      console.log("deleted")
    })
  }
// public downloadFile(docFile: string): Observable < Blob > {  
//     return this.http.get(this.adminStudentUrl + '/GetFile?docFile=' + docFile, {  
//         responseType: 'blob'  
//     });  
// }  
// public downloadImage(image: string): Observable < Blob > {  
//     return this.http.get(this.adminStudentUrl + '/GetImage?image=' + image, {  
//         responseType: 'blob'  
//     });  
// }  
// public getFiles(): Observable < any[] > {  
//     return this.http.get < any[] > (this.adminStudentUrl + '/GetFileDetails');  
// }  
AddFileDetails(data: FormData): Observable < string > {  
    let headers = new HttpHeaders();  
    headers.append('Content-Type', 'application/json');  
    const httpOptions = {  
        headers: headers  
    };  
    return this.http.post < string > (this.adminStudentUrl + '/AddDetails/', data, httpOptions);  
}  
}
