/* eslint-disable no-restricted-globals */
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

const App = () => {
  const [searchField, setSearchField] = useState('');
  console.log({ searchField });

  const [nfts, setNfts] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setNfts(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredNfts = nfts.filter((nft) => {
    return nft.name.toLowerCase().includes(searchField);
  });

  return (
    <div className='App'>
      <h1 className='app-title'>NfT WoRLd</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={'Search your NFT...'}
        className='nfts-search-box'
      />

      <CardList nfts={filteredNfts} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       nfts: [],
//       searchField: '',
//     };
//   }

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(() => {
//         return { nfts: users };
//       })
//     );
// }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { nfts, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredNfts = nfts.filter((nft) => {
//       return nft.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>
//         <h1 className='app-title'>NfT WoRLd</h1>

//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={'Search your NFT...'}
//           className='nfts-search-box'
//         />

//         <CardList nfts={filteredNfts} />
//       </div>
//     );
//   }
// }

export default App;
