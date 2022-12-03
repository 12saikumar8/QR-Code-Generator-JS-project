const Textarea = document.querySelector(".data")
const Qrimage = document.querySelector("#img")
const main = document.querySelector(".main")
const button = document.querySelector(".submit")

async function Generate_QR_Code(){
    const Qrcode = Textarea.value;
    button.innerHTML="Generating QR code"
    console.log(Qrcode)
    Qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${Qrcode}`;
    Qrimage.addEventListener("load", () => {
        Qrimage.style.display = "flex"
        button.innerHTML="Generate QR code"
        main.style.height = "600px";
        main.style.marginTop= "6%";
        button.style.height = "10%";
        Textarea.style.height = "10%";
    });
}

Textarea.addEventListener("keyup", () => {
    if(!Textarea.value.trim()) {
        main.style.height = "300px";
        Qrimage.style.display = "none"
        button.style.height = "15%";
        Textarea.style.height = "15%";

    }
});
