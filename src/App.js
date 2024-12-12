import './App.css';
import ShopItemClass from './ShopItem';



function Store (item) {
  console.log(item);
  return <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={item.item} />
      </div>
    </div>
}


export default Store;
