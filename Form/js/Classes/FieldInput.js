/**
 * Class representing a dot.
 * @extends FieldBaseWithIcon
 */
class FieldInput extends FieldBaseWithIcon {
  $input = null;
  $label = null;
  $field = null;
  $wrapper = null;

  /**
   * @param {{
   *   name: String,
   *   label: String,
   *   placeholder: String,
   *   type: String,
   * }} args
   */
  constructor({ name, label, placeholder, type = 'text' }) {
    super({ name, label, placeholder });
    this.value = '';
    this.type = type;

    this.buildLabel();
    this.buildInput();
    this.buildField();
    this.buildFieldWrapper();
  }

  set setWrapper(value) {
    this.$wrapper = value;
  }

  get $wrapper() {
    return this.$wrapper;
  }

  set setField(value) {
    this.$field = value;
  }

  get $field() {
    return this.$field;
  }

  buildInput = () => {
    const $input = document.createElement('input');

    $input.className = 'field-input';
    $input.setAttribute('type', this.type);
    $input.setAttribute('name', this.name);
    $input.setAttribute('placeholder', this.placeholder);
    $input.setAttribute('id', `field-input-${this.name}`);
    $input.setAttribute('value', this.value);

    const $wrapperInput = document.createElement('div');

    $wrapperInput.className = 'wrapper-input dsp_flex align-items-center gap_3';

    $wrapperInput.appendChild($input);

    $input.addEventListener('input', this.handleChange);

    $input.addEventListener('blur', this.handleBlur);

    this.setWrapper = $wrapperInput;
  };

  buildField = () => {
    const $fragment = document.createDocumentFragment();

    $fragment.appendChild(this.$label);

    $fragment.appendChild(this.$wrapper);

    this.setField = $fragment;
  };

  /**
   * @param { BlurEvent } event
   */
  handleBlur = (event) => {
    this.handleError(event.target.value);
  };

  /**
   * @param { InputEvent } event
   */
  handleChange = (event) => {
    this.handleError(event.target.value);

    this.value = event.target.value;

    event.target.value = this.value;
  };
}
