module.exports = function cadastrarUsuarioUseCase({ usuariosRepository }) {
  if (!usuariosRepository) {
    throw new Error("usuariosRepository não fornecido.")
  }
  return async function({nome_completo, cpf, telefone, endereco, email}) {
    await usuariosRepository.cadastrar({
      nome_completo, 
      cpf, 
      telefone, 
      endereco, 
      email
    })
  }
}