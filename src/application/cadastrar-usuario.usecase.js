module.exports = function cadastrarUsuarioUseCase({ usuarioRepository }) {
  return async function({nome_completo, cpf, telefone, endereco, email}) {
    await usuarioRepository.cadastrar({
      nome_completo, 
      cpf, 
      telefone, 
      endereco, 
      email
    })
  }
}