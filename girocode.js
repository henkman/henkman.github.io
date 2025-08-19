const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "",
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
})

const generateGiroCode = (transfer) => {
    let code = "BCD\n002\n1\nSCT\n"
    if (transfer.bic)
        code += transfer.bic
    code += "\n"
    code += transfer.beneficiary
    code += "\n"
    code += transfer.iban
    code += "\n"
    code += transfer.currency
    code += transfer.amount
    code += "\n\n"
    code += transfer.reference
    code += "\n"
    qrcode.makeCode(code)
}

document.getElementById("generateForm").addEventListener("submit",
    (e) => {
        e.preventDefault()
        const transfer = {
            "beneficiary": e.target.beneficiary.value,
            "iban": e.target.iban.value,
            "bic": e.target.bic.value,
            "currency": e.target.currency.value,
            "amount": e.target.amount.value,
            "reference": e.target.reference.value,
        }
        generateGiroCode(transfer)
    }
)
