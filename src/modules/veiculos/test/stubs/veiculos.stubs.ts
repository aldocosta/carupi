import { Veiculos } from "../../veiculos.model";

export const veiculoStub = (): Veiculos => {
    return {
        "ano": 2017,
        "quilometragem": 3000,
        "precoVenda": 4500,
        "tipoCambio": "automatico",
        "versao": "lt",
        "model": "leaf",
        "marca": "nissan"
    }
}