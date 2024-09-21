import './formInput.scss';
import {UseFormRegister} from "react-hook-form";
import {AuthForm} from "../../pages/join/join.tsx";
import {inputOptions} from "./inputOptions.ts";

type Props = {
    type: 'email' | 'password' | 'name',
    placeholder: string,
    labelName: string,
    register: UseFormRegister<AuthForm>,
    error: string
}


const FormInput = ({type, placeholder, labelName, register, error}: Props) => {
    return (
        <label className='form-label'>
            <span className='label-name'>{labelName}</span>
            <input className='form-input' type={type} placeholder={placeholder} {...register(type, inputOptions[type])}/>
            {error && <span className="input-error">{error}</span>}
        </label>
    );
};

export default FormInput;