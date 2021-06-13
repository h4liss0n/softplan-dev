import moment from "moment";

const toNumber = (value: string | undefined | number) => {
    if (value === undefined) return null
    else
        if (value === '') return null
        else
            return parseFloat(value.toString());
}


const toDateNow = () => {
    return moment().format('yyyy-MM-DD');
}

const toDateString = (value: string | undefined | null | any) => {
    if (moment(value).isValid()) return moment(value).format('yyyy-MM-DD')
    return ''
}

const toMonthStartString = (value: string | undefined) => {
    if (value === undefined) return moment().startOf('month').format('yyyy-MM-DD');
    else return moment(value).startOf('month').format('yyyy-MM-DD');
}

const toMonthEndString = (value: string | undefined) => {
    if (value === undefined) return moment().endOf('month').format('yyyy-MM-DD');
    else return moment(value).endOf('month').format('yyyy-MM-DD');
}


const FormatTimeStamp = (value: string | undefined) => {
    if (value === undefined) return ''
    else return moment(value).format('DD/MM/yyyy hh:mm:ss');
}


const FormatDate = (value: string | undefined | null) => {
    if (moment(value).isValid())  return moment(value).format('DD/MM/yyyy')
    return null   
}






const formatMoeda = (value: number | undefined) => {
    if (value === undefined) return 0
    if (value) return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}


export { toNumber, formatMoeda, toDateString, FormatTimeStamp, FormatDate, toMonthStartString, toMonthEndString, toDateNow };

