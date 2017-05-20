public class BalancoTrimestral{
	public static void main(String[] args) {

		double gastosJaneiro  = 1500;

		double gastosFevereiro  = 2300;

		double gastosMarco  = 1700;

		double gastosTrimestre = gastosJaneiro + gastosFevereiro + gastosMarco;

		double mediaMensal = gastosTrimestre/3;

		System.out.println(gastosTrimestre + " Valor da média mensal = " + mediaMensal);

		int num = 1;
		int aux = 0;

		while(num < 1001){
			num = num + aux;
			System.out.println(num);
			aux++;
		}

		

		for (int multTres = 3; multTres < 100 ; multTres+=3) {
			System.out.println(multTres);
		}

		long fatorial = 1;
		for (long fat = 1; long < 40 ; long++) {
			
			fatorial = fat * (fatorial);
			System.out.println(fatorial);
		}
	}
}