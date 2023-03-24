import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './Chat.module.css'

type arrayMessagesType = Array<{
    message: string,
    photo: string,
    userId: number,
    userName: string
}>

export const Chat = () => {

    const [arrayMessages, setArrayMessages] = useState<arrayMessagesType>([])
    const [message, setMessage] = useState('')
    const [socket, setSocket] = useState<WebSocket | null>(null)


    const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const sendHandler = () => {
        socket?.send(message)
        setMessage('')
    }

    useEffect(() => {
        let socket = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");

        socket.onmessage = function (event) {
            setArrayMessages(state => [...state, ...JSON.parse(event.data)])
        }
        setSocket(socket)

    }, [])

    useEffect(() => {
        let textarea = document.querySelector('#chat');
        if (textarea) {
            textarea.scrollTop = textarea.scrollHeight;
        }

    }, [arrayMessages])

    return (
        <div className={styles.container}>
            <div className={styles.window} id='chat'>
                {arrayMessages.map((m, i) => {
                    return <div key={m.userId + '' + i} className={styles.message}>
                        <img src={m.photo} alt=""/>
                        <div>
                            <h4>{m.userName}</h4>
                            <h4>{m.message}</h4>
                        </div>
                    </div>
                })}
            </div>
            <textarea value={message} onChange={messageHandler} className={styles.textarea}
                      placeholder='write your message please'></textarea>
            <button onClick={sendHandler} className={styles.button}>Send</button>
        </div>
    );
};

