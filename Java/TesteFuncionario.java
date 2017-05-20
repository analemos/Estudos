public class TesteFuncionario{

	public static void main(String[] args){
		Funcionario f1 = new Funcionario();
		f1.nome="Ana";
		f1.departamento="Contabilidade";
		f1.dataAdmissao = new Data();
		f1.dataAdmissao.preencherData(13,10,2014);

		f1.salario = 100.00;
		f1.rg = "123456";

		System.out.println("salario inicial: " + f1.getSalario());
		
		f1.recebeAumento(100.00);
		System.out.println("salario com aumento: " + f1.getSalario());

		System.out.println("Ganho anual: " + f1.calculaGanhoAnual());

		

		f1.mostra();

	}
}