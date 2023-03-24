import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from './../Profile/ProfileInfo/ProfileInfo.module.css'


type EditableSpanTypeProps = {
    title: string
    changeTitle: (title: string) => void
    disable: boolean
    forContacts: boolean
}

export const EditableSpan = (props: EditableSpanTypeProps) => {

    const [editMode, setEditMode] = useState(false)
    const [valueInput, valueInputTitle] = useState(props.title)


    const changeEditModeOnDoubleClick = () => {
        if (valueInput === '---') {
            valueInputTitle('')
        }
        setEditMode(true)
    }
    const changeEditModeOnBlur = () => {
        if (!props.disable) {
            setEditMode(false)
            props.changeTitle(valueInput)
        }

    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!props.disable) {
            valueInputTitle(e.currentTarget.value)
        }
    }

    useEffect(() => {
        valueInputTitle(props.title)
    }, [props])

    return (
        editMode ?
            <input value={valueInput} onChange={onChangeHandler} onBlur={changeEditModeOnBlur}
                   autoFocus/>
            :
            props.forContacts ? <><a href={props.title} style={{wordBreak:'break-word'}} target='_blank'>{props.title}</a>{!props.disable &&
                    <button onClick={!props.disable ? changeEditModeOnDoubleClick : () => {
                    }}>Change</button>}</>
                :
                <span className={props.disable ? '' : classes.contentProfileUser} style={{fontSize: '15px'}}
                      onDoubleClick={!props.disable ? changeEditModeOnDoubleClick : () => {
                      }}>{props.title}</span>
    );
};

