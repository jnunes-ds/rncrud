import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

export default ({ route, navigation }) => {
    const [user, setUser] = useState(
        route.params ? route.params : {}
        )
    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
                style={style.input} 
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>email</Text>
            <TextInput
                style={style.input} 
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o Email"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input} 
                onChangeText={avatarURL => setUser({ ...user, avatarURL })}
                placeholder="Informe a URL do Avatar"
                value={user.avatarURL}
            />
            <Button 
                title="Salvar"
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </View>
    )
};

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
});