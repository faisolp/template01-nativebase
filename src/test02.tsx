
import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';

interface IPropsMenuWrap {
    children: any
    wait:number
    side:string
}
interface IStateMenuWrap {
    hidden:boolean
}

class MenuWrap extends Component<IPropsMenuWrap,IStateMenuWrap> {
  constructor(props:IPropsMenuWrap) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentDidUpdate(prevProps:IPropsMenuWrap) {
    const sideChanged =
      this.props.children.props.right !== prevProps.children.props.right;

    if (sideChanged) {
      this.setState({ hidden: true });

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show=()=> {
    this.setState({ hidden: false });
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = { display: 'none' };
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

interface IPropsDemo {
    
}


interface IStateDemo {
    currentMenu:"slide" 
    | "stack" 
    | "elastic"  
    | "bubble"  
    | "push"
    | "pushRotate"  
    | "scaleDown" 
    | "scaleRotate"  
    | "fallDown"  
    | "reveal";
    side:string
    
}
class Demo extends Component<IPropsDemo,IStateDemo> {
  constructor(props:IPropsDemo) {
    super(props);
    this.state = {
      currentMenu: 'push',
      side: 'left'
    };
  }

  changeMenu=(menu:string
) =>{
    if(menu==="slide" 
    ||menu=== "stack" 
    ||menu=== "elastic"  
    ||menu=== "bubble"  
    ||menu=== "push"
    ||menu=== "pushRotate"  
    ||menu=== "scaleDown" 
    ||menu=== "scaleRotate"  
    ||menu=== "fallDown"  
    ||menu=== "reveal")
    this.setState({ currentMenu: menu });
  }

  changeSide=(side:string) =>{
    this.setState({ side });
  }

  getItems=()=> {
    let items;

    switch (menus[this.state.currentMenu].items) {
      case 1:
        items = [
          <a key="0" href="">
            <i className="fa fa-fw fa-star-o" />
            <span>Favorites</span>
          </a>,
          <a key="1" href="">
            <i className="fa fa-fw fa-bell-o" />
            <span>Alerts</span>
          </a>,
          <a key="2" href="">
            <i className="fa fa-fw fa-envelope-o" />
            <span>Messages</span>
          </a>,
          <a key="3" href="">
            <i className="fa fa-fw fa-comment-o" />
            <span>Comments</span>
          </a>,
          <a key="4" href="">
            <i className="fa fa-fw fa-bar-chart-o" />
            <span>Analytics</span>
          </a>,
          <a key="5" href="">
            <i className="fa fa-fw fa-newspaper-o" />
            <span>Reading List</span>
          </a>
        ];
        break;
      case 2:
        items = [
          <h2 key="0">
            <i className="fa fa-fw fa-inbox fa-2x" />
            <span>Sidebar</span>
          </h2>,
          <a key="1" href="">
            <i className="fa fa-fw fa-database" />
            <span>Data Management</span>
          </a>,
          <a key="2" href="">
            <i className="fa fa-fw fa-map-marker" />
            <span>Location</span>
          </a>,
          <a key="3" href="">
            <i className="fa fa-fw fa-mortar-board" />
            <span>Study</span>
          </a>,
          <a key="4" href="">
            <i className="fa fa-fw fa-picture-o" />
            <span>Collections</span>
          </a>,
          <a key="5" href="">
            <i className="fa fa-fw fa-money" />
            <span>Credits</span>
          </a>
        ];
    }

    return items;
  }

  getMenu=()=> {
     

    const Menu = BurgerMenu[this.state.currentMenu];
    
    

    return (
      <MenuWrap wait={20} side={this.state.side}>
        <Menu
          id={this.state.currentMenu}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          right={this.state.side === 'right'}
        >
          {this.getItems()}
        </Menu>
      </MenuWrap>
    );
  }

  render() {
    const buttons = Object.keys(menus).map(menu => {
      return (
        <a
          key={menu}
          className={classNames({
            'current-demo': menu === this.state.currentMenu
          })}
          onClick={()=>this.changeMenu( menu)}
        >{menu}
        </a>
      );
    });
   //menus[menu].buttonText
    return (
      <div id="outer-container" style={{ height: '100%' }}>
        {this.getMenu()}
        <main id="page-wrap">
          <h1>
            <a href="https://github.com/negomi/react-burger-menu">
              react-burger-menu
            </a>
          </h1>
          <a
            className={classNames({
              'side-button': true,
              left: true,
              active: this.state.side === 'left'
            })}
            onClick={this.changeSide.bind(this, 'left')}
          >
            Left
          </a>
          <a
            className={classNames({
              'side-button': true,
              right: true,
              active: this.state.side === 'right'
            })}
            onClick={this.changeSide.bind(this, 'right')}
          >
            Right
          </a>
          <h2 className="description">
            An off-canvas sidebar React component with a collection of effects
            and styles using CSS transitions and SVG path animations.
          </h2>
          <nav className="demo-buttons">{buttons}</nav>
          Inspired by{' '}
          <a href="https://github.com/codrops/OffCanvasMenuEffects">
            Off-Canvas Menu Effects
          </a>{' '}
          and{' '}
          <a href="https://github.com/codrops/SidebarTransitions">
            Sidebar Transitions
          </a>{' '}
          by Codrops
        </main>
      </div>
    );
  }
}

const menus = {
  slide: { buttonText: 'Slide', items: 1 },
  stack: { buttonText: 'Stack', items: 1 },
  elastic: { buttonText: 'Elastic', items: 1 },
  bubble: { buttonText: 'Bubble', items: 1 },
  push: { buttonText: 'Push', items: 1 },
  pushRotate: { buttonText: 'Push Rotate', items: 2 },
  scaleDown: { buttonText: 'Scale Down', items: 2 },
  scaleRotate: { buttonText: 'Scale Rotate', items: 2 },
  fallDown: { buttonText: 'Fall Down', items: 2 },
  reveal: { buttonText: 'Reveal', items: 1 }
};

export default Demo