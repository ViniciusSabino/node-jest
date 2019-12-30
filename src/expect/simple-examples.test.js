/* eslint-disable no-undefined */
/* eslint-disable max-nested-callbacks */
import simple from './simple-examples';

describe('Expect', () => {
  describe('Exemplos simples usando o expect', () => {
    /**
     * Checar se o valor passado é igual ao valor esperado
     */
    describe('expect.toBe(value) e expect.toEqual(value)', () => {
      it('deve retornar 10 quando passado os valores de 8 e 2 para a função "soma"', () => {
        const result = simple.sum(8, 2);

        expect(result).toBe(10);
        expect(result).toEqual(10);
      });
    });

    /**
     * Adicionando a minha propria função para checar se o valor corresponde ao meu teste
     */
    describe('expect.extend(matchers)', () => {
      expect.extend({
        isPairNumber(received) {
          const module = received % 2;

          if (module) {
            return {
              message: () => `${received} é um número impar!`,
              pass: false,
            };
          }

          return {
            message: () => `${received} é um número par`,
            pass: true,
          };
        },
      });
      it('deve passar no teste apenas os números que são pares', () => {
        expect(12).isPairNumber();
        expect(25).not.isPairNumber();
      });
    });

    /**
     * Usando expect.anything() para corresponder a qualquer coisa que não seja null ou undefined
     */
    describe('expect.anything()', () => {
      it('O valor 10 não deve ser um valor "null", ou "undefined"', () => {
        expect(20).toEqual(expect.anything());
      });

      it('O valor "null" e "undefined" não deve passar no teste quando utilizado expect.anything()', () => {
        expect(null).not.toEqual(expect.anything());
        expect(undefined).not.toEqual(expect.anything());
      });
    });

    /**
     * expect.any(constructor) corresponde a qualquer coisa que foi criada com o construtor fornecido
     */
    describe('expect.any()', () => {
      it('A constante chamada "times" devera ser criada usando o construtor "Map"', () => {
        const times = new Map([
          ['São Paulo', 'Vinícius'],
          ['Palmeiras', 'Denis'],
          ['Alysson', 'Santos'],
        ]);

        expect(times).toEqual(expect.any(Map));
      });
    });
  });
});
