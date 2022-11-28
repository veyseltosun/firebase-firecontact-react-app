import React from 'react'
import {Button, Form, Grid, Segment} from "semantic-ui-react";
import {options} from "../utils/constant"



function FormComponent({info, setInfo }) {
  const handleSubmit = () =>{
    console.log("info:", info)

  }
  const handleInputChange = (e) =>{
    // const name = e.target.name;
    // const value = e.targt.value;
    const{name,value} = e.target;
    setInfo({...info, [name]:value.toUpperCase()});
  
  }
  const handleOptionChange= (_, result) =>{
    const {name, value} = result;
    setInfo({...info, [name]:value.toUpperCase()});
  }
  return (
    <Grid textAlign='center' verticalAlign="middle">
      <Grid.Column style={{width:"300px"}}>
        <div className='ui pilled segments'>
          <div className='ui pilled brand'>
            <a href='https://github.com/veyseltosun'
             className='design'
             target="_target"
             rel="noopner noreferrer"
             >
              <code>{"<vys/>"}</code>
              <span className='design header'>design</span>
            </a>        
           </div>
        </div>
        <h2 className='contact-header'>Add Contact</h2>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
             fluid
             name="username"
             icon="user"
             iconPosition="left"
             placeholder="Name"
             value = {info.username}
             onChange={handleInputChange}
             required
            />
            <Form.Input
              fluid
              name="phoneNumber"
              icon="phone"
              iconPosition="left"
              placeholder="Phone Number"
              type="text"
              value={info.phoneNumber}
              onChange={handleInputChange}
               required
            />
            <Form.Dropdown
             options={options}
             onChange={handleOptionChange}
             value={info.gender.toLowerCase()}
             placeholder='Gender'
             name="gender"
             fluid
             selection
             required
            />
            <Button color='teal' fluid size='large' type='submit'>
              Add

            </Button>
          </Segment>

        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default FormComponent