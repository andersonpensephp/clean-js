const AppError = require("./AppError")

describe('AppError', () => {
  it('AppError é uma instância de Error e contém a mensagem correta', () => {
    const appError = new AppError(AppError.dependencias);
    
    expect(appError).toBeInstanceOf(Error);
    expect(appError.message).toBe(AppError.dependencias)
  })
})