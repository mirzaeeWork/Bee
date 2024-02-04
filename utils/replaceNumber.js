const e2p = (s) => s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);//تبدیل اعداد انگلیسی به فارسی

const p2e = (s) =>
    s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());//تبدیل اعداد فارسی به انگلیسی

const convertToPersianNumbers = (text) => {
    return text.replace(/[0-9]/g, function (match) {
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return persianNumbers[parseInt(match)];
    });
}

export { e2p, p2e, convertToPersianNumbers};
