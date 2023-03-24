import classes from "../ProfileInfo.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Spin} from "antd";

type StatusUserPropsType = {
    status: string
    updateStatusThunkCreator: (status: string) => void
    userId: string
    isAuthUser: boolean

}

export const StatusUser = (props: StatusUserPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)



    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const onClickHandler = () => {
        if (props.isAuthUser) {
            setEditMode(true)
        }
    }

    const onBlurHandler = () => {
        setEditMode(false)
        props.updateStatusThunkCreator(status)
    }
    const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.updateStatusThunkCreator(status)
            setEditMode(false)
        }
    }

    return (<div className={classes.statusUser}>
        {editMode
            ?
            <input onKeyPress={onKeyHandler} value={status} onChange={onChangeHandler} autoFocus onBlur={onBlurHandler}
                   type="text"/>
            : <span className={classes.spanStatusUser}
                                                            onDoubleClick={onClickHandler}>{!props.status ? 'status not found' : props.status}</span>}
    </div>)
}


// export class StatusUser extends Component<StatusUserPropsType> {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//
//     onBlurHandler = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateStatusThunkCreator(this.state.status)
//     }
//
//     onClickHandler = () => {
//         this.setState({
//             editMode: true
//         })
//     }
//     onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }
//     componentDidUpdate(prevProps: Readonly<StatusUserPropsType>, prevState: { editMode: boolean, status:string}) {
//         if(prevProps.status !== this.props.status){
//             this.setState({
//                 status:this.props.status
//             })
//         }
//     }
//
//
//     render() {
//         return <div className={classes.statusUser}>
//             {this.state.editMode
//                 ?
//                 <input value={this.state.status} onChange={this.onChangeHandler} autoFocus onBlur={this.onBlurHandler} type="text"/>
//                 :
//                 <span
//                     onDoubleClick={this.onClickHandler}>{!this.props.status? 'status not found' : this.props.status}</span>}
//         </div>
//     }
// }