import {errors} from './errors.ts';
import './formError.scss';

type Props = {
    error: string
}

const FormError = ({error}: Props) => {

    return (
        <span className={`form-error ${error ? 'visible' : ''}`}>{errors[error]}</span>
    );
};

export default FormError;