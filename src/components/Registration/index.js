import React, { PropTypes } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  RefreshIndicator,
  RaisedButton,
  FlatButton
} from 'material-ui';

import Type from './01type.js'
import Entrepreneur from './02entrepreneur.js'
import Enterprise from './03enterprise.js'
import Category from './04category.js'
import Caens from './05caens.js'
import Domains from './06domains.js'
import Address from './07address.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { lightBlue900 } from 'material-ui/styles/colors'
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: lightBlue900,
  },
});
const styles = {
  refresh: {
    display: 'inline-block',
    position: 'relative',
    float: 'right',
    marginRight: 30,
    marginTop: -84,
    zIndex: 1200,
    backgroundColor: 'none',
    boxShadow: 'none'
  },

}
function RegistrationUI(props) {
    const {finished, stepIndex} = props;
    const renderStepActions = (step) => {
      return (
        <div style={{margin: '12px 0'}}>
          <RaisedButton
            label={stepIndex === 6 ? 'Finalizare' : 'Inainte'}
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={props.handleNext}
            style={{marginRight: 12}}
          />
          {step > 0 && (
            <FlatButton
              label="Inapoi"
              disabled={stepIndex === 0}
              disableTouchRipple={true}
              disableFocusRipple={true}
              onTouchTap={props.handlePrev}
            />
          )}
        </div>
      )
    }
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={{maxWidth: '85%', minHeight: '80vh', margin: 'auto', paddingBottom:200}}>
        <h3>Inregistrare</h3>
        <Stepper activeStep={stepIndex} orientation="vertical" >
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Ce fel de inregistrare vrei sa inregistrezi?</StepLabel>
            <StepContent>
              <Type {...props}/>
              {renderStepActions(0)}
            </StepContent>
          </Step>
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Cine depune cererea?</StepLabel>
            <StepContent>
              <Entrepreneur {...props}/>
              {renderStepActions(1)}
            </StepContent>
          </Step>
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Care este entitatea juridica?</StepLabel>
            <StepContent>
              <Enterprise {...props} />
              {renderStepActions(2)}
            </StepContent>
          </Step>

          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Care sunt domeniile de activitate economica?</StepLabel>
            <StepContent>
              <Caens {...props} />
              {renderStepActions(3)}
            </StepContent>
          </Step>
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Care sunt domeniile de interventie sociala?</StepLabel>
            <StepContent>
              <Domains {...props} />
              {renderStepActions(4)}
            </StepContent>
          </Step>
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Care este categoria de intreprindere sociala?</StepLabel>
            <StepContent>
              <Category {...props} />
              {renderStepActions(5)}
            </StepContent>
          </Step>
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Care sunt datele de contact ale persoanei juridice?</StepLabel>
            <StepContent>
              <Address {...props} />
              {renderStepActions(6)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            Ati terminat
          </p>
        )}
      </div>
    </MuiThemeProvider>
    );
}
function Registration(props) {
  return (
    <div>
        {props.isLoading === true
          ? <RefreshIndicator
              size={50}
              left={10}
              top={0}
              loadingColor='white'
              status="loading"
              style={styles.refresh}
            />
          : <RegistrationUI
              stepIndex={props.stepIndex}
              enterprise={props.enterprise}
              caens={props.caens}
              domains={props.domains}
              finished={props.finished}
              handleNext={props.handleNext}
              handlePrev={props.handlePrev}
              addCaenComponent={props.addCaenComponent}
              />
      }
    </div>
  );
}
Registration.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  enterprise: PropTypes.object.isRequired
};
export default Registration;
