import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogs } from '../_models/blogs';
import { BlogsService } from '../_services/blogs.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  imageUrl: string;
  editForm: FormGroup | any;
  formData = new FormData();
  constructor(private blogService: BlogsService, public ar: ActivatedRoute, private router: Router, private fb: FormBuilder) { }
  blog: Blogs = new Blogs('', '', '', '', '', new Date());
  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id']
        this.blogService.getblog(id).subscribe(
          a => {
            // this.blog = a
            // console.log(a, "mnk");
            // this.imageUrl = a.blogImg
            // console.log(this.imageUrl, "mnk");
            this.editForm = this.fb.group({
              title: a.title,
              body: a.body,
              blogImg: a.blogImg,
              tags: a.tags
            });
          })
      }
    )
  }
  editOne() {
    this.formData.append('title', this.editForm.get('title').value);
    this.formData.append('body', this.editForm.get('body').value);
    this.formData.append('blogImg', this.editForm.get('blogImg').value)
    this.formData.append('tags', this.editForm.get('tags').value)
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id']
        this.blogService.edit(id, this.formData).subscribe(
          a => {
            this.blog = a
            console.log(a);
            this.router.navigateByUrl('home');
          },
          err => {
            console.log(err);
          })
      })
  }
  imgInput(files: any) {
    this.editForm.get('blogImg').setValue(files.item(0));
  }

  delete() {
    let id = 0;
    this.ar.params.subscribe(
      e => {
        id = e['id']
        this.blogService.delete(id).subscribe(
          a => {
            console.log(a)
          }
        )
      })
  }
}
