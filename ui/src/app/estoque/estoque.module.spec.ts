import {EstoqueModule} from './estoque.module';

describe('EstoqueModule', () => {
  let estoqueModule: EstoqueModule;

  beforeEach(() => {
    estoqueModule = new EstoqueModule();
  });

  it('should create an instance', () => {
    expect(estoqueModule).toBeTruthy();
  });

});
