import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ImageResults extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(Object).isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentImg: ''
    }
  }

  handleOpen = img => {
    this.setState({
      currentImg: img,
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    let imageListContent;
    const { images } = this.props;
    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  By <strong>{img.user}</strong> <br />
                </span>
              }
              actionIcon={
                <IconButton
                  onClick={() => this.handleOpen(img.largeImageURL)}
                >
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt={img.tags} />
            </GridTile>
          ))}
        </GridList>
      )
    }

    const actions = [
      <FlatButton
        label="close"
        primary={true}
        onClick={this.handleClose}
      />
    ]
    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} alt="Chambre13" style={{ width: '100%' }} />
        </Dialog>
      </div>
    )
  }
}