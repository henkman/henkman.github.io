/* #225 patched aswell as issues #287 and #292 addressed */
import { QRCode } from './qrcode.js';

const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "",
    width: 512,
    height: 512,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M,
    addQuietZone: true
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

document.getElementById("iban").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\s/g, "")
})

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
