import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxLoaderSpinnerService } from 'ngx-loader-spinner';
import { UserService } from 'src/services/user.service';
import { PathwayService } from 'src/services/pathways.service';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-pathways',
  templateUrl: './pathways.component.html',
  styleUrls: ['./pathways.component.css'],
})
export class PathwaysComponent {
  constructor(
    private router: Router,
    private spinnerService: NgxLoaderSpinnerService,
    private userService: UserService,
    private pathwayService: PathwayService,
    private formBuilder: FormBuilder
  ) {}

  currentPage: string = '';
  isAdmin = sessionStorage.getItem('isAdmin');
  fullName: string = '';
  pathwaysList: any = [];
  selectTab: any = '';
  message: any = null;
  header: any = null;
  onComponentLoad: boolean = true;
  className: string = '';
  accordians: any = FormArray;
  subAccordians: any = FormArray;

  pathwayForm = new FormGroup({
    pathway: new FormControl(null, Validators.required),
    heading: new FormControl(null, Validators.required),
    accordians: new FormArray([]),
  });

  createAccordians(): FormGroup {
    return this.formBuilder.group({
      accordianName: new FormControl(null),
      accordianContent: new FormControl(null),
      subAccordians: new FormArray([]),
    });
  }

  ngOnInit() {
    this.currentPage = encodeURI(this.router.url);
    this.getUserByQuery();
    this.getPathwaysByQuery();
  }

  onTabSelect() {
    this.pathwayForm = new FormGroup({
      pathway: new FormControl(null, Validators.required),
      heading: new FormControl(null, Validators.required),
      accordians: new FormArray([]),
    });
    this.setFormControls();
  }

  addAccordian(): void {
    this.accordians = this.pathwayForm.get('accordians') as FormArray;
    this.accordians.push(this.createAccordians());
  }

  addSubAccordian(j: any): void {
    this.subAccordians = this.pathwayForm.controls.accordians.controls[j][
      'controls'
    ]['subAccordians'] as FormArray;
    this.subAccordians.push(this.createAccordians());
  }

  getPathwaysByQuery() {
    this.spinnerService.show();
    try {
      this.pathwayService.getPathwaybyQuery(`visible=true`).subscribe(
        (response: any) => {
          console.log(`Pathway Data: ${JSON.stringify(response)}`);
          this.pathwaysList = response.body;
          this.selectTab = this.pathwaysList[0].pathway;
          this.setFormControls();
          this.onTabSelect()
          this.spinnerService.hide();
        },
        (err: any) => {
          console.error(`Error [getPathway]:  , ${JSON.stringify(err.error)}`);
          this.spinnerService.hide();
        }
      );
    } catch (err: any) {
      console.error(`Error [getPathway]:  , ${JSON.stringify(err)}`);
      this.spinnerService.hide();
    }
  }

  getUserByQuery() {
    this.spinnerService.show();
    try {
      this.userService
        .getUserbyQuery(`_id=${sessionStorage.getItem('userId')}`)
        .subscribe(
          (response: any) => {
            console.log(`User Data: ${JSON.stringify(response)}`);
            this.fullName =
              response.body[0].firstName + ' ' + response.body[0].lastName;
            this.spinnerService.hide();
          },
          (err: any) => {
            console.error(`Error [getUser]:  , ${JSON.stringify(err.error)}`);
            this.spinnerService.hide();
          }
        );
    } catch (err: any) {
      console.error(`Error [getUser]:  , ${JSON.stringify(err)}`);
      this.spinnerService.hide();
    }
  }

  resetModal() {
    this.pathwayForm.reset();
  }

  addPathway() {
    this.spinnerService.show();
    try {
      let pathwayObj: any = [
        {
          pathway: this.pathwayForm.get('pathway')?.value,
          heading: this.pathwayForm.get('heading')?.value,
        },
      ];
      this.pathwayService.addPathway(pathwayObj).subscribe(
        (response: any) => {
          this.onComponentLoad = false;
          this.className = 'alert alert-success';
          this.header = 'Success';
          this.message = response.message;

          setTimeout(() => {
            this.className = '';
            this.onComponentLoad = true;
            this.header = null;
            this.message = null;
            $('#pathwayModal').modal('hide');
            this.ngOnInit();
            this.deleteAccordian(0);
          }, 1500);
          console.log(`Pathway Data: ${JSON.stringify(response)}`);
          this.spinnerService.hide();
        },
        (err: any) => {
          console.error(`Error [add Pathway]:  , ${JSON.stringify(err.error)}`);
          this.onComponentLoad = false;
          this.className = 'alert alert-danger';
          this.header = 'Error';
          this.message = err.error.body;
          this.spinnerService.hide();
        }
      );
    } catch (err: any) {
      console.error(`Error [add Pathway]:  , ${JSON.stringify(err)}`);
      this.onComponentLoad = false;
      this.className = 'alert alert-danger';
      this.header = 'Error';
      this.message = err.error.body;
      this.spinnerService.hide();
    }
  }

  deletePathway(pathway: any) {
    this.spinnerService.show();
    try {
      this.pathwayService.deletePathway(`pathway=${pathway}`).subscribe(
        (response: any) => {
          this.onComponentLoad = false;
          this.className = 'alert alert-success';
          this.header = 'Success';
          this.message = response.message;

          setTimeout(() => {
            this.className = '';
            this.onComponentLoad = true;
            this.header = null;
            this.message = null;
          }, 1500);
          console.log(`Delete Pathway Data: ${JSON.stringify(response)}`);
          this.ngOnInit();
          this.spinnerService.hide();
        },
        (err: any) => {
          console.error(
            `Error [delete Pathway]:  , ${JSON.stringify(err.error)}`
          );
          this.onComponentLoad = false;
          this.className = 'alert alert-danger';
          this.header = 'Error';
          this.message = err.error.body;
          this.spinnerService.hide();
        }
      );
    } catch (err: any) {
      console.error(`Error [delete Pathway]:  , ${JSON.stringify(err)}`);
      this.onComponentLoad = false;
      this.className = 'alert alert-danger';
      this.header = 'Error';
      this.message = err.error.body;
      this.spinnerService.hide();
    }
  }

  deleteAccordian(i: any) {
    const control = this.pathwayForm.controls['accordians'];
    control.removeAt(i);
  }

  deleteSubAccordian(i: any, j: any) {
    console.log(
      this.pathwayForm.controls.accordians['controls'][i]['controls'][
        'subAccordians'
      ]['controls']
    );
    const control = this.pathwayForm.controls.accordians['controls'][i][
      'controls'
    ]['subAccordians'] as FormArray;
    control.removeAt(j);
  }

  updatePathway() {
    this.spinnerService.show();
    try {
      let query = `pathway=${this.selectTab}`;
      let pathwayObj: any = {
        accordians: this.pathwayForm.controls['accordians'].value,
      };
      this.pathwayService.updatePathway(query, pathwayObj).subscribe(
        (response: any) => {
          this.onComponentLoad = false;
          this.className = 'alert alert-success';
          this.header = 'Success';
          this.message = response.message;

          setTimeout(() => {
            this.className = '';
            this.onComponentLoad = true;
            this.header = null;
            this.message = null;
          }, 1500);
          console.log(`Pathway Update Data: ${JSON.stringify(response)}`);
          this.spinnerService.hide();
        },
        (err: any) => {
          console.error(
            `Error [update Pathway]:  , ${JSON.stringify(err.error)}`
          );
          this.onComponentLoad = false;
          this.className = 'alert alert-danger';
          this.header = 'Error';
          this.message = err.error.body;
          this.spinnerService.hide();
        }
      );
    } catch (err: any) {
      console.error(`Error [update Pathway]:  , ${JSON.stringify(err)}`);
      this.onComponentLoad = false;
      this.className = 'alert alert-danger';
      this.header = 'Error';
      this.message = err.error.body;
      this.spinnerService.hide();
    }
  }

  setFormControls() {
    let index = this.pathwaysList.findIndex(
      (el: any) => el.pathway === this.selectTab
    );
    if (this.pathwaysList[index].accordians?.length > 0)
      this.pathwaysList[index].accordians.forEach((element: any, i: any) => {
        this.addAccordian();
        const _control = this.pathwayForm.controls.accordians.controls[
          i
        ] as FormControl;
        _control.patchValue(element);

        if (element.subAccordians?.length > 0)
          element.subAccordians.forEach((_element: any, j: any) => {
            this.addSubAccordian(i);
            console.log(
              this.pathwayForm.controls.accordians.controls[i]['controls'][
                'subAccordians'
              ]['controls'][j]
            );
            const control = this.pathwayForm.controls.accordians.controls[i][
              'controls'
            ]['subAccordians']['controls'][j] as FormControl;
            control.patchValue(_element);
          });
      });
  }
}
