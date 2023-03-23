import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (probs) => (
        <Text style={Estilo.txtG}>
            O valor {probs.max} é maior q o valor Y {probs.min}!
        </Text>
    );