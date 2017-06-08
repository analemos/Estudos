public class TesteEmpresa{

	public static void main(String[] args){
		Empresa empresa = new Empresa();
		for(int i=0; i<empresa.funcionarios.length; i++){
			Funcionario f1 = new Funcionario();
			f1.nome="Ana";
			f1.departamento="Contabilidade";
			f1.dataAdmissao = new Data();
			f1.dataAdmissao.preencherData(13,10,2014);

			f1.salario = 100.00 * i;
			f1.rg = "123456";

			empresa.adiciona(f1);
		}

		empresa.mostraEmpregados();	
		empresa.mostraTodasAsInformacoes();	
		Funcionario f1 = new Funcionario();
		System.out.println(empresa.contem(empresa.funcionarios[9]));
		System.out.println(empresa.contem(f1));
	}
}