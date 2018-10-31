import React, { Component } from 'react';
import { Container, Button, Text, Form, Input, Label, Item, Spinner } from 'native-base';
import { Formik } from 'formik';
import { Header, If } from 'app/common/components';
import { TextInputMask } from 'react-native-masked-text';
import moment from 'moment';
import * as yup from 'yup';

class WorkoutFormScreen extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          date: moment().format('DD/MM/YYYY'),
          time: '00h 00m 00s',
          ...this.props.initialValues,
        }}
        validationSchema={yup.object().shape({
          exercise: yup.string().required('Insira o nome do exercício'),
          date: yup
          .string()
          .required('Insira a data em que o exercício ocorreu')
          .test(
            'date',
            'Data inválida. Ex.: 10/12/2017',
            value => moment(value, 'DD/MM/YYYY').isValid(),
          ),
          time: yup
          .string()
          .required('Insira a duração do exercício')
          .test(
            'time',
            'Duração inválida. Ex.: 10h 25m 00s',
            (value) => {
              if (!value.match(/\d{2}h \d{2}m \d{2}s/)) {
                return false;
              }

              const values = value.match(/(\d{2})h (\d{2})m (\d{2})s/)
                .slice(1)
                .map(Number);

              return values.every(number => number < 60);
            },
          ),
        })}
        onSubmit={this.props.onSubmit}
      >
        {({
          values,
          errors,
          touched,
          ...props
        }) => (
          <Container>
            <Header
              title={this.props.title}
              hasButton
              renderRight={() => (
                <Button onPress={props.handleSubmit}>
                  <Text>Salvar</Text>
                </Button>
              )}
            />
            <If condition={props.isSubmiting}>
              {() => <Spinner />}
            </If>
            <If condition={!props.isSubmiting}>
              {() => (
                <Form>
                  <Item stackedLabel error={errors.exercise && touched.exercise}>
                    <Label>Nome do Exercício</Label>
                    <Input
                      onChangeText={props.handleChange('exercise')}
                      onBlur={props.handleBlur('exercise')}
                      value={values.exercise}
                    />
                  </Item>
                  {errors.exercise && touched.exercise ? <Text error>{errors.exercise}</Text> : null}
                  <Item stackedLabel error={errors.date && touched.date}>
                    <Label>Data</Label>
                    <TextInputMask
                      onChangeText={props.handleChange('date')}
                      value={values.date}
                      customTextInput={Input}
                      onBlur={props.handleBlur('date')}
                      type="datetime"
                      options={{ format: 'DD/MM/YYYY' }}
                    />
                  </Item>
                  {errors.date && touched.date ? <Text error>{errors.date}</Text> : null}
                  <Item stackedLabel last error={errors.time && touched.time}>
                    <Label>Duração</Label>
                    <TextInputMask
                      type="custom"
                      customTextInput={Input}
                      onChangeText={props.handleChange('time')}
                      onBlur={props.handleBlur('time')}
                      value={values.time}
                      options={{ mask: '99h 99m 99s' }}
                    />
                  </Item>
                  {errors.time && touched.time ? <Text error>{errors.time}</Text> : null}
                </Form>
              )}
            </If>
          </Container>
        )}
      </Formik>
    );
  }
}

export default WorkoutFormScreen;
