import './App.css';
import '@aws-amplify/ui-react/styles.css'
import { useState, useEffect } from 'react';
import { DataStore, SortDirection } from 'aws-amplify';
import { Worker } from './models';
import { FsCommentCard, FsNavBar3 } from './ui-components'

function App() {
    const [dataModels, setDataModels] = useState('');
    const [masterBD, setMasterBD] = useState(false);
    useEffect(() => {
        console.log('useEffect masterBD')
    },[masterBD]);


    const [tmpImage, setTmpImage] = useState('');
    const [filterWord, setFilterWord] = useState('');
    const [filter, setFilter] = useState(filterWord);

    const doChange = (event) => {
        setFilterWord(event.target.value);
    }
    const doShow = (event) => {
        setTmpImage(event.currentTarget.getAttribute('data-tmp-img'));
    }
    const doOptionAction = (event) => {
        console.log('doOptionAction');
    }
    const doLinkAction = (event) => {
        console.log('doLinkAction');
    }
    const doFilter = (event) => {
        // setFilter(filterWord);
        const inputValue = document.querySelector('[data-filterword]').value
        setFilter(inputValue);
        setTmpImage('');
    }

    useEffect(() => {
        const fetchSTime = async (id, targetDate) => {
            if (!!!id || !!!targetDate) {
                return {};
            }
            const result = await fetch(`https://stime.foresight.co.jp/jaburo/v1/atap/worktime?id=FS00000${id}&target=${targetDate}`, {});
            const responseJson = await result.json();
            return responseJson.response[0];
        };
        const fetchSubordinates = async (id) => {
            if (!!!id) {
                return {};
            }
            const result = await fetch(`https://stime.foresight.co.jp/jaburo/v1/atap/subordinates/list?id=${id}`, {});
            const responseJson = await result.json();
            return responseJson.response;
        };

        const filteredList = masterBD && masterBD.filter((item) => item.lastName.indexOf(filter) > -1 || item.firstName.indexOf(filter) > -1) || [{id: ''}];

        DataStore.query(Worker, ob => ob.or((ob) => {
            filteredList.map((item) => {
                ob.number("contains", item.id.slice(-4));
            });
        }) , {
            sort:ob=> ob.createdAt(SortDirection.DESCENDING)
        }).then(async (values) => {
            let _masterBD = masterBD;
            if (values.length > 0 && !_masterBD) {
                _masterBD = await fetchSubordinates('FS000007100');
                setMasterBD(_masterBD);
            }

            const data = [];
            for (let item of values) {
                const itemDate = ((dateTime) => {
                    const splitData = item?.dispTime?.split(' ');
                    if (splitData.length !== 2) {
                        return '';
                    }
                    return splitData[0].replaceAll('/', '');
                })(item.dispTime);

                const _item = {...item};
                const sTime = await fetchSTime(item.number, itemDate);
                const empInfo = _masterBD.find((data) => {
                    return data.id === sTime.id
                })
                const date = _item.dispTime.split(' ')[0] || '';
                const time = _item.dispTime.split(' ')[1] || '';
                
                sTime.overtimeApplyString = !!sTime.overtimeApplyTime ? '残業申請提出済' : '残業申請未提出';
                sTime.overtimeApplyString += date && `(${date})`;
                _item.name = (empInfo && empInfo.lastName + ' ' + empInfo.firstName) || _item.name.replace('　', ' ');
                _item.dispTime = time;

                data.push(
                    <FsCommentCard
                        key={_item.id}
                        item={_item}
                        sTime={sTime}
                        onClick={doShow}
                        optionAction={doOptionAction}
                        linkAction={doLinkAction}
                        data-tmp-img={_item.tmpUrl}
                        width={'100%'}
                    />
                )
                // TODO 初期表示で１つ目の画像を出したいけど、コメントアウト外すとフィルタ条件文字列変更でも１つ目の画像に戻ってしまう
                // data.length === 1 && setTmpImage(item.tmpUrl)
            }

            const searchAreaCss = {
                display: 'grid', gridTemplateColumns: '3fr 1fr', columnGap: '10px'
            }
            // TODO フィルタは、ヘッダのコンポーネントを使うようにしたい
            // setDataModels(
            //     <div>
            //         <div style={ searchAreaCss }>
            //             <input type="text" onChange={doChange}></input>
            //             <button onClick={doFilter}>Filter</button>
            //         </div>
            //         {data}
            //     </div>
            // );
            setDataModels(
                <div>
                    {data}
                </div>
            );
        });
    }, [filterWord, filter, masterBD]);

    const mainAreaCss = {
        display: 'grid', gridTemplateColumns: '3fr 1fr', columnGap: '10px', paddingTop: '10px'
    }
    const tmpImageCss = {
        width: '100%'
    }
    const scrollAreaCss = {
        minWidth: '370px',
        height: 'calc(100vh - 90px)',
        overflowX: 'hidden',
        overflowY: 'scroll'
    }
    const imgAreaCss = {
        height: 'calc(100vh - 90px)',
        overflow: 'hidden'
    }

    // TODO img タグは、Amplify Studio で作ったモジュールにしたい
    // TODO img タグは、ある程度の閾値以下のwidth では非表示にしたい
    return (
        <div className="App">
            <FsNavBar3 width={"100vw"} filterWord={filterWord} doFilter={doFilter}/>
            <div style={ mainAreaCss }>
                <div style={imgAreaCss}>
                    <img src={tmpImage} style={tmpImageCss} alt=""/>
                </div>
                <div style={scrollAreaCss}>
                    {dataModels}
                </div>
            </div>
        </div>
    );
}

export default App;
