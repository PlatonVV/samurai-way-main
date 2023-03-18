import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type PropsType = {
    name: string;
    addItem: (title: string) => void;
};

export const AddItemForm: React.FC<PropsType> = ({
                                                     name,
                                                     addItem,
                                                 }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const onClickButtonHandler = () => {
        let newTitle = title.trim()
        if (newTitle !== '') {
            addItem(title);
            setTitle('')
        } else {
            setError('Text is required')
        }
    };
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addItem(title);
        }
    };
    const buttonSettings = {
        maxWidth: '38px',
        maxHeight: '38px',
        minWidth: '38px',
        minHeight: '38px',
        marginLeft: '5px',

    }
    return (
        <div>
            <TextField
                value={title}
                onChange={onChangeInputHandler}
                onKeyDown={onKeyDownHandler}
                id="outlined-basic"
                label={error ? 'Title is required' : 'type out...'}
                variant="outlined"
                size="small"
                error={!!error}
            />
            <Button
                variant="contained"
                size="small"
                onClick={onClickButtonHandler}
                style={buttonSettings}
            >
                {name}
            </Button>
        </div>
    );
};
