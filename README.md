# Software para o Laboratório do Instituto Federal Fluminense, tema do meu TCC.

O que é o Laboratório Maker:
É um laboratório voltado ao desenvolvimento de projetos acadêmicos em geral. Ele terá espaços para trabalho colaborativo, ferramentas diversas, impressoras 3D, scanner 3D e cortadora à laser, além de outros materiais que poderão ser utilizados nas atividades. 

Software desenvolvido para atender as demandas do Laboratório Maker, tornando o espaço físico acessível de forma digita.

O software foi desenvolvido para ser usado por todos da comunidade, de todas as idades e níveis diferente de experiencia com tecnologia. Para isso ser possível, foi planejado o desenvolvimento com os seguintes cuidados:

* Software responsivo, projetado para todos os tamanhos de tela.
* Software performático, rodando de forma rápida até mesmo com conexões de internet mais lentas.
* Software sem uso de recursos que somente usuários com um nível de acesso à tecnologia mais elevados entendem, como por exemplo o menu hamburger.
* Uso de ícones junto aos textos, para ter uma boa affordance para o usuário.

Para as funcionalidades do software, foram feitos analise de requisitos com o corpo docente do Instituto Federal Fluminense, como professores, orientadores e o coordenador do curso de Bacharelado em Sistemas de Informação. Também foi feita a análise de requisitos com o corpo discente do Instituto, como os alunos e pessoas de fora da comunidade, como pais de aluno.

O software pode ser dividido em duas grandes partes, uma de acesso público, que é onde os usuários podem ter acesso, e outra parte administrativa, de acesso restrito e protegido por senha.

Todas as telas contam com um menu e rodapé interativos, pensados para facilitar a navegação de todos os usuários.

* Menu: Menu com interação e mudança de cor para mostrar a tela que o usuário se encontra. Toda navegação atualiza somente o conteúdo desejado, não a página inteira, aumentando e muito a velocidade na troca de telas.

* Rodapé: Ao clicar no endereço o usuário é encaminhado para o google maps.

As telas disponíveis para os usuários são cinco, com as seguintes funcionalidades:

*Tela de Início: Conta com cards interativos, que ao serem clicados encaminham o usuário para as demais telas do software.

* Tela de agendamento: O usuário pode fazer uma verificação em agendamentos já feitos, inserindo a data desejada, assim sendo feita uma verificação no banco de dados, e retornando em forma de tabela, todos os agendamentos do dia.
Conta com um formulário com todas as validações necessárias e com facilitadores para o usuário como mascaras de telefone. O formulário conta com sincronização e verificação em tempo real no banco de dados, para impedir agendamentos em horários ocupados.
No final da tela, o usuário pode consultar seu agendamento de forma individual, inserindo seu email, onde é feita uma busca no banco de dados, que retorna para o usuário um card, com todos seus agendamentos.

* Tela equipamentos: Mostra para o usuário todos os equipamentos do espaço físico do Laboratório Maker.

* Tela galeria de fotos: Conta com filtros, disponíveis em tags, para filtrar as fotos e com zoom ao passar o mouse em cima das fotos.

* Praticas pedagógicas: Conta com aulas disponibilidades por professores previamente. Essas aulas são armazenadas no banco de dados e disponíveis para download.
Conta com tutoriais, que tem um filtro para retornarem somente informações do equipamento selecionado.

O software conta com duas telas administrativas de acesso somente com link e protegido por senha e uma de login para acesso as duas telas administrativas.

* Tela de login: Conta com campos de usuário e senha, que retorna mensagem de erro ou de usuário logado, caso logado retorna a tela correspondente, ou de agendamentos ou de professores.

* Tela administrativa de agendamento: Nessa tela o administrador do Laboratório Maker, insere a data desejada para realizar uma consulta, onde retorna todos os dados de agendamentos daquele dia.

* Tela administrativa dos professores: Nessa tela os professores inserem os arquivos de aula, para realizarem o upload para serem salvos no banco de dados, e disponibilizados para todos na tela de práticas pedagógicas. Conta com um status de carregamento em porcentagem.











