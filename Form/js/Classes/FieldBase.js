/**
 * Class representing a dot.
 * @extends FieldValidation
 */
class FieldBase extends FieldValidation {
  $fieldWrapper = null;

  /**
   * @param {{
   *   name: String,
   *   label: String,
   *   placeholder: String,
   * }} args
   */
  constructor({ name, label, placeholder = null }) {
    super();
    this.name = name;
    this.label = label;
    this.placeholder = placeholder;
  }

  set fieldWrapper(value) {
    this.$fieldWrapper = value;
  }

  get $fieldWrapper() {
    return this.$fieldWrapper;
  }

  set setLabel(value) {
    this.$label = value;
  }

  get $label() {
    return this.$label;
  }

  buildLabel = () => {
    const $label = document.createElement('label');

    $label.className = `field-label field-${this.name}-label`;
    $label.setAttribute('htmlFor', this.name);

    $label.innerText = this.label;

    this.setLabel = $label;
  };

  buildFieldWrapper = () => {
    const $wrapper = document.createElement('div');

    $wrapper.className = `field-${this.name} margin-bottom_10 dsp_flex flex_direction-clmn`;

    $wrapper.appendChild(this.$field);

    this.$fieldWrapper = $wrapper;
  };
}
