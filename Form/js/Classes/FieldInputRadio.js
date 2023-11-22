/**
 * Class representing a dot.
 * @extends FieldBase
 */
class FieldInputRadio extends FieldBase {
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
   *   radioList: Array,
   * }} args
   */
  constructor({
    name,
    label,
    legend,
    radioList = [],
    checkedRadio = [],
    type = 'radio',
  }) {
    super({ name, label });
    this.value = '';
    this.type = type;
    this.radioList = radioList;
    this.checkedRadio = checkedRadio;
    this.legend = legend;

    this.buildLabel();
    this.buildInputRadio();
    this.buildField();
    this.buildFieldWrapper();
  }

  set setField(value) {
    this.$field = value;
  }

  get $field() {
    return this.$field;
  }

  buildInputRadio = () => {
    const $fieldset = document.createElement('fieldset');
    $fieldset.className = 'fieldset';
    const $legend = document.createElement('legend');
    $legend.innerText = this.legend;

    this.radioList.forEach((value) => {
      const $inputRadio = document.createElement('input');
      $inputRadio.className = 'field-input-radio';
      $inputRadio.setAttribute('type', this.type);
      $inputRadio.setAttribute('name', this.name);
      $inputRadio.setAttribute('id', `field-input-radio-${this.name}-${value}`);
      $inputRadio.setAttribute('value', value);

      if (this.checkedRadio.includes(value)) {
        $inputRadio.setAttribute('checked', 'checked');
      }

      const $label = document.createElement('label');
      $label.setAttribute('for', `field-input-radio-${this.name}-${value}`);
      $label.innerText = value;

      $fieldset.appendChild($inputRadio);
      $fieldset.appendChild($label);
    });

    $fieldset.appendChild($legend);
    this.setField = $fieldset;
  };

  buildField = () => {
    const $fragment = document.createDocumentFragment();

    $fragment.appendChild(this.$field);
  };
}
