import { useContext } from "react";
import { formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { HistoryList, HitoryContainer, Status } from "./styles";
import { CyclesContext } from "../../context/CyclesContext";

export function History() {
  const { cycles } = useContext(CyclesContext)


  return (
    <HitoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR
                  })}</td>
                  <td>
                    {cycle.finishedDate && (<Status statusColor="green">Concluido</Status>)}
                    {cycle.interruptedDate && (<Status statusColor="red">Interrompido</Status>)}
                    {(!cycle.finishedDate && !cycle.interruptedDate) && (<Status statusColor="yellow">Em andamento</Status>)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HitoryContainer>
  )
}
