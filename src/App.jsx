import {
  Provider,
  defaultTheme,
  Button,
  Flex,
  View,
  TextField,
  Radio,
  RadioGroup,
  Picker,
  Item,
  Divider,
  Header,
  Content,
  Text,
  Well
} from '@adobe/react-spectrum';
import { useState } from 'react';

function App() {
  const [radioValue, setRadioValue] = useState('coding');
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <Provider theme={defaultTheme}  marginStart="size-6000">
      {/* need to set margin left */}
      <View padding="size-1000">
        <Header>
          <Text>React Spectrum Demo</Text>
        </Header>
        <Divider />
        <Content>
          <Flex direction="column" gap="size-200">
            {/* Basic form section */}
            <Well>
              <Flex direction="column" gap="size-150">
                <TextField 
                  label="Name" 
                  value={name}
                  onChange={setName}
                />
                
                <Picker 
                  label="Favorite Programming Language"
                  selectedKey={language}
                  onSelectionChange={setLanguage}
                >
                  <Item key="javascript">JavaScript</Item>
                  <Item key="python">Python</Item>
                  <Item key="java">Java</Item>
                  <Item key="cpp">C++</Item>
                </Picker>
              </Flex>
            </Well>

            {/* Radio group section */}
            <Well>
              <RadioGroup 
                label="What do you enjoy most?"
                value={radioValue}
                onChange={setRadioValue}
              >
                <Flex direction="column" gap="size-100">
                  <Radio value="coding">Coding</Radio>
                  <Radio value="design">Design</Radio>
                  <Radio value="testing">Testing</Radio>
                </Flex>
              </RadioGroup>
            </Well>

            {/* Checkbox and button section */}
            <Well>
              <Flex direction="column" gap="size-150">
                
                <Flex direction="row" gap="size-100">
                  <Button 
                    variant="primary" 
                    onPress={() => alert('Saved!')}
                  >
                    Save
                  </Button>
                  <Button 
                    variant="secondary" 
                    onPress={() => {
                      setName('');
                      setLanguage('');
                      setRadioValue('coding');
                    }}
                  >
                    Reset
                  </Button>
                </Flex>
              </Flex>
            </Well>
          </Flex>
        </Content>
      </View>
    </Provider>
  );
}

export default App;