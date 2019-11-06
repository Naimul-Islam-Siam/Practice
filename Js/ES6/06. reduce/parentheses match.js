const isBalancedParantheses = (string) => {
    let result = string.split("").reduce((res, parantheses) => {
        if (res < 0) return res;
        if (parantheses == '(') res++;
        if (parantheses == ')') res--;

        return res;
    }, 0);

    if (result == 0) return true;
    else return false;
};