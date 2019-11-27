interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
	summary(): void;
}

const oldCivic = {
	name: 'Civic',
	year: 2000,
	broken: false,
	summary(): void {
		console.log(`Vehicle name: ${this.name}`);
		console.log(`Manufacturing year: ${this.year}`);
	}
};

const printVehicle = (vehicle: Vehicle): void => {
	vehicle.summary();
};

printVehicle(oldCivic);
