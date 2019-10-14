import { Users } from './../components/Session_Login/users';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrlKhoa = "http://app.mekosoft.vn/api/jsonws/ctu-edu-vn-cfla-service-portlet.kythi/get-khoa-chieu-sinh/trang-thai-ky-thi-id"
// const apiUrlKhoa = "http://localhost:3000/api/KhoaChieuSinh";
const apiUrlLop = "http://localhost:3000/api/Lop";
const apiUrlLopLQ = "http://localhost:3000/api/LopLienQuan";
const apiUrlDeCuong = "http://localhost:3000/api/DeCuong";
// const apiUrl

@Injectable({
  providedIn: 'root'
})
export class ApikhoahocService { 
 
  urlRegister = 'http://localhost:8082/register';
  // urlLogin = 'http://localhost:8082/login';

  currentLop

  constructor(public http:HttpClient) { }
 
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //Xảy ra lỗi phía máy khách hoặc mạng. Xử lý nó cho phù hợp..
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend trả về một mã phản hồi không thành công.
      // The response body có thể chứa manh mối về những gì đã sai,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getKhoaChieuSinh(maTrangThai: string): Observable<any> {
    const urlKhoa =`${apiUrlKhoa}/${maTrangThai}`;
    return this.http.get(urlKhoa, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  } 

  getLopById(makhoa: string): Observable<any> {
    const urlLop = `${apiUrlLop}/${makhoa}`;
    return this.http.get(urlLop, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  /*----------------------------------------*/

  getLopLQById(sessionID: string): Observable<any> {
    const urlLopLQ = `${apiUrlLopLQ}/${sessionID}`;
    return this.http.get(urlLopLQ, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getDeCuongById(maLop: string): Observable<any> {
    const urlDeCuong = `${apiUrlDeCuong}/${maLop}`;
    return this.http.get(urlDeCuong, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }


  
 

  // getLogin(){
  //   return this.http.get<Users[]>(this.urlLogin);
  // }
  
  postRegister(user: Users){
    return this.http.post<any>(this.urlRegister, user);
  }
  // postLogin(user: Users){
  //   return this.http.post<any>(this.urlLogin, user);
  // }



}
