/**
 * Class representing a dot.
 * @extends FieldBase
 */
class FieldSwitch extends FieldBase {
  $input = null;
  $label = null;
  $field = null;
  /**
   * @param {{
   *   name: String,
   *   label: String,
   *   type: String,
   * }} args
   */
  constructor({ name, label, checkedCheckbox, type = 'checkbox' }) {
    super({ name, label });
    this.value = '';
    this.type = type;
    this.checkedCheckbox = checkedCheckbox;

    this.buildLabel();
    this.buildInputSwitch();
    this.buildField();
    this.buildFieldWrapper();
  }

  set setField(value) {
    this.$field = value;
  }

  get $field() {
    return this.$field;
  }

  toggleSwitch = () => {
    const $switchInput = document.getElementById('field-input-checkbox-Switch');
    const $slider = document.querySelector('.slider');

    $slider.addEventListener('click', () => {
      $switchInput.checked = !$switchInput.checked;
    });
  };

  buildInputSwitch = () => {
    const $switchBody = document.createElement('div');
    $switchBody.className = 'switch';

    const $inputSwitch = document.createElement('input');
    $inputSwitch.className = 'field-input-checkbox-Switch';
    $inputSwitch.setAttribute('type', this.type);
    $inputSwitch.setAttribute('name', this.name);
    $inputSwitch.setAttribute('id', `field-input-checkbox-${this.name}`);

    const $spanSlider = document.createElement('span');
    $spanSlider.className = 'slider';

    const $switchWrapper = document.createElement('div');
    $switchWrapper.className = 'switch-wrapper';

    $spanSlider.addEventListener('click', this.handleCheckedSwitch);

    $switchWrapper.appendChild($inputSwitch);
    $switchWrapper.appendChild($spanSlider);

    $switchBody.appendChild($switchWrapper);

    this.setField = $switchBody;
  };

  buildField = () => {
    const $fragment = document.createDocumentFragment();

    $fragment.appendChild(this.$field);
  };

  buildFieldWrapper = () => {
    const $wrapper = document.createElement('div');

    $wrapper.className = `field-${this.name} margin-bottom_10`;

    const $lable = document.createElement('p');
    $lable.innerText = this.label;

    $wrapper.appendChild($lable);
    $wrapper.appendChild(this.$field);

    this.fieldWrapper = $wrapper;
  };

  /**
   * @param {  InputEvent } event
   */
  handleCheckedSwitch = (event) => {
    this.handleError(event.target.$spanSlider);
  };
}
