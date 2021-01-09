const showErrorMessage = "show-error-message";

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

form.addEventListener("submit", function (e: Event) {
    e.preventDefault();
    hideErrorMessages(this);
});

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll("." + showErrorMessage).forEach((e) =>
        e.classList.remove(showErrorMessage)
    );
}
function showErrorMessages(input: HTMLInputElement, msg: string): void {
    const formfileds = input.parentElement as HTMLDivElement;
    const errorMessage = formfileds.querySelector(
        ".error-message"
    ) as HTMLSpanElement;
    errorMessage.innerText = msg;
    formfileds.classList.add(showErrorMessage);
}

showErrorMessages(username, "Digite o user");
