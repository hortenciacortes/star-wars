import { Utils } from "../../Utils";

export function TableHead({ starshipsData }) {
  return (
    <th scope="row">{starshipsData}</th>
  );
}

export function TableColumn({ starshipsData, chave }) {

  if(starshipsData === 'unknown') {
    starshipsData = 'Não informado'
  } else if(chave === 'cost_in_credits') {
    starshipsData = Utils.formatCurrency(starshipsData)
  } else if(chave === 'consumables') {
    starshipsData = starshipsData.split(' ')[0]
  } else if(chave === 'created' || chave === 'edited') {
    starshipsData = Utils.formatDate(starshipsData.split('T')[0])
  }

  return (
    <td>{starshipsData}</td>
  );
}
