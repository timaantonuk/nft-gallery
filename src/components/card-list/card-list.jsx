
import './card-list.style.css';
import Card from '../card/card';

const CardList = ({ nfts }) => {
  return (
    <div className='card-list'>
      {nfts.map((nft) => {
        return <Card nft={nft} />;
      })}
    </div>
  );
};

export default CardList;
