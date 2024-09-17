import './formInput.scss';

type Props = {
    type: string,
    placeholder: string,
    labelName: string
}

const FormInput = ({type, placeholder, labelName}: Props) => {
    return (
        <label className='form-label'>
            <span className='label-name'>{labelName}</span>
            <input className='form-input' type={type} placeholder={placeholder}/>
        </label>
    );
};

export default FormInput;