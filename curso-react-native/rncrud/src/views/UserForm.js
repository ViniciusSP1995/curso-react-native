import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return(
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
            style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput
            style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o E-mail"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
            style={style.input}
                onChangeText={avatar => setUser({...user, avatar})}
                placeholder="Informe a URL do Avatar"
                value={user.avatar}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    }),
                    navigation.goBack()
                }}
            />
        </View>
        
        
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },  
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        }
})