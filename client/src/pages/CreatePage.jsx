import React, {Fragment, useState} from 'react';
import Input from '../components/Input';

const CreateArt = ({ addArt }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <Fragment>
            <div className="jumbotron">
                <div className="container">
                    <h1>Добавьте свою статью</h1>
                </div>
            </div>
            <div className="container pt-3 pb-5">
                <form 
                    onSubmit={async e => {
                        e.preventDefault();
                        const addArtFormBtn = e.target.querySelector('button');
                        const catId = e.target.querySelector('#catId').value;
                        await addArt(title, text, addArtFormBtn, catId);
                        setTitle('');
                        setText('');
                    }}
                >
                    <Input 
                        type="text" 
                        placeholder="Название статьи"
                        value={title}
                        func={(e) => setTitle(e.target.value)}
                        required='true' 
                    />
                    <Input 
                        type="text" 
                        placeholder="Текст статьи"
                        value={text}
                        func={(e) => setText(e.target.value)}
                        required='true' 
                    />
                    <select id="catId" className="form-control mb-3">
                        <option value="1">Программирование</option>
                        <option value="2">Спорт</option>
                        <option value="3">Космос</option>
                    </select>
                    <button className="btn btn-success">Опубликовать</button>
                </form>
            </div>
        </Fragment>
    )
};

export default CreateArt;
