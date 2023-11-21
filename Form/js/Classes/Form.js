const fieldFirstName = new FieldInput({
  name: 'first-name',
  label: 'First name',
  placeholder: 'Enter  your first name',
});

fieldFirstName
  .addIconStart('icon icon-user')
  .addValidation(Validation.maxLength(3))
  .addValidation(Validation.required())
  .render();

const fieldLastName = new FieldInput({
  name: 'last-name',
  label: 'Last name',
  placeholder: 'Enter  your last name',
});

fieldLastName
  .addIconEnd('icon icon-user')
  .addValidation(Validation.maxLength(3))
  .addValidation(Validation.required())
  .render();

const fieldEmail = new FieldInput({
  name: 'Email',
  label: 'Email',
  placeholder: 'Enter your e-mail',
  type: 'email',
});

fieldEmail
  .addIconStart('icon icon-envelop')
  .addValidation(Validation.maxLength(15))
  .addValidation(Validation.required())
  .addValidation(Validation.email())
  .render();

const fieldCheckboxVehicle = new FieldInputCheckbox({
  name: 'Vehicle',
  legend: 'Choose your type of vehicle',
  checkboxes: ['Bicycle', 'Car', 'Bus', 'Motorcycle', 'Van'],
  checkedCheckbox: [],
});

fieldCheckboxVehicle.addValidation(Validation.oneMoreChecked(1)).render();

const fieldRadioGender = new FieldInputRadio({
  name: 'Gender',
  legend: 'Choose your gender',
  radioList: ['Male', 'Female'],
  checkedRadio: ['Female'],
});

fieldRadioGender.render();

const fieldSelectSalary = new FieldSelect({
  name: 'Salary',
  label: 'The size of the salary',
  selectList: ['-Choose size of your salary-', '1000$', '2000$', '3000$'],
});

fieldSelectSalary
  .addIconStart('icon icon-menu')
  .addValidation(Validation.selectRequired())
  .render();

const fieldSwitch = new FieldSwitch({
  name: 'Switch',
  label: 'Agree with me and give me your money!',
});

fieldSwitch.addValidation(Validation.switchChecked()).render();
fieldSwitch.toggleSwitch();
