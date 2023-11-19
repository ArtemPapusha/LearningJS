/**
 * Class representing a dot.
 * @extends FieldBaseWithIcon
 */
class FieldInput extends FieldBaseWithIcon {
  $input = null;
  $label = null;
  $field = null;

  /**
   * @param {{
   *   name: String,
   *   label: String,
   *   placeholder: String,
   *   type: String,
   *   icon: String,
   *   iconPosition: String,
   * }} args
   */
  constructor({ name, label, placeholder, type = 'text', icon }) {
    super({ name, label, placeholder, icon });
    this.value = '';
    this.type = type;

    this.buildLabel();
    this.buildInput();
    this.buildSpanIcon();
    this.buildField();
    this.buildFieldWrapper();
  }

  set setInput(value) {
    this.$input = value;
  }

  get $input() {
    return this.$input;
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

    if (this.$icon) {
      $wrapperInput.appendChild(this.$icon);
    }
    $wrapperInput.appendChild($input);

    $input.addEventListener('input', this.handleChange);

    $input.addEventListener('blur', this.handleBlur);

    this.setInput = $wrapperInput;
  };

  buildField = () => {
    const $fragment = document.createDocumentFragment();

    $fragment.appendChild(this.$label);

    $fragment.appendChild(this.$input);

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
    this.value = event.target.value;

    this.handleError(event.target.value);

    event.target.value = this.value;
  };
}
