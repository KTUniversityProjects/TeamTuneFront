import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

function ListItem(props) {
  return (
    <div>
      <Item>
        {props.item}
      </Item>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
