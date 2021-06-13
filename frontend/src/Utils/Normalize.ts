const justNumber = (value: string) => {
    const filter = value.split('').filter((n) => (Number(n) || n === '0' ? n : ''));
    return filter.join('');
};

const normalizePhone = (value: string) => {
    const text = justNumber(value);
    if (text.length === 11) {
        return text.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
    } else if (text.length === 10) {
        return text.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        return value;
    }
};

const normalizeCPF = (value: string) => {
    const text = justNumber(value).substring(0, 11);
    return text.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const normalizeCEP = (value: string) => {
    const text = justNumber(value).substring(0, 8);
    return text.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const normalizePressPreventSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
};

export { normalizePhone, normalizeCPF, normalizeCEP, normalizePressPreventSubmit };

