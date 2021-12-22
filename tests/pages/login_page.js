export default class loginPage {
    
    get username () { return $('#username') }
    get password () { return $('#password') }
    


    async open(ruta) {
        await browser.url(`${ruta}`);
    }

    async logIn(username, password) {
        await username.setValue(username);
        await password.setValue(password);
    }

    async clickearElemento(elemento) {
        if(await elemento.isClickable()){
       await elemento.click();
        }
    }



}
export default new loginPage();
