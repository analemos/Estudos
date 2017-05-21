public class Data{

	int dia;
	int mes;
	int ano;

	public void preencherData(int dia, int mes, int ano){
		this.dia = dia;
		this.mes = mes;
		this.ano = ano;
	}

	public String getFormatada(){
		return this.dia + "/" + this.mes +  "/" + this.ano;
	}	
}