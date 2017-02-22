class App {

  constructor(){

    var header = new Header();
    header.display('body');
    var footer = new Footer();
    footer.display('body');
    
    // Development tool
    var bootstrapSizeTool = new BootstrapSize();
    bootstrapSizeTool.display('body');
    
    
  }
}
