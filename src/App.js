import './App.css';
import '@aws-amplify/ui-react/styles.css'
import { useState, useEffect } from 'react';
import { DataStore, SortDirection } from 'aws-amplify';
import { Worker } from './models';
import { FsCommentCard, FsNavBar } from './ui-components'

function App() {
    const [dataModels, setDataModels] = useState('');
    const [tmpImage, setTmpImage] = useState('');
    const [filterWord, setFilterWord] = useState('');
    const [filter, setFilter] = useState(filterWord);

    const doChange = (event) => {
        setFilterWord(event.target.value);
    }
    const doShow = (event) => {
        setTmpImage(event.currentTarget.getAttribute('data-tmp-img'));
    }

    useEffect(() => {
        const doFilter = (event) => {
            setFilter(filterWord);
            setTmpImage('');
        }

        DataStore.query(Worker, ob => ob.name("contains", filter), {
            sort:ob=> ob.createdAt(SortDirection.DESCENDING)
        }).then((values) => {
            const data = [];
            for (let item of values) {
                data.push(
                    <FsCommentCard
                        key={item.id}
                        item={item}
                        onClick={doShow}
                        data-tmp-img={item.tmpUrl}
                    />
                )
                // TODO 初期表示で１つ目の画像を出したいけど、コメントアウト外すとフィルタ条件文字列変更でも１つ目の画像に戻ってしまう
                // data.length === 1 && setTmpImage(item.tmpUrl)
            }

            const searchAreaCss = {
                display: 'grid', gridTemplateColumns: '3fr 1fr', columnGap: '10px'
            }
            // TODO フィルタは、ヘッダのコンポーネントを使うようにしたい
            setDataModels(
                <div>
                    <div style={ searchAreaCss }>
                        <input type="text" onChange={doChange}></input>
                        <button onClick={doFilter}>Filter</button>
                    </div>
                    {data}
                </div>
            );
        });
    }, [filterWord, filter]);

    const mainAreaCss = {
        display: 'grid', gridTemplateColumns: '3fr 1fr', columnGap: '10px'
    }
    const tmpImageCss = {
        width: '100%'
    }
    const scrollAreaCss = {
        minWidth: '625px',
        height: 'calc(100vh - 90px)',
        overflowX: 'hidden',
        overflowY: 'scroll'
    }

    // TODO img タグは、Amplify Studio で作ったモジュールにしたい
    // TODO img タグは、ある程度の閾値以下のwidth では非表示にしたい
    return (
        <div className="App">
            <FsNavBar width={"100vw"} />
            <div style={ mainAreaCss }>
                <img src={tmpImage} style={tmpImageCss} alt=""/>
                <div style={scrollAreaCss}>
                    {dataModels}
                </div>
            </div>
        </div>
    );
}

export default App;
