import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Buttons from './Buttons/Buttons';

const App = ()=>{
    return (<div className="calc">
        <div className='screen'>
            <h1>0</h1>
        </div>
        <Buttons/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)