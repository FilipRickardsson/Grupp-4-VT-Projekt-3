class App {

  constructor(){

    // Development tool
    var bootstrapSizeTool = new BootstrapSize();
    bootstrapSizeTool.display('body');

    // Create a petowner
    var a = new PetOwner({
      firstName: 'Esmeralda',
      lastName: 'Efraimsdotter',
      birthDate: '1997-02-28',
      pets: [
        {name: 'Py', birthDate: '2017-02-20' },
        {name: 'Po', birthDate: '1975-06-17'}
      ]
    });

    // a.display('body');
    window.a = a;

    // Try
    var testDataGen = new TestDataGenerator();

  }
}
