import React from 'react';

function TelaAlternativaDeReserva({ onSelecionarOpcao }) {
  return (
    <div className="opcoes-alternativas">
      <h2>Este horário não está disponível</h2>
      <p>Escolha uma das opções abaixo:</p>

      <div className="opcao">
        <h3>1. Entrar apenas na lista de espera</h3>
        <p>“Desejo entrar na fila de espera para este dia e horário. Se alguém cancelar, quero ser avisado.”</p>
        <button onClick={() => onSelecionarOpcao('lista_espera')}>
          Entrar na lista de espera
        </button>
      </div>

      <div className="opcao">
        <h3>2. Agendar apenas outro horário disponível</h3>
        <p>“Prefiro agendar um novo horário garantido em outro dia.”</p>
        <button onClick={() => onSelecionarOpcao('novo_agendamento')}>
          Escolher outro horário
        </button>
      </div>

      <div className="opcao">
        <h3>3. Entrar na lista de espera E garantir outro horário (recomendado)</h3>
        <p>“Quero ficar na fila de espera, mas também garantir outro horário para não perder o atendimento.”</p>
        <button onClick={() => onSelecionarOpcao('lista_e_novo')}>
          Lista de espera + Novo horário
        </button>
      </div>
    </div>
  );
}

export default TelaAlternativaDeReserva;
