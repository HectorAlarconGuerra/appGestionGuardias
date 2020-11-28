import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Service from '../screens/service/Service';
import Client from '../screens/service/Client';
import RegisterClient from '../screens/service/RegisterClient';
import ConsultClient from '../screens/service/ConsultClient';
import RequestService from '../screens/service/RequestService';
import CheckRequest from '../screens/service/CheckRequest';
import AnswerRequest from '../screens/service/AnswerRequest';

const Stack = createStackNavigator();

export default function ServiceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="service"
        component={Service}
        options={{title: 'Servicios seguridad'}}
      />
      <Stack.Screen
        name="client"
        component={Client}
        options={{title: 'Clientes'}}
      />
      <Stack.Screen
        name="registerclient"
        component={RegisterClient}
        options={{title: 'Registrar cliente'}}
      />
      <Stack.Screen
        name="consultclient"
        component={ConsultClient}
        options={{title: 'Consultar cliente'}}
      />
      <Stack.Screen
        name="requestservice"
        component={RequestService}
        options={{title: 'Solicitar servicio'}}
      />
      <Stack.Screen
        name="checkrequest"
        component={CheckRequest}
        options={{title: 'Revisar solicitud'}}
      />
      <Stack.Screen
        name="answerrequest"
        component={AnswerRequest}
        options={{title: 'Responder solicitud'}}
      />
    </Stack.Navigator>
  );
}
