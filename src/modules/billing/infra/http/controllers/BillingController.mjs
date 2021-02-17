// import ShowProjetoService from '@modules/projetos/services/ShowProjetoService';

export default class ProjetoController {
  async show(request, response) {
    const billing = request.params;
    console.log(billing);

    // const projeto = await showProjeto.execute({ billing });

    return response.json(billing);
  }
}
