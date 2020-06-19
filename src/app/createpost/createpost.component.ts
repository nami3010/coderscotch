import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CreatepostService } from './createpost.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  articleForm = new FormGroup({
    User: new FormControl(''),
    Title: new FormControl(''),
    Body: new FormControl('')
  });
  public userName: any = [];
  constructor(private createPostService: CreatepostService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createPostService.get().subscribe((userresponse: any) => {
      userresponse.map(user => {
        this.userName.push(user.name)
      })
    }, error => {
    });
  }
  changeUser(e) {
    this.User.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get User() {
    return this.articleForm.get('User');
  }
  onSubmit() {
   var usersId =this.articleForm.value.User.split(":")
    const createpostobj = {
      userId: parseInt(usersId[0]),
      body:this.articleForm.value.Body,
      title:this.articleForm.value.Title
    }
    this.createPostService.post(createpostobj).subscribe((response: any) => {
       if(response.id=101){
        this.toastr.success('Article added successfully');
       }
    }, error => {
      this.toastr.error('Something unexpected happen please try after sometime')
    });
  }
}
