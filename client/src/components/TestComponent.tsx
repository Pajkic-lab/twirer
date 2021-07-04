import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { testServerConecction } from '../features/testSlice';

export const TestComponent: React.FC = () => {

    const [formData, setFormData] = useState({ text: '' })

    const { text } = formData

    const dispatch = useAppDispatch();

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(testServerConecction(text.toString()))
        setFormData({ ...formData, text:''})
    }

    return (
        <div>
            <form onSubmit={ e => onSubmitHandler(e) }>
            <input onChange={ e => {setFormData({ ...formData, [e.target.name]: e.target.value })} } value={text} name='text'  /> <br/>
            <button>Submit</button>
            </form><br/>
        </div>
    )
}
