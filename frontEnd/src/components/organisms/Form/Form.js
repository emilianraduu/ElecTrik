import createField from './createField';

require('./Form.scss');

export default class Form {
  constructor (fields, id, PersonRepository, Router, titleLabel = 'Person form') {
    this.PersonRepository = PersonRepository;
    this.Router = Router;
    this.id = id;
    this.data = (id && PersonRepository.get(id)) || {};
    this.fieldElements = [];
    this.fields = fields;

    this.component = document.createElement('form');
    this.component.className = 'form__container';
    this.component.addEventListener('submit', this.handleSave.bind(this));

    fields.forEach(field => {
      field.value = this.data[field.id];
      const fieldElement = createField(field, this.handleChange.bind(this), this.component);
      this.fieldElements.push(fieldElement);
    });

    this.fieldElements.forEach(field => this.component.appendChild(field));

    return this;
  }

  handleChange (key, value) {
    this.data[key] = value;
    return this;
  }

  handleSave (e) {
    if (this.id) this.PersonRepository.edit(this.data, this.id);
    else this.PersonRepository.save(this.data);

    this.Router.go('list');
    e.preventDefault();
  }
}
