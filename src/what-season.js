module.exports = function getSeason(date) {


    if (!date) {
        return 'Unable to determine the time of year!';
    }

    if (Object.keys(date).length > 0) {
        throw new Error();
    }

    let month = date.getMonth();

    if (month === 11 || month === 1 || month === 0) {
        return 'winter'
    }

    if (month >= 2 && month <= 4) {
        return 'spring'
    }

    if (month >= 5 && month <= 7) {
        return 'summer'
    }

    if (month >= 8 && month <= 10) {
        return 'autumn'
    }
};
