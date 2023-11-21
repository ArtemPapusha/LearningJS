class Form {
  $form = null;
  formElements = [];
  /**
   * @param {{
   *   formElements: Array,
   * }} args
   */
  constructor({ formElements = [] }) {
    this.formElements = formElements;

    this.buildForm();
  }

  set setForm(value) {
    this.$baseForm = value;
  }

  get form() {
    return this.$baseForm;
  }

  buildForm = () => {
    const $form = document.createElement('form');
    $form.setAttribute('action', '#');

    this.formElements.forEach((formElement) => {
      $form.appendChild(formElement.$fieldWrapper);
    });
    const $inputSubmit = document.createElement('input');
    $inputSubmit.setAttribute('type', 'submit');
    $inputSubmit.setAttribute('value', 'Submit');
    $form.appendChild($inputSubmit);

    this.setForm = $form;
  };

  renderForm = () => {
    document.body.appendChild(this.$baseForm);
  };
}

const fieldFirstName = new FieldInput({
  name: 'first-name',
  label: 'First name',
  placeholder: 'Enter  your first name',
});

fieldFirstName
  .addIconStart('icon icon-user')
  .addValidation(Validation.maxLength(3))
  .addValidation(Validation.required());

const fieldLastName = new FieldInput({
  name: 'last-name',
  label: 'Last name',
  placeholder: 'Enter  your last name',
});

fieldLastName
  .addIconEnd('icon icon-user')
  .addValidation(Validation.maxLength(3))
  .addValidation(Validation.required());

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
  .addValidation(Validation.email());

const fieldCheckboxVehicle = new FieldInputCheckbox({
  name: 'Vehicle',
  legend: 'Choose your type of vehicle',
  checkboxes: ['Bicycle', 'Car', 'Bus', 'Motorcycle', 'Van'],
  checkedCheckbox: [],
});

fieldCheckboxVehicle.addValidation(Validation.oneMoreChecked(1));

const fieldRadioGender = new FieldInputRadio({
  name: 'Gender',
  legend: 'Choose your gender',
  radioList: ['Male', 'Female'],
  checkedRadio: ['Female'],
});

const fieldSelectSalary = new FieldSelect({
  name: 'Salary',
  label: 'The size of the salary',
  selectList: ['-Choose size of your salary-', '1000$', '2000$', '3000$'],
});

fieldSelectSalary.addIconStart('icon icon-menu').addValidation(Validation.selectRequired());

const fieldSwitch = new FieldSwitch({
  name: 'Switch',
  label: 'Agree with me and give me your money!',
});

fieldSwitch.addValidation(Validation.switchChecked());

const form = new Form({
  formElements: [
    fieldFirstName,
    fieldLastName,
    fieldEmail,
    fieldCheckboxVehicle,
    fieldRadioGender,
    fieldSelectSalary,
    fieldSwitch,
  ],
});

form.renderForm();
