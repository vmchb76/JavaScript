class Vehiculo {

    constructor(ruedas, color, maxPasajeros) {
        this.ruedas = ruedas
        this.color = color
        this.maxPasajeros = maxPasajeros
        this.Kilometros = 0
    }

    moverse() {
        console.log('Me muevo con', this.ruedas, 'ruedas')
    }
}

class VehiculoDeMotor extends Vehiculo {

    constructor(tipoMotor, ruedas, color, maxPasajeros) {
        super(ruedas, color, maxPasajeros)
        this.tipoMotor = tipoMotor

    }

    arrancarMotor() {
        console.log('Arranco mi motor', this.tipoMotor)

    }

    pararMotor() {
        console.log('Paro mi motor', this.tipoMotor)
    }

    moverse() {
        this.arrancarMotor()
        super.moverse()
    } 
}

class CocheGasolina extends VehiculoDeMotor {
    constructor(matricula, color) {
        super('gasolina', 4, color, 5)
        this.matricula = matricula

    }
}

const coche = new CocheGasolina('1234ABC', 'azul')
console.log(coche)
coche.moverse()