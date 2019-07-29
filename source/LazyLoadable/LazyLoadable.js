import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import importedComponent from 'react-imported-component';

export default function LazyLoadable ({ importComponent, isVisible, ...passProps }) {
  let rendered = useRef(false);
  let LoadableComp = useRef(false);
  useEffect(() => {
    LoadableComp.current = importedComponent(importComponent);
    LoadableComp.current.preload();
  }, []);

  if (rendered.current || isVisible) {
    rendered.current = true;
  }

  return (
    rendered.current ? <LoadableComp.current isVisible={isVisible} {...passProps} /> : <div />
  );
}

LazyLoadable.propTypes = {
  name: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired
};
