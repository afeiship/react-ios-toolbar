import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{

  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    placeholder:PropTypes.string,
    items: PropTypes.array,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    onClick: noop
  };
  /*===properties end===*/

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  _onClick = inEvent => {
    const {onClick} = this.props;
    onClick(inEvent);
  };

  get children(){
    const { items } = this.props;
    return items.map((item,index)=>{
      return (
        <label key={index}
          data-role={item.role}
          onClick={this._onClick.bind(this,item)}
          className="react-ios-toolbar-item">{item.text}</label>
      );
    });
  }

  render(){
    const { className, placeholder, items, onClick, ...props } = this.props;
    return (
      <section {...props} className={classNames('react-ios-toolbar',className)}>
        {placeholder && <span className="react-ios-toolbar-placeholder">{placeholder}</span>}
        <div className="react-ios-toolbar-inner">
          { this.children }
        </div>
      </section>
    );
  }
}
