import React from 'react'
import { TextField, AutoComplete, DatePicker } from 'material-ui';
import areIntlLocalesSupported from 'intl-locales-supported'
let DateTimeFormat
if (areIntlLocalesSupported(['ro', 'ro-RO'])) {
  DateTimeFormat = global.Intl.DateTimeFormat
} else {
  const IntlPolyfill = require('intl')
  DateTimeFormat = IntlPolyfill.DateTimeFormat
  require('intl/locale-data/jsonp/ro')
  require('intl/locale-data/jsonp/ro-RO')
}
const dataSource = ['Statutul asociatiei Statutul asociatiei', 'Copie buletin', 'Alt document'];
const Entrepreneur = (props) => {
  const { entrepreneur } = props.enterprise
  return (
    <div>
      <TextField
        hintText="CNP"
        floatingLabelText="Introduceti codul CNP"
        style={{marginRight:'4%', width: '38%'}}
        value={entrepreneur.identificationNumber}
      />
      <TextField
        hintText="Nume si Prenume"
        floatingLabelText="Introduceti numele"
        style={{width: '58%'}}
        value={entrepreneur.name}
      />
      <TextField
        hintText="AA"
        floatingLabelText="Serie"
        style={{marginRight:'4%', width: '10%'}}
        value={entrepreneur.cardSeries}
      />
      <TextField
        hintText="123456"
        floatingLabelText="Numar"
        style={{marginRight:'4%', width: '22%'}}
        value={entrepreneur.cardNumber}
      />
      <TextField
        hintText="Organul emitent"
        floatingLabelText="Eliberat de"
        style={{marginRight:'4%', width: '27%'}}
        value={entrepreneur.issuedBy}
      />
      <DatePicker
        hintText="Alegeti data eliberarii"
        DateTimeFormat={DateTimeFormat}
        style={{marginRight:'0%', width: '30%', display: 'inline'}}
        okLabel="OK"
        cancelLabel="Anulati"
        locale="ro"
        value={new Date(entrepreneur.issuedAt)}
      />
      <TextField
        hintText="Director"
        floatingLabelText="In calitate de"
        style={{marginRight:'4%', width: '48%'}}
        value={entrepreneur.designation}
      />
      <AutoComplete
        style={{width: '48%'}}
        textFieldStyle={{width: '100%'}}
        listStyle={{width: 'inherit'}}
        floatingLabelText="Documente uploadate"
        filter={AutoComplete.noFilter}
        openOnFocus={true}
        dataSource={dataSource}
      />
    </div>
  );
}

Entrepreneur.propTypes = {
};
export default Entrepreneur
