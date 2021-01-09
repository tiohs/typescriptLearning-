import "./form-controllers";
type thisDados = {
    name: string;
};
function myFunction(this: thisDados, name: string): void {
    console.log(this);
    console.log(this.name + name);
    console.log(name);
}

myFunction.call({ name: "Hamilton" }, "Massango");
