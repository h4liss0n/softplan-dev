import { isValidCPF } from "../../src/util/validade";


describe("validantion CPF", () => {
  test("all test validations of the CPF", done => {
    expect(isValidCPF('585.716.511-32')).toBe(true);
    expect(isValidCPF('585.716.511-90')).toBe(false);
    expect(isValidCPF('')).toBe(false);
    expect(isValidCPF('111.111.111-11')).toBe(false);
    expect(isValidCPF('222.222.222-22')).toBe(false);
    expect(isValidCPF('333.333.333-33')).toBe(false);
    done();
  });

});
