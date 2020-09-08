import {Component, OnInit, OnDestroy} from "@angular/core";
import{ Subscription} from 'rxjs';
import{Post} from '../post.model';
import{PostsService} from '../post.service';


@Component({
selector: 'app-post-list',
templateUrl: './post-list.component.html',
styleUrls: ['./post-list.component.css']

})
export class PostListComponent implements OnInit , OnDestroy {
  posts: Post []=[];
  private postsSub : Subscription;
  constructor (public postService : PostsService)
  {

  }
  ngOnInit()
  {
    this.postService.getPost();
    this.postsSub =this.postService.getPostUpdateLisner()
    .subscribe((posts:Post[])=>
      {
        this.posts=posts;
    }
    );
  }
  ngOnDestroy()
  {
    this.postsSub.unsubscribe();
  }
}
