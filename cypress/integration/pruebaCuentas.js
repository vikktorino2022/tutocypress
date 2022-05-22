describe ('Cuentas', function(){
        
    it('vamos una igualdad',function(){
        expect(1==2,"Ambos numeros deben ser iguales y no lo son").to.equal(true);
    });
    it('vamos a ver que no es una igualdad',function(){
        expect(1==2).to.equal(false);
    })
    it('vamos a ver que una resta este bien', function () {
        expect(1-1, " Aqui se espera un cero").to.equal(0);
    })
    it('vamos a ver que una resta no este bien', function () {
        expect(1-1).to.not.equal(2);
    })
    it('Tiene que ser verdadero', function () {
        expect(3==3).to.be.true;
    })
    it('Tiene que ser falso', function () {
        expect(3 == 1).to.be.false;
    })



})