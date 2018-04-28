import { Component, OnInit } from '@angular/core';
import {MyMaskUtil} from '../../mask/my-mask.util';

@Component({
  selector: 'app-gerente-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;

  constructor() {
  }

  ngOnInit() {
  }

}
