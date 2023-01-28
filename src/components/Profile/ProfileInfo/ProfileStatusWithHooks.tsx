import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatusProfile: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [mode, setMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => setMode(true)

    const deactivateEditMode = () => {
        setMode(false)
        props.updateStatusProfile(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!mode &&
                <div>
                  <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
                </div>
            }
            {mode &&
                <div>
                  <b>Status:</b> <input
                        autoFocus
                        onBlur={deactivateEditMode}
                        value={status}
                        onChange={onStatusChange}
                    />
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;