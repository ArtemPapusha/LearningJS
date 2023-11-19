/**
 * Class representing a dot.
 * @extends FieldBase
 */
class FieldInputCheckbox extends FieldBase {
  $input = null;
  $label = null;
  $field = null;
  $fieldset = null;

  /**
   * @param {{
   *   name: String,
   *   label: String,
   *   placeholder: String,
   *   type: String,
   *   legend: String,
   *   checkboxes: Array,
   * }} args
   */
  constructor({
    name,
    label,
    legend,
    checkboxes = [],
    checkedCheckbox = [],
    type = 'checkbox',
  }) {
    super({ name, label });
    this.value = '';
    this.type = type;
    this.checkboxes = checkboxes;
    this.checkedCheckbox = checkedCheckbox;
    this.legend = legend;

    this.buildLabel();
    this.buildInputCheckbox();
    this.buildField();
    this.buildFieldWrapper();
  }

  set setField(value) {
    this.$field = value;
  }

  get $field() {
    return this.$field;
  }

  buildInputCheckbox = () => {
    const $fieldset = document.createElement('fieldset');
    $fieldset.className = 'fieldset';
    const $legend = document.createElement('legend');
    $legend.innerText = this.legend;

    $fieldset.addEventListener('mouseleave', this.handleMouseOut);

    this.checkboxes.forEach((value) => {
      const $inputCheckbox = document.createElement('input');
      $inputCheckbox.className = 'field-input-checkbox';
      $inputCheckbox.setAttribute('type', this.type);
      $inputCheckbox.setAttribute('name', this.name);
      $inputCheckbox.setAttribute(
        'id',
        `field-input-checkbox-${this.name}-${value}`
      );
      $inputCheckbox.setAttribute('value', value);

      if (this.checkedCheckbox.includes(value)) {
        $inputCheckbox.setAttribute('checked', 'checked');
      }

      const $label = document.createElement('label');
      $label.setAttribute('for', `field-input-checkbox-${this.name}-${value}`);
      $label.innerText = value;

      $fieldset.appendChild($inputCheckbox);
      $fieldset.appendChild($label);
    });

    $fieldset.appendChild($legend);
    this.setField = $fieldset;
  };

  buildField = () => {
    const $fragment = document.createDocumentFragment();

    $fragment.appendChild(this.$field);
  };

  /**
   * @param { Mouse Event } event
   */
  handleMouseOut = (event) => {
    this.handleError(event.target.$fieldset);
  };
}
