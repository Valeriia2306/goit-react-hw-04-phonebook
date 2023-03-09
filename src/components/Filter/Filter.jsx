import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ value, onFilter }) => {
  return (
    <Label>
      <span>Find contacts by name</span>
      <Input type="text" name="filter" value={value} onChange={onFilter} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
