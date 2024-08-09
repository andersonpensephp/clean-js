const AppError = require("../shared/error/AppError")

module.exports = function cadastrarUsuarioUseCase({ usuariosRepository }) {
  if (!usuariosRepository) {
    throw new AppError(AppError.dependencias)
  }
  return async function({nome_completo, cpf, telefone, endereco, email}) {
    const checkCampos = nome_completo && cpf && telefone && endereco && email
    if (!checkCampos) {
      throw new AppError(AppError.parametrosFornecidos)
    }
    await usuariosRepository.cadastrar({
      nome_completo,
      cpf,
      telefone,
      endereco,
      email
    })
  }
}