import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  public developer : Developer

  constructor() { }

  ngOnInit() {

    this.developer = new Developer("Teissier","Rémy",29,"Masculin","loremipsum",[{name:"myskills",logo:"mylogo",site:"mysite"},{name:"myskills2",logo:"mylogo2",site:"mysite2"},{name:"myskills3",logo:"mylogo3",site:"mysite3"}])

  }

}
