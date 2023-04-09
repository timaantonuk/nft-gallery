
import './card.styles.css';

const Card = ({ nft }) => {

const {id, name, email} = nft

  return (
    <div className='card-container' key={id}>
      <img
        alt={`nft ${name}`}
        src={`https://robohash.org/${id + 45}?set=set2&size=320x320`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
