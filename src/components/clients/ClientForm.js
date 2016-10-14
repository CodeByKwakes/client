import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ClientForm = ({client, /*allAuthors,*/ onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Client</h1>
      <TextInput
        name="Name"
        label="Name"
        value={client.clientName}
        onChange={onChange}
        error={errors.clientName}/>

      {/*<SelectInput
        name="authorId"
        label="Author"
        value={client.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}/>*/}

     {/* <TextInput
        name="category"
        label="Category"
        value={client.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        value={client.length}
        onChange={onChange}
        error={errors.length}/>*/}

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

ClientForm.propTypes = {
  client: PropTypes.object.isRequired,
  // allAuthors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default ClientForm;
