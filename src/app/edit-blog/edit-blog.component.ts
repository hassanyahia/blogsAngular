import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../_models/blogs';
import { BlogsService } from '../_services/blogs.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  imageSrc: string;
  formGroup: FormGroup | any;
  constructor(private blogService: BlogsService, public ar: ActivatedRoute, private http: HttpClient) { }
  blog: Blogs;
  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id']
        this.blogService.getblog(id).subscribe(
          a => {
            this.blog = a
            console.log(a);
          })
      }
    )
  }
  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.formGroup.patchValue({
          fileSource: reader.result
        });

      };

    }
  }
  edit() {
    let id = 0;
    this.ar.params.subscribe(
      e => {
        id = e['id']
        this.blogService.edit(id, this.formGroup.value).subscribe(
          a => this.blog = a
        )
      })
  }
  delete() {
    let id = 0;
    this.ar.params.subscribe(
      e => {
        id = e['id']
        this.blogService.delete(id).subscribe(
          a => {
            console.log(a)
            //console.log("deleted")
          }
        )
      })
  }
}
