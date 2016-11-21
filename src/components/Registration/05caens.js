  import React from 'react'
// import SelectField from '../SuperSelectField'
import Caen from '../Caen'
import { RaisedButton } from 'material-ui';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import { lightBlue900 } from 'material-ui/styles/colors'

// const menuItemStyle = {
//   whiteSpace: 'normal',
//   display: 'flex',
//   justifyContent: 'space-between',
//   lineHeight: 'normal'
// }
const Caens = (props) => {
  const { enterprise } = props
  const caenPrimary = `${enterprise.primaryIndustryClassification.clasz}: ${enterprise.primaryIndustryClassification.description}`
  return (

    <div>
      <br />
      <h6>Alege Codul CAEN Principal</h6>
      <Caen
        maxSearchResults={5}
        caenCode={caenPrimary}
        dataSource={props.caens}
        name='principal'
        handleTextFieldChange={props.handleTextFieldChange}
        />

      <h6>Alege Coduri CAEN Secundare</h6>
      <RaisedButton
        label="Adauga inca un cod secundar"
        backgroundColor={lightBlue900}
        labelColor='white'
        onTouchTap={props.addCaenComponent}
        icon={<ContentAddCircleOutline color='white' />}
      />
      {enterprise.secondaryIndustryClassifications.map((caen, i) => {
          if (caen !== null){
            let obj = props.caens.find(c => c.clasz === caen)
            return <Caen
              key={`secondary-${i}`}
              caenCode={obj.description}
              maxSearchResults={5}
              dataSource={props.caens}/>
          } else {
            return <Caen
              key={`secondary-${i}`}
              caenCode=''
              maxSearchResults={5}
              dataSource={props.caens}/>
          }

        })
      }


      {/* <TextField
        hintText="0114"
        style={{ marginRight:'4%', width: '16%'}}
        floatingLabelText="Introduceti codul"
      />
      <AutoComplete
        style={{width: '80%'}}
        textFieldStyle={{width: '100%'}}
        listStyle={{width: 'inherit'}}
        floatingLabelText="Cautati dupa descrierea clasificarii"
        filter={AutoComplete.caseInsensitiveFilter}
        maxSearchResults={5}
        dataSource={props.caens}
        dataSourceConfig={dataSourceConfig}
      /> */}
      {/* <SelectField
        name='caenSecondary'
        multiple
        hintText='type some letters ...'
        onSelect={props.handleSelection}
        value={props.caenSecondary}
        displaySelectionsRenderer={props.handleCustomDisplaySelections}
        menuProps={{maxHeight: 470}}
        style={{ width: '100%' }}
        >
          {caensNodeList}
      </SelectField>
      <br /><br /><br /><br /> */}
    </div>
  );
}

Caens.propTypes = {
};
export default Caens
