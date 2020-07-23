import React, {useState, useContext} from "react";
import {AlertContext} from "../context/Alert/alertContext";
import {FirebaseContext} from "../context/Firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim()).then (() => {
            alert.show('Задача создана', 'success')
        }).catch(() => {
            alert.show('Что-то пошло не так', 'danger')
        })
            setValue('')
        } else {
            alert.show('Введите задачу')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите название задачи"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}