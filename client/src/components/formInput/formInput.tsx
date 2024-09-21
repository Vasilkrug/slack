import {UseFormRegister} from 'react-hook-form';
import {AuthForm} from '../../pages/join/join.tsx';
import {inputOptions} from './inputOptions.ts';
import './formInput.scss';

type InputType = 'email' | 'password' | 'name';

type Props = {
    type: InputType
    placeholder: string,
    labelName: string,
    register: UseFormRegister<AuthForm>,
    error?: string
}

const FormInput = ({type, placeholder, labelName, register, error}: Props) => {
    return (
        <label className='form-label'>
            <span className='label-name'>{labelName}</span>
            <input className='form-input' type={type}
                   placeholder={placeholder} {...register(type, inputOptions[type])}/>
            {error && <span className='input-error'>{error}</span>}
        </label>
    );
};

export default FormInput;