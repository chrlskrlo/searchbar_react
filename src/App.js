import './input.css';
import SearchBar from './components/SearchBar';
import BookData from './Data.json'


function App() {
  return (
    <div className="flex justify-center align-center mt-32">
    <SearchBar placeholder='Enter a Book Name...' data={BookData} />
    </div>
  );
}

export default App;
