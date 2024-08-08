const cadastrarUsuarioUsecase = require("./cadastrar-usuario.usecase")

describe('Cadastrar usuario use case', () => {
  const usuarioRepository = {
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

    const sut = cadastrarUsuarioUsecase({ usuarioRepository })
    const output = await sut(usuarioDTO)
    
    expect(output).toBeUndefined()
    expect(usuarioRepository.cadastrar).toHaveBeenCalledWith(usuarioDTO)
    expect(usuarioRepository.cadastrar).toHaveBeenCalledTimes(1)
  })
})