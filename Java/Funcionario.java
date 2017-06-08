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
		System.out.println("Nome: " + this.nome);
		System.out.println("Departamento: " + this.departamento);
		System.out.println("Salario: " + this.salario);
		System.out.println("Data de entrada: " + this.dataAdmissao.getFormatada());
		System.out.println("RG: " + this.rg);
	}
	
}

class Empresa{
	String nome;
	String cnpj;
	Funcionario[] funcionarios = new Funcionario[10];
	int livre = 0;

	public void adiciona(Funcionario f){

		this.funcionarios[this.livre] = f;
		livre++;
	}

	public void mostraEmpregados(){
		for(Funcionario f: funcionarios)
		System.out.println(" Salário:  " + f.salario);
	}

	public void mostraTodasAsInformacoes(){
		for(Funcionario f: funcionarios)
			f.mostra();
	}

	public boolean contem(Funcionario f){
		for(Funcionario funcionario: funcionarios)
			if(funcionario == f) return true;

		return false;
	}
}
