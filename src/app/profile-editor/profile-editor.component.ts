import { Component } from '@angular/core';
import { FormArray, FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent {
constructor(private fb:FormBuilder){}
//  profileForm = new FormGroup({
//    firstName: new FormControl(''),
//    lastName: new FormControl(''),
//    address: new FormGroup({
//      street: new FormControl(''),
//      city: new FormControl(''),
//      state: new FormControl(''),
//      zip: new FormControl('')
//    })
//  })

profileForm = this.fb.group({
  firstName: ['',Validators.required],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),aliases: this.fb.array([
    this.fb.control('')
  ])
})
get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}
addAlias() {
  this.aliases.push(this.fb.control(''));
}
 onSubmit(){
    console.warn(this.profileForm.value);
    // alert(this.profileForm.valid)
 }
 updateProfile() {
  this.profileForm.patchValue({
    firstName: 'Oleg',
    address: {
      street: '123 Drew Street'
    }
  });
}


}
