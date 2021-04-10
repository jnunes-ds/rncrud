import React from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import users from '../data/users';

export default props => {

    function confirmUserDelection(user){
        Alert.alert('Excluir usuário', 'Deseja expluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    console.warn('delete ' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getAction(user){
        return (
            <>
                <ListItem.Chevron
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    iconProps={{name: "edit"}}
                    iconStyle={{fontSize: 25, color: "orange"}}
                />
                <ListItem.Chevron
                    onPress={() => confirmUserDelection(user)}
                    iconProps={{name: 'delete'}}
                    iconStyle={{fontSize: 25, color: "red"}}
                />
            </>
        )
    }

    function getUserItem({ item: user }){
        return (
            <ListItem 
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)} 
            >
                <Avatar source={{uri: user.avatarURL}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getAction(user)}
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}