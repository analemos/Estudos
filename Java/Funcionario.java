public class Funcionario{
	String nome;
	String departamento;
    double salario;
	Data dataAdmissao;
	String rg;

	public void recebeAumento(double valor){
		this.salario += valor;
	}

	public double calculaGanhoAnual(){
		return this.salario * 12;
	}

	public double getSalario(){
		return this.salario;
	}


	public void mostra(){
		//dataAdmissao = new Data();
		System.out.println("Nome: " + this.nome);
		System.out.println("Departamento: " + this.departamento);
		System.out.println("Salario: " + this.salario);
		System.out.println("Data de Admissão: " + dataAdmissao.dia + "/" + dataAdmissao.mes +  "/" + dataAdmissao.ano);
		System.out.println("RG: " + this.rg);
	}
	
}

