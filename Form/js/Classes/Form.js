const fieldFirstName = new FieldInput({
  name: 'first-name',
  label: 'First name',
  placeholder: 'Enter  your first name',
  icon: 'icon icon-user',
});

fieldFirstName
  .addValidation(Validation.maxLength(3))
  .addValidation(Validation.required())
  .render();

const fieldLastName = new FieldInput({
  name: 'last-name',
  label: 'Last name',
  placeholder: 'Enter  your last name',
  icon: 'icon icon-user',
});

fieldLastName
  .addValidation(Validation.maxLength(3))
  .addValidation(Validation.required())
  .render();

const fieldEmail = new FieldInput({
  name: 'Email',
  label: 'Email',
  placeholder: 'Enter your e-mail',
  type: 'email',
  icon: 'icon icon-envelop',
});

fieldEmail
  .addValidation(Validation.maxLength(10))
  .addValidation(Validation.required())
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
  icon: 'icon icon-menu',
});

fieldSelectSalary.addValidation(Validation.selectRequired()).render();

const fieldSwitch = new FieldSwitch({
  name: 'Switch',
  label: 'Agree with me and give me your money!',
});

fieldSwitch.addValidation(Validation.switchChecked()).render();
fieldSwitch.toggleSwitch();
