// @flow
import React from 'react';
import {AutoComplete} from 'material-ui'
type Props = {
  maxSearchResults: number,
  dataSource: Array<Object>,
  name: String,
  domainCode: String,
  handleTextFieldChange:(e: Event) => void
}
const dataSourceConfig = {
  text: 'description',
  value: 'id',
};
const Domain = (props: Props) => {
  return (
    <div>
      <AutoComplete
        fullWidth={true}
        listStyle={{width: 'inherit'}}
        floatingLabelText='Cautati dupa descrierea domeniului'
        filter={AutoComplete.caseInsensitiveFilter}
        maxSearchResults={props.maxSearchResults}
        dataSource={props.dataSource}
        dataSourceConfig={dataSourceConfig}
        openOnFocus={true}
        onChange={props.handleTextFieldChange}
        searchText={props.domain === null ? '' : props.domain}
      />
      <br /><br />
    </div>
  );
}
export default Domain
