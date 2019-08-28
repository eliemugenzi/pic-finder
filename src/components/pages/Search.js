import React, { useState } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchImages, resetImages } from '../../redux/actions/fetchImages';
import Images from '../ImageResults';

const Search = ({ fetchImages, resetImages, image }) => {
  const [amount, setAmount] = useState(15);
  const [searchText, setSearchText] = useState('');
  const onType = e => {
    e.preventDefault();
    setSearchText(e.target.value);
    fetchImages(searchText, amount);
  }
  const onAmountChange = (e, index, value) => {
    setAmount(value);
  }
  return (
    <div>
      <TextField
        name="searchText"
        onChange={onType}
        value={searchText}
        floatingLabelText="Search for Images"
        fullWidth={true}
      />
      <SelectField
        name="amount"
        floatingLabelText="Amount"
        value={amount}
        onChange={onAmountChange}
      >
        <MenuItem value={5} primaryText="5" />
        <MenuItem value={10} primaryText="10" />
        <MenuItem value={15} primaryText="15" />
        <MenuItem value={30} primaryText="30" />
        <MenuItem value={50} primaryText="50" />
      </SelectField>
      <br />
      {image.images.length ? (
        <Images images={image.images} />
      ) : null}
    </div>
  )
}

const mapStateToProps = state => ({
  image: state.image
});

Search.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  resetImages: PropTypes.func.isRequired,
  image: PropTypes.arrayOf(Object).isRequired
};

export default connect(mapStateToProps, { fetchImages, resetImages })(Search);
