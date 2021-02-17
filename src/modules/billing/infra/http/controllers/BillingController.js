// import ShowProjetoService from '@modules/projetos/services/ShowProjetoService';

export default class BillingController {
  public async show(request, response) {
    const { billing } = request.body;
    console.log(billing);

    const projeto = await showProjeto.execute({ billing });

    return response.json(projeto);
  }
}
