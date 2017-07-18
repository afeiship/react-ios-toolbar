# react-ios-toolbar
> Ios toolbar for react.


## properties:
```javascript

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
  
```

## usage:
```jsx

// install: npm install afeiship/react-ios-toolbar --save
// import : import ReactIosToolbar from 'react-ios-toolbar'

class App extends React.Component{
  state = {
    items1: [
      {
        role: 'ok',
        text: '确定',
        action:'ok'
      }
    ],
    items2:[
      {
        role: 'cancel',
        text: '取消',
        action:'cancel'
      },
      {
        role: 'ok',
        text: '确定',
        action:'ok'
      }
    ]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _click1 = e => {
    console.log('e',e);
  };

  render(){
    return (
      <div className="hello-react-ios-toolbar">
        <ReactIosToolbar placeholder='test placeholder...' onClick={ this._click1 } items={this.state.items2} ref='rc' />
    </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

