const hoje = new Date();
const dataHoje = hoje.toISOString();

export const dataCortada = dataHoje.slice(0, 10)