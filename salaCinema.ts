import {Cliente} from "./Cliente";
export class Sala{
	private numAssentos : number;
	private clientes : Array<Cliente>


	public constructor(numAssentos : number){
		this.numAssentos = numAssentos;
		this.clientes = []
		for (let i = 0; i < this.numAssentos; i++) {
		 	this.clientes.push(null);
		 } 
	}	

	public mostrarEstado() : string {
		let res : string = ""
		for (let i = 0; i < this.clientes.length; i++) {
			if(this.clientes[i] == null) {
				res += " - ";
			} else {
				res += this.clientes[i];
			}
		}
		return res;

	}

	public reservar(id : string, fone : string, num : number) : void {
		if(num < 0 || num >= this.numAssentos){
			console.log("Cadeira inexistente");
		}
		else {
			if(this.clientes[num] != null){
				console.log("Cadeira ja esta ocupada");
			}
			else {
				let encontrouId : boolean = false;
				for(let i = 0; i < this.clientes.length; i++){
					let cliente : Cliente = this.clientes[i];
					if(cliente != null) {
						if(cliente.getId() == id){
						console.log("Cliente ja esta na sala");
						encontrouId = true;
						}
					}					
				}
				if(encontrouId == false){
					let cli : Cliente = new Cliente(id, fone);
					this.clientes[num] = cli;
				}
			}
		}
	}

	public cancelar(id : string) : void {
		let encontrouId : boolean = false;
		for(let i = 0; i < this.clientes.length; i++){
			let cliente : Cliente = this.clientes[i];
			if(cliente != null){
				if(cliente.getId() == id){
					this.clientes[i] = null;
					encontrouId = true;
				}
			}
		}
		if(encontrouId == true){
			console.log("Reserva cancelada com sucesso");
		} else {
			console.log("Id nao encontrada");
		}

	}

	
}


