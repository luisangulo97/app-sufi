export const getDocumentTypes = array => {
    const data = [...new Set(array?.map(item => item?.documentType))];
    return data;
}

export const formatCurrency = ({ value, currency = 'COP' }) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
}
