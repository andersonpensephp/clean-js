const AppError = require("../shared/error/AppError")
const cadastrarUsuarioUsecase = require("./cadastrar-usuario.usecase")

describe('Cadastrar usuario use case', () => {
  const usuariosRepository = {
    cadastrar: jest.fn()
  }
  it('Deve poder cadastrar usuário', async () => {
    const usuarioDTO = {
      nome_completo: 'Nome Válido', 
      cpf: 'cpf válido', 
      telefone: 'Telefone válido', 
      endereco: 'endereço válido', 
      email: 'email válido'
    }

    const sut = cadastrarUsuarioUsecase({ usuariosRepository });
    const output = await sut(usuarioDTO);

    expect(output).toBeUndefined();
    expect(usuariosRepository.cadastrar).toHaveBeenCalledWith(usuarioDTO);
    expect(usuariosRepository.cadastrar).toHaveBeenCalledTimes(1);
  })
  
  it('Deve retornar um throw error, caso não forneça usuariosRepository', () => {
    expect(() => cadastrarUsuarioUsecase({})).toThrow(new AppError(AppError.dependencias));
  })

  it('deve retornar um throw error, caso não forneça os parãmetros para a cloujure', async () => {
    const sut = cadastrarUsuarioUsecase({ usuariosRepository });

    await expect(() => sut({})).rejects.toThrow(new AppError(AppError.parametrosFornecidos))
  })
})