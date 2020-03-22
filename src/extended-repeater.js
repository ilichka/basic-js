module.exports = function repeater(str, options) {
    function finalString() {
        for (let i = 1; i < options.repeatTimes; i++) {
            finalStr += separator + partSrt;
        }
    }
    let separator = options.separator;
    let finalStr, partSrt;
    if (options.additionRepeatTimes === undefined && options.repeatTimes === undefined) {
        partSrt = finalStr = str + options.addition;
        return finalStr;
    }
    if (options.separator === undefined && options.additionRepeatTimes === undefined && options.addition === undefined && options.additionSeparator === undefined) {
        separator = '+';
        partSrt = finalStr = str;
        finalString();
        return finalStr;
    }
    if (options.additionRepeatTimes === undefined && options.addition === undefined && options.additionSeparator === undefined) {
        partSrt = finalStr = str;
        finalString();
        return finalStr;
    }
    else {
            partSrt = finalStr = str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
            finalString();
            return finalStr;
        }
};
  