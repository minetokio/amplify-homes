import './App.css';
import { SimilarityCardCollection,Body, FsCommentCardCollection, FsNavBar } from './ui-components'
function App() {
    return (
        <div className="App">
            <FsNavBar width={"100vw"}/>
            <Body width={"100vw"} rightPane={
                <FsCommentCardCollection  />
            }/>
        </div>
    );
}

export default App;
