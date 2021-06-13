import { cpf } from 'cpf-cnpj-validator';
import { toDateString } from './Converter';

const transformNumeroFloat = (value: any, originalValue: any, schema: any) => {
    if (typeof originalValue === 'string') {

        const textValue = (originalValue as string).replaceAll(',', '.');
        originalValue = textValue !== '' ? parseFloat(textValue) : null
    }
    return originalValue;
}


const validDate = (value: any, originalValue: any, schema: any) => {
    if (typeof originalValue === 'string')
        originalValue = toDateString(originalValue);

    return originalValue ? originalValue : '';
}


const validCPF = (value: any, originalValue: any, schema: any) => {
    originalValue = cpf.isValid(originalValue) ? originalValue : ''
    return originalValue;


}
const testCPF = {
    name: 'max',
    exclusive: true,
    message: 'field cpf not is valdia',
    test: (value: any) => cpf.isValid(value as string),
}




export { transformNumeroFloat, validCPF, validDate, testCPF };

