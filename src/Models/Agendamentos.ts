import { PacienteAgendadoProps } from "./PacienteAgendado";

export interface AgendamentosProps {
  nome: string,
  data: string,
  pacientesAgendados: Array<PacienteAgendadoProps>
}