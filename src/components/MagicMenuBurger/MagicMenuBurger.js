import React, { PureComponent } from 'react'
import './MagicMenuBurger.scss'


class MagicMenuBurger extends PureComponent {

  render() {
    const { strokeWidth, leadEdge, tailEdge } = this
    const { menuOpen, onClick, style } = this.props
    return(
      <div className="magic-menu-burger" onClick={onClick} style={style}>
        <div className="magic-menu-burger-graphic">
          <div 
            className="menu-burger-line line-a" 
            style={menuOpen ? {
              top: '50%',
              transform: 'translateY(-50%) rotate(45deg)',
            } : {}}
          ></div>
          <div 
            className="menu-burger-line line-b" 
            style={menuOpen ? {
              width: 0
            } : {}}
          ></div>
          <div 
            className="menu-burger-line line-c" 
            style={menuOpen ? {
              bottom: '50%',
              transform: 'translateY(50%) rotate(-45deg)'
            } : {}}
          ></div>
        </div>
      </div>
    )
  }
}



export default MagicMenuBurger