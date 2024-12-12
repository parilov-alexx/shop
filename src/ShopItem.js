import React from 'react';

class ShopItemClass extends React.Component {
    constructor(props) {
      super(props.item);
      this.state = props.item
    }
    render() {
      return <div className="main-content">
      <h2>{this.state.brand}</h2>
      <h1>{this.state.title}</h1>
      <h3>{this.state.description}</h3>
      <div className="description">
      {this.state.descriptionFull}
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{this.state.currency}{ (this.state.price).toFixed(2) }</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    }
  }
  
  export default ShopItemClass;
  